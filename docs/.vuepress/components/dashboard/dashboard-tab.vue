<template>
  <div class="dashboard-content" @click="handleMenuClose">
    <div class="create-app-banner">
      <div class="flex-container">
        <div class="content-box">
          <span class="h3 create-app-banner-title">Create an app</span>
          <div class="create-app-banner-text">
            <p class="create-app-banner-paragraph">
              The AWS API Gateway application tools enable developers to easily test how GSMA APIs
              could work in production with on-boarded service providers.
            </p>
            <p class="create-app-banner-paragraph">
              To utilise the GSMA example OAuth 2.0 compliant authentication API Gateway and test
              the Postman Collections with Authentication you can create Applications for the GSMA
              API sandbox products which you support for your API implementation or end user
              solution.
            </p>
            <ol class="create-app-banner-list">
              <li>
                Simply click Create App, add a name and select the API product for the API
                Specification you require and save your app.
              </li>
              <li>
                From your user dashboard you can view and edit all application details and view
                corresponding tokens required for API access.
              </li>
              <li>
                These credentials can be utilised to test Postman collections with authentication
                for all API Use Case scenarios.
              </li>
            </ol>
          </div>
        </div>
        <div class="content-box">
          <div class="img-wrap">
            <img src="/images/create-app-img.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="btn-wrap">
        <button class="btn btn--accent" type="button" @click="toggleModal">Create app</button>
      </div>
    </div>
    <card-links-section />
    <dashboard-modal v-if="modalIsVisible" @close-modal="modalIsVisible = false" />
  </div>
</template>

<script>
import dashboardModal from '../dashboard-modal.vue';
import cardLinksSection from './card-links-section.vue';

export default {
  name: 'dashboard-tab',

  components: { dashboardModal, cardLinksSection },

  data: function() {
    return {
      modalIsVisible: false
    };
  },

  methods: {
    toggleModal() {
      this.modalIsVisible = !this.modalIsVisible;
    },

    handleMenuClose() {
      this.$emit('close-menu');
    }
  }
};
</script>
