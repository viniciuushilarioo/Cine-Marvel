<template>
  <div id="app" class="app-container">
    <header>
      <img src="../assets/logo.png" alt="Logo Cine Marvel" />
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
</style>