// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'Vue-axios'
//import girl from '../static/girl.json'
import 'swiper/dist/css/swiper.css'
//import MuseUI from 'muse-ui'
import './assets/fonts/iconfont.css'

Vue.prototype.$axios = axios
//Vue.prototype.$girl = girl

Vue.config.productionTip = false

Vue.use(VueAxios,axios)
//Vue.use(MuseUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
//render (h) {
//  return h('mu-button', {}, 'Hello World');
//}
})

router.replace('/register')