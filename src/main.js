import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import VueFusionCharts from 'vue-fusioncharts';

// Resolve the dependencies
Charts(FusionCharts);
PowerCharts(FusionCharts);
Widgets(FusionCharts);
FusionTheme(FusionCharts);

// Globally register the components for project-wide use
Vue.use(VueFusionCharts, FusionCharts);

import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
