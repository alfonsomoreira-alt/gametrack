
<svelte:head>
  <title>Iniciar sesión | GameTrack</title>
</svelte:head>

<section class="login">
  <div class="tarjeta">
    <p class="etiqueta">✦ BIENVENIDO A GAMETRACK</p>
    <h1>ENTRA AL <span>JUEGO.</span></h1>

    <p>Tu colección de videojuegos te espera.</p>

    <label for="correo">Correo electrónico</label>
    <input
      id="correo"
      type="email"
      placeholder="tu@email.com"
      disabled
    />

    <label for="clave">Contraseña</label>
    <input
      id="clave"
      type="password"
      placeholder="Contraseña"
      disabled
    />

    <button disabled>INICIAR SESIÓN</button>

    <p class="aviso">
      Esta función se implementará en el Sprint 3.
    </p>

    <a href="/">← Volver al inicio</a>
  </div>
</section>

<style>
  .login {
    min-height: 600px;
    display: grid;
    place-items: center;
    padding: 40px 20px;
  }

  .tarjeta {
    width: 100%;
    max-width: 450px;
    padding: 40px;
    background: #1c2230;
    border: 1px solid #363d50;
    border-radius: 16px;
  }

  .etiqueta {
    color: #63dcc9;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2px;
  }

  h1 {
    font-size: 34px;
  }

  h1 span {
    color: #ff784f;
  }

  p {
    color: #aab3c4;
  }

  label {
    display: block;
    margin: 22px 0 10px;
  }

  input {
    width: 100%;
    padding: 15px;
    background: #111722;
    border: 1px solid #485164;
    border-radius: 8px;
    color: white;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    padding: 16px;
    margin-top: 25px;
    background: #ff784f;
    border: none;
    border-radius: 8px;
    font-weight: bold;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .aviso {
    margin: 25px 0;
    font-size: 13px;
  }

  a {
    color: #63dcc9;
  }
</style>
