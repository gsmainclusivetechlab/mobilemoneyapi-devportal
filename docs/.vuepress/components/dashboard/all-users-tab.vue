<template>
  <dashboard-table
      table-title="All registered users"
      table-class="dashboard-content__table-users"
      :table-headers-data="allUsersHeaderTitles"
      :filter-data="getCompanies"
      :data-length="getSortedTableData.length"
      :pages-count="1"
      :current-page="currentPage"
      :per-page="perPage"
      :paginationToken="paginationToken"
      page-type="users"
      @search-value="setSearchValue"
      @filter-value="setFilterValue"
      @sort-value="setSortValue"
      @set-current-page="setCurrentPage"
      @next-page="nextPage"
  >
    <tr class="dashboard-table__row" v-for="user of getSortedTableData" :key="user.userId">
      <dashboard-cell :value="getFullName(user)"/>

      <dashboard-cell :value="user.email"/>

      <dashboard-cell :value="user.companyName"/>

      <td class="dashboard-table__cell">
        <span class="dashboard-table__status-label" :class="[getUserStatusLabelClass(user.userId)]"></span>
        {{ user.status }}
      </td>

      <td class="dashboard-table__cell">
        <template v-if="isAdminRole">
          <span
              class="dashboard-table__role dashboard-table__role--red">
            {{ user.role.toUpperCase() }}
          </span>
        </template>

        <template v-if="isSuperAdminRole">
          <button
              @click="changeUserRole(user)"
              class="dashboard-table__role dashboard-table__role--red dashboard-table__role--button"
              :disabled="waitingUserId === user.userId"
          >
            <spinner-component table v-if="waitingUserId === user.userId"/>
            <span v-else>{{ user.role.toUpperCase() }}</span>
          </button>
        </template>
      </td>

      <td class="dashboard-table__cell dashboard-table__cell--options">
        <tippy trigger="click" interactive style="overflow: visible" arrow offset="0,-30" v-if="user.userName !== getUserName && !isUserAdminOrSuperadmin(user)">
          <template v-slot:trigger>
            <button type="button" class="dashboard-table__button">
              <svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="1" cy="1" r="1" transform="rotate(90 1 1)" fill="#7C7C7F"/>
                <circle cx="1" cy="5" r="1" transform="rotate(90 1 5)" fill="#7C7C7F"/>
                <circle cx="1" cy="9" r="1" transform="rotate(90 1 9)" fill="#7C7C7F"/>
              </svg>
            </button>
          </template>

          <user-options-block
              :allowOptions="['delete', 'block']"
              :userStatus="user.userEnabled"
              @deleteUser="deleteUser(user.userName)"
              @changeStatus="changeStatus(user.userName)"
          />
        </tippy>
      </td>
    </tr>
  </dashboard-table>
</template>

<script>
import { allUsersHeaderTitles } from '../../constants';
import UserOptionsBlock from '../user-options-block';
import dashboardSearch from '../../mixins/dashboardSearch';
import DashboardTable from '../dashboard-table';
import DashboardCell from '../dashboard-table/dashboard-cell';
import { mapGetters, mapState } from 'vuex';
import SpinnerComponent from '../helpers/spinner-component';

export default {
  name: 'all-users-tab',

  components: { SpinnerComponent, DashboardCell, DashboardTable, UserOptionsBlock },

  data() {
    return {
      allUsersHeaderTitles,
      waitingUserId: ''
    };
  },

  computed: {
    getCompanies() {
      return new Set(this.tableData.map(el => el.companyName));
    },

    isAdminRole() {
      return this.userData.role === 'admin';
    },

    isSuperAdminRole() {
      return this.userData.role === 'superadmin';
    },

    ...mapGetters('admin', {
      tableData: 'getAllUsers',
      paginationToken: 'getPaginationForAllUsers'
    }),

    ...mapGetters('user', ['getUserName']),

    ...mapState('user', ['userData'])

  },

  mixins: [dashboardSearch],

  methods: {
    isUserAdminOrSuperadmin(user) {
      if(this.isAdminRole) {
        return (user.role === 'admin' || user.role === 'superadmin')
      }
      if(this.isSuperAdminRole) {
        return (user.role === 'superadmin')
      }
    },

    getUserStatusLabelClass(id) {
      const { status } = this.tableData.find(user => user.userId === id);
      if (status === 'Active') return 'dashboard-table__status-label--active';
      if (status === 'Inactive') return 'dashboard-table__status-label--inactive';
      return 'dashboard-table__status-label--blocked';
    },

    getFullName(user) {
      return `${user.firstName} ${user.lastName}`;
    },

    deleteUser(userName) {
      this.$store.dispatch('admin/deleteUserByUsername', userName);
      document.body.click(); // for hide tippy
    },

    changeStatus(userName) {
      this.$store.dispatch('admin/setUserStatus', userName);
      document.body.click(); // for hide tippy
    },

    async changeUserRole(user) {
      if (user.userName !== this.getUserName && !this.isUserAdminOrSuperadmin(user)) {
        this.waitingUserId = user.userId;
        await this.$store.dispatch('admin/updateRole', user.userId);
        this.waitingUserId = '';
      }
    },

    nextPage(paginationToken) {
      this.$store.dispatch('admin/getAllUsers', paginationToken);
    }
  }
};
</script>
