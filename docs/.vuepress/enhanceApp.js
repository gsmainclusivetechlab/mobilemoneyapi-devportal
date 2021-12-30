/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import './styles/scss/styles.scss';
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import './plugins/veevalidate';

import VueTippy, { TippyComponent } from "vue-tippy";
import "tippy.js/themes/light.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/themes/google.css";
import "tippy.js/themes/translucent.css";

import CodeBlock from "./theme/global-components/CodeBlock.vue"
import CodeGroup from "./theme/global-components/CodeGroup.vue"
import pageComponents from '@internal/page-components'
import { ValidationObserver, ValidationProvider } from 'vee-validate';

import store from './store'
import CookieManager from "./helpers/CookieManager";
import {X_USER_TOKEN} from "./api/constants";
export default async ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer

}) => {
  Vue.mixin({store})
  // initValidation()
  Vue.component('ValidationProvider', ValidationProvider);
  Vue.component('ValidationObserver', ValidationObserver);
  Vue.component("v-select", vSelect);
  Vue.component('CodeBlock', CodeBlock)
  Vue.component('CodeGroup', CodeGroup)

  Vue.use(VueTippy);
  Vue.component("tippy", TippyComponent);

  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component)
  }

  if (!isServer) {
    await import('vue-touch').then(module => {
      Vue.use(module.default);
    })

    router.beforeEach((to, from, next) => {
      if(to.path === "/dashboard/" && !CookieManager.getValue(X_USER_TOKEN)) next({path: '/login/'})
      else next();
    })
    // get user data
    // TODO maybe fix it
    if(CookieManager.getValue(X_USER_TOKEN)) {
      store.dispatch('user/getUserData')
    }

  }
  // ...apply enhancements for the site.
  // prevent ReferenceError: window is not defined during production build
}
