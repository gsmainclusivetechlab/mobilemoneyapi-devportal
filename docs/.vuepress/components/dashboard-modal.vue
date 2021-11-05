<template>
  <div class="dashboard-modal">
    <div class="content-wrap">
      <div class="modal-container">
        <button class="close-btn" @click="handleModalClose"></button>
        <span class="modal-title">Create app</span>
        <ValidationObserver v-slot="{ invalid, handleSubmit }" ref="create-app">
          <form>
            <ValidationProvider class="input-wrap"
                                vid="app-name"
                                :rules="{ required: { allowFalse: false }}"
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
                  :options="items"
                  placeholder="Select product"
              ></v-select>
            </ValidationProvider>
            <div class="btn-row">
              <button class="cancel-btn btn btn--link" type="button" @click="handleModalClose">Cancel</button>
              <button class="btn btn btn--accent" :disabled="invalid"  type="submit">Create app</button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'dashboard-modal',

  data() {
    return {
      tooltipPopupIsVisible: false,
      items: [
        'GSMA Mobile Money API v1.2 OAuth_Simulator',
        'GSMA Mobile Money API v1.1 OAuth_Simulator',
        'GSMA Mobile Money API v1.0 OAuth_Simulator'
      ],
      form: {
        appName: '',
        usagePlan: ''
      }
    }
  },

  methods: {
    handleModalClose() {
      this.$emit('close-modal');
    },
  },
}
</script>
