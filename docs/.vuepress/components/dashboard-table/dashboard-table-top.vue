<template>
  <div class="dashboard-table-top">
    <div class="search-block">
      <input type="text" class="search-block__input" placeholder="Search">
    </div>

    <div class="dashboard-table__select-block">
      Filter:
      <v-select v-model="filterSelected" :options="filterOptions" class="vs-custom-style" :clearable="false">
        <template #open-indicator="{ attributes }">
          <img class="expand-arrow" v-bind="attributes" src="/images/expand_arrow.svg" alt="">
        </template>
      </v-select>
    </div>

    <div class="dashboard-table__sort-by">
      <button type="button" class="dashboard-table__button" @click="showSortByOptions">
        Sort by
        <img class="expand-arrow" :class="{'expand-arrow--revert': activeSortOptions}" src="/images/expand_arrow.svg" alt="">
      </button>
      <sort-by-block v-on-clickaway="hideSortByOptions" v-if="activeSortOptions"/>
    </div>
  </div>
</template>

<script>
import SortByBlock from "../sort-by-block";
import {mixin as clickaway} from 'vue-clickaway';

export default {
  name: "dashboard-table-top",
  components: {SortByBlock},
  data() {
    return {
      activeSortOptions: false,
      filterSelected: '',
      filterOptions: [
        {
          label: 'Name',
          code: 'name'
        },
        {
          label: 'Email',
          code: 'email'
        },
        {
          label: 'Company name',
          code: 'company'
        },
        {
          label: 'Status',
          code: 'status'
        },
        {
          label: 'Role',
          code: 'role'
        },
      ]
    }
  },

  mixins: [clickaway],

  methods: {
    showSortByOptions() {
      this.activeSortOptions = true
    },
    hideSortByOptions() {
      this.activeSortOptions = false
    }
  }
}
</script>

<style scoped>

</style>
