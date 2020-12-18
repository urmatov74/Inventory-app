import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import UUID from 'vue-uuid'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap-vue/dist/bootstrap-vue.css'

// Optionally install the BootstrapVue icon components plugin


Vue.use(UUID);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
