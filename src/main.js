import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  axios,
  render: h => h(App)
}).$mount('#app')

// Vue.use(axios)
Vue.prototype.$axios = axios
Vue.prototype.api = "http://localhost:8080/api/"