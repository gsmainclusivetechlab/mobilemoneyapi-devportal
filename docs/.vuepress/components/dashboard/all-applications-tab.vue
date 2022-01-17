<template>
  <dashboard-table
      table-title="All applications"
      table-class="dashboard-content__table-applications"
      :tableHeadersData="allApplicationsHeaderTitles"
      :data-length="getSortedTableData.length"
      :pages-count="1"
      :current-page="currentPage"
      :per-page="perPage"
      :filter-data="getCompanies"
      :paginationToken="paginationToken"
      page-type="applications"
      is-create-button
      @search-value="setSearchValue"
      @sort-value="setSortValue"
      @set-current-page="setCurrentPage"
      @next-page="nextPage"
      @filter-value="setFilterValue"
  >
    <tr class="dashboard-table__row" v-for="app of getSortedTableData" :key="app.appId">
      <dashboard-cell :value="app.appName"/>
      <dashboard-cell :value="app.userName"/>
      <dashboard-cell :value="app.companyName"/>
      <dashboard-cell :value="app.usagePlan"/>
      <dashboard-cell :value="app.consumerKey"/>
      <dashboard-cell :value="app.consumerSecret"/>
      <dashboard-cell :value="app.apiKey"/>
      <dashboard-cell :value="app.keyIssued"/>
      <td class="dashboard-table__cell dashboard-table__cell--options">
        <tippy trigger="click" interactive style="overflow: visible" arrow offset="0,-30">
          <template v-slot:trigger>
            <button type="button" class="dashboard-table__button" @click="showUserOptions(app.appId)">
              <svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="1" cy="1" r="1" transform="rotate(90 1 1)" fill="#7C7C7F"/>
                <circle cx="1" cy="5" r="1" transform="rotate(90 1 5)" fill="#7C7C7F"/>
                <circle cx="1" cy="9" r="1" transform="rotate(90 1 9)" fill="#7C7C7F"/>
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
import { allApplicationsHeaderTitles } from '../../constants';
import UserOptionsBlock from '../user-options-block';
import dashboardSearch from '../../mixins/dashboardSearch';
import DashboardTable from '../dashboard-table';
import DashboardCell from '../dashboard-table/dashboard-cell';
import { mapGetters } from 'vuex';

export default {
  name: 'all-applications-tab',

  components: { DashboardCell, DashboardTable, UserOptionsBlock },

  data() {
    return {
      allApplicationsHeaderTitles,
      activeOptionsUserId: -1,
    };
  },

  computed: {
    getCompanies() {
      return new Set(this.tableData.map(el => el.companyName));
    },

    ...mapGetters('admin', {
      getCompanyByUsername: 'getCompanyByUsername',
      tableData: 'getAllApplications',
      paginationToken: 'getPaginationForAllApps'
    })
  },

  mixins: [dashboardSearch],

  methods: {
    showUserOptions(id) {
      this.activeOptionsUserId = id;
    },

    deleteApplication(userName, appId) {
      this.$store.dispatch('admin/deleteApplicationByUser', { userName, appId });
      document.body.click(); // for hide tippy
    },

    nextPage(paginationToken) {
      this.$store.dispatch('admin/getAllApplications', paginationToken);
    }
  }
};
</script>
