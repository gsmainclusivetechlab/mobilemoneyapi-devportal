<template>
  <Layout>
    <template slot="page-bottom">
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/layouts/Layout.vue';
import Footer from '../components/Footer.vue';
import clientRootMixin from "../../plugins/plugin-active-header-links/clientRootMixin";

export default {
  components: {
    Layout,
    Footer,
  },
  mixins: [clientRootMixin]
}
</script>
