import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'jquery'
import 'bootstrap'
import router from './router/index'
import App from './App.vue'

Vue.use(ElementUI, VueAxios, axios)
Vue.prototype.$http = axios

new Vue({
  data: {
    hotelData: []
  },
  router,
  render: h => h(App)
}).$mount('#app')
