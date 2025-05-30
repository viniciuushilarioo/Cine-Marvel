import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register('/service-worker.js', {
    ready() {
      console.log('PWA está funcionando com cache.');
    },
    registered() {
      console.log('Service worker registrado.');
    },
    cached() {
      console.log('Conteúdo em cache.');
    },
    updatefound() {
      console.log('Nova versão encontrada.');
    },
    updated() {
      console.log('Nova versão pronta. Recarregue.');
    },
    offline() {
      console.log('Sem conexão. Modo offline.');
    },
    error(error) {
      console.error('Erro no service worker:', error);
    }
  })
}

