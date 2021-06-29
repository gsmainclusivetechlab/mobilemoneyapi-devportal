<template>
  <header class="navbar main-header" :class="{'mobile-search-opened':isMobileSearchOpened}">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />
    <div class="main-header__box">
      <div class="logo-holder">
        <RouterLink
            :to="$localePath"
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

      <NavLinks class="can-hide" />

      <SearchBox/>
      <button @click="toggleMobileSearch()" class="mobile-search-opener" type="button"></button>
      <div class="login-links">
        <a href="https://developer.mobilemoneyapi.io/user/register" class="btn btn--transparent btn--register" target="_blank">Sign up</a>
        <a href="https://developer.mobilemoneyapi.io/user/login" class="btn btn--accent" target="_blank">Log in</a>
      </div>
    </div>
  </header>
</template>

<script>
import SearchBox from '@SearchBox';
import SidebarButton from '@theme/components/SidebarButton.vue';
import NavLinks from '@theme/components/NavLinks.vue';

export default {
  name: "Navbar",
  components: {
    SearchBox,
    NavLinks,
    SidebarButton,
  },

  data () {
    return {
      linksWrapMaxWidth: null,
      isMobileSearchOpened: false,
    }
  },
  
  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },
    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
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
  },

  methods: {
    toggleMobileSearch() {
      this.isMobileSearchOpened = !this.isMobileSearchOpened;
    }
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>