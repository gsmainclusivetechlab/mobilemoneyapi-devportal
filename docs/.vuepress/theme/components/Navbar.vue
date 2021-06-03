<template>
  <header class="navbar main-header">
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
        <RouterLink
            :to="$localePath"
            class="home-link home-link--small"
        >
          <img
              v-if="$site.themeConfig.logoSmall"
              class="logo"
              :src="$withBase($site.themeConfig.logoSmall)"
              :alt="$siteTitle"
          >
        </RouterLink>
      </div>

      <NavLinks class="can-hide" />

      <SearchBox/>
      <div class="login-links">
        <button type="button" class="btn btn--transparent btn--register">Sign up</button>
        <button type="button" class="btn btn--accent">Log in</button>
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
      linksWrapMaxWidth: null
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
  mounted () {
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
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>