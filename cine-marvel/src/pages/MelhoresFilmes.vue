<template>
    <div class="melhores-filmes">
      <h1>Melhores Filmes da Semana</h1>
      <div class="filmes">
        <div v-for="filme in melhores" :key="filme.id" class="filme-card">
          <img :src="filme.imagem" :alt="filme.titulo" />
          <div class="detalhes">
            <h2>{{ filme.titulo }}</h2>
            <p>{{ filme.descricao }}</p>
            <p class="nota">Nota média: ⭐ {{ filme.nota }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const melhores = [
    {
      id: 1,
      titulo: 'Vingadores: Ultimato',
      descricao: 'O épico final da saga do infinito com ação, emoção e sacrifícios.',
      imagem: '/src/assets/ultimato.jpg',
      nota: 4.9
    },
    {
      id: 2,
      titulo: 'Homem-Aranha: Sem Volta Para Casa',
      descricao: 'Os três Homens-Aranha se unem contra vilões clássicos.',
      imagem: '/src/assets/spiderman.jpg',
      nota: 4.8
    },
    {
      id: 3,
      titulo: 'Pantera Negra: Wakanda Para Sempre',
      descricao: 'Um tributo ao legado de T’Challa e a luta de Wakanda.',
      imagem: '/src/assets/wakanda.jpg',
      nota: 4.7
    }
  ]
  </script>
  
  <style scoped>
  .melhores-filmes {
    padding: 2rem;
    color: white;
    text-align: center;
  }
  
  .filmes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .filme-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    padding: 15px;
    width: 280px;
    text-align: left;
  }
  
  .filme-card img {
    width: 100%;
    border-radius: 8px;
  }
  
  .detalhes {
    margin-top: 10px;
  }
  
  .nota {
    margin-top: 10px;
    color: gold;
    font-weight: bold;
  }
  </style>  