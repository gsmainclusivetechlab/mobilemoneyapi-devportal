<template>
  <div class="dashboard-content dashboard-content__table" :class="[tableClass]">
    <h3>{{ tableTitle }}</h3>
    <div class="table-block">
      <dashboard-table-top
          :hideFilter="hideFilter"
          :filterData="filterData"
          @search-value="$emit('search-value', $event)"
          @filter-value="$emit('filter-value', $event)"
          @sort-value="$emit('sort-value', $event)"
      />
      <table class="dashboard-table">
        <tr class="dashboard-table__row">
          <th class="dashboard-table__cell dashboard-table__cell--heading"
              :class="{'dashboard-table__cell--center': isCenterHeader ? index === indexCenter : false}"
              v-for="(title, index) of tableHeadersData"
              :key="index">
            {{ title }}
          </th>
          <th class="dashboard-table__cell dashboard-table__cell--heading">
          </th>
        </tr>
        <slot></slot>
      </table>
      <dashboard-table-bottom
          :dataLength="dataLength"
          :pages-count="pagesCount"
          :current-page="currentPage"
          :per-page="perPage"
          @set-current-page="$emit('set-current-page', $event)"
      />
    </div>
  </div>
</template>

<script>
import DashboardTableBottom from "./dashboard-table-bottom";
import DashboardTableTop from "./dashboard-table-top";
export default {
  name: "dashboard-table",
  components: {DashboardTableTop, DashboardTableBottom},
  props: {
    tableHeadersData: {
      type: Array,
      default: () => ([])
    },
    isCenterHeader: {
      type: Boolean,
      default: false
    },
    indexCenter: {
      type: Number,
      default: 0
    },
    tableTitle: {
      type: String,
      default: ''
    },
    tableClass: {
      type: String,
      default: ''
    },
    hideFilter: {
      type: Boolean,
      default: false
    },
    filterData: {
      type: Set,
    },
    dataLength: {
      type: Number,
      default: 1
    },
    pagesCount: {
      type: Number,
      default: 1
    },
    currentPage: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped>

</style>
