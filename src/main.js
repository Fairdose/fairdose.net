import { createApp } from "vue";
import { createPinia } from 'pinia'
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.css'

import App from './App.vue'
import router from './router'

const app = createApp(App).use(Oruga)

app.use(createPinia())
app.use(router)

app.mount('#app')
