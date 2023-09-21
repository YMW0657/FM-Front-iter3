
import { createApp } from 'vue'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import App from './App.vue'
import router from './router'
// import "@/assets/js/all.js"
import "@/assets/css/font.css"
import "@/assets/css/font1.css"
import "@/assets/css/styles.css"


const app = createApp(App)

app.use(router)

app.use(Antd).mount('#app');
