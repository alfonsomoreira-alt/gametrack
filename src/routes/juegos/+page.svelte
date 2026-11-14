
<script lang="ts">
  import type { PageProps } from './$types';

  let { data, form }: PageProps = $props();
</script>

<svelte:head>
  <title>Mis juegos | GameTrack</title>
</svelte:head>

<section class="biblioteca">
  <div class="encabezado">
    <p class="subtitulo">✦ TU COLECCIÓN PERSONAL</p>
    <h1>MIS <span>JUEGOS.</span></h1>
    <p>Organiza tus aventuras y sigue tu progreso.</p>
  </div>

  <!-- Formulario que envía datos con POST -->
  <section class="formulario">
    <h2>🎮 AGREGAR VIDEOJUEGO</h2>
    <p>Agrega un juego a tu biblioteca de demostración.</p>

    <form method="POST">
      <div class="campos">
        <div class="campo">
          <label for="nombre">Nombre del videojuego</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            maxlength="80"
            placeholder="Ej: Terraria"
            value={form?.nombre ?? ''}
          />
        </div>

        <div class="campo">
          <label for="plataforma">Plataforma</label>
          <select
            id="plataforma"
            name="plataforma"
            value={form?.plataforma ?? ''}
          >
            <option value="">Seleccionar plataforma</option>
            <option value="PC">PC</option>
            <option value="PlayStation">PlayStation</option>
            <option value="Xbox">Xbox</option>
            <option value="Nintendo Switch">
              Nintendo Switch
            </option>
          </select>
        </div>
      </div>

      <button type="submit">+ AGREGAR JUEGO</button>
    </form>

    <!-- Respuesta del servidor -->
    {#if form?.mensaje}
      <div
        class:exito={form.ok}
        class:error={!form.ok}
        class="mensaje"
        role="status"
      >
        {form.mensaje}
      </div>
    {/if}
  </section>

  <!-- Lista recibida desde el servidor -->
  <section class="lista">
    <div class="titulo-lista">
      <h2>MI BIBLIOTECA</h2>
      <span>{data.juegos.length} videojuegos</span>
    </div>

    <div class="juegos-grid">
      {#each data.juegos as juego (juego.id)}
        <article class="tarjeta">
          <div class="portada">
            <span class="simbolo">✦</span>
            <span class="portada-texto">GAMETRACK</span>
          </div>

          <div class="informacion">
            <span class="plataforma">{juego.plataforma}</span>
            <h3>{juego.nombre}</h3>
            <span class="estado">{juego.estado}</span>

            <div class="progreso">
              <span>PROGRESO</span>
              <strong>{juego.progreso}%</strong>
            </div>

            <div class="barra">
              <div
                class="relleno"
                style:width={`${juego.progreso}%`}
              ></div>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <p class="aviso">
    Datos simulados en memoria. La base de datos se
    incorporará en el Sprint 2.
  </p>
</section>

<style>
  .biblioteca {
    max-width: 1250px;
    margin: auto;
    padding: 65px 6%;
  }

  .subtitulo {
    color: #63dcc9;
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 2px;
  }

  h1 {
    font-size: clamp(42px, 6vw, 75px);
    letter-spacing: -2px;
    margin: 15px 0;
  }

  h1 span {
    color: #ff784f;
  }

  .encabezado > p:last-child {
    color: #aab3c4;
    font-size: 17px;
  }

  .formulario {
    background: #1c2230;
    border: 1px solid #363d50;
    border-radius: 16px;
    padding: 30px;
    margin: 45px 0;
  }

  h2 {
    font-size: 22px;
    margin-top: 0;
  }

  .formulario > p {
    color: #aab3c4;
  }

  .campos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 25px;
  }

  .campo label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  input,
  select {
    width: 100%;
    padding: 15px;
    border-radius: 9px;
    border: 1px solid #485164;
    background: #111722;
    color: white;
    font: inherit;
  }

  button {
    margin-top: 25px;
    padding: 16px 25px;
    border: none;
    border-radius: 9px;
    background: #ff784f;
    color: #10131c;
    font-weight: 900;
    cursor: pointer;
  }

  button:hover {
    background: #ffa17e;
  }

  .mensaje {
    margin-top: 20px;
    padding: 15px;
    border-radius: 8px;
    font-weight: bold;
  }

  .exito {
    background: #173b36;
    color: #63dcc9;
  }

  .error {
    background: #48242b;
    color: #ff9b9b;
  }

  .titulo-lista {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 25px;
  }

  .titulo-lista span {
    color: #63dcc9;
    font-weight: bold;
  }

  .juegos-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 25px;
  }

  .tarjeta {
    background: #1c2230;
    border: 1px solid #363d50;
    border-radius: 14px;
    overflow: hidden;
  }

  .portada {
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    background: linear-gradient(135deg, #534c9b, #a84c76);
  }

  .tarjeta:nth-child(3n + 2) .portada {
    background: linear-gradient(135deg, #236b68, #3864a8);
  }

  .tarjeta:nth-child(3n + 3) .portada {
    background: linear-gradient(135deg, #c66248, #873f72);
  }

  .simbolo {
    font-size: 70px;
    color: white;
  }

  .portada-texto {
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 3px;
  }

  .informacion {
    padding: 25px;
  }

  .plataforma {
    color: #aab3c4;
    font-size: 12px;
  }

  h3 {
    font-size: 23px;
    margin: 14px 0;
  }

  .estado {
    display: inline-block;
    background: #343c50;
    color: #63dcc9;
    padding: 7px 12px;
    border-radius: 20px;
    font-size: 12px;
  }

  .progreso {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    font-size: 12px;
    color: #aab3c4;
  }

  .progreso strong {
    color: white;
  }

  .barra {
    height: 8px;
    margin-top: 10px;
    background: #363d50;
    border-radius: 10px;
    overflow: hidden;
  }

  .relleno {
    height: 100%;
    background: linear-gradient(90deg, #63dcc9, #ff784f);
  }

  .aviso {
    margin-top: 40px;
    color: #aab3c4;
    text-align: center;
    font-size: 13px;
  }

  @media (max-width: 850px) {
    .juegos-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 600px) {
    .campos,
    .juegos-grid {
      grid-template-columns: 1fr;
    }

    .titulo-lista {
      align-items: flex-start;
      flex-direction: column;
    }
  }
</style>
