<template>
  <div class="dashboard-table-top">
    <div class="search-block">
      <input type="text" class="search-block__input" placeholder="Search" v-model="searchValue">
    </div>

    <div class="dashboard-table__select-block" v-if="!hideFilter">
      Filter:
      <v-select v-model="filterSelected"
                :options="getFilterData"
                class="vs-custom-style"
                placeholder="Company name"
                :reduce="item => item.label"
                :clearable="false">
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
      <sort-by-block
          :pageType="pageType"
          v-on-clickaway="hideSortByOptions"
          @hide-sort-block="hideSortByOptions"
          v-if="activeSortOptions"
          v-model="sortValue"
      />
    </div>
  </div>
</template>

<script>
import SortByBlock from '../sort-by-block';
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'dashboard-table-top',
  components: { SortByBlock },
  props: {
    hideFilter: {
      type: Boolean,
      default: false
    },
    filterData: {
      type: Set,
    },
    pageType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      activeSortOptions: false,
      filterSelected: '',
      searchValue: '',
      sortValue: ''
    };
  },

  watch: {
    searchValue(val) {
      this.$emit('search-value', val);
    },
    filterSelected(val) {
      this.$emit('filter-value', val);
    },
    sortValue(val) {
      this.$emit('sort-value', val);
    }
  },

  computed: {
    getFilterData() {
      if (this.filterData) {
        return ['All Companies', ...this.filterData].map(el => {
          return { label: el };
        });
      }
      return [];
    }
  },

  mixins: [clickaway],

  created() {
    if (this.pageType === 'applications') {
      this.sortValue = 'keyIssued';
    }
    if (this.pageType === 'plans') {
      this.sortValue = 'published';
    }
    if (this.pageType === 'users') {
      this.sortValue = 'Active';
    }
  },

  methods: {
    showSortByOptions() {
      this.activeSortOptions = true;
    },
    hideSortByOptions() {
      this.activeSortOptions = false;
    }
  }
};
</script>

<style scoped>

</style>
