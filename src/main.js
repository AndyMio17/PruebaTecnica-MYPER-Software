//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'
import router from './router/router.js'
import { Card, InputText, Button, DataTable, Column } from 'primevue'
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'

createApp(App)
.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
.component('Card-pv', Card)
.component('InputText-pv', InputText)
.component('Button-pv', Button)
.component('DataTable-pv', DataTable)
.component('Column-pv', Column)
.use(router)
.mount('#app') 
