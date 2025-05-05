<template>
    <div class="comentarios">
      <h1>Comentários dos Usuários</h1>
      
      <form @submit.prevent="adicionarComentario" class="formulario">
        <input v-model="nome" placeholder="Seu nome" required />
        <textarea v-model="mensagem" placeholder="Escreva seu comentário..." required></textarea>
        <button type="submit">Enviar Comentário</button>
      </form>
  
      <div class="lista">
        <div v-for="(comentario, index) in comentarios" :key="index" class="comentario">
          <h3>{{ comentario.nome }}</h3>
          <p>{{ comentario.mensagem }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const nome = ref('')
  const mensagem = ref('')
  const comentarios = ref([])
  
  function adicionarComentario() {
    comentarios.value.unshift({
      nome: nome.value,
      mensagem: mensagem.value
    })
    nome.value = ''
    mensagem.value = ''
  }
  </script>
  
  <style scoped>
  .comentarios {
    padding: 2rem;
    color: white;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .formulario {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
  }
  
  input, textarea {
    padding: 10px;
    border-radius: 5px;
    border: none;
    resize: vertical;
  }
  
  button {
    background: red;
    color: white;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
  }
  
  .lista {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .comentario {
    background: rgba(255, 255, 255, 0.05);
    border-left: 4px solid red;
    padding: 15px;
    border-radius: 8px;
  }
  
  .comentario h3 {
    margin: 0 0 5px;
    color: #ff4c4c;
  }
  </style>  