import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import store from './store/store'

Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
   store,
   router,
   vuetify,
   render: h => h(App)
}).$mount('#app')
