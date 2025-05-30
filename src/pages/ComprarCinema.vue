<template>
    <div class="cinema">
      <h1>Filmes Exclusivos no Cinema</h1>
      <div class="grid">
        <div v-for="filme in filmesCinema" :key="filme.id" class="filme">
          <img :src="filme.imagem" :alt="filme.titulo" />
          <div class="info">
            <h2>{{ filme.titulo }}</h2>
            <p class="preco">R$ {{ filme.preco }}</p>
            <button @click="comprar(filme)">Comprar</button>
          </div>
        </div>
      </div>
      <p v-if="mensagem" class="mensagem">{{ mensagem }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const mensagem = ref('')
  
  const filmesCinema = [
    {
      id: 10,
      titulo: 'Thunderbolts',
      imagem: '/src/assets/Thunderbolts.jpg',
      preco: 29.99
    },
    {
      id: 11,
      titulo: 'Vingadores: Doomsday',
      imagem: '/src/assets/Doomsday.jpg',
      preco: 34.99
    }
  ]
  
  function comprar(filme) {
    router.push({ name: 'Pagamento', query: { titulo: filme.titulo, preco: filme.preco } })
  }
  </script>
  
  <style scoped>
  .cinema {
    padding: 2rem;
    color: white;
    text-align: center;
  }
  
  .grid {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .filme {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    padding: 10px;
    width: 220px;
    text-align: center;
  }
  
  .filme img {
    width: 100%;
    border-radius: 8px;
  }
  
  .info {
    margin-top: 10px;
  }
  
  .preco {
    color: gold;
    font-size: 1.2rem;
    margin: 10px 0;
  }
  
  button {
    background: red;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background: darkred;
  }
  </style>   