import Vue from 'vue'
import App from './App'
import router from './router'
import "./common/css/reset.css"
import "./common/js/flexble";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
})
