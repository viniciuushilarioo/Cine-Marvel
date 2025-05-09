<template>
  <div class="home">
    <div class="hero">
      <img src="../assets/logo.png" alt="Logo Cine Marvel" class="logo" />
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
  padding: 20px;
}

.hero {
  background: rgba(71, 2, 2, 0.7);
  padding: 40px;
  border-radius: 15px;
  max-width: 90%;
  width: 600px; /* Tamanho máximo do container */
}

.logo {
  width: 250px;
  margin-bottom: 20px;
  max-width: 100%;
  height: auto; /* Garantir que o logo seja proporcional */
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
}

@media (max-width: 1024px) {
  .hero {
    padding: 30px;
  }

  .logo {
    width: 200px;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 20px;
  }

  .logo {
    width: 150px;
  }

  h1 {
    font-size: 1.8rem;
  }

  p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 15px;
    text-align: center;
  }

  .logo {
    width: 120px;
  }

  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.8rem;
  }
}
</style>