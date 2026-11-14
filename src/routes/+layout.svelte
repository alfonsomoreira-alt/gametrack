
<script lang="ts">
  let { children } = $props();
</script>

<svelte:head>
  <meta
    name="description"
    content="GameTrack - Tu biblioteca personal de videojuegos"
  />
</svelte:head>

<div class="app">
  <header>
    <!-- Logo personalizado de GameTrack -->
    <a href="/" class="logo" aria-label="GameTrack - Inicio">
      <img src="/logo-gametrack.png" alt="GameTrack" />
    </a>

    <!-- Menú de navegación -->
    <nav aria-label="Navegación principal">
      <a href="/">INICIO</a>
      <a href="/juegos">MIS JUEGOS</a>
      <a href="/login">INICIAR SESIÓN</a>
    </nav>
  </header>

  <!-- Contenido de cada página -->
  <main>
    {@render children()}
  </main>

  <!-- Pie de página -->
  <footer>
    <p>© GameTrack - Tu colección, tu aventura.</p>
    <p>Proyecto de Programación Web 2</p>
  </footer>
</div>

<style>
  /* Estilos generales */
  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    background: #10131c;
    color: white;
    font-family: Arial, sans-serif;
  }

  :global(a) {
    text-decoration: none;
  }

  /* Estructura principal */
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Encabezado */
  header {
    background: #191e2a;
    padding: 15px 6%;
    min-height: 82px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    border-bottom: 2px solid #ff784f;
  }

  /* Nuevo logo personalizado */
  .logo {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    text-decoration: none;
  }

  .logo img {
    width: 230px;
    height: auto;
    display: block;
    transition: transform 0.2s ease;
  }

  .logo:hover img {
    transform: scale(1.05);
  }

  /* Menú de navegación */
  nav {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  nav a {
    color: white;
    font-size: 14px;
    font-weight: bold;
    transition: color 0.2s ease;
  }

  nav a:hover {
    color: #ff784f;
  }

  /* Contenido principal */
  main {
    flex: 1;
  }

  /* Pie de página */
  footer {
    background: #0b0e15;
    padding: 25px;
    text-align: center;
    color: #9da6b8;
    font-size: 13px;
  }

  /* Adaptación para celulares */
  @media (max-width: 700px) {
    header {
      flex-direction: column;
      padding: 20px;
      gap: 20px;
    }

    .logo img {
      width: 200px;
    }

    nav {
      flex-wrap: wrap;
      justify-content: center;
      gap: 18px;
    }

    nav a {
      font-size: 12px;
    }
  }
</style>
