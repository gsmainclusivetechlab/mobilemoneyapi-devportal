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
          :module="module"
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
import { MY_APPS } from '../../store/modules/module-types';
import { GET_ALL_MY_APPS } from '../../store/modules/getter-types';

export default {
  name: 'applications-tab',

  components: { DashboardTableBottom, dashboardModal, cardLinksSection },

  data() {
    return {
      tabTitle: 'Applications',
      modalIsVisible: false,
      module: MY_APPS
    };
  },

  computed: {
    ...mapGetters(this.module, [GET_ALL_MY_APPS]),
  },

  methods: {
    toggleModal() {
      this.modalIsVisible = ! this.modalIsVisible;
    },

    handleAppClick(key) {
      this.$emit('app-click', key, this.tabTitle);
    }
  }
};
</script>
