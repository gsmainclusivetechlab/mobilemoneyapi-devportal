<template>
  <div v-if="hasPages" class="dashboard-table-bottom">
    <span>Current Page {{ getCurrentPage + 1 }}</span>
    <div>
      <button
        type="button"
        class="dashboard-table__pagination-arrow dashboard-table__pagination-arrow--left"
        :class="{
          'dashboard-table__pagination-arrow--inactive': getCurrentPage === 0 || !isActive
        }"
        @click="prevPage"
      >
        < Prev
      </button>
      <button
        type="button"
        class="dashboard-table__pagination-arrow dashboard-table__pagination-arrow--right"
        :class="{
          'dashboard-table__pagination-arrow--inactive': !isActive || getTokenNextPage === 'last'
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
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'dashboard-table-bottom',

  props: {
    module: {
      type: String
    }
  },

  data() {
    return {
      isActive: true
    };
  },

  computed: {
    getCurrentPage() {
      return this.$store.state[PAGINATION].currentPage;
    },

    ...mapState(PAGINATION, {
      tokens: 'tokens'
    }),

    ...mapGetters(PAGINATION, {
      getTokenNextPage: GET_TOKEN_NEXT_PAGE,
      hasPages: GET_HAS_NEXT_PAGES
    })
  },

  methods: {
    async nextPage() {
      try {
        this.isActive = false;
        this.$store.commit(nameWithSlash(PAGINATION, SET_CURRENT_PAGE), this.getCurrentPage + 1);
        await this.getData();
      } catch (err) {
        console.error(err);
      }

      this.isActive = true;
    },

    async prevPage() {
      try {
        this.isActive = false;
        this.$store.commit(nameWithSlash(PAGINATION, SET_CURRENT_PAGE), this.getCurrentPage - 1);
        this.$store.commit(nameWithSlash(PAGINATION, REMOVE_PAGINATION_TOKEN));
        await this.getData();
      } catch (err) {
        console.error(err);
      }

      this.isActive = true;
    },

    async getData() {
      await this.$store.dispatch(nameWithSlash(this.module, GET_DATA));
    }
  }
};
</script>
