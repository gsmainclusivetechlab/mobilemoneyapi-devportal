<template>
  <div class="dashboard-content">
    <h3 class="content-title">My applications</h3>
    <div class="applications-list-wrap">
      <ul class="applications-list">
        <li class="applications-list-item"
            v-for="(item, key) in dashboardApplicationsDB"
            @click="handleAppClick(key)"
        >
          <div class="info-box">
            <div class="title-wrap">
              <span class="application-title">{{ item.appName }}</span>
              <span class="creation-date">{{ item.keyIssue }}</span>
            </div>
          </div>
          <span class="link-text">View details</span>
        </li>
      </ul>
      <div class="btn-row">
        <button class="btn btn--accent" type="button" @click="toggleModal">Create app</button>
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
  name: 'applications-tab',
  components: {dashboardModal, cardLinksSection},
  data() {
    return {
      tabTitle: 'Applications',
      modalIsVisible: false,
      dashboardApplicationsDB: {
        0: {
          appName: 'Application 1',
          keyIssue: 'Jan 19, 2021',
          expires: 'Never',
          usagePlan: 'GSMA Mobile Money API v1.0 OAuth_Simulator',
          consumerKey: 'jhfpq8934frtp8g534rft',
          consumerSecret: '098213jufvn8930',
          apiKey: '4jb5089gh324f'
        },
        1: {
          appName: 'Application 2',
          keyIssue: 'Jun 05, 2021',
          expires: 'Jan 19, 2023',
          usagePlan: 'GSMA Mobile Money API v1.2 OAuth_Simulator',
          consumerKey: '7bg4568fb2384bh',
          consumerSecret: 'vfbhsk478fg597e',
          apiKey: '153cd623df76gvbf4578g'
        }
      }
    }
  },
  created() {
    this.getApps()
  },
  methods: {
    toggleModal() {
      this.modalIsVisible = !this.modalIsVisible;
    },
    handleAppClick(key) {
      this.$emit('app-click', key, this.tabTitle);
    },
    async getApps() {
      console.log('get-apps')
      await this.$store.dispatch('application/getApps')
          .then(() => {
          })
          .catch(() => {
            console.log('error')
          })
    }
  }
};
</script>
