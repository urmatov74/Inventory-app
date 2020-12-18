import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import UUID from 'vue-uuid'  
Vue.use(UUID);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


createApp(App).mount('#app')
