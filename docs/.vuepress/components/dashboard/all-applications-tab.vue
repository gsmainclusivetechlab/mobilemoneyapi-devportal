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
      @sort-value="setSortValue"
      @set-current-page="setCurrentPage"
  >
    <tr class="dashboard-table__row" v-for="app of getTableData" :key="app.id">
      <dashboard-cell :value="app.appName"/>
      <dashboard-cell :value="app.authorName"/>
      <dashboard-cell :value="app.company"/>
      <dashboard-cell :value="app.usagePlan"/>
      <dashboard-cell :value="app.consumerKey"/>
      <dashboard-cell :value="app.consumerSecret"/>
      <dashboard-cell :value="app.apiKey"/>
      <dashboard-cell :value="app.keyIssuedDate"/>
      <td class="dashboard-table__cell dashboard-table__cell--options">
        <tippy trigger="click" interactive style="overflow: visible" arrow offset="0,-30">
          <template v-slot:trigger>
            <button type="button" class="dashboard-table__button" @click="showUserOptions(app.id)">
              <svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="1" cy="1" r="1" transform="rotate(90 1 1)" fill="#7C7C7F"/>
                <circle cx="1" cy="5" r="1" transform="rotate(90 1 5)" fill="#7C7C7F"/>
                <circle cx="1" cy="9" r="1" transform="rotate(90 1 9)" fill="#7C7C7F"/>
              </svg>
            </button>
          </template>

          <user-options-block
              :allowOptions="['delete']"
              @deleteUser="deleteApplication(app.id)"
          />
        </tippy>
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
import DashboardCell from "../dashboard-table/dashboard-cell";

export default {
  name: "all-applications-tab",

  components: {DashboardCell, DashboardTable, UserOptionsBlock},

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
    },
    deleteApplication(id) {
      const index = this.tableData.findIndex(el => el.id === id)
      this.tableData.splice(index, 1)
    },
  }
}
</script>

<style scoped>

</style>
