<template>
  <Layout>
    <template slot="page-bottom">
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/layouts/Layout.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Layout,
    Footer,
  }
}
</script>
