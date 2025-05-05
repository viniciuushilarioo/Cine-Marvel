import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Categorias from '../pages/Categorias.vue'
import DetalhesFilme from '../pages/DetalhesFilme.vue'
import Download from '../pages/Download.vue'
import ComprarCinema from '../pages/ComprarCinema.vue'
import Pagamento from '../pages/Pagamento.vue'
import MelhoresFilmes from '../pages/MelhoresFilmes.vue'
import Comentarios from '../pages/Comentarios.vue' 

const routes = [
  { path: '/', component: Home },
  { path: '/categorias', component: Categorias },
  { path: '/filme/:id', component: DetalhesFilme },
  { path: '/download', component: Download },
  { path: '/cinema', component: ComprarCinema },
  { path: '/pagamento', component: Pagamento },
  { path: '/melhores', component: MelhoresFilmes},
  { path: '/comentarios', component: Comentarios},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router