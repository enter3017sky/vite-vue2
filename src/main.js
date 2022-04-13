// vue3
// import { createApp } from 'vue'
// createApp(App).mount('#app')


// vue2
import Vue from 'vue';
import App from './App.vue'

import 'virtual:windi.css'


new Vue({
  // router,
  // store,
  render: h => h(App),
}).$mount('#app');