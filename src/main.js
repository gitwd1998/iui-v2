import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import iui from 'packages'
import 'github-markdown-css'
import Preview from '@/components/Preview.vue'

const app = createApp(App)
app.component('Preview', Preview)
app.use(router)
app.use(iui)
app.mount('#app')
