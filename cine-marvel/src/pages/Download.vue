<template>
    <div class="download">
      <h1>Download de Filmes</h1>
      <div class="lista">
        <div v-for="filme in filmes" :key="filme.id" class="filme">
          <img :src="filme.imagem" :alt="filme.titulo" />
          <div class="info">
            <h2>{{ filme.titulo }}</h2>
            <button @click="baixar(filme.titulo)">Baixar</button>
          </div>
        </div>
      </div>
      <p v-if="mensagem" class="mensagem">{{ mensagem }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const mensagem = ref('')
  
  const filmes = [
    { id: 1, titulo: 'Vingadores: Ultimato', imagem: '/src/assets/ultimato.jpg' },
    { id: 2, titulo: 'Homem-Aranha: Sem Volta Para Casa', imagem: '/src/assets/spiderman.jpg' },
    { id: 3, titulo: 'Pantera Negra: Wakanda Para Sempre', imagem: '/src/assets/panteranegra.jpg' }
  ]
  
  function baixar(nome) {
    mensagem.value = `Iniciando download de "${nome}"...`
    setTimeout(() => {
      mensagem.value = `Download de "${nome}" concluído com sucesso!`
    }, 2000)
  }
  </script>
  
  <style scoped>
  .download {
    padding: 2rem;
    color: white;
    text-align: center;
  }
  
  .lista {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
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
  
  .filme .info {
    margin-top: 10px;
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
  
  .mensagem {
    margin-top: 20px;
    color: lightgreen;
    font-weight: bold;
  }
  </style>  