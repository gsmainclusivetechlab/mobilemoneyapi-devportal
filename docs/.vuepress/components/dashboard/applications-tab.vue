<template>
  <div class="dashboard-content">
    <div class="dashboard-content__title-block">
      <h3 class="content-title">My applications</h3>
      <button class="btn btn--accent" type="button" @click="toggleModal">Create app</button>
    </div>
    <div class="applications-list-wrap">
      <ul class="applications-list">
        <li
          class="applications-list-item"
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
      <dashboard-table-bottom :module="module" />
    </div>
    <card-links-section />
    <dashboard-modal v-if="modalIsVisible" @close-modal="modalIsVisible = false" />
  </div>
</template>

<script>
import dashboardModal from '../dashboard-modal.vue';
import cardLinksSection from './card-links-section.vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import DashboardTableBottom from '../dashboard-table/dashboard-table-bottom';
import { MY_APPS, PAGINATION } from '@/store/modules/module-types';
import { GET_ALL_MY_APPS } from '@/store/modules/getter-types';
import { RESET_PAGINATION } from '@/store/modules/mutation-types';
import { GET_DATA } from '@/store/modules/action-types';
import { nameWithSlash } from '@/helpers/vuexHelper';

export default {
  name: 'applications-tab',

  components: { DashboardTableBottom, dashboardModal, cardLinksSection },

  data() {
    return {
      tabTitle: 'Applications',
      modalIsVisible: false,
      module: MY_APPS,
      controller: new AbortController()
    };
  },

  computed: {
    ...mapGetters(MY_APPS, {
      getApplicationsList: GET_ALL_MY_APPS
    })
  },

  created() {
    this.resetPagination();
    this.getData();
  },

  beforeDestroy() {
    this.controller.abort();
  },

  methods: {
    toggleModal() {
      this.modalIsVisible = !this.modalIsVisible;
    },

    handleAppClick(key) {
      this.$emit('app-click', key, this.tabTitle);
    },

    getData() {
      return this.$store.dispatch(nameWithSlash(MY_APPS, GET_DATA), this.controller);
    },

    ...mapMutations(PAGINATION, {
      resetPagination: RESET_PAGINATION
    })
  }
};
</script>
