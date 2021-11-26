<template>
  <div class="dashboard-content dashboard-content__table dashboard-content__table-users">
    <h3>All registered users</h3>
    <div class="table-block">
      <dashboard-table-top/>
      <table class="dashboard-table">
        <tr class="dashboard-table__row">
          <th class="dashboard-table__cell dashboard-table__cell--heading" v-for="(title, index) of allUsersHeaderTitles" :key="index">
            {{ title }}
          </th>
          <th class="dashboard-table__cell dashboard-table__cell--heading">
          </th>
        </tr>
        <tr class="dashboard-table__row" v-for="user of users" :key="user.id">
          <td class="dashboard-table__cell">
            {{ user.name }}
          </td>
          <td class="dashboard-table__cell">
            {{ user.email }}
          </td>
          <td class="dashboard-table__cell">
            {{ user.company }}
          </td>
          <td class="dashboard-table__cell dashboard-table__cell--status">
            <span class="dashboard-table__status-label" :class="[getUserStatusLabelClass(user.status)]"></span>
            {{ getUserStatus(user.status) }}
          </td>
          <td class="dashboard-table__cell">
          <span class="dashboard-table__role" :class="{'dashboard-table__role--red': user.role === 0}">
            {{ getUserRole(user.role) }}
          </span>
          </td>
          <td class="dashboard-table__cell dashboard-table__cell--options">
            <button type="button" class="dashboard-table__button" @click="showUserOptions(user.id)">
              <svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="1" cy="1" r="1" transform="rotate(90 1 1)" fill="#7C7C7F"/>
                <circle cx="1" cy="5" r="1" transform="rotate(90 1 5)" fill="#7C7C7F"/>
                <circle cx="1" cy="9" r="1" transform="rotate(90 1 9)" fill="#7C7C7F"/>
              </svg>
            </button>
            <user-options-block v-on-clickaway="hideUserOptions" v-if="user.id === activeOptionsUserId"/>
          </td>
        </tr>
      </table>
      <dashboard-table-bottom/>
    </div>
  </div>
</template>

<script>
import {allUsersHeaderTitles} from "../../constants";
import users from '../../api/mocks/users.json';
import UserOptionsBlock from "../user-options-block";
import {mixin as clickaway} from 'vue-clickaway';
import DashboardTableTop from "../dashboard-table/dashboard-table-top";
import DashboardTableBottom from "../dashboard-table/dashboard-table-bottom";

export default {
  name: "all-users-tab",
  components: {DashboardTableBottom, DashboardTableTop, UserOptionsBlock},
  data() {
    return {
      allUsersHeaderTitles,
      users,
      activeOptionsUserId: -1
    }
  },

  mixins: [clickaway],

  methods: {
    getUserStatusLabelClass(status) {
      if (status === 0) return 'dashboard-table__status-label--inactive'
      if (status === 1) return 'dashboard-table__status-label--active'
      return 'dashboard-table__status-label--blocked'
    },
    getUserStatus(status) {
      if (status === 0) return 'Inactive'
      if (status === 1) return 'Active'
      return 'Blocked'
    },
    getUserRole(status) {
      if (status === 0) return 'USER'
      if (status === 1) return 'ADMIN'
      return 'SUPERADMIN'
    },
    showUserOptions(id) {
      this.activeOptionsUserId = id
    },
    hideUserOptions() {
      this.activeOptionsUserId = -1
    }
  }
}
</script>

<style scoped>

</style>
