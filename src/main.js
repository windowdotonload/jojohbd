import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
document.body.addEventListener('touchmove', function (e) {
      e.preventDefault();
}, { passive: false })
createApp(App).mount('#app')
