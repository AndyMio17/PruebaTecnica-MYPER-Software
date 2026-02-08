//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'
import router from './router/router.js'
import { Card } from 'primevue'
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'

createApp(App)
.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
.component('Card', Card)
.use(router)
.mount('#app') 
