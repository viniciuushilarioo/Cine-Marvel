<template>
    <div class="detalhes">
      <h1>{{ filme.titulo }}</h1>
      <img :src="filme.imagem" :alt="filme.titulo" />
      <p>{{ filme.descricao }}</p>
  
      <div class="avaliacao">
        <h3>Avalie este filme:</h3>
        <div class="estrelas">
          <span 
            v-for="n in 5" 
            :key="n"
            @click="avaliar(n)"
            :class="{ ativa: n <= nota }"
          >★</span>
        </div>
        <p v-if="nota">Você deu {{ nota }} estrela(s).</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const nota = ref(0)
  
  const filmes = {
    1: {
      titulo: 'Vingadores: Ultimato',
      imagem: '/src/assets/ultimato.jpg',
      descricao: 'Os Vingadores enfrentam Thanos em uma batalha épica para salvar o universo.'
    },
    2: {
      titulo: 'Homem-Aranha: Sem Volta Para Casa',
      imagem: '/src/assets/spiderman.jpg',
      descricao: 'Peter Parker precisa lidar com as consequências de sua identidade revelada.'
    },
    3: {
      titulo: 'Pantera Negra: Wakanda Para Sempre',
      imagem: '/src/assets/panteranegra.jpg',
      descricao: 'Wakanda enfrenta novas ameaças após a morte do rei T’Challa.'
    }
  }
  
  const filme = filmes[route.params.id] || {
    titulo: 'Filme não encontrado',
    imagem: '',
    descricao: ''
  }
  
  function avaliar(n) {
    nota.value = n
  }
  </script>
  
  <style scoped>
  .detalhes {
    padding: 2rem;
    color: white;
    text-align: center;
  }
  
  img {
    max-width: 400px;
    border-radius: 10px;
    margin: 20px 0;
  }
  
  .avaliacao {
    margin-top: 30px;
  }
  
  .estrelas span {
    font-size: 2rem;
    cursor: pointer;
    color: gray;
  }
  
  .estrelas span.ativa {
    color: gold;
  }
  </style>  