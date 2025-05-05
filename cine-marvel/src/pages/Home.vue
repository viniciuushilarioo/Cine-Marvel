<template>
    <div class="home">
      <div class="hero">
        <img src="../assets/logo.png" alt="Logo Cine Marvel" />
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
    color: rgb(255, 255, 255);
  }
  
  .hero {
    background: rgba(71, 2, 2, 0.7);
    padding: 40px;
    border-radius: 15px;
  }
  
  .logo {
    width: 250px;
    margin-bottom: 20px;
  }
  </style>  