<template>
  <dashboard-table
      is-center-header
      hide-filter
      table-title="All plans"
      table-class="dashboard-content__table-plans"
      :indexCenter="1"
      :table-headers-data="allPlansHeaderTitles"
      :data-length="getSortedTableData.length"
      :pages-count="1"
      :current-page="currentPage"
      :per-page="perPage"
      page-type="plans"
      @search-value="setSearchValue"
      @set-current-page="setCurrentPage"
      @sort-value="setSortValue"
  >
    <tr class="dashboard-table__row" v-for="plan of getSortedTableData" :key="plan.id">
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
              :class="[getPlanStatusLabelClass(plan.published)]"
              :disabled="waitingPlanId === plan.id"
          >
            <spinner-component table v-if="waitingPlanId === plan.id"/>
            <span v-else>{{ getPlanStatus(plan.published) }}</span>
          </button>
        </template>
      </td>
    </tr>
  </dashboard-table>
</template>

<script>
import { allPlansHeaderTitles } from '../../constants';
import UserOptionsBlock from '../user-options-block';
import { mixin as clickaway } from 'vue-clickaway';
import DashboardTable from '../dashboard-table';
import dashboardSearch from '../../mixins/dashboardSearch';
import DashboardCell from '../dashboard-table/dashboard-cell';
import { mapState, mapGetters } from 'vuex';
import SpinnerComponent from '../helpers/spinner-component';

export default {
  name: 'plans-tab',

  components: { SpinnerComponent, DashboardCell, DashboardTable, UserOptionsBlock },

  data() {
    return {
      allPlansHeaderTitles,
      activeOptionsPlanId: -1,
      waitingPlanId: ''
    };
  },

  computed: {
    isAdminRole() {
      return this.userData.role === 'admin';
    },
    isSuperAdminRole() {
      return this.userData.role === 'superadmin';
    },
    ...mapGetters('usagePlans', {
      tableData: 'getUsagePlans'
    }),
    ...mapState('user', ['userData'])
  },

  mixins: [clickaway, dashboardSearch],

  methods: {
    getPlanStatusLabelClass(state) {
      return state ? 'dashboard-table__state-label--active' : 'dashboard-table__state-label--inactive';
    },

    getPlanStatus(state) {
      return state ? 'Publish' : 'Unpublish';
    },

    showUserOptions(id) {
      this.activeOptionsPlanId = id;
    },

    async changeState(planId, published) {
      this.waitingPlanId = planId;
      await this.$store.dispatch('admin/changePublishedState', { planId, published });
      this.waitingPlanId = '';
    }
  }
};
</script>

<style scoped>

</style>
