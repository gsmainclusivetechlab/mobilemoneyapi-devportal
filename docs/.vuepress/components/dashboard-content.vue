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
            :data-name="getTabTitle(tab)"
            class="sidebar-item"
            ref="sidebarListItem"
            :class="{
                'active' : getTabTitle(tab) === activeTabName,
                'children item-closed': isTabHaveChildren(tab),

            }"
            @click="handleTabSwitch(getTabTitle(tab), $event, isTabHaveChildren(tab))"
        >
          <div class="sidebar-item-main-btn">
            <div class="icon-wrap" v-html="getTabIcon(tab)"></div>
            <span class="sidebar-item-text">{{ getTabTitle(tab) }}</span>
          </div>
          <ul class="sidebar-child-list" v-if="isTabHaveChildren(tab)">
            <li class="sidebar-child-item"
                v-for="(item, index) in getTabChildren(tab)"
                ref="sidebarChildItem"
                @click="toggleApplicationChildTab(true, $event, item)"
            >{{ item.appName }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <template v-for="tab in tabs">
      <component :is="tab"
                 v-if="getTabTitle(tab) === activeTabName && tabsActive"
                 @close-menu="sidebarOpened = false"
                 @app-click="handleAppClick"
      />
    </template>
    <applications-child
        v-if="applicationsChildActive"
        :app-name="applicationChildItem.appName"
        :app-default="applicationChildItem.appName"
        :app-created="applicationChildItem.appCreated"
        :app-expire="applicationChildItem.appExpire"
        :app-status="applicationChildItem.appStatus"
        :product-bind="applicationChildItem.productBind"
        :consumer-key="applicationChildItem.consumerKey"
        :consumer-secret="applicationChildItem.consumerSecret"
        :apiKey="applicationChildItem.apiKey"
        @update-data="handleUdateClick"
    />
  </div>
</template>

<script>
import dashboardTab from './dashboard/dashboard-tab.vue';
import applicationsTab from './dashboard/applications-tab.vue';
import myAccountTab from './dashboard/myAccount-tab.vue';
import applicationsChild from './dashboard/applications-child.vue';

const tabs = {
    dashboardTab,
    applicationsTab,
    myAccountTab,
};

export default {
  name: 'dashboard-section',

  components: { applicationsChild },

  data() {
    return {
        tabs: tabs,
        applicationsChild: applicationsChild,
        activeTabName: '',
        sidebarOpened: false,
        tabsActive: true,
        applicationsChildActive: false,
        applicationChildItem: [],
    }
  },

  created() {
      this.setStartActiveTab();
  },

  methods: {
      handleTabSwitch(tabName, e, isChildMenu) {
          this.activeTabName = tabName;
          this.toggleApplicationChildTab(false);
          if (isChildMenu && e.target.closest('li').classList.contains('item-closed')) {
              setTimeout(() => {e.target.closest('li').classList.remove('item-closed')}, 50);
              return;
          } else if (isChildMenu) e.target.closest('li').classList.add('item-closed');
          this.closeSidebar()
      },

      getTabTitle(tab) {
          return tab.data().tabTitle;
      },

      getTabIcon(tab) {
          return tab.data().tabIcon;
      },

      isTabHaveChildren(tab) {
          return tab.data().children;
      },

      getTabChildren(tab) {
          return tab.data().dashboardApplicationsDB;
      },

      setStartActiveTab() {
          this.activeTabName = this.getTabTitle(this.tabs[`${Object.keys(this.tabs)[this.defaultTab ? this.defaultTab -1 : 0]}`]);
      },

      openSidebar() {
          this.sidebarOpened = true;
      },

      closeSidebar() {
          this.sidebarOpened = false;
      },

      toggleApplicationChildTab(show, e, item) {
          if (e) {
              this.applicationChildItem = item;
              e.stopPropagation();
          }
          this.tabsActive = !show;
          this.applicationsChildActive = show;
      },
      handleAppClick(key, tabTitle) {
          this.$refs.sidebarChildItem[key].click();
          this.$refs.sidebarListItem.forEach(element => {
              if (element.getAttribute('data-name') === tabTitle) {
                  element.classList.remove('item-closed')
              }
          });
      },
      handleUdateClick(appName) {
          console.log('appName 1', this.applicationChildItem.appName);
          this.applicationChildItem.appName = appName;
          console.log('appName 2', this.applicationChildItem.appName);
      }
  }
}
</script>
