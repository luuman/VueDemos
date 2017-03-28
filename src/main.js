// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './routers'
import VueLazyload from 'vue-lazyload'
import progressive from 'progressive-image/dist/vue'

Vue.use(VueLazyload)
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'ASSET/img/error.png',
  loading: 'ASSET/img/loading.gif',
  attempt: 1,
  listenEvents: [ 'scroll' ]
})
Vue.use(progressive, {
  removePreview: true
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
