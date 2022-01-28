<template>
  <dashboard-table
      is-center-header
      hide-filter
      table-title="All plans"
      table-class="dashboard-content__table-plans"
      :indexCenter="1"
      :table-headers-data="allPlansHeaderTitles"
      :module="module"
      page-type="plans"
      @search-value="setSearchValue"
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
              @click="changeState(plan.id, plan.published)"
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
import { allPlansHeaderTitles } from '@/constants';
import UserOptionsBlock from '../user-options-block';
import { mixin as clickaway } from 'vue-clickaway';
import DashboardTable from '../dashboard-table';
import dashboardSearch from '@/mixins/dashboardSearch';
import DashboardCell from '../dashboard-table/dashboard-cell';
import { mapState, mapGetters } from 'vuex';
import SpinnerComponent from '../helpers/spinner-component';
import { ALL_PLANS, USER } from '@/store/modules/module-types';
import { nameWithSlash } from '@/helpers/vuexHelper';
import { CHANGE_PUBLISHED_STATE, GET_DATA } from '@/store/modules/action-types';
import { GET_PLANS_WITH_STATE } from '@/store/modules/getter-types';

export default {
  name: 'plans-tab',

  components: { SpinnerComponent, DashboardCell, DashboardTable, UserOptionsBlock },

  data() {
    return {
      allPlansHeaderTitles,
      activeOptionsPlanId: -1,
      waitingPlanId: '',
      module: ALL_PLANS
    };
  },

  computed: {
    isAdminRole() {
      return this.userData.role === 'admin';
    },

    isSuperAdminRole() {
      return this.userData.role === 'superadmin';
    },

    ...mapGetters(ALL_PLANS, {
      tableData: GET_PLANS_WITH_STATE
    }),

    ...mapState(USER, ['userData'])
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
      await this.$store.dispatch(nameWithSlash(ALL_PLANS, CHANGE_PUBLISHED_STATE), { planId, published });
      this.waitingPlanId = '';
    }
  }
};
</script>
