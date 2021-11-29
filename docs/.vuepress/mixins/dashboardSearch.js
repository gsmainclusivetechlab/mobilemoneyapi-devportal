import {sortByDate, sortByStatus} from "../helpers/filtrationFunctions";

export default {
    data() {
        return {
            searchValue: '',
            filterValue: '',
            sortValue: '',

            perPage: 10,
            currentPage: 1
        }
    },


    computed: {
        getSortedTableData() {
            if (this.sortValue === 'Newest' || this.sortValue === 'Oldest') {
                return sortByDate(this.getTableDataWithSearch, this.sortValue)
            }
            if (this.sortValue === 'Active' || this.sortValue === 'Inactive' || this.sortValue === 'Blocked') {
                return sortByStatus(this.getTableDataWithSearch, this.sortValue)
            }
            return this.getTableDataWithSearch
        },
        getTableDataWithSearch() {
            return this.getTableDataWithFilter.filter(el => {
                if (this.searchValue === '') return true

                for (let key in el) {
                    if (key === 'id') continue
                    if (el[key].toString().toLowerCase().includes(this.searchValue.toLowerCase())) return true
                }

                return false
            })
        },
        getTableDataWithFilter() {
            return this.tableData.filter(el => {
                if (this.filterValue === '' || this.filterValue === 'All Companies') return true

                return el.company === this.filterValue;
            })
        },
        getTableData() {
            return this.getSortedTableData.slice((this.currentPage-1) * this.perPage, this.currentPage * this.perPage)
        },
        getPages() {
            return Math.ceil(this.getSortedTableData.length / this.perPage)
        }
    },

    methods: {
        setSearchValue(value) {
            this.searchValue = value
        },
        setFilterValue(value) {
            this.filterValue = value
        },
        setSortValue(value) {
            this.sortValue = value
        },
        setCurrentPage(page) {
            this.currentPage = page
        }
    }
}
