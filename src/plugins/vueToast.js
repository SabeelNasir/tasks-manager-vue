import Vue from 'vue'
import Toasted from 'vue-toasted'
// Use plugins
Vue.use(Toasted, {
    icon: 'check', action: {
        text: 'Cancel',
        onClick: (e, toastObject) => {
            toastObject.goAway(0);
        }
    },
})