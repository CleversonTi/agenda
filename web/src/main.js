


// Components
import App from './App.vue'
import router from './router'
// Composables
import { createApp } from 'vue'

const app = createApp(App)
import vuetify from './plugins/vuetify'
import '@/scss/style.scss';


app
.use(router)
.use(vuetify)
.mount('#app')
