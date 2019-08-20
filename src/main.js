import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less'
Vue.prototype.$axios = axios// axios插件给了vue对象原型的属性
Vue.config.productionTip = false
Vue.use(Element)
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
