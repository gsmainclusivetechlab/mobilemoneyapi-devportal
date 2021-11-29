<template>
  <dashboard-table
      table-title="All registered users"
      table-class="dashboard-content__table-users"
      :table-headers-data="allUsersHeaderTitles"
      :filter-data="getCompanies"
      :data-length="getSortedTableData.length"
      :pages-count="getPages"
      :current-page="currentPage"
      :per-page="perPage"
      @search-value="setSearchValue"
      @filter-value="setFilterValue"
      @sort-value="setSortValue"
      @set-current-page="setCurrentPage"
  >
    <tr class="dashboard-table__row" v-for="user of getTableData" :key="user.id">
      <td class="dashboard-table__cell">
        {{ user.name }}
      </td>
      <td class="dashboard-table__cell">
        {{ user.email }}
      </td>
      <td class="dashboard-table__cell">
        {{ user.company }}
      </td>
      <td class="dashboard-table__cell dashboard-table__cell--status">
        <span class="dashboard-table__status-label" :class="[getUserStatusLabelClass(user.status)]"></span>
        {{ getUserStatus(user.status) }}
      </td>
      <td class="dashboard-table__cell">
          <span class="dashboard-table__role" :class="{'dashboard-table__role--red': user.role === 0}">
            {{ getUserRole(user.role) }}
          </span>
      </td>
      <td class="dashboard-table__cell dashboard-table__cell--options">
        <button type="button" class="dashboard-table__button" @click="showUserOptions(user.id)">
          <svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="1" cy="1" r="1" transform="rotate(90 1 1)" fill="#7C7C7F"/>
            <circle cx="1" cy="5" r="1" transform="rotate(90 1 5)" fill="#7C7C7F"/>
            <circle cx="1" cy="9" r="1" transform="rotate(90 1 9)" fill="#7C7C7F"/>
          </svg>
        </button>
        <user-options-block v-on-clickaway="hideUserOptions" v-if="user.id === activeOptionsUserId"/>
      </td>
    </tr>
  </dashboard-table>
</template>

<script>
import {allUsersHeaderTitles} from "../../constants";
import tableData from '../../api/mocks/users.json';
import UserOptionsBlock from "../user-options-block";
import {mixin as clickaway} from 'vue-clickaway';
import dashboardSearch from "../../mixins/dashboardSearch";
import DashboardTable from "../dashboard-table";

export default {
  name: "all-users-tab",
  components: {DashboardTable, UserOptionsBlock},
  data() {
    return {
      allUsersHeaderTitles,
      tableData,
      activeOptionsUserId: -1,
    }
  },

  computed: {
    getCompanies() {
      return new Set(this.tableData.map(el=>el.company))
    }
  },

  mixins: [clickaway, dashboardSearch],

  methods: {
    getUserStatusLabelClass(status) {
      if (status === 0) return 'dashboard-table__status-label--inactive'
      if (status === 1) return 'dashboard-table__status-label--active'
      return 'dashboard-table__status-label--blocked'
    },
    getUserStatus(status) {
      if (status === 0) return 'Inactive'
      if (status === 1) return 'Active'
      return 'Blocked'
    },
    getUserRole(status) {
      if (status === 0) return 'USER'
      if (status === 1) return 'ADMIN'
      return 'SUPERADMIN'
    },
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
