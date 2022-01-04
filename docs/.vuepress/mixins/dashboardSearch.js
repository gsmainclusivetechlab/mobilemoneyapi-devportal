import {sortByDate, sortByKeyIssueDate, sortByProp, sortByState, sortByStatus} from "../helpers/filtrationFunctions";

export default {
    data() {
        return {
            searchValue: '',
            filterValue: '',
            sortValue: '',
            perPage: 25,
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
            if(this.sortValue === 'Unpublish' || this.sortValue === 'Publish') {
                return sortByState(this.getTableDataWithSearch, this.sortValue)
            }
            if(this.sortValue === 'Date') {
                return sortByDate(this.getTableDataWithSearch, 'Newest')
            }
            if(this.sortValue) {
                return sortByProp(this.getTableDataWithSearch, this.sortValue)
            }
            // if(this.sortValue === 'Key Issue Date') {
            //     return sortByKeyIssueDate(this.getTableDataWithSearch)
            // }
            return this.getTableDataWithSearch
        },

        getTableDataWithSearch() {
            return this.getTableDataWithFilter.filter(el => {
                if (this.searchValue === '') return true

                for (let key in el) {
                    if (key === 'id') continue

                    let value = el[key]
                    if(key === 'status') {
                        if(el[key] === 0) value = 'Inactive';
                        if(el[key] === 1) value = 'Active';
                        if(el[key] === 2) value = 'Blocked';
                    }
                    if(key === 'role') {
                        if(el[key] === 0) value = 'User';
                        if(el[key] === 1) value = 'Admin';
                        if(el[key] === 2) value = 'Superadmin';
                    }
                    if(key === 'state') {
                        if(el[key] === 0) value = 'Unpublish';
                        if(el[key] === 1) value = 'Publish';
                    }
                    if (value.toString().toLowerCase().includes(this.searchValue.toLowerCase())) return true
                }

                return false
            })
        },

        getTableDataWithFilter() {
            return this.tableData.filter(el => {
                if (this.filterValue === '' || this.filterValue === 'All Companies') return true

                return el.companyName === this.filterValue;
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
