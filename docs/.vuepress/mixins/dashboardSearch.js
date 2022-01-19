import { sortByDate, sortByProp, sortByState, sortByStatus } from '../helpers/filtrationFunctions';

export default {
  data() {
    return {
      searchValue: '',
      filterValue: '',
      sortValue: '',
      currentPage: 1
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
    setSearchValue(value) {
      this.searchValue = value;
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
