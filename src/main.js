import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.AOS = new AOS.init()

app.mount('#app')
