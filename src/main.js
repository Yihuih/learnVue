import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import {createPinia} from 'pinia'
import AlertPage from './components/AlertPage.vue'

const app=createApp(App)
const pinia=createPinia()
app.use(router)
app.component('AlertPage',AlertPage)
app.use(pinia)
app.mount('#app')