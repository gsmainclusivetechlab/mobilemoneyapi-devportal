import { sortByDate, sortByProp, sortByState, sortByStatus } from '@/helpers/filtrationFunctions';
import { GET_DATA, GET_DATA_WITH_SEARCH } from '@/store/modules/action-types';
import { nameWithSlash } from '@/helpers/vuexHelper';

export default {
  data() {
    return {
      searchValue: '',
      filterValue: '',
      sortValue: '',
      currentPage: 1,
      timer: null
    };
  },

  computed: {
    getSortedTableData() {
      // TODO need to refactor
      if (this.sortValue === 'Newest' || this.sortValue === 'Oldest') {
        return sortByDate(this.getTableDataWithFilter, this.sortValue);
      }
      if (this.sortValue === 'Active' || this.sortValue === 'Inactive' || this.sortValue === 'Blocked') {
        return sortByStatus(this.getTableDataWithFilter, this.sortValue);
      }
      if (this.sortValue === 'Publish' || this.sortValue === 'Unpublish') {
        return sortByState(this.getTableDataWithFilter, this.sortValue);
      }
      if (this.sortValue === 'Date') {
        return sortByDate(this.getTableDataWithFilter, 'Newest');
      }
      if (this.sortValue) {
        return sortByProp(this.getTableDataWithFilter, this.sortValue);
      }
      return this.getTableDataWithFilter;
    },

    getTableDataWithFilter() {
      return this.tableData.filter(el => {
        if (this.filterValue === '' || this.filterValue === 'All Companies') return true;

        return el.companyName === this.filterValue;
      });
    },
  },

  methods: {
    // setSearchValue(value) {
    //   this.searchValue = value;
    // },

    setSearchValue(search) {
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
        this.setSearchValue(search)
      }
    },

    makeSearch(value) {
      if(value) {
        this.$store.dispatch(nameWithSlash(this.module, GET_DATA_WITH_SEARCH), value);
      } else {
        this.$store.dispatch(nameWithSlash(this.module, GET_DATA));
      }
    },

    setFilterValue(value) {
      this.filterValue = value;
    },

    setSortValue(value) {
      this.sortValue = value;
    },

    setCurrentPage(page) {
      this.currentPage = page;
    }
  }
};
