<template>
  <div class="dashboard-content">
    <div class="application-flex-container">
      <div class="application-title-info-wrap">
        <h3 class="content-title">{{ selectedApplication.appName }}</h3>
        <div class="applications-title-info">
          <div class="item">
            <span class="item-title">Created</span>
            <span class="item-value">{{ selectedApplication.keyIssued }}</span>
          </div>
          <div class="item">
            <span class="item-title">Expire</span>
            <span class="item-value">{{ selectedApplication.expires }}</span>
          </div>
        </div>
      </div>
      <div class="application-info-container">
        <div class="application-info-title-wrap">
          <span class="application-info-title">Application details</span>
          <button class="btn btn--transparent edit-btn" type="button"
                  @click="handleEditClick()"
                  v-if="editBtnEnabled"
          >Edit
          </button>
        </div>
        <div class="fields-wrap">
          <ValidationObserver v-slot="{ invalid, handleSubmit }" ref="application-details">
            <form @submit.prevent="handleSubmit(editApp)">
              <ValidationProvider class="input-group"
                                  vid="appName"
                                  :rules="{ required: { allowFalse: false }, min: 2}"
                                  v-slot="{ errors }"
                                  tag="div">
                <label for="appName">
                  App name
                  <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
                </label>
                <input type="text" v-model="form.appName" id="appName" :disabled="editBtnEnabled" placeholder="Enter app name">
              </ValidationProvider>

              <ValidationProvider class="input-group input-wrapper__custom-select"
                                  vid="product"
                                  :rules="{ required: { allowFalse: false }}"
                                  v-slot="{ errors }"
                                  tag="div">
                <label for="product">Product
                  <div class="tooltip-wrap">
                    <button class="tooltip-btn"
                            @click="tooltipPopupIsVisible = !tooltipPopupIsVisible"
                            @focusout="tooltipPopupIsVisible = false"
                            tabindex="0"
                    >?
                    </button>
                    <span class="tooltip-popup"
                          v-show="tooltipPopupIsVisible"
                    >Here you can select product version</span>
                  </div>
                  <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
                </label>
                <v-select
                    return-object
                    v-model="form.usagePlan"
                    id="product"
                    name="product"
                    :clearable="false"
                    :options="getPublishedUsagePlans"
                    :disabled="editBtnEnabled"
                    :reduce="item => item.value"
                    placeholder="Select product"
                ></v-select>
              </ValidationProvider>

              <div class="update-btn-wrap">
                <button class="btn btn--accent update-btn" type="submit"
                        :disabled="waitingResponseUpdate"
                        v-if="!editBtnEnabled"
                >
                  <span v-if="!waitingResponseUpdate">Update</span>
                  <spinner-component v-else/>
                </button>
              </div>
            </form>
          </ValidationObserver>
          <div class="info-text">
            <p>
              Below are keys you can use to access the Product (Usage Plan) associated with this application. The actual keys are capable of accessing any of the URIS defined in the Product (Usage
              Plan).
            </p>
          </div>
          <div class="input-group key-group">
            <label for="consumerKey">Consumer key</label>
            <input type="text" id="consumerKey" v-model="selectedApplication.consumerKey" readonly>
            <dashboard-copy-button v-model="selectedApplication.consumerKey"/>
          </div>
          <div class="input-group key-group">
            <label for="consumerSecret">Consumer secret</label>
            <input type="text" id="consumerSecret" v-model="selectedApplication.consumerSecret" readonly>
            <dashboard-copy-button v-model="selectedApplication.consumerSecret"/>
          </div>
          <div class="input-group key-group">
            <label for="apiKey">API key</label>
            <input type="text" id="apiKey" v-model="selectedApplication.apiKey" readonly>
            <dashboard-copy-button v-model="selectedApplication.apiKey"/>
          </div>
        </div>
      </div>
      <div class="application-control-buttons">
        <button class="delete-btn btn btn--accent" type="button" @click="deleteApplication" :disabled="waitingResponseDelete">
          <span v-if="!waitingResponseDelete">Delete</span>
          <spinner-component v-else/>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardCopyButton from "./DashboardCopyButton";
import {mapGetters, mapState} from 'vuex'
import SpinnerComponent from "../helpers/spinner-component";

export default {
  name: 'applications-child',
  components: {SpinnerComponent, DashboardCopyButton},
  data() {
    return {
      tabTitle: 'Applications child',
      editBtnEnabled: true,
      tooltipPopupIsVisible: false,
      form: {
        appName: '',
        usagePlan: ''
      },
      waitingResponseUpdate: false,
      waitingResponseDelete: false,
    }
  },
  computed: {
    ...mapGetters('usagePlans', ['getPublishedUsagePlans']),
    ...mapState('application', ['selectedApplication'])
  },
  created() {
    this.form.appName = this.selectedApplication.appName
    this.form.usagePlan = this.selectedApplication.usagePlan
  },
  beforeDestroy() {
    this.$store.commit('application/clearSelectedApplication')
  },

  methods: {
    editApp() {
      this.waitingResponseUpdate = true

      this.$store.dispatch('application/updateAppById', this.form)
          .then(() => {
            this.editBtnEnabled = true
          })
          .catch(() => {
            console.log('error')
          })
          .finally(() => {
            this.waitingResponseUpdate = false
          })
    },
    handleEditClick() {
      this.editBtnEnabled = false;
    },
    copyToClipboard(e) {
      const text = e.currentTarget.getAttribute('data-bind');
      navigator.clipboard.writeText(this[text]).then(function () {
      }, function (err) {
        console.error('Async: Could not copy text: ', err);
      });
      const popup = document.querySelectorAll(`span[data-bind="${text}"]`);
      popup[0].style.opacity = 1;
      setTimeout(() => {
        popup[0].style.transition = 'opacity ease-in-out 1.5s';
      }, 0);
      setTimeout(() => {
        popup[0].style.opacity = 0;
      }, 0);
      popup[0].style.transition = 'none';
    },
    deleteApplication(e) {
      this.waitingResponseDelete = true
      this.$store.dispatch('application/deleteAppById')
          .then(() => {
            this.$emit('close-application', e)
          })
          .catch(console.log)
          .finally(() => {
            this.waitingResponseDelete = false
          })
    }
  }
};
</script>
