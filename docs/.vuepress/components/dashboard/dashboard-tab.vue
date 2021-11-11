<template>
  <div class="dashboard-content" @click="handleMenuClose">
    <div class="create-app-banner">
      <div class="flex-container">
        <div class="content-box">
          <span class="create-app-banner-title">Create an app</span>
          <div class="create-app-banner-text">
            <span>Welcome on Portal! Here you can arcu eget ultrices. Diam sollicitudin quis ut gravida sed lacus aliquet. Id etiam tortor morbi at sagittis nisi, nisl:</span>
            <ol class="create-app-banner-list">
              <li>Tincidunt aenean eget tincidunt in fringilla congue.</li>
              <li>Egestas lectus nisi diam felis, tortor.</li>
              <li>Sed vitae est a, consectetur viverra fringilla non.</li>
            </ol>
          </div>
        </div>
        <div class="content-box">
          <div class="img-wrap">
            <img src="/images/create-app-img.svg" alt="">
          </div>
        </div>
      </div>
      <div class="btn-wrap">
        <button class="btn btn--accent" type="button" @click="toggleModal">Create app</button>
        <a href="" class="btn btn--link">Learn more</a>
      </div>
    </div>
    <card-links-section/>
    <dashboard-modal v-if="modalIsVisible" @close-modal="modalIsVisible = false"/>
  </div>
</template>

<script>
import dashboardModal from "../dashboard-modal.vue";
import cardLinksSection from "./card-links-section.vue";

export default {
  name: 'dashboard-tab',

  components: {dashboardModal, cardLinksSection},

  data: function () {
    return {
      modalIsVisible: false,
    }
  },

  methods: {
    toggleModal() {
      this.modalIsVisible = !this.modalIsVisible;
    },

    handleMenuClose() {
      this.$emit('close-menu');
    },
  }
};
</script>
