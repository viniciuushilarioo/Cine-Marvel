<template>
    <div class="categorias">
      <h1>Filmes Marvel</h1>
      <div class="grid">
        <div 
          v-for="filme in filmes" 
          :key="filme.id" 
          class="card"
          @click="irParaDetalhes(filme.id)"
        >
          <img :src="filme.imagem" :alt="filme.titulo" />
          <h2>{{ filme.titulo }}</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const filmes = [
    { id: 1, titulo: 'Vingadores: Ultimato', imagem: '/src/assets/ultimato.jpg' },
    { id: 2, titulo: 'Homem-Aranha: Sem Volta Para Casa', imagem: '/src/assets/spiderman.jpg' },
    { id: 3, titulo: 'Pantera Negra: Wakanda Para Sempre', imagem: '/src/assets/wakanda.jpg' },
  ]
  
  function irParaDetalhes(id) {
    router.push(`/filme/${id}`)
  }
  </script>
  
  <style scoped>
  .categorias {
    padding: 2rem;
    color: white;
  }
  
  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .card {
    width: 200px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  .card img {
    width: 100%;
    border-radius: 8px;
  }
  </style>  