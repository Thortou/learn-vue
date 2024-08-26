import './assets/taiwindcss.css'
import 'reflect-metadata'
import 'primeicons/primeicons.css'
import './assets/main.css'
// import ConfirmationService from 'primevue/confirmationservice';
// import 'ant-design-vue/dist/reset.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { DatePicker } from 'ant-design-vue';
import  Ant  from 'ant-design-vue';

import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(DatePicker).use(Ant)
// app.use(ConfirmationService)
app.use(router)

app.mount('#app')
