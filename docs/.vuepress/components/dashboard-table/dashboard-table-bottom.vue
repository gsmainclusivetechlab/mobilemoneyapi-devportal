<template>
  <div v-if="hasPages" class="dashboard-table-bottom">
    <span>Current Page {{ getCurrentPage + 1 }}</span>
    <div>
      <button
        type="button"
        class="dashboard-table__pagination-arrow dashboard-table__pagination-arrow--left"
        :class="{ 'dashboard-table__pagination-arrow--inactive': getCurrentPage === 0 }"
        @click="prevPage"
      >
        < Prev
      </button>
      <button
        type="button"
        class="dashboard-table__pagination-arrow dashboard-table__pagination-arrow--right"
        :class="{
          'dashboard-table__pagination-arrow--inactive':
            !getTokenNextPage || getTokenNextPage === 'last'
        }"
        @click="nextPage"
      >
        Next >
      </button>
    </div>
  </div>
</template>

<script>
import { nameWithSlash } from '@/helpers/vuexHelper';
import { GET_DATA } from '@/store/modules/action-types';
import { REMOVE_PAGINATION_TOKEN, SET_CURRENT_PAGE } from '@/store/modules/mutation-types';
import { GET_TOKEN_NEXT_PAGE, GET_TOKEN_PREV_PAGE } from '@/store/modules/getter-types';
import { PAGINATION } from '@/store/modules/module-types';

export default {
  name: 'dashboard-table-bottom',

  props: {
    module: {
      type: String
    }
  },

  computed: {
    hasPages() {
      const page = this.getCurrentPage;
      const nextPage = this.getTokenNextPage;
      const isComeback = this.$store.state[PAGINATION].oldPageValue > 0;

      if (
        !isComeback &&
        page === 0 &&
        ((typeof nextPage === 'string' && nextPage === 'last') ||
          (typeof nextPage === 'number' && nextPage !== 2) ||
          !nextPage)
      ) {
        return false;
      }

      return true;
    },

    getTokenNextPage() {
      return this.$store.getters[nameWithSlash(PAGINATION, GET_TOKEN_NEXT_PAGE)];
    },

    getTokenPrevPage() {
      return this.$store.getters[nameWithSlash(PAGINATION, GET_TOKEN_PREV_PAGE)];
    },

    getCurrentPage() {
      return this.$store.state[PAGINATION].currentPage;
    }
  },

  methods: {
    nextPage() {
      this.$store.commit(nameWithSlash(PAGINATION, SET_CURRENT_PAGE), this.getCurrentPage + 1);
      this.getData();
    },

    prevPage() {
      this.$store.commit(nameWithSlash(PAGINATION, SET_CURRENT_PAGE), this.getCurrentPage - 1);
      this.$store.commit(nameWithSlash(PAGINATION, REMOVE_PAGINATION_TOKEN));
      this.getData();
    },

    getData() {
      this.$store.dispatch(nameWithSlash(this.module, GET_DATA));
    }
  }
};
</script>
