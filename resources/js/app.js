require('./bootstrap');
window.Vue = require('vue');
Vue.config.devtools = true
import router from './router/router'
import store from './store/store'
Vue.component('tracker', require('./components/App.vue').default);
const app = new Vue({
    el: '#app',
    store,
    router
});

