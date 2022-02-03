<template>
  <div class="dashboard-table-bottom">
    <div>
      <button
          type="button"
          class="dashboard-table__pagination-arrow dashboard-table__pagination-arrow--left"
          :class="{'dashboard-table__pagination-arrow--inactive': getCurrentPage === 0}"
          @click="prevPage"
      >
        < Prev
      </button>
      <button
          type="button"
          class="dashboard-table__pagination-arrow dashboard-table__pagination-arrow--right"
          :class="{'dashboard-table__pagination-arrow--inactive': (!getTokenNextPage || getTokenNextPage === 'last')}"
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

export default {
  name: 'dashboard-table-bottom',

  props: {
    module: {
      type: String
    }
  },

  computed: {
    getTokenNextPage() {
      return this.$store.getters[nameWithSlash(this.module, 'getNextPageToken')];
    },

    getTokenPrevPage() {
      return this.$store.getters[nameWithSlash(this.module, 'getPrevPageToken')];
    },

    getCurrentPage() {
      return this.$store.state[this.module].currentPage;
    }
  },

  methods: {
    nextPage() {
      this.$store.commit(nameWithSlash(this.module, 'setCurrentPage'), this.getCurrentPage + 1);
      this.getData();
    },

    prevPage() {
      this.$store.commit(nameWithSlash(this.module, 'setCurrentPage'), this.getCurrentPage - 1);
      this.$store.commit(nameWithSlash(this.module, 'removePaginationToken'));
      this.getData();
    },

    getData() {
      this.$store.dispatch(nameWithSlash(this.module, GET_DATA));
    }
  }
};
</script>
