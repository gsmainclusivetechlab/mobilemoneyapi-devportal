import { GET_DATA } from '@/store/modules/action-types';
import { nameWithSlash } from '@/helpers/vuexHelper';

export default {
  data() {
    return {
      searchValue: '',
      sortValue: '',
      currentPage: 1,
      timer: null
    };
  },

  methods: {
    MsetSearchValue(search) {
      this.searchValue = search
      if (!this.searchRequest) {
        this.searchRequest = true
        this.timer = setTimeout(() => {
          this.makeSearch(this.searchValue)
          this.searchRequest = false
        }, 700)
      } else {
        this.searchRequest = false
        clearInterval(this.timer)
        this.MsetSearchValue(search)
      }
    },

    makeSearch(value) {
      // if(value) {
      //   this.$store.dispatch(nameWithSlash(this.module, GET_DATA_WITH_SEARCH), value);
      // } else {
        this.$store.dispatch(nameWithSlash(this.module, GET_DATA));
      // }
    },

    MsetSortValue(value) {
      this.sortValue = value;
    },

    setCurrentPage(page) {
      this.currentPage = page;
    }
  }
};
