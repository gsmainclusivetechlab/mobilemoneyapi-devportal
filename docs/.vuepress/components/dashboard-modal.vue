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
        <div class="input-wrap">
<!--          <label for="product-name">App name</label>-->
<!--          <select name="Product" id="product-name">-->
<!--            <option disabled selected>Select product</option>-->
<!--            <option value="1">Product 1</option>-->
<!--            <option value="2">Product 2</option>-->
<!--          </select>-->
        </div>
        <div class="input-wrap">
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
              id="product-name"
              name="country"
              :clearable="false"
              rules="required|alpha"
              :placeholder="'Select country'"
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
      }
  },

  methods: {
      handleModalClose() {
          this.$emit('close-modal');
      },
  },
}
</script>
