<template>
  <div class="dashboard-modal">
    <div class="content-wrap">
      <div class="modal-container">
        <button class="close-btn" @click="handleModalClose"></button>
        <span class="modal-title">Create app</span>
        <div class="input-wrap">
          <label for="app-name">App name</label>
          <input id="app-name" type="text" placeholder="Enter app name">
        </div>
        <div class="input-wrap input-wrapper__custom-select">
          <label for="product-name">Product
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
              id="product-name"
              name="country"
              :clearable="false"
              :options="items"
              :placeholder="'Select product'"
              ></v-select>
        </div>
        <div class="btn-row">
          <button class="cancel-btn btn btn--link" type="button" @click="handleModalClose">Cancel</button>
          <button class="btn btn btn--accent" type="button">Create app</button>
        </div>
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
          items: ['GSMA Mobile Money API v1.2 OAuth_Simulator',
              'GSMA Mobile Money API v1.1 OAuth_Simulator',
              'GSMA Mobile Money API v1.0 OAuth_Simulator'],
      }
  },

  methods: {
      handleModalClose() {
          this.$emit('close-modal');
      },
  },
}
</script>
