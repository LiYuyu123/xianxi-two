import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/less/reset.less'
import Highchart from "highcharts/highcharts";
import HighchartsVue from "highcharts-vue";




Vue.use(Highchart)
Vue.use(HighchartsVue);


Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
