import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import GlobalChild from './components/GlobalChild.vue'

const app = createApp(App);

const pinia = createPinia();

app.component('GlobalChild',GlobalChild)

app.use(ElementPlus)
app.use(pinia);

app.mount('#app');
