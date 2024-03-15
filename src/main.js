
import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
// import 'bootstrap/dist/css/bootstrap.css'
import './assets/style.css'
// import globalComponents from './components/global/index.js'
import components from '@/components/UI/index.js'

console.log('components', components)
const app = createApp(App)
app.use(createPinia())
components.forEach( (component) => {
  app.component(component.name, component)
} )
// app.use(globalComponents)
app.mount('#app')