<template>
  <div class="dashboard-modal">
    <div class="content-wrap">
      <div class="modal-container">
        <button class="close-btn" @click="handleModalClose"></button>
        <span class="h3 modal-title">Create app</span>
        <ValidationObserver v-slot="{ invalid, handleSubmit }" ref="create-app">
          <form @submit.prevent="handleSubmit(createApp)">
            <ValidationProvider class="input-wrap"
                                vid="app-name"
                                :rules="{ required: { allowFalse: false }, min: 2, check_same_name: getApplicationsList }"
                                v-slot="{ errors }"
                                tag="div">
              <label for="app-name">
                App name
                <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
              </label>
              <input type="text" v-model="form.appName" id="app-name" placeholder="Enter app name">
            </ValidationProvider>

            <ValidationProvider class="input-wrap input-wrapper__custom-select"
                                vid="product-name"
                                :rules="{ required: { allowFalse: false }}"
                                v-slot="{ errors }"
                                tag="div">
              <label for="product-name">Product
                <div class="tooltip-wrap">
                  <button class="tooltip-btn"
                          @click="tooltipPopupIsVisible = !tooltipPopupIsVisible"
                          @focusout="tooltipPopupIsVisible = false"
                          tabindex="0">?
                  </button>
                  <span class="tooltip-popup" v-show="tooltipPopupIsVisible">Here you can select product version</span>
                </div>
                <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
              </label>
              <v-select
                  return-object
                  v-model="form.usagePlan"
                  id="product-name"
                  name="country"
                  :clearable="false"
                  :options="getPublishedUsagePlans"
                  placeholder="Select product"
                  :reduce="item => item.value"
              ></v-select>
            </ValidationProvider>
            <div class="btn-row">
              <button class="cancel-btn btn btn--link" type="button" @click="handleModalClose">Cancel</button>
              <button class="btn btn btn--accent" :disabled="invalid || waitingResponse" type="submit">
                <span v-if="!waitingResponse">Create app</span>
                <spinner-component v-else/>
              </button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SpinnerComponent from './helpers/spinner-component';
import { ALL_PLANS, MY_APPS } from '@/store/modules/module-types';
import { GET_ALL_MY_APPS, GET_PUBLISHED_USAGE_PLANS } from '@/store/modules/getter-types';
import { nameWithSlash } from '@/helpers/vuexHelper';
import { GET_DATA, POST_APP } from '@/store/modules/action-types';

export default {
  name: 'dashboard-modal',
  components: { SpinnerComponent },
  data() {
    return {
      tooltipPopupIsVisible: false,
      waitingResponse: false,
      form: {
        'appName': '',
        'usagePlan': ''
      }
    };
  },

  computed: {
    ...mapGetters(ALL_PLANS, {
      getPublishedUsagePlans: GET_PUBLISHED_USAGE_PLANS
    }),

    ...mapGetters(MY_APPS, {
      getApplicationsList: GET_ALL_MY_APPS
    }),
  },

  created() {
    this.getData();
  },

  methods: {
    handleModalClose() {
      this.$emit('close-modal');
    },

    async createApp() {
      this.waitingResponse = true;
      // TODO maybe refactor this
      await this.$store.dispatch(nameWithSlash(MY_APPS, POST_APP), this.form)
          .then(() => {
            this.handleModalClose();
          })
          .finally(() => {
            this.waitingResponse = false;
          });
    },

    getData() {
      return this.$store.dispatch(nameWithSlash(ALL_PLANS, GET_DATA));
    }
  },
};
</script>
