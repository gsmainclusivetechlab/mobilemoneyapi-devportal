<template>
  <dashboard-table
      is-center-header
      hide-filter
      table-title="All plans"
      table-class="dashboard-content__table-plans"
      :indexCenter="1"
      :table-headers-data="allPlansHeaderTitles"
      :data-length="getSortedTableData.length"
      :pages-count="getPages"
      :current-page="currentPage"
      :per-page="perPage"
      page-type="plans"
      @search-value="setSearchValue"
      @set-current-page="setCurrentPage"
      @sort-value="setSortValue"
  >
    <tr class="dashboard-table__row" v-for="plan of getTableData" :key="plan.id">
      <td class="dashboard-table__cell">
        {{ plan.planName }}
      </td>
      <td class="dashboard-table__cell dashboard-table__cell--center dashboard-table__cell--state">
<!--        <span class="dashboard-table__state-label" :class="[getPlanStatusLabelClass(plan.state)]">{{ getPlanStatus(plan.state) }}</span>-->
        <template v-if="isAdminRole">
          <span
              class="dashboard-table__state-label"
              :class="[getPlanStatusLabelClass(plan.state)]">
            {{ getPlanStatus(plan.state) }}
          </span>
        </template>
        <template v-if="isSuperAdminRole">
          <button
              @dblclick="changeState(plan.id)"
              class="dashboard-table__state-label dashboard-table__state-button"
              :class="[getPlanStatusLabelClass(plan.state)]">
            {{ getPlanStatus(plan.state) }}
          </button>
        </template>
      </td>
      <td class="dashboard-table__cell dashboard-table__cell--options">
        <button type="button" class="dashboard-table__button" @click="showUserOptions(plan.id)">
          <svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="1" cy="1" r="1" transform="rotate(90 1 1)" fill="#7C7C7F"/>
            <circle cx="1" cy="5" r="1" transform="rotate(90 1 5)" fill="#7C7C7F"/>
            <circle cx="1" cy="9" r="1" transform="rotate(90 1 9)" fill="#7C7C7F"/>
          </svg>
        </button>
        <user-options-block v-on-clickaway="hideUserOptions" v-if="plan.id === activeOptionsPlanId"/>
      </td>
    </tr>
  </dashboard-table>
</template>

<script>
import {allPlansHeaderTitles} from "../../constants";
import tableData from '../../api/mocks/plans.json';
import UserOptionsBlock from "../user-options-block";
import {mixin as clickaway} from 'vue-clickaway';
import DashboardTable from "../dashboard-table";
import dashboardSearch from "../../mixins/dashboardSearch";

export default {
  name: "plans-tab",

  components: {DashboardTable, UserOptionsBlock},

  data() {
    return {
      allPlansHeaderTitles,
      tableData,
      activeOptionsPlanId: -1
    }
  },

  computed: {
    getUserAccessToken() {
      return this.$store.state.auth.token_access
    },
    isAdminRole() {
      return this.getUserAccessToken === 'ADMIN'
    },
    isSuperAdminRole() {
      return this.getUserAccessToken === 'SUPERADMIN'
    }
  },

  mixins: [clickaway, dashboardSearch],

  methods: {
    getPlanStatusLabelClass(state) {
      if (state === 0) return 'dashboard-table__state-label--inactive'
      return 'dashboard-table__state-label--active'
    },

    getPlanStatus(state) {
      if (state === 0) return 'Unpublish'
      return 'Publish'
    },

    showUserOptions(id) {
      this.activeOptionsPlanId = id
    },

    hideUserOptions() {
      this.activeOptionsPlanId = -1
    },

    changeState(id) {
      this.tableData.forEach(el => {
        if (el.id === id) {
          el.state = el.state === 0 ? 1 : 0
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
