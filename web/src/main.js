


// Components
import App from './App.vue'
import router from './router'
// Composables
import { createApp } from 'vue'

const app = createApp(App)
import vuetify from './plugins/vuetify'


app
.use(router)
.use(vuetify)
.mount('#app')
