// Este arquivo é o ponto de entrada principal do aplicativo Vue.js. Ele importa os estilos globais, cria a instância do aplicativo, configura o roteamento e monta o aplicativo na página HTML. O main.js é essencial para iniciar a aplicação e garantir que todos os componentes e rotas estejam corretamente configurados para serem usados em toda a aplicação.

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(farHeart, fasHeart)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
