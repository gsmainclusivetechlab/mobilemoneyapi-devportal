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
      <dashboard-cell :value="plan.name"/>
      <td class="dashboard-table__cell dashboard-table__cell--center dashboard-table__cell--state">
        <template v-if="isAdminRole">
          <span
              class="dashboard-table__state-label"
              :class="[getPlanStatusLabelClass(plan.published)]">
            {{ getPlanStatus(plan.published) }}
          </span>
        </template>
        <template v-if="isSuperAdminRole">
          <button
              @dblclick="changeState(plan.id, plan.published)"
              class="dashboard-table__state-label dashboard-table__state-button"
              :class="[getPlanStatusLabelClass(plan.published)]">
            {{ getPlanStatus(plan.published) }}
          </button>
        </template>
      </td>
      <td class="dashboard-table__cell dashboard-table__cell--options">
        <tippy trigger="click" interactive style="overflow: visible" arrow offset="0,-30" v-if="isSuperAdminRole">
          <template v-slot:trigger>
            <button type="button" class="dashboard-table__button" @click="showUserOptions(plan.id)">
              <svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="1" cy="1" r="1" transform="rotate(90 1 1)" fill="#7C7C7F"/>
                <circle cx="1" cy="5" r="1" transform="rotate(90 1 5)" fill="#7C7C7F"/>
                <circle cx="1" cy="9" r="1" transform="rotate(90 1 9)" fill="#7C7C7F"/>
              </svg>
            </button>
          </template>

          <user-options-block
              :allowOptions="['delete']"
              @deleteUser="deletePlan(plan.id)"
          />
        </tippy>
      </td>
    </tr>
  </dashboard-table>
</template>

<script>
import {allPlansHeaderTitles} from "../../constants";
import UserOptionsBlock from "../user-options-block";
import {mixin as clickaway} from 'vue-clickaway';
import DashboardTable from "../dashboard-table";
import dashboardSearch from "../../mixins/dashboardSearch";
import DashboardCell from "../dashboard-table/dashboard-cell";
import {mapState} from 'vuex'

export default {
  name: "plans-tab",

  components: {DashboardCell, DashboardTable, UserOptionsBlock},

  data() {
    return {
      allPlansHeaderTitles,
      activeOptionsPlanId: -1
    }
  },

  computed: {
    getUserAccessToken() {
      return this.$store.state.auth.token_access
    },
    isAdminRole() {
      return this.userData.role === 'admin'
    },
    isSuperAdminRole() {
      return this.userData.role === 'superadmin'
    },
    ...mapState('usagePlans', {
      tableData: 'usagePlans'
    }),
    ...mapState('user', ['userData'])
  },

  mixins: [clickaway, dashboardSearch],

  methods: {
    deletePlan(id) {
      const index = this.tableData.findIndex(el => el.id === id)
      this.tableData.splice(index, 1)
    },
    getPlanStatusLabelClass(state) {
      return state ? 'dashboard-table__state-label--active' : 'dashboard-table__state-label--inactive'
    },

    getPlanStatus(state) {
      return state ? 'Publish' : 'Unpublish'
    },

    showUserOptions(id) {
      this.activeOptionsPlanId = id
    },

    hideUserOptions() {
      this.activeOptionsPlanId = -1
    },

    changeState(planId, published) {
      this.$store.dispatch('admin/changePublishedState', {planId, published})
    }
  }
}
</script>

<style scoped>

</style>
