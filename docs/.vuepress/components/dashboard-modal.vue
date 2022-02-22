<template>
  <div class="dashboard-modal">
    <div class="content-wrap">
      <div class="modal-container">
        <button class="close-btn" @click="handleModalClose"></button>
        <span class="h3 modal-title">Create app</span>
        <ValidationObserver v-slot="{ invalid, handleSubmit }" ref="create-app">
          <form @submit.prevent="handleSubmit(createApp)">
            <ValidationProvider
              class="input-wrap"
              vid="app-name"
              :rules="{
                required: { allowFalse: false },
                min: 2,
                check_same_name: [...myErrors]
              }"
              v-slot="{ errors }"
              tag="div"
            >
              <label for="app-name">
                App name
                <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
              </label>
              <input
                type="text"
                v-model="form.appName"
                id="app-name"
                placeholder="Enter app name"
                @change="onChangeAppName"
              />
            </ValidationProvider>

            <ValidationProvider
              class="input-wrap input-wrapper__custom-select"
              vid="product-name"
              :rules="{ required: { allowFalse: false } }"
              v-slot="{ errors }"
              tag="div"
            >
              <label for="product-name"
                >Product
                <div class="tooltip-wrap">
                  <button
                    class="tooltip-btn"
                    @click="tooltipPopupIsVisible = !tooltipPopupIsVisible"
                    @focusout="tooltipPopupIsVisible = false"
                    tabindex="0"
                  >
                    ?
                  </button>
                  <span class="tooltip-popup" v-show="tooltipPopupIsVisible"
                    >Here you can select product version</span
                  >
                </div>
                <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
              </label>
              <v-select
                return-object
                v-model="form.usagePlanName"
                id="product-name"
                name="country"
                :clearable="false"
                :options="getPublishedUsagePlans"
                placeholder="Select product"
                :reduce="(item) => item.label"
              ></v-select>
            </ValidationProvider>
            <div class="btn-row">
              <button class="cancel-btn btn btn--link" type="button" @click="handleModalClose">
                Cancel
              </button>
              <button
                class="btn btn btn--accent"
                :disabled="invalid || waitingResponse"
                type="submit"
              >
                <span v-if="!waitingResponse">Create app</span>
                <spinner-component v-else />
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
import { GET_PUBLISHED_USAGE_PLANS } from '@/store/modules/getter-types';
import { nameWithSlash } from '@/helpers/vuexHelper';
import { POST_APP } from '@/store/modules/action-types';
import { APP_ALREADY_EXISTS } from '@/api/constants';

export default {
  name: 'dashboard-modal',
  components: { SpinnerComponent },
  data() {
    return {
      tooltipPopupIsVisible: false,
      waitingResponse: false,
      myErrors: [],
      form: {
        appName: '',
        usagePlanName: ''
      }
    };
  },

  computed: {
    ...mapGetters(ALL_PLANS, {
      getPublishedUsagePlans: GET_PUBLISHED_USAGE_PLANS
    })
  },

  methods: {
    handleModalClose() {
      this.$emit('close-modal');
    },

    onChangeAppName() {
      this.myErrors.forEach((errorObj, index) => {
        if (errorObj.error === APP_ALREADY_EXISTS) {
          this.myErrors.splice(index, 1);
        }
      });
    },

    async createApp() {
      this.waitingResponse = true;
      const payload = {
        appName: this.form.appName,
        usagePlan: this.getPublishedUsagePlans.find(
          (plan) => plan.label === this.form.usagePlanName
        ).value
      };

      const response = await this.$store.dispatch(nameWithSlash(MY_APPS, POST_APP), payload);

      if (response.status === 201) {
        this.handleModalClose();
      } else {
        this.myErrors.push(response.data);
      }

      this.waitingResponse = false;
    }
  }
};
</script>
