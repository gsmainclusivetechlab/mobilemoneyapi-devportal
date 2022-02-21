<template>
  <dashboard-table
    is-center-header
    hide-filter
    table-title="All plans"
    table-class="dashboard-content__table-plans"
    :indexCenter="1"
    :table-headers-data="allPlansHeaderTitles"
    :search-by="getSearchBy"
    :is-data-not-found="!tableData.length"
    :module="module"
    :isGettingData="isGettingData"
    @changedSortValue="changedSortValue"
    @changedSearchValue="changedSearchValue"
    page-type="plans"
  >
    <tr class="dashboard-table__row" v-for="plan of tableData" :key="plan.id">
      <dashboard-cell :value="plan.name" />
      <td class="dashboard-table__cell dashboard-table__cell--center dashboard-table__cell--state">
        <template v-if="isAdminRole">
          <span
            class="dashboard-table__state-label"
            :class="[getPlanStatusLabelClass(plan.published)]"
          >
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
            <spinner-component table v-if="waitingPlanId === plan.id" />
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
import { ALL_PLANS, USER, PAGINATION } from '@/store/modules/module-types';
import { nameWithSlash } from '@/helpers/vuexHelper';
import { CHANGE_PUBLISHED_STATE, GET_DATA } from '@/store/modules/action-types';
import { GET_PLANS_WITH_STATE } from '@/store/modules/getter-types';
import {
  RESET_PAGINATION,
  SET_SEARCH_VALUE,
  SET_CURRENT_PAGINATION_MODULE
} from '@/store/modules/mutation-types';

export default {
  name: 'plans-tab',

  components: { SpinnerComponent, DashboardCell, DashboardTable, UserOptionsBlock },

  data() {
    return {
      allPlansHeaderTitles,
      waitingPlanId: '',
      module: ALL_PLANS,
      controller: new AbortController(),
      isGettingData: false
    };
  },

  computed: {
    getSearchBy() {
      return [{ label: 'Plan name', value: 'planname' }];
    },

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

  async created() {
    this.$store.commit(nameWithSlash(PAGINATION, RESET_PAGINATION));
    this.$store.commit(nameWithSlash(PAGINATION, SET_CURRENT_PAGINATION_MODULE), ALL_PLANS);
    this.$store.commit(nameWithSlash(ALL_PLANS, SET_SEARCH_VALUE), '');

    await this.getData();
  },

  beforeDestroy() {
    this.controller.abort();
  },

  methods: {
    async getData() {
      this.isGettingData = true;
      await this.$store.dispatch(nameWithSlash(ALL_PLANS, GET_DATA), this.controller);
      this.isGettingData = false;
    },

    getPlanStatusLabelClass(state) {
      return state
        ? 'dashboard-table__state-label--active'
        : 'dashboard-table__state-label--inactive';
    },

    getPlanStatus(state) {
      return state ? 'Publish' : 'Unpublish';
    },

    async changeState(planId, published) {
      this.waitingPlanId = planId;
      await this.$store.dispatch(nameWithSlash(ALL_PLANS, CHANGE_PUBLISHED_STATE), {
        planId,
        published
      });
      this.waitingPlanId = '';
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
