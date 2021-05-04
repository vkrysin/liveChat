import { createApp } from 'vue'
import App from './App'
import { store } from './store/index'
import 'normalize.css'


const app = createApp(App)

app.use(store)

app.mount('#app')

