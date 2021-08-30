import { createApp } from "vue"
import router from './router'
import 'element-plus/dist/index.css'
import './assets/css/index.scss'
import './assets/css/common.scss'
import App from './App.vue'
import svgIcon from './icons/index.vue'
import "animate.css"

// app.use(router)
// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.component('svg-icon', svgIcon)
app.mount('#app')