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
import { GET_TOKEN_NEXT_PAGE, GET_HAS_NEXT_PAGES } from '@/store/modules/getter-types';
import { PAGINATION } from '@/store/modules/module-types';
import { mapGetters } from 'vuex';

export default {
  name: 'dashboard-table-bottom',

  props: {
    module: {
      type: String
    }
  },

  computed: {
    getCurrentPage() {
      return this.$store.state[PAGINATION].currentPage;
    },

    ...mapGetters(PAGINATION, {
      getTokenNextPage: GET_TOKEN_NEXT_PAGE,
      hasPages: GET_HAS_NEXT_PAGES
    })
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
