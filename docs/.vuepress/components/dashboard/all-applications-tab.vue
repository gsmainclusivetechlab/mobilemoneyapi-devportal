<template>
  <dashboard-table
      table-title="All applications"
      table-class="dashboard-content__table-applications"
      :tableHeadersData="allApplicationsHeaderTitles"
      :data-length="getSortedTableData.length"
      :pages-count="getPages"
      :current-page="currentPage"
      :per-page="perPage"
      page-type="applications"
      is-create-button
      @search-value="setSearchValue"
      @set-current-page="setCurrentPage"
  >
    <tr class="dashboard-table__row" v-for="app of getTableData" :key="app.id">
      <td class="dashboard-table__cell">
        <span>{{ app.appName }}</span>
      </td>
      <td class="dashboard-table__cell">
        <span>{{ app.authorName }}</span>
      </td>
      <td class="dashboard-table__cell">
        <span>{{ app.usagePlan }}</span>
      </td>
      <td class="dashboard-table__cell">
        <span>{{ app.consumerKey }}</span>
      </td>
      <td class="dashboard-table__cell">
        <span>{{ app.consumerSecret }}</span>
      </td>
      <td class="dashboard-table__cell">
        <span>{{ app.apiKey }}</span>
      </td>
      <td class="dashboard-table__cell">
        <span>{{ app.keyIssuedDate }}</span>
      </td>
      <td class="dashboard-table__cell dashboard-table__cell--options">
        <button type="button" class="dashboard-table__button" @click="showUserOptions(app.id)">
          <svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="1" cy="1" r="1" transform="rotate(90 1 1)" fill="#7C7C7F"/>
            <circle cx="1" cy="5" r="1" transform="rotate(90 1 5)" fill="#7C7C7F"/>
            <circle cx="1" cy="9" r="1" transform="rotate(90 1 9)" fill="#7C7C7F"/>
          </svg>
        </button>
        <user-options-block v-on-clickaway="hideUserOptions" v-if="app.id === activeOptionsUserId"/>
      </td>
    </tr>
  </dashboard-table>
</template>

<script>
import {allApplicationsHeaderTitles} from "../../constants";
import tableData from '../../api/mocks/applications.json';
import UserOptionsBlock from "../user-options-block";
import {mixin as clickaway} from 'vue-clickaway';
import dashboardSearch from "../../mixins/dashboardSearch";
import DashboardTable from "../dashboard-table";

export default {
  name: "all-applications-tab",

  components: {DashboardTable, UserOptionsBlock},

  data() {
    return {
      allApplicationsHeaderTitles,
      tableData,
      activeOptionsUserId: -1,
    }
  },

  mixins: [clickaway, dashboardSearch],

  methods: {
    showUserOptions(id) {
      this.activeOptionsUserId = id
    },
    hideUserOptions() {
      this.activeOptionsUserId = -1
    }
  }
}
</script>

<style scoped>

</style>
