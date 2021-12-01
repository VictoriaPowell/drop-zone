import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Default Loading Page Date:  13d, 8h, 12m, 5s in the future
const default_end_date = new Date()
let default_seconds =
  default_end_date.getSeconds() + 5 + 12 * 60 + 8 * 60 * 60 + 13 * 24 * 60 * 60
default_end_date.setSeconds(default_seconds)
const custom_date = null // Set custom date for countdown here ex. new Date(2022, 4, 22, 10, 10, 10, 10)
const countdown_end_date = custom_date || default_end_date
// createApp.config.globalProperties.$countdown_end_date = countdown_end_date
createApp(App).use(router).mount('#app')
