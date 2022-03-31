<template>
  <dashboard-table
    table-title="All registered users"
    table-class="dashboard-content__table-users"
    :table-headers-data="allUsersHeaderTitles"
    :search-by="getSearchBy"
    :module="module"
    :is-data-not-found="!tableData.length"
    :isGettingData="isGettingData"
    @changedSortValue="changedSortValue"
    @changedSearchValue="changedSearchValue"
    page-type="users"
  >
    <tr class="dashboard-table__row" v-for="user of tableData" :key="user.userId">
      <dashboard-cell :value="getFullName(user)" />

      <dashboard-cell :value="user.email" />

      <dashboard-cell :value="user.companyName" />

      <td class="dashboard-table__cell">
        <span
          class="dashboard-table__status-label"
          :class="[getUserStatusLabelClass(user.userId)]"
        ></span>
        {{ user.status }}
      </td>

      <td class="dashboard-table__cell">
        <template v-if="isAdminRole">
          <span class="dashboard-table__role dashboard-table__role--red">
            {{ user.role.toUpperCase() }}
          </span>
        </template>

        <template v-if="isSuperAdminRole">
          <button
            @click="changeUserRole(user)"
            class="dashboard-table__role dashboard-table__role--red dashboard-table__role--button"
            :disabled="waitingUserId === user.userId"
          >
            <spinner-component table v-if="waitingUserId === user.userId" />
            <span v-else>{{ user.role.toUpperCase() }}</span>
          </button>
        </template>
      </td>

      <td class="dashboard-table__cell dashboard-table__cell--options">
        <tippy
          trigger="click"
          style="overflow: visible"
          arrow
          offset="0,-30"
          v-if="user.userName !== getUserName && !isUserAdminOrSuperadmin(user)"
        >
          <template v-slot:trigger>
            <button type="button" class="dashboard-table__button">
              <svg
                width="2"
                height="10"
                viewBox="0 0 2 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1" cy="1" r="1" transform="rotate(90 1 1)" fill="#7C7C7F" />
                <circle cx="1" cy="5" r="1" transform="rotate(90 1 5)" fill="#7C7C7F" />
                <circle cx="1" cy="9" r="1" transform="rotate(90 1 9)" fill="#7C7C7F" />
              </svg>
            </button>
          </template>

          <user-options-block
            :allowOptions="allowOptions"
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
import { allUsersHeaderTitles } from '@/constants';
import UserOptionsBlock from '../user-options-block';
import DashboardTable from '../dashboard-table';
import DashboardCell from '../dashboard-table/dashboard-cell';
import { mapGetters, mapState, mapActions } from 'vuex';
import SpinnerComponent from '../helpers/spinner-component';
import { ALL_USERS, USER, PAGINATION } from '@/store/modules/module-types';
import { GET_DATA, REMOVE_ITEM, SET_USER_STATUS, UPDATE_ROLE } from '@/store/modules/action-types';
import { GET_ALL_USERS, GET_USER_NAME } from '@/store/modules/getter-types';
import { nameWithSlash } from '@/helpers/vuexHelper';
import {
  RESET_PAGINATION,
  SET_SEARCH_VALUE,
  SET_CURRENT_PAGINATION_MODULE
} from '@/store/modules/mutation-types';

export default {
  name: 'all-users-tab',

  components: { SpinnerComponent, DashboardCell, DashboardTable, UserOptionsBlock },

  data() {
    return {
      allUsersHeaderTitles,
      waitingUserId: '',
      module: ALL_USERS,
      controller: new AbortController(),
      isGettingData: false
    };
  },

  computed: {
    allowOptions() {
      return this.userData.role === 'admin' ? ['block'] : ['delete', 'block'];
    },

    getSearchBy() {
      return [
        { label: 'Username', value: 'username' },
        { label: 'Email', value: 'email' }
      ];
    },

    isAdminRole() {
      return this.userData.role === 'admin';
    },

    isSuperAdminRole() {
      return this.userData.role === 'superadmin';
    },

    ...mapGetters(ALL_USERS, {
      tableData: GET_ALL_USERS
    }),

    ...mapGetters(USER, {
      getUserName: GET_USER_NAME
    }),

    ...mapState(USER, ['userData'])
  },

  async created() {
    this.$store.commit(nameWithSlash(PAGINATION, RESET_PAGINATION));
    this.$store.commit(nameWithSlash(PAGINATION, SET_CURRENT_PAGINATION_MODULE), ALL_USERS);
    this.$store.commit(nameWithSlash(ALL_USERS, SET_SEARCH_VALUE), '');

    await this.getData();
  },

  beforeDestroy() {
    this.controller.abort();
  },

  methods: {
    ...mapActions(ALL_USERS, {
      deleteUserByUsername: REMOVE_ITEM,
      setUserStatus: SET_USER_STATUS,
      updateRole: UPDATE_ROLE
    }),

    async getData() {
      this.isGettingData = true;
      await this.$store.dispatch(nameWithSlash(ALL_USERS, GET_DATA), this.controller);
      this.isGettingData = false;
    },

    isUserAdminOrSuperadmin(user) {
      if (this.isAdminRole) {
        return user.role === 'admin' || user.role === 'superadmin';
      }
      if (this.isSuperAdminRole) {
        return user.role === 'superadmin';
      }
    },

    getUserStatusLabelClass(id) {
      const { status } = this.tableData.find((user) => user.userId === id);
      if (status === 'Active') return 'dashboard-table__status-label--active';
      if (status === 'Inactive') return 'dashboard-table__status-label--inactive';
      return 'dashboard-table__status-label--blocked';
    },

    getFullName(user) {
      return `${user.firstName} ${user.lastName}`;
    },

    deleteUser(userName) {
      this.deleteUserByUsername(userName);
      document.body.click(); // for hide tippy
    },

    changeStatus(userName) {
      this.setUserStatus(userName);
      document.body.click(); // for hide tippy
    },

    async changeUserRole(user) {
      if (user.userName !== this.getUserName && !this.isUserAdminOrSuperadmin(user)) {
        this.waitingUserId = user.userId;
        await this.updateRole(user.userId);
        this.waitingUserId = '';
      }
    },

    async changedSortValue() {
      await this.getData();
    },

    async changedSearchValue() {
      await this.getData();
    }
  }
};
</script>
