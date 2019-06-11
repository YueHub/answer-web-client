import Vue from 'vue';
import App from './App';
import router from './router';

import {Select, Option} from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.config.productionTip = false;

Vue.use(Select);
Vue.use(Option);
Vue.use(MuseUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
});
