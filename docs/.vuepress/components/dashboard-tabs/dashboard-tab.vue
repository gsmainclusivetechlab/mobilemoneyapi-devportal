<template>
  <div class="dashboard-content">
    <div class="create-app-banner">
      <div class="flex-container">
        <div class="content-box">
          <span class="create-app-banner-title">Create an app</span>
          <div class="create-app-banner-text">
            <span>Welcome on Portal! Here you can arcu eget ultrices. Diam sollicitudin quis ut gravida sed lacus aliquet. Id etiam tortor morbi at sagittis nisi, nisl:</span>
            <ol>
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
        <button class="btn btn--accent" type="button"
          @click="toggleModal"
        >Create app</button>
        <a href="" class="btn btn--link">Learn more</a>
      </div>
    </div>
    <div class="links-cards">
      <span class="links-cards-title">Useful links</span>
      <div class="cards-wrap">
        <div class="card">
          <span class="card-title">Getting started</span>
          <span class="card-text">We offer a comlete set of tools to support most business models.</span>
          <a href="/api-versions-1.2/get-started.html" class="btn btn--link">Get started</a>
        </div>
        <div class="card">
          <span class="card-title">API Endpoints</span>
          <span class="card-text">We offer a comlete set of tools to support most business models.</span>
          <a href="/api-versions-1.2/resources/api-service-definition.html" class="btn btn--link">Go to API Endpoints</a>
        </div>
        <div class="card">
          <span class="card-title">Open OAS UI</span>
          <span class="card-text">We offer a comlete set of tools to support most business models.</span>
          <a href="/api-versions-1.2/resources/open-oas3-ui.html" class="btn btn--link">Open OAS UI</a>
        </div>
        <div class="card">
          <span class="card-title">Security</span>
          <span class="card-text">We offer a comlete set of tools to support most business models.</span>
          <a href="/security/" class="btn btn--link">Go to Security</a>
        </div>
      </div>
    </div>
    <dashboard-modal v-if="modalIsVisible" @close-modal="modalIsVisible = false"/>
  </div>
</template>

<script>
import dashboardModal from "../dashboard-modal.vue";

const tabIcon = `
  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.60016 0.160156C0.810699 0.160156 0.160156 0.810698 0.160156 1.60016V7.84016C0.160156 8.62961 0.810699 9.28016 1.60016 9.28016H7.84016C8.62961 9.28016 9.28016 8.62961 9.28016 7.84016V1.60016C9.28016 0.810698 8.62961 0.160156 7.84016 0.160156H1.60016ZM12.1602 0.160156C11.3707 0.160156 10.7202 0.810698 10.7202 1.60016V7.84016C10.7202 8.62961 11.3707 9.28016 12.1602 9.28016H18.4002C19.1896 9.28016 19.8402 8.62961 19.8402 7.84016V1.60016C19.8402 0.810698 19.1896 0.160156 18.4002 0.160156H12.1602ZM1.60016 1.12016H7.84016C8.11438 1.12016 8.32016 1.32593 8.32016 1.60016V7.84016C8.32016 8.11438 8.11438 8.32016 7.84016 8.32016H1.60016C1.32593 8.32016 1.12016 8.11438 1.12016 7.84016V1.60016C1.12016 1.32593 1.32593 1.12016 1.60016 1.12016ZM12.1602 1.12016H18.4002C18.6744 1.12016 18.8802 1.32593 18.8802 1.60016V7.84016C18.8802 8.11438 18.6744 8.32016 18.4002 8.32016H12.1602C11.8859 8.32016 11.6802 8.11438 11.6802 7.84016V1.60016C11.6802 1.32593 11.8859 1.12016 12.1602 1.12016ZM1.60016 10.7202C0.810699 10.7202 0.160156 11.3707 0.160156 12.1602V18.4002C0.160156 19.1896 0.810699 19.8402 1.60016 19.8402H7.84016C8.62961 19.8402 9.28016 19.1896 9.28016 18.4002V12.1602C9.28016 11.3707 8.62961 10.7202 7.84016 10.7202H1.60016ZM1.60016 11.6802H7.84016C8.11438 11.6802 8.32016 11.8859 8.32016 12.1602V18.4002C8.32016 18.6744 8.11438 18.8802 7.84016 18.8802H1.60016C1.32593 18.8802 1.12016 18.6744 1.12016 18.4002V12.1602C1.12016 11.8859 1.32593 11.6802 1.60016 11.6802Z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1602 10.7202C11.3707 10.7202 10.7202 11.3707 10.7202 12.1602V18.4002C10.7202 19.1896 11.3707 19.8402 12.1602 19.8402H18.4002C19.1896 19.8402 19.8402 19.1896 19.8402 18.4002V12.1602C19.8402 11.3707 19.1896 10.7202 18.4002 10.7202H12.1602ZM12.1501 11.6802C11.8906 11.6802 11.6801 11.8907 11.6801 12.1502V18.4102C11.6801 18.6698 11.8906 18.8802 12.1501 18.8802H18.4102C18.6697 18.8802 18.8802 18.6698 18.8802 18.4102V12.1502C18.8802 11.8907 18.6697 11.6802 18.4102 11.6802H12.1501Z"/>
  </svg>
`

export default {
  name: 'dashboard-tab',

  components: { dashboardModal },

  data: function() {
    return {
      tabTitle: 'Dashboard',
      tabIcon: tabIcon,
      modalIsVisible: false,
    }
  },

  methods: {
    toggleModal() {
      this.modalIsVisible = !this.modalIsVisible;
    }
  }
};
</script>
