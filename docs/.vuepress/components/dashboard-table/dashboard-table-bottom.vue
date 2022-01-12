<template>
  <div class="dashboard-table-bottom">
    <span>Showing {{ perPage * (currentPage - 1) + 1 }} to {{ currentPage === pagesCount ? dataLength : perPage * currentPage }} of {{ dataLength }} entries</span>

    <div>
      <button
          type="button"
          class="dashboard-table__pagination-arrow dashboard-table__pagination-arrow--left"
          :class="{'dashboard-table__pagination-arrow--inactive': currentPage === 1}"
          @click="$emit('set-current-page', currentPage - 1)"
      >
        < Prev
      </button>
      <button
          type="button"
          v-for="page of pagesCount"
          :key="page"
          class="dashboard-table__pagination-item"
          :class="{'dashboard-table__pagination-item--active': page === currentPage}"
          @click="$emit('set-current-page', page)"
      >{{ page }}
      </button>
<!--      <button-->
<!--          type="button"-->
<!--          class="dashboard-table__pagination-arrow dashboard-table__pagination-arrow&#45;&#45;right"-->
<!--          :class="{'dashboard-table__pagination-arrow&#45;&#45;inactive': currentPage === pagesCount}"-->
<!--          @click="$emit('set-current-page', currentPage + 1)"-->
<!--      >-->
<!--        Next >-->
<!--      </button>-->
      <button
          type="button"
          class="dashboard-table__pagination-arrow dashboard-table__pagination-arrow--right"
          :class="{'dashboard-table__pagination-arrow--inactive': !paginationToken}"
          @click="$emit('next-page', paginationToken)"
      >
        Next >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard-table-bottom',
  props: {
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
    paginationToken: {
      type: Object
    }
  }
};
</script>

<style scoped>

</style>
