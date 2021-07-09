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
// import VueTouch from 'vue-touch';
// import { ValidationProvider } from 'vee-validate';

Vue.component("v-select", vSelect);
// Vue.component('ValidationProvider', ValidationProvider);

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata

}) => {
  Vue.use(VeeValidate);
  // Vue.use(VueTouch);
  // ...apply enhancements for the site.
  // prevent ReferenceError: window is not defined during production build
}
