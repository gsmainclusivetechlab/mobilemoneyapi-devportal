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
          <div class="input-group">
            <label for="product">Product</label>
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
            <input type="text" id="consumerKey" v-model="consumerKey">
          </div>
          <div class="input-group">
            <label for="consumerSecret">Consumer secret</label>
            <input type="text" id="consumerSecret" v-model="consumerSecret">
          </div>
          <div class="input-group">
            <label for="apiKey">API key</label>
            <input type="text" id="apiKey" v-model="apiKey">
          </div>
        </div>
      </div>
      <div class="application-control-buttons">
        <button class="delete-btn btn btn--transparent" type="button">Delete</button>
        <button class="btn btn--accent set-default-btn" type="button">Set as default</button>
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
    }
};
</script>
