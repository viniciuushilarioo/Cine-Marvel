<template>
  <div id="app" class="app-container">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/categorias">Categorias</RouterLink>
        <RouterLink to="/download">Download</RouterLink>
        <RouterLink to="/cinema">Filmes no Cinema</RouterLink>
        <RouterLink to="/pagamento">Pagamento</RouterLink>
      </nav>
    </header>
    
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  background-image: url('./assets/fundo.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  color: white;
  font-family: 'Helvetica', sans-serif;
}

header {
  background: rgba(0, 0, 0, 0.8);
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  height: 60px;
}

nav {
  display: flex;
  gap: 15px;
}

a {
  color: red;
  font-weight: bold;
  text-decoration: none;
}

a.router-link-exact-active {
  border-bottom: 2px solid red;
}

body {
  font-family: Arial, sans-serif;
  background-color: #121212;
  color: white;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

header img {
  width: 150px;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
}

main {
  padding: 40px;
}

@media (max-width: 1024px) {
  header {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  header img {
    width: 120px;
    margin-bottom: 10px;
  }

  nav a {
    margin: 10px;
  }

  main {
    padding: 20px;
  }
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    text-align: center;
  }

  header img {
    width: 100px;
    margin-bottom: 15px;
  }

  nav a {
    font-size: 14px;
    margin: 5px;
  }

  main {
    padding: 10px;
  }
}

@media (max-width: 480px) {
  header img {
    width: 80px;
  }

  nav a {
    font-size: 12px;
  }

  main {
    padding: 10px;
    text-align: center;
  }
}
</style>