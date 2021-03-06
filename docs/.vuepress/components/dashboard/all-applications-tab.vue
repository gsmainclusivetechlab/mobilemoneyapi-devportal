<template>
  <dashboard-table
    table-title="All applications"
    table-class="dashboard-content__table-applications"
    :tableHeadersData="allApplicationsHeaderTitles"
    :search-by="getSearchBy"
    :module="module"
    :is-data-not-found="!tableData.length"
    :isGettingData="isGettingData"
    page-type="applications"
    is-create-button
    @changedSortValue="changedSortValue"
    @changedSearchValue="changedSearchValue"
  >
    <tr class="dashboard-table__row" v-for="app of tableData" :key="app.appId">
      <dashboard-cell :value="app.appName" />
      <dashboard-cell :value="app.userName" />
      <dashboard-cell :value="app.companyName" />
      <dashboard-cell :value="app.usagePlanName" />
      <dashboard-cell :value="app.consumerKey" />
      <dashboard-cell :value="app.consumerSecret" />
      <dashboard-cell :value="app.apiKey" />
      <dashboard-cell :value="app.keyIssued" />
      <td class="dashboard-table__cell dashboard-table__cell--options">
        <tippy trigger="click" style="overflow: visible" arrow offset="0,-30">
          <template v-slot:trigger>
            <button
              type="button"
              class="dashboard-table__button"
              @click="showUserOptions(app.appId)"
            >
              <svg
                width="2"
                height="10"
                viewBox="0 0 2 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1" cy="1" r="1" transform="rotate(90 1 1)" fill="#7C7C7F" />
                <circle cx="1" cy="5" r="1" transform="rotate(90 1 5)" fill="#7C7C7F" />
                <circle cx="1" cy="9" r="1" transform="rotate(90 1 9)" fill="#7C7C7F" />
              </svg>
            </button>
          </template>

          <user-options-block
            :allowOptions="['delete']"
            @deleteUser="deleteApplication(app.userName, app.appId)"
          />
        </tippy>
      </td>
    </tr>
  </dashboard-table>
</template>

<script>
import { allApplicationsHeaderTitles } from '@/constants';
import UserOptionsBlock from '../user-options-block';
import DashboardTable from '../dashboard-table';
import DashboardCell from '../dashboard-table/dashboard-cell';
import { mapGetters, mapActions } from 'vuex';
import { ALL_APPS, PAGINATION } from '@/store/modules/module-types';
import { GET_ALL_APPS } from '@/store/modules/getter-types';
import { REMOVE_ITEM, GET_DATA } from '@/store/modules/action-types';
import { nameWithSlash } from '@/helpers/vuexHelper';
import {
  RESET_PAGINATION,
  SET_SEARCH_VALUE,
  SET_CURRENT_PAGINATION_MODULE
} from '@/store/modules/mutation-types';

export default {
  name: 'all-applications-tab',

  components: { DashboardCell, DashboardTable, UserOptionsBlock },

  data() {
    return {
      allApplicationsHeaderTitles,
      activeOptionsUserId: -1,
      module: ALL_APPS,
      controller: new AbortController(),
      isGettingData: false
    };
  },

  computed: {
    getSearchBy() {
      return [
        { label: 'App Name', value: 'appName' },
        { label: 'Company Name', value: 'companyName' },
        { label: 'Key Issued Date', value: 'keyIssued' },
        { label: 'Author', value: 'userName' }
      ];
    },

    ...mapGetters(ALL_APPS, {
      tableData: GET_ALL_APPS
    })
  },

  async created() {
    this.$store.commit(nameWithSlash(PAGINATION, RESET_PAGINATION));
    this.$store.commit(nameWithSlash(PAGINATION, SET_CURRENT_PAGINATION_MODULE), ALL_APPS);
    this.$store.commit(nameWithSlash(ALL_APPS, SET_SEARCH_VALUE), '');

    await this.getData();
  },

  beforeDestroy() {
    this.controller.abort();
  },

  methods: {
    ...mapActions(ALL_APPS, {
      deleteApplicationByUser: REMOVE_ITEM
    }),

    async getData() {
      this.isGettingData = true;
      await this.$store.dispatch(nameWithSlash(ALL_APPS, GET_DATA), this.controller);
      this.isGettingData = false;
    },

    showUserOptions(id) {
      this.activeOptionsUserId = id;
    },

    deleteApplication(userName, appId) {
      this.deleteApplicationByUser({ userName, appId });
      document.body.click(); // for hide tippy
    },

    async changedSortValue() {
      await this.getData();
    },

    async changedSearchValue() {
      await this.getData();
    }
  }
};
</script>
