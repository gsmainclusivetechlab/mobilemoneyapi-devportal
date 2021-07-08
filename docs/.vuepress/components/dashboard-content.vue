<template>
  <div class="dashboard-section">
    <v-touch
        @swiperight="openSidebar"
        @swipeleft="closeSidebar"
    >
      <div class="aside-menu-swipe-area">&#8592; Swipe to show/hide menu &#8594;</div>
    </v-touch>
    <div class="dashboard-sidebar"
         :class="{ 'show-sidebar': sidebarOpened }"
    >
      <span class="dashboard-title">Developer Portal</span>
      <ul class="sidebar-list">
        <li
            v-for="(tab, index) in tabs"
            :key="`tab-button-${index}`"
            class="sidebar-item"
            :class="{ 'active' : getTabTitle(tab) === activeTabName }"
            @click="handleTabSwitch(getTabTitle(tab))"
        >
          <div class="icon-wrap" v-html="getTabIcon(tab)"></div>
          <span class="sidebar-item-text">{{ getTabTitle(tab) }}</span>
        </li>
      </ul>
    </div>
    <template v-for="tab in tabs">
      <component :is="tab" v-if="getTabTitle(tab) === activeTabName" @close-menu="sidebarOpened = false"/>
    </template>
  </div>
</template>

<script>
import dashboardTab from './dashboard-tabs/dashboard-tab.vue';
import applicationsTab from './dashboard-tabs/applications-tab.vue';
import myAccountTab from './dashboard-tabs/myAccount-tab.vue';

const tabs = {
    dashboardTab,
    applicationsTab,
    myAccountTab,
};

export default {
  name: 'dashboard-section',

  data() {
    return {
        tabs: tabs,
        activeTabName: '',
        sidebarOpened: false,
    }
  },

  created() {
      this.setStartActiveTab();
  },

  methods: {
      handleTabSwitch(tabName) {
          this.activeTabName = tabName;
      },

      getTabTitle(tab) {
          return tab.data().tabTitle;
      },

      getTabIcon(tab) {
          return tab.data().tabIcon;
      },

      setStartActiveTab() {
          this.activeTabName = this.getTabTitle(this.tabs[`${Object.keys(this.tabs)[this.defaultTab ? this.defaultTab -1 : 0]}`]);
      },
      openSidebar() {
          this.sidebarOpened = true;
      },
      closeSidebar() {
          this.sidebarOpened = false;
      }
  }
}
</script>
