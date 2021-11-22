<template>
  <div class="dashboard-section">
    <v-touch
        @swiperight="openSidebar"
        @swipeleft="closeSidebar"
    >
      <div class="aside-menu-swipe-area">&#8592; Swipe to show/hide menu &#8594;</div>
    </v-touch>
    <div class="dashboard-sidebar"
         v-on-clickaway="closeSidebar"
         :class="{ 'show-sidebar': sidebarOpened }"
    >
      <span class="dashboard-title">Developer Portal</span>
      <ul class="sidebar-list">
        <li
            v-for="(tab, index) in tabs"
            :key="`tab-button-${index}`"
            :data-name="tab.tabTitle"
            class="sidebar-item"
            ref="sidebarListItem"
            :class="{
                'active' : tab.tabTitle === activeTabName,
                'children item-closed': tab.children,

            }"
            @click="handleTabSwitch(tab.tabTitle, $event, tab.children)"
        >
          <div class="sidebar-item-main-btn">
            <div class="icon-wrap" v-html="tab.tabIcon"></div>
            <span class="sidebar-item-text">{{ tab.tabTitle }}</span>
          </div>
          <ul class="sidebar-child-list" v-if="tab.children">
            <li class="sidebar-child-item"
                v-for="child in tab.dashboardApplicationsDB"
                ref="sidebarChildItem"
                @click="toggleApplicationChildTab(true, $event, child)"
            >{{ child.appName }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <template v-for="(tab, index) in tabs">
      <component :is="tab.component"
                 v-if="tab.tabTitle === activeTabName && !applicationsChildActive"
                 @close-menu="sidebarOpened = false"
                 @app-click="handleAppClick"
                 :key="index"
      />
    </template>
    <applications-child
        v-if="applicationsChildActive"
        :app-name="applicationChildItem.appName"
        :key-issue="applicationChildItem.keyIssue"
        :expires="applicationChildItem.expires"
        :usage-plan="applicationChildItem.usagePlan"
        :consumer-key="applicationChildItem.consumerKey"
        :consumer-secret="applicationChildItem.consumerSecret"
        :api-key="applicationChildItem.apiKey"
        @update-data="handleUpdateClick"
    />
  </div>
</template>

<script>
import dashboardTab from './dashboard/dashboard-tab.vue';
import applicationsTab from './dashboard/applications-tab.vue';
import myAccountTab from './dashboard/myAccount-tab.vue';
import applicationsChild from './dashboard/applications-child.vue';
import {mixin as clickaway} from 'vue-clickaway';

const myAccountIcon = `
  <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 9C11.642 9 15 10.567 15 12.5V15H0V12.5C0 10.567 3.358 9 7.5 9ZM14 12.5C14 11.12 11.09 10 7.5 10C3.91 10 1 11.12 1 12.5V14H14V12.5ZM7.5 0C8.42826 0 9.3185 0.368749 9.97487 1.02513C10.6313 1.6815 11 2.57174 11 3.5C11 4.42826 10.6313 5.3185 9.97487 5.97487C9.3185 6.63125 8.42826 7 7.5 7C6.57174 7 5.6815 6.63125 5.02513 5.97487C4.36875 5.3185 4 4.42826 4 3.5C4 2.57174 4.36875 1.6815 5.02513 1.02513C5.6815 0.368749 6.57174 0 7.5 0ZM7.5 1C6.83696 1 6.20107 1.26339 5.73223 1.73223C5.26339 2.20107 5 2.83696 5 3.5C5 4.16304 5.26339 4.79893 5.73223 5.26777C6.20107 5.73661 6.83696 6 7.5 6C8.16304 6 8.79893 5.73661 9.26777 5.26777C9.73661 4.79893 10 4.16304 10 3.5C10 2.83696 9.73661 2.20107 9.26777 1.73223C8.79893 1.26339 8.16304 1 7.5 1Z"/>
  </svg>
`

const dashboardIcon = `
  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.60016 0.160156C0.810699 0.160156 0.160156 0.810698 0.160156 1.60016V7.84016C0.160156 8.62961 0.810699 9.28016 1.60016 9.28016H7.84016C8.62961 9.28016 9.28016 8.62961 9.28016 7.84016V1.60016C9.28016 0.810698 8.62961 0.160156 7.84016 0.160156H1.60016ZM12.1602 0.160156C11.3707 0.160156 10.7202 0.810698 10.7202 1.60016V7.84016C10.7202 8.62961 11.3707 9.28016 12.1602 9.28016H18.4002C19.1896 9.28016 19.8402 8.62961 19.8402 7.84016V1.60016C19.8402 0.810698 19.1896 0.160156 18.4002 0.160156H12.1602ZM1.60016 1.12016H7.84016C8.11438 1.12016 8.32016 1.32593 8.32016 1.60016V7.84016C8.32016 8.11438 8.11438 8.32016 7.84016 8.32016H1.60016C1.32593 8.32016 1.12016 8.11438 1.12016 7.84016V1.60016C1.12016 1.32593 1.32593 1.12016 1.60016 1.12016ZM12.1602 1.12016H18.4002C18.6744 1.12016 18.8802 1.32593 18.8802 1.60016V7.84016C18.8802 8.11438 18.6744 8.32016 18.4002 8.32016H12.1602C11.8859 8.32016 11.6802 8.11438 11.6802 7.84016V1.60016C11.6802 1.32593 11.8859 1.12016 12.1602 1.12016ZM1.60016 10.7202C0.810699 10.7202 0.160156 11.3707 0.160156 12.1602V18.4002C0.160156 19.1896 0.810699 19.8402 1.60016 19.8402H7.84016C8.62961 19.8402 9.28016 19.1896 9.28016 18.4002V12.1602C9.28016 11.3707 8.62961 10.7202 7.84016 10.7202H1.60016ZM1.60016 11.6802H7.84016C8.11438 11.6802 8.32016 11.8859 8.32016 12.1602V18.4002C8.32016 18.6744 8.11438 18.8802 7.84016 18.8802H1.60016C1.32593 18.8802 1.12016 18.6744 1.12016 18.4002V12.1602C1.12016 11.8859 1.32593 11.6802 1.60016 11.6802Z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1602 10.7202C11.3707 10.7202 10.7202 11.3707 10.7202 12.1602V18.4002C10.7202 19.1896 11.3707 19.8402 12.1602 19.8402H18.4002C19.1896 19.8402 19.8402 19.1896 19.8402 18.4002V12.1602C19.8402 11.3707 19.1896 10.7202 18.4002 10.7202H12.1602ZM12.1501 11.6802C11.8906 11.6802 11.6801 11.8907 11.6801 12.1502V18.4102C11.6801 18.6698 11.8906 18.8802 12.1501 18.8802H18.4102C18.6697 18.8802 18.8802 18.6698 18.8802 18.4102V12.1502C18.8802 11.8907 18.6697 11.6802 18.4102 11.6802H12.1501Z"/>
  </svg>
`

const applicationsIcon = `
  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.60016 0.160156C0.810699 0.160156 0.160156 0.810698 0.160156 1.60016V7.84016C0.160156 8.62961 0.810699 9.28016 1.60016 9.28016H7.84016C8.62961 9.28016 9.28016 8.62961 9.28016 7.84016V1.60016C9.28016 0.810698 8.62961 0.160156 7.84016 0.160156H1.60016ZM12.1602 0.160156C11.3707 0.160156 10.7202 0.810698 10.7202 1.60016V7.84016C10.7202 8.62961 11.3707 9.28016 12.1602 9.28016H18.4002C19.1896 9.28016 19.8402 8.62961 19.8402 7.84016V1.60016C19.8402 0.810698 19.1896 0.160156 18.4002 0.160156H12.1602ZM1.60016 1.12016H7.84016C8.11438 1.12016 8.32016 1.32593 8.32016 1.60016V7.84016C8.32016 8.11438 8.11438 8.32016 7.84016 8.32016H1.60016C1.32593 8.32016 1.12016 8.11438 1.12016 7.84016V1.60016C1.12016 1.32593 1.32593 1.12016 1.60016 1.12016ZM12.1602 1.12016H18.4002C18.6744 1.12016 18.8802 1.32593 18.8802 1.60016V7.84016C18.8802 8.11438 18.6744 8.32016 18.4002 8.32016H12.1602C11.8859 8.32016 11.6802 8.11438 11.6802 7.84016V1.60016C11.6802 1.32593 11.8859 1.12016 12.1602 1.12016ZM15.2277 10.7127C15.1084 10.7258 14.9983 10.7831 14.9192 10.8733C14.84 10.9636 14.7976 11.0802 14.8002 11.2002V14.8002H11.2002C11.1852 14.7995 11.1701 14.7995 11.1552 14.8002C11.0921 14.8031 11.0303 14.8184 10.9732 14.8453C10.916 14.8721 10.8648 14.91 10.8223 14.9566C10.7798 15.0033 10.7469 15.0579 10.7255 15.1172C10.7041 15.1766 10.6946 15.2396 10.6976 15.3027C10.7005 15.3657 10.7159 15.4275 10.7427 15.4847C10.7696 15.5418 10.8074 15.593 10.8541 15.6355C10.9008 15.678 10.9553 15.7109 11.0147 15.7323C11.0741 15.7536 11.1371 15.7631 11.2002 15.7602H14.8002V19.3602C14.7993 19.4238 14.811 19.4869 14.8347 19.5459C14.8584 19.605 14.8937 19.6587 14.9383 19.704C14.983 19.7493 15.0362 19.7852 15.0949 19.8098C15.1536 19.8344 15.2165 19.847 15.2802 19.847C15.3438 19.847 15.4067 19.8344 15.4654 19.8098C15.5241 19.7852 15.5773 19.7493 15.622 19.704C15.6667 19.6587 15.7019 19.605 15.7256 19.5459C15.7493 19.4869 15.7611 19.4238 15.7602 19.3602V15.7602H19.3602C19.4238 15.7611 19.4869 15.7493 19.5459 15.7256C19.605 15.7019 19.6587 15.6667 19.704 15.622C19.7493 15.5773 19.7852 15.5241 19.8098 15.4654C19.8344 15.4067 19.847 15.3438 19.847 15.2802C19.847 15.2165 19.8344 15.1536 19.8098 15.0949C19.7852 15.0362 19.7493 14.983 19.704 14.9383C19.6587 14.8937 19.605 14.8584 19.5459 14.8347C19.4869 14.811 19.4238 14.7993 19.3602 14.8002H15.7602V11.2002C15.7616 11.1318 15.7485 11.064 15.7216 11.0011C15.6948 10.9383 15.6548 10.8819 15.6044 10.8357C15.554 10.7896 15.4943 10.7547 15.4293 10.7335C15.3643 10.7123 15.2956 10.7052 15.2277 10.7127ZM1.60016 10.7202C0.810699 10.7202 0.160156 11.3707 0.160156 12.1602V18.4002C0.160156 19.1896 0.810699 19.8402 1.60016 19.8402H7.84016C8.62961 19.8402 9.28016 19.1896 9.28016 18.4002V12.1602C9.28016 11.3707 8.62961 10.7202 7.84016 10.7202H1.60016ZM1.60016 11.6802H7.84016C8.11438 11.6802 8.32016 11.8859 8.32016 12.1602V18.4002C8.32016 18.6744 8.11438 18.8802 7.84016 18.8802H1.60016C1.32593 18.8802 1.12016 18.6744 1.12016 18.4002V12.1602C1.12016 11.8859 1.32593 11.6802 1.60016 11.6802Z"/>
  </svg>
`

export default {
  name: 'dashboard-section',
  components: {
    applicationsChild
  },
  mixins: [
    clickaway
  ],
  data() {
    return {
      activeTabName: '',
      sidebarOpened: false,
      applicationsChildActive: false,
      applicationChildItem: {},
      tabs: [
        {
          tabTitle: 'Dashboard',
          tabIcon: dashboardIcon,
          component: dashboardTab,
          children: false
        },
        {
          tabTitle: 'Applications',
          tabIcon: applicationsIcon,
          component: applicationsTab,
          children: true,
          dashboardApplicationsDB: this.$store.state.application.applications
        },
        {
          tabTitle: 'My account',
          tabIcon: myAccountIcon,
          component: myAccountTab,
          children: false
        },
      ]
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
        setTimeout(() => {
          e.target.closest('li').classList.remove('item-closed')
        }, 50);
        return;
      } else if (isChildMenu) {
        e.target.closest('li').classList.add('item-closed');
      }
      if (!isChildMenu) this.closeSidebar();
      this.$refs.sidebarChildItem.forEach((element) => {
        element.classList.remove('active');
      });
    },
    setStartActiveTab() {
      this.activeTabName = this.tabs[0].tabTitle
    },
    openSidebar() {
      this.sidebarOpened = true;
    },
    closeSidebar() {
      this.sidebarOpened = false;
    },
    toggleApplicationChildTab(show, e, item) {
      if (e) {
        e.stopPropagation();
        this.$refs.sidebarChildItem.forEach((element) => {
          element.classList.remove('active');
        });
        e.target.classList.add('active')
        this.applicationChildItem = item;
      }
      this.applicationsChildActive = show;
      if (this.applicationsChildActive) {
        this.closeSidebar();
      }
    },
    handleAppClick(key, tabTitle) {
      this.$refs.sidebarChildItem[key].click();
      this.$refs.sidebarListItem.forEach(element => {
        if (element.getAttribute('data-name') === tabTitle) {
          element.classList.remove('item-closed')
        }
      });
    },
    handleUpdateClick(appName) {
      this.applicationChildItem.appName = appName;
    }
  }
}
</script>
