<template>
  <aside class="sidebar">
    <NavLinks />

    <slot name="top" />

    <router-link :to="{path: backLink.path}" v-if="backLink && backLink.path !== $route.path " class="sidebar__back-btn">
      <div class="icon">
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 0L5.715 0.6965L1.925 4.5H12V5.5H1.925L5.715 9.2865L5 10L0 5L5 0Z" fill="currentColor"/>
        </svg>
      </div>
      <div class="text-holder">
        Back to {{backLink.title}}
      </div>
    </router-link>

    <SidebarLinks
      :depth="0"
      :items="items"
    />
    <slot name="bottom" />
  </aside>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks },

  data: function() {
    return {
      sidebarItems: [...this.items],
      backLink: null,
    }
  },

  props: ['items'],

  methods: {
    getBackLink: function() {
      const sidebarCnfigKeys = Object.keys(this.$site.themeConfig.sidebar);
      this.backLink = null;

      sidebarCnfigKeys.forEach((itemName) => {
        if(this.$route.path.includes(itemName)) {
          this.backLink = this.$site.themeConfig.sidebar[itemName][0].backLink;
        }
      });
    },
  },

  mounted: function() {
    this.getBackLink();
  },

  watch: {
    $route(to, from) {
      this.getBackLink();
    }
  }

}
</script>

<style lang="stylus">
.sidebar
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
  & > .sidebar-links
    padding 1.5rem 0
    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1.7
      font-weight bold
    & > li:not(:first-child)
      margin-top .75rem

@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>
