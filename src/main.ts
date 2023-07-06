import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import store from './vuex/store'

const app = createApp(App)

//挂载element-plus
app.use(ElementPlus)

//挂载路由
app.use(router)

//挂载vuex
app.use(store)

app.mount('#app')
