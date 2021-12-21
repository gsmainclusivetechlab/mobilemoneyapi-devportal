<template>
    <header class="navbar main-header" :class="{'mobile-search-opened': isMobileSearchOpened}">
      <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
      <div class="main-header__box">
        <div class="logo-holder">
          <RouterLink
              to="/"
              class="home-link"
          >
            <img
                v-if="$site.themeConfig.logo"
                class="logo"
                :src="$withBase($site.themeConfig.logo)"
                :alt="$siteTitle"
            >
          </RouterLink>

          <div class="branding-text">
            mobile money api
          </div>
        </div>

        <NavLinks class="can-hide"/>

        <SearchBox/>
        <button @click="toggleMobileSearch()" class="mobile-search-opener" type="button"></button>

        <div class="login-links" v-if="!loggedInUser">
          <router-link to="/signup/" class="btn btn--transparent btn--register">Sign up</router-link>
          <router-link to="/login/" class="btn btn--accent">Log in</router-link>
        </div>

        <div class="logged-in-links" v-if="loggedInUser">
          <span class="logged-in-name">Thomas Ride</span>
          <button class="logged-in-account-btn" @click="goToDashboard">
            <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M7.5 9C11.642 9 15 10.567 15 12.5V15H0V12.5C0 10.567 3.358 9 7.5 9ZM14 12.5C14 11.12 11.09 10 7.5 10C3.91 10 1 11.12 1 12.5V14H14V12.5ZM7.5 0C8.42826 0 9.3185 0.368749 9.97487 1.02513C10.6313 1.6815 11 2.57174 11 3.5C11 4.42826 10.6313 5.3185 9.97487 5.97487C9.3185 6.63125 8.42826 7 7.5 7C6.57174 7 5.6815 6.63125 5.02513 5.97487C4.36875 5.3185 4 4.42826 4 3.5C4 2.57174 4.36875 1.6815 5.02513 1.02513C5.6815 0.368749 6.57174 0 7.5 0ZM7.5 1C6.83696 1 6.20107 1.26339 5.73223 1.73223C5.26339 2.20107 5 2.83696 5 3.5C5 4.16304 5.26339 4.79893 5.73223 5.26777C6.20107 5.73661 6.83696 6 7.5 6C8.16304 6 8.79893 5.73661 9.26777 5.26777C9.73661 4.79893 10 4.16304 10 3.5C10 2.83696 9.73661 2.20107 9.26777 1.73223C8.79893 1.26339 8.16304 1 7.5 1Z"/>
            </svg>
          </button>
          <div class="logged-in-dropdown-wrap" v-on-clickaway="closeLoginDropdown">
            <button class="logged-in-dropdown-btn"
                    :class="{active: loggedInDropdownOpened}"
                    @click="toggleLoginDropdown(false)"
            >
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.06 0L4 3.09042L0.94 0L0 0.951417L4 5L8 0.951417L7.06 0Z" fill="#242529"/>
              </svg>
            </button>
            <ul class="logged-in-dropdown-list" :class="{active: loggedInDropdownOpened}">
              <li>
                <button class="logged-in-logout-btn" @click.prevent="handleLogOut">Log out</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
import SearchBox from '../../plugins/vuepress-plugin-fulltext-search/components/SearchBox';
import SidebarButton from '@theme/components/SidebarButton.vue';
import NavLinks from '@theme/components/NavLinks.vue';
import {mixin as clickaway} from 'vue-clickaway';

export default {
  name: "Navbar",

  components: {
    SearchBox,
    NavLinks,
    SidebarButton,
  },
  mixins: [clickaway],

  data() {
    return {
      linksWrapMaxWidth: null,
      isMobileSearchOpened: false,
      loggedInUser: false,
      loggedInDropdownOpened: false,

    }
  },

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 979 // refer to config.styl

    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))

    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
            - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }

    handleLinksWrapWidth()

    window.addEventListener('resize', handleLinksWrapWidth, false)

    // this.$root.$on('log-user-in', val => {
    //   this.loggedInUser = val
    // })
    const token_access = localStorage.getItem('token_access')
    if (token_access) {
      this.loggedInUser = true;
      this.$store.commit('auth/setTokenAccess', token_access)
    }
  },

  methods: {
    toggleMobileSearch() {
      this.isMobileSearchOpened = !this.isMobileSearchOpened;
    },
    closeLoginDropdown() {
      this.loggedInDropdownOpened = false;
    },
    toggleLoginDropdown() {
      this.loggedInDropdownOpened = !this.loggedInDropdownOpened
    },
    handleLogOut() {
      this.loggedInUser = false;

      localStorage.removeItem('token_access')

      this.$router.push({path: '/login/'}).catch(() => {
      });
    },
    goToDashboard() {
      this.$router.push({path: '/dashboard'}).catch(() => {
      });
    }
  }
}

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>
