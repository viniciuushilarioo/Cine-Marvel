<template>
    <div class="home">
      <div class="hero">
        <img src="/logo.png" alt="Logo" />
        <h1>Bem-vindo ao Cine Marvel</h1>
        <p>Assista, baixe e compre os maiores sucessos da Marvel em alta definição.</p>
      </div>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  .home {
    height: 100vh;
    background: url('@/assets/marvel-bg.jpg') no-repeat center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: rgb(0, 0, 0);
  }
  
  .hero {
    background: rgba(0, 0, 0, 0.7);
    padding: 40px;
    border-radius: 15px;
  }
  
  .logo {
    width: 250px;
    margin-bottom: 20px;
  }
  </style>  