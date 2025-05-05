<template>
    <div class="pagamento">
      <h1>Pagamento</h1>
      <p v-if="titulo">Você está comprando: <strong>{{ titulo }}</strong> por <strong>R$ {{ preco }}</strong></p>
  
      <form @submit.prevent="processarPagamento">
        <input type="text" v-model="nome" placeholder="Nome completo" required />
        <input type="email" v-model="email" placeholder="Email" required />
  
        <select v-model="metodo" required>
          <option disabled value="">Selecione o método de pagamento</option>
          <option value="pix">Pix</option>
          <option value="cartao">Cartão de Crédito</option>
          <option value="boleto">Boleto Bancário</option>
        </select>
  
        <button type="submit" :disabled="processando">
          {{ processando ? 'Processando...' : 'Confirmar Pagamento' }}
        </button>
      </form>
  
      <p v-if="mensagem" class="mensagem">{{ mensagem }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const titulo = ref('')
  const preco = ref('')
  const nome = ref('')
  const email = ref('')
  const metodo = ref('')
  const mensagem = ref('')
  const processando = ref(false)
  
  onMounted(() => {
    titulo.value = route.query.titulo || ''
    preco.value = route.query.preco || ''
  })
  
  function processarPagamento() {
    processando.value = true
    mensagem.value = ''
    setTimeout(() => {
      mensagem.value = `Pagamento de R$ ${preco.value} para "${titulo.value}" realizado com sucesso via ${metodo.value.toUpperCase()}!`
      processando.value = false
    }, 2500)
  }
  </script>
  
  <style scoped>
  .pagamento {
    padding: 2rem;
    color: white;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
  }
  
  input, select {
    padding: 10px;
    border-radius: 5px;
    border: none;
  }
  
  button {
    padding: 10px;
    background: red;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:disabled {
    background: gray;
  }
  
  .mensagem {
    margin-top: 20px;
    color: lightgreen;
    font-weight: bold;
  }
  </style>  