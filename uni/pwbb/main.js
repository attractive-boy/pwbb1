



// #ifndef VUE3
import uView from '@/uni_modules/uview-ui'

import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false
Vue.use(uView) 
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif