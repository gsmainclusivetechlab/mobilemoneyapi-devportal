/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import './styles/scss/styles.scss';
import Vue from 'vue';
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import VeeValidate from 'vee-validate';
// import { ValidationProvider } from 'vee-validate';

Vue.component("v-select", vSelect);
// Vue.component('ValidationProvider', ValidationProvider);

export default async ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer

}) => {
  Vue.use(VeeValidate);
  if (!isServer) {
    await import('vue-touch').then(module => {
      Vue.use(module.default);
    })
  }
  // ...apply enhancements for the site.
  // prevent ReferenceError: window is not defined during production build
}
