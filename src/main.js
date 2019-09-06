import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import iView from 'iview'
import router from './router'
import JqComSearch from '@/components/others/JqComSearch'

import 'iview/dist/styles/iview.css'

import './assets/fonts/iconfont.css'

Vue.use(VueRouter)
Vue.use(iView)

// 搜索组件
Vue.component('jq-com-search', JqComSearch)

Vue.config.productionTip = false

Vue.use(iView)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
