<template>
  <div class="dashboard-content dashboard-content__table" :class="[tableClass]">
    <h3>{{ tableTitle }}</h3>
    <div class="table-block">
      <dashboard-table-top :hideFilter="hideFilter"/>
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
      <dashboard-table-bottom/>
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
    }
  }
}
</script>

<style scoped>

</style>
