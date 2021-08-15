import { createApp } from 'vue'
import App from './App.vue'
import './styles/app.css';
import './registerServiceWorker'
import router from './router'

createApp(App).use(router).mount('#app')
