import { createApp } from 'vue'
import Router from './Routes/Routes.js'
import App from './App.vue'
import './assets/main.css'

createApp(App).use(Router).mount('#app')

// import { createApp } from 'vue'
// import App from './App.vue'
// import './assets/main.css'

// createApp(App).mount('#app')