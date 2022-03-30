<template>
  <div
      class="theme-container"
      :class="pageClasses"
  >
    <Navbar
        v-if="shouldShowNavbar"
        @toggle-sidebar="toggleSidebar"
    />

    <Sidebar
        :items="sidebarItems"
        @toggle-sidebar="toggleSidebar"
    >
      <template #top>
        <slot name="sidebar-top"/>
      </template>
      <template #bottom>
        <slot name="sidebar-bottom"/>
      </template>
    </Sidebar>

    <Home v-if="$page.frontmatter.home"/>

    <Page
        v-else
        :sidebar-items="sidebarItems"
    >
      <template #top>
        <slot name="page-top"/>
      </template>
      <template #bottom>
        <slot name="page-bottom"/>
      </template>
    </Page>
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue';
import Navbar from '@theme/components/Navbar.vue';
import Page from '@theme/components/Page.vue';
import Sidebar from '@theme/components/Sidebar.vue';
import { resolveSidebarItems } from '@theme/util';
import { nameWithSlash } from '@/helpers/vuexHelper';
import { CODE_PANEL } from '@/store/modules/module-types';
import { mapState } from 'vuex';
import clientRootMixin from '@/plugins/plugin-active-header-links/clientRootMixin';

export default {
  name: 'Layout',

  components: {
    Home,
    Page,
    Sidebar,
    Navbar
  },

  mixins: [clientRootMixin],

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (
          frontmatter.navbar === false
          || themeConfig.navbar === false) {
        return false;
      }
      return (
          this.$title
          || themeConfig.logo
          || themeConfig.repo
          || themeConfig.nav
          || this.$themeLocaleConfig.nav
      );
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
          ! frontmatter.home
          && frontmatter.sidebar !== false
          && this.sidebarItems.length
      );
    },

    sidebarItems() {
      return resolveSidebarItems(
          this.$page,
          this.$page.regularPath,
          this.$site,
          this.$localePath
      );
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          'no-navbar': ! this.shouldShowNavbar,
          'sidebar-open': this.menuSidebarOpen,
          'no-sidebar': ! this.shouldShowSidebar
        },
        userPageClass
      ];
    },

    ...mapState(CODE_PANEL, ['menuSidebarOpen']),
  },

  mounted() {
    this.$router.afterEach(() => {
      this.$store.commit(nameWithSlash(CODE_PANEL, 'setInactiveSidebar'), 'menu');
    });
  },

  methods: {
    toggleSidebar(to) {
      if (typeof to === 'boolean' ? to : ! this.menuSidebarOpen) {
        this.$store.commit(nameWithSlash(CODE_PANEL, 'setActiveSidebar'), 'menu');
      } else {
        this.$store.commit(nameWithSlash(CODE_PANEL, 'setInactiveSidebar'), 'menu');
      }
    },
  }
};
</script>

<!--<template>-->
<!--  <Layout>-->
<!--    <template slot="page-bottom">-->
<!--    </template>-->
<!--  </Layout>-->
<!--</template>-->

<!--<script>-->
<!--import Layout from '@vuepress/theme-default/layouts/Layout.vue';-->
<!--import Footer from '../components/Footer.vue';-->
<!--import clientRootMixin from '../../plugins/plugin-active-header-links/clientRootMixin';-->

<!--export default {-->
<!--  components: {-->
<!--    Layout,-->
<!--    Footer,-->
<!--  },-->
<!--  mixins: [clientRootMixin],-->
<!--};-->
<!--</script>-->
