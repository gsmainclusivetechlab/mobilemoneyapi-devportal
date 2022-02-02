<template>
  <div class="dashboard-table-top">
    <div class="search-block">
      <input
          type="text"
          class="search-block__input"
          placeholder="Search"
          :value="searchValue"
          @input="setSearchValue($event.target.value)">
    </div>

    <div class="dashboard-table__select-block" v-if="!hideFilter">
      Search by:
      <v-select :value="searchField"
                @input="setSearchField"
                :options="searchBy"
                class="vs-custom-style"
                placeholder="Company name"
                :reduce="item => item.value"
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
          :value="sortValue"
          @input="setSortValue"
      />
    </div>
  </div>
</template>

<script>
import SortByBlock from '../sort-by-block';
import { mixin as clickaway } from 'vue-clickaway';
import { nameWithSlash } from '@/helpers/vuexHelper';
import { GET_DATA } from '@/store/modules/action-types';
import { CLEAR_PAGINATION_TOKENS, REMOVE_PAGINATION_TOKEN, SET_CURRENT_PAGE, SET_SEARCH_FIELD, SET_SEARCH_VALUE, SET_SORT_VALUE } from '@/store/modules/mutation-types';

export default {
  name: 'dashboard-table-top',
  components: { SortByBlock },
  props: {
    hideFilter: {
      type: Boolean,
      default: false
    },
    searchBy: {
      type: Array,
      default: () => ([])
    },
    pageType: {
      type: String,
      default: ''
    },
    module: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      activeSortOptions: false,
      searchRequest: false,
      timer: null
    };
  },

  computed: {
    sortValue() {
      return this.$store.state[this.module].sortValue;
    },

    searchField() {
      return this.$store.state[this.module].searchField;
    },

    searchValue() {
      return this.$store.state[this.module].searchValue;
    }
  },

  mixins: [clickaway],

  created() {
    if (this.pageType === 'applications') {
      this.setSortValue('keyIssued', false);
    }
    if (this.pageType === 'plans') {
      this.setSortValue('publish', false);
    }
    if (this.pageType === 'users') {
      this.setSortValue('firstName', false);
    }
    this.$store.commit(nameWithSlash(this.module, CLEAR_PAGINATION_TOKENS));
    this.$store.commit(nameWithSlash(this.module, SET_CURRENT_PAGE), 0);
    this.$store.commit(nameWithSlash(this.module, SET_SEARCH_VALUE), '');

    this.setSearchField(this.searchBy[0].value);

    this.$emit('start-getting-data')

    this.getData().then(res => {
      this.$emit('end-getting-data')
    });
  },

  methods: {
    showSortByOptions() {
      this.activeSortOptions = true;
    },

    hideSortByOptions() {
      this.activeSortOptions = false;
    },

    setSortValue(value, withGet = true) {
      this.$store.commit(nameWithSlash(this.module, SET_SORT_VALUE), value);
      if(withGet) {
        this.$store.commit(nameWithSlash(this.module, REMOVE_PAGINATION_TOKEN), true);
        this.getData();
      }
    },

    setSearchValue(value) {
      this.$store.commit(nameWithSlash(this.module, SET_SEARCH_VALUE), value);

      if (! this.searchRequest) {
        this.searchRequest = true;
        this.timer = setTimeout(() => {
          this.$store.commit(nameWithSlash(this.module, CLEAR_PAGINATION_TOKENS));
          this.$store.commit(nameWithSlash(this.module, SET_CURRENT_PAGE), 0);
          this.getData();
          this.searchRequest = false;
        }, 700);
      } else {
        this.searchRequest = false;
        clearInterval(this.timer);
        this.setSearchValue(value);
      }
    },

    setSearchField(value) {
      this.$store.commit(nameWithSlash(this.module, SET_SEARCH_FIELD), value);
    },

    getData() {
      return this.$store.dispatch(nameWithSlash(this.module, GET_DATA));
    }
  }
};
</script>

<style scoped>

</style>
