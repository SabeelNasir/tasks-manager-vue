import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import store from './store/store'
import Toasted from 'vue-toasted'

Vue.config.productionTip = false

Vue.prototype.$http = axios

// Use plugins
Vue.use(Toasted, {
   icon: 'check', action: {
      text: 'Cancel',
      onClick: (e, toastObject) => {
         toastObject.goAway(0);
      }
   },
})

new Vue({
   store,
   router,
   vuetify,
   render: h => h(App)
}).$mount('#app')
