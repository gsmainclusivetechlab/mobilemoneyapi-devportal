<template>
  <div class="dashboard-content">
    <div class="dashboard-content__title-block">
      <h3 class="content-title">My applications</h3>
      <button class="btn btn--accent" type="button" @click="toggleModal">Create app</button>
    </div>
    <div class="applications-list-wrap">
      <ul class="applications-list">
        <li class="applications-list-item"
            v-for="(item, key) in getApplicationsList"
            :key="key"
            @click="handleAppClick(key)"
        >
          <div class="info-box">
            <div class="title-wrap">
              <span class="application-title">{{ item.appName }}</span>
              <span class="creation-date">{{ item.keyIssued }}</span>
            </div>
          </div>
          <span class="link-text">View details</span>
        </li>
      </ul>
      <dashboard-table-bottom
          v-if="getApplicationsList.length"
          :dataLength="getApplicationsList.length"
          :pages-count="1"
          :current-page="1"
          :per-page="10"
          :paginationToken="getPaginationToken"
          @set-current-page="$emit('set-current-page', $event)"
          @next-page="nextPage"
      />
    </div>
    <card-links-section/>
    <dashboard-modal v-if="modalIsVisible" @close-modal="modalIsVisible = false"/>
  </div>
</template>

<script>
import dashboardModal from '../dashboard-modal.vue';
import cardLinksSection from './card-links-section.vue';
import { mapGetters } from 'vuex';
import DashboardTableBottom from '../dashboard-table/dashboard-table-bottom';

export default {
  name: 'applications-tab',

  components: { DashboardTableBottom, dashboardModal, cardLinksSection },

  data() {
    return {
      tabTitle: 'Applications',
      modalIsVisible: false,
    };
  },

  computed: {
    ...mapGetters('application', ['getApplicationsList', 'getPaginationToken']),
  },

  methods: {
    toggleModal() {
      this.modalIsVisible = ! this.modalIsVisible;
    },

    handleAppClick(key) {
      this.$emit('app-click', key, this.tabTitle);
    },

    nextPage(paginationToken) {
      this.$store.dispatch('application/getApps', paginationToken)
    }
  }
};
</script>
