
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/header/Header.vue'

const app = createApp(App)

app.use(router)
app.component('app-header',Header)
app.mount('#app')
