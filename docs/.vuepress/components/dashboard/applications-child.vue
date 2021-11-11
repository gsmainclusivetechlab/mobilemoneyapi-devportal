<template>
  <div class="dashboard-content">
    <div class="application-flex-container">
      <div class="application-title-info-wrap">
        <h3 class="content-title">{{ appName }}</h3>
        <div class="applications-title-info">
          <div class="item">
            <span class="item-title">Created</span>
            <span class="item-value">{{ keyIssue }}</span>
          </div>
          <div class="item">
            <span class="item-title">Expire</span>
            <span class="item-value">{{ expires }}</span>
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
                                  :rules="{ required: { allowFalse: false }}"
                                  v-slot="{ errors }"
                                  tag="div">
                <label for="appName">
                  App name
                  <span class="form-row__error" v-show="errors[0]">({{ errors[0] }})</span>
                </label>
                <input type="text" v-model="form.appName" id="appName" :disabled="appDetailsDisabled" placeholder="Enter app name">
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
                    :options="items"
                    :disabled="appDetailsDisabled"
                    placeholder="Select product"
                ></v-select>
              </ValidationProvider>

              <div class="update-btn-wrap">
                <button class="btn btn--accent update-btn" type="submit"
                        v-if="!editBtnEnabled"
                >Update
                </button>
              </div>
            </form>
          </ValidationObserver>
          <div class="info-text">
            <p>
              Below are keys you can use to access the Product (Usage Plan) associated with this application. The actual keys are capable of accessing any of the URIS defined in the Product (Usage Plan).
            </p>
          </div>
          <div class="input-group key-group">
            <label for="consumerKey">Consumer key</label>
            <input type="text" id="consumerKey" v-model="consumerKey" readonly>
            <dashboard-copy-button v-model="consumerKey"/>
          </div>
          <div class="input-group key-group">
            <label for="consumerSecret">Consumer secret</label>
            <input type="text" id="consumerSecret" v-model="consumerSecret" readonly>
            <dashboard-copy-button v-model="consumerSecret"/>
          </div>
          <div class="input-group key-group">
            <label for="apiKey">API key</label>
            <input type="text" id="apiKey" v-model="apiKey" readonly>
            <dashboard-copy-button v-model="apiKey"/>
          </div>
        </div>
      </div>
      <div class="application-control-buttons">
        <button class="delete-btn btn btn--transparent" type="button">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardCopyButton from "./DashboardCopyButton";

export default {
  name: 'applications-child',
  components: {DashboardCopyButton},
  data() {
    return {
      tabTitle: 'Applications child',
      items: [
        'GSMA Mobile Money API v1.2 OAuth_Simulator',
        'GSMA Mobile Money API v1.1 OAuth_Simulator',
        'GSMA Mobile Money API v1.0 OAuth_Simulator'
      ],
      appDetailsDisabled: true,
      editBtnEnabled: true,
      appNameVar: this.appName,
      productBindVar: this.usagePlan,
      tooltipPopupIsVisible: false,
      form: {
        appName: '',
        usagePlan: ''
      }
    }
  },
  props: [
    'appName',
    'keyIssue',
    'expires',
    'usagePlan',
    'consumerKey',
    'consumerSecret',
    'apiKey'
  ],
  created() {
    this.form.appName = this.appName
    this.form.usagePlan = this.usagePlan
  },
  methods: {
    async editApp() {
      console.log('put-app')
      let developerId = '123'
      let appId = '456'
      await this.$store.dispatch('application/updateAppByID', {data: this.form, developerId, appId})
          .then(() => {
          })
          .catch(() => {
            console.log('error')
          })
    },
    handleEditClick() {
      this.appDetailsDisabled = !this.appDetailsDisabled;
      this.editBtnEnabled = false;
    },
    handleUpdateClick() {
      this.$emit('update-data')
      this.appDetailsDisabled = true;
      this.editBtnEnabled = true;
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
    }
  }
};
</script>
