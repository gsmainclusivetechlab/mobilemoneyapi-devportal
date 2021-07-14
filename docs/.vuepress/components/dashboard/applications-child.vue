<template>
  <div class="dashboard-content">
    <div class="application-flex-container">
      <div class="application-title-info-wrap">
        <h3 class="content-title">{{ appName }}</h3>
        <div class="applications-title-info">
          <div class="item">
            <span class="item-title">Created</span>
            <span class="item-value">{{ appCreated }}</span>
          </div>
          <div class="item">
            <span class="item-title">Expire</span>
            <span class="item-value">{{ appExpire }}</span>
          </div>
          <div class="item">
            <span class="item-title">Status</span>
            <span class="item-value">{{ appStatus }}</span>
          </div>
        </div>
      </div>
      <div class="application-info-container">
        <div class="application-info-title-wrap">
          <span class="application-info-title">Application details</span>
          <button class="btn btn--transparent edit-btn" type="button"
                  @click="handleEditClick()"
                  v-if="editBtnEnabled"
          >Edit</button>
        </div>
        <div class="fields-wrap">
          <div class="input-group">
            <label for="appName">App name</label>
            <input type="text" id="appName" v-model="appNameVar" :disabled="appDetailsDisabled">
          </div>
          <div class="input-group input-wrapper__custom-select">
            <label for="product">
              Product
              <div class="tooltip-wrap">
                <button class="tooltip-btn"
                        @click="tooltipPopupIsVisible = !tooltipPopupIsVisible"
                        @focusout="tooltipPopupIsVisible = false"
                        tabindex="0"
                >?</button>
                <span class="tooltip-popup"
                      v-show="tooltipPopupIsVisible"
                >Here you can select product version</span>
              </div>
            </label>
            <v-select
                return-object
                id="product"
                name="country"
                :clearable="false"
                :options="items"
                :disabled="appDetailsDisabled"
                v-model="productBindVar"
            ></v-select>
          </div>
          <div class="update-btn-wrap">
            <button class="btn btn--accent update-btn" type="button"
                    v-if="updateBtnEnabled"
                    @click="handleUpdateClick()"
            >Update</button>
          </div>
          <div class="info-text">
            <p>Below are keys you can use to access the Product (Usage Plan) associated with this application. The actual keys are capable of accessing any of the URIS defined in the Product (Usage Plan).</p>
          </div>
          <div class="input-group">
            <label for="consumerKey">Consumer key</label>
            <input type="text" id="consumerKey" v-model="consumerKey" readonly>
            <button class="copy-btn" data-bind="consumerKey" @click.prevent="copyToClipboard($event)">
              <img src="/images/copy-icon.svg" alt="">
            </button>
            <span class="copy-popup" data-bind="consumerKey">Copied to clipboard!</span>
          </div>
          <div class="input-group">
            <label for="consumerSecret">Consumer secret</label>
            <input type="text" id="consumerSecret" v-model="consumerSecret" readonly>
            <button class="copy-btn" data-bind="consumerSecret" @click.prevent="copyToClipboard($event)">
              <img src="/images/copy-icon.svg" alt="">
            </button>
            <span class="copy-popup" data-bind="consumerSecret">Copied to clipboard!</span>
          </div>
          <div class="input-group">
            <label for="apiKey">API key</label>
            <input type="text" id="apiKey" v-model="apiKey" readonly>
            <button class="copy-btn" data-bind="apiKey" @click.prevent="copyToClipboard($event)">
              <img src="/images/copy-icon.svg" alt="">
            </button>
            <span class="copy-popup" data-bind="apiKey">Copied to clipboard!</span>
          </div>
        </div>
      </div>
      <div class="application-control-buttons">
        <button class="delete-btn btn btn--transparent" type="button">Delete</button>
        <button class="btn btn--accent set-default-btn" type="button">Set as default app</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'applications-child',

    data() {
        return {
            tabTitle: 'Applications child',
            items: ['GSMA Mobile Money API v1.2 OAuth_Simulator',
                'GSMA Mobile Money API v1.1 OAuth_Simulator',
                'GSMA Mobile Money API v1.0 OAuth_Simulator'],
            appDetailsDisabled: true,
            editBtnEnabled: true,
            updateBtnEnabled: false,
            appNameVar: this.appName,
            productBindVar: this.productBind,
            tooltipPopupIsVisible: false
        }
    },

    props: [
            'applicationChildItem',
            'appName',
            'appDefault',
            'appCreated',
            'appExpire',
            'appStatus',
            'productBind',
            'consumerKey',
            'consumerSecret',
            'apiKey'
    ],

    methods: {
        handleEditClick() {
            this.appDetailsDisabled = !this.appDetailsDisabled;
            this.editBtnEnabled = false;
            this.updateBtnEnabled = true;
        },
        handleUpdateClick() {
            this.$emit('update-data', this.appNameVar, this.productBindVar)
            this.appDetailsDisabled = true;
            this.editBtnEnabled = true;
            this.updateBtnEnabled = false;
        },
        copyToClipboard(e) {
            const text = e.currentTarget.getAttribute('data-bind')
            navigator.clipboard.writeText(this[text]).then(function() {}, function(err) {
                console.error('Async: Could not copy text: ', err);
            });
            const popup = document.querySelectorAll(`span[data-bind="${text}"]`);
            popup[0].style.opacity = 1;
            setTimeout(() => { popup[0].style.transition = 'opacity ease-in-out 1.5s'; }, 0)
            setTimeout(() => { popup[0].style.opacity = 0; }, 0)
        }
    }
};
</script>
