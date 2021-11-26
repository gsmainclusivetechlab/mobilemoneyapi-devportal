<template>
  <div class="dashboard-content dashboard-content__table dashboard-content__table-applications">
    <h3>All applications</h3>
    <div class="table-block">
      <dashboard-table-top/>
      <table class="dashboard-table">
        <tr class="dashboard-table__row">
          <th class="dashboard-table__cell dashboard-table__cell--heading" v-for="(title, index) of allApplicationsHeaderTitles" :key="index">
            {{ title }}
          </th>
          <th class="dashboard-table__cell dashboard-table__cell--heading">
          </th>
        </tr>
        <tr class="dashboard-table__row" v-for="app of applications" :key="app.id">
          <td class="dashboard-table__cell">
            {{ app.appName }}
          </td>
          <td class="dashboard-table__cell">
            {{ app.authorName }}
          </td>
          <td class="dashboard-table__cell">
            {{ app.usagePlan.name }}
          </td>
          <td class="dashboard-table__cell">
            {{ app.consumerKey }}
          </td>
          <td class="dashboard-table__cell">
            {{ app.consumerSecret }}
          </td>
          <td class="dashboard-table__cell">
            {{ app.apiKey }}
          </td>
          <td class="dashboard-table__cell">
            {{ app.keyIssuedDate }}
          </td>
          <td class="dashboard-table__cell dashboard-table__cell--options">
            <button type="button" class="dashboard-table__button" @click="showUserOptions(app.id)">
              <svg width="2" height="10" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="1" cy="1" r="1" transform="rotate(90 1 1)" fill="#7C7C7F"/>
                <circle cx="1" cy="5" r="1" transform="rotate(90 1 5)" fill="#7C7C7F"/>
                <circle cx="1" cy="9" r="1" transform="rotate(90 1 9)" fill="#7C7C7F"/>
              </svg>
            </button>
            <user-options-block v-on-clickaway="hideUserOptions" v-if="app.id === activeOptionsUserId"/>
          </td>
        </tr>
      </table>
      <dashboard-table-bottom/>
    </div>
  </div>
</template>

<script>
import {allApplicationsHeaderTitles} from "../../constants";
import applications from '../../api/mocks/applications.json';
import UserOptionsBlock from "../user-options-block";
import {mixin as clickaway} from 'vue-clickaway';
import DashboardTableTop from "../dashboard-table/dashboard-table-top";
import DashboardTableBottom from "../dashboard-table/dashboard-table-bottom";

export default {
  name: "all-applications-tab",

  components: {DashboardTableBottom, DashboardTableTop, UserOptionsBlock},
  data() {
    return {
      allApplicationsHeaderTitles,
      applications,
      activeOptionsUserId: -1
    }
  },

  mixins: [clickaway],

  methods: {
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
