<template>
  <div class="dashboard-content dashboard-content__table" :class="[tableClass]">
    <div style="display: flex; justify-content: space-between">
      <h3>{{ tableTitle }}</h3>
      <div v-if="isCreateButton" class="btn-row">
        <button class="btn btn--accent btn__create" @click="toggleModal" type="button">Create</button>
      </div>
    </div>
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
    <dashboard-modal v-if="modalIsVisible" @close-modal="modalIsVisible = false"/>
  </div>
</template>

<script>
import DashboardTableBottom from "./dashboard-table-bottom";
import DashboardTableTop from "./dashboard-table-top";
import DashboardModal from "../dashboard-modal";
export default {
  name: "dashboard-table",
  components: {DashboardModal, DashboardTableTop, DashboardTableBottom},
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
    },
    isCreateButton: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      modalIsVisible: false
    }
  },
  methods: {
    toggleModal() {
      this.modalIsVisible = !this.modalIsVisible;
    },
  }
}
</script>

<style scoped>

</style>
