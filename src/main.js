import { createApp } from "vue";
import { createPinia } from 'pinia'

import Oruga from '@oruga-ui/oruga-next'
import { bulmaConfig } from "@oruga-ui/theme-bulma/src/plugins/bulma";
import '@oruga-ui/theme-bulma/dist/bulma.css'

import App from './App.vue'
import router from './router'

const app = createApp(App).use(Oruga, bulmaConfig)

app.use(createPinia())
app.use(router)

app.mount('#app')
