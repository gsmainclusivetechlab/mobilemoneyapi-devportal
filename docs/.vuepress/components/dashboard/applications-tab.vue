<template>
  <div class="dashboard-content">
    <h3 class="content-title">My applications</h3>
    <div class="applications-list-wrap">
      <ul class="applications-list">
        <li class="applications-list-item"
            v-for="(item, key) in applications"
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
import {mapState} from 'vuex'

export default {
  name: 'applications-tab',

  components: {dashboardModal, cardLinksSection},

  data() {
    return {
      tabTitle: 'Applications',
      modalIsVisible: false,
    }
  },

  computed: {
    ...mapState('application', ['applications'])
  },

  methods: {
    toggleModal() {
      this.modalIsVisible = !this.modalIsVisible;
    },
    handleAppClick(key) {
      this.$emit('app-click', key, this.tabTitle);
    },
  }
};
</script>
