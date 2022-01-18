<template>
  <div class="dashboard-table-bottom">
    <div>
      <button
          type="button"
          class="dashboard-table__pagination-arrow dashboard-table__pagination-arrow--left"
          :class="{'dashboard-table__pagination-arrow--inactive': getCurrentPage(module) === 1}"
          @click="$emit('prev-page')"
      >
        < Prev
      </button>
      <button
          type="button"
          class="dashboard-table__pagination-arrow dashboard-table__pagination-arrow--right"
          :class="{'dashboard-table__pagination-arrow--inactive': !getTokenNextPage(module)}"
          @click="$emit('next-page')"
      >
        Next >
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { nameWithSlash } from '../../helpers/vuexHelper';
import { GET_DATA } from '../../store/modules/action-types';
import { PAGINATION } from '../../store/modules/module-types';
import { GET_CURRENT_PAGE, GET_TOKEN_NEXT_PAGE, GET_TOKEN_PREV_PAGE } from '../../store/modules/getter-types';

export default {
  name: 'dashboard-table-bottom',

  props: {
    module: {
      type: String
    }
  },

  computed: {
    ...mapGetters(PAGINATION, {
      getTokenNextPage: GET_TOKEN_NEXT_PAGE,
      getTokenPrevPage: GET_TOKEN_PREV_PAGE,
      getCurrentPage: GET_CURRENT_PAGE
    })
  },

  methods: {
    nextPage() {
      this.getData(this.getTokenNextPage(this.module));
      this.setCurrentPage(this.getCurrentPage(this.module) - 1);
    },

    prevPage() {
      this.getData(this.getTokenPrevPage(this.module));
      this.setCurrentPage(this.getCurrentPage(this.module) + 1);
    },

    getData(token) {
      this.$store.dispatch(nameWithSlash(this.module, GET_DATA), token);
    }
  }
};
</script>
