
<svelte:head>
  <title>GameTrack | Tu mundo gamer</title>
</svelte:head>

<section class="hero">
  <div class="hero-text">
    <p class="eyebrow">✦ TU MUNDO GAMER EN UN SOLO LUGAR</p>

    <h1>
      TODOS TUS JUEGOS.
      <span>UNA SOLA AVENTURA.</span>
    </h1>

    <p class="description">
      Organiza tu colección de videojuegos, descubre qué
      aventuras te faltan por completar y lleva el control
      de tu progreso.
    </p>

    <div class="buttons">
      <a href="/juegos" class="primary-button">
        EXPLORAR MI BIBLIOTECA →
      </a>

      <a href="/login" class="secondary-button">
        MI CUENTA
      </a>
    </div>

    <div class="hero-tags">
      <span>🎮 Organiza</span>
      <span>🏆 Completa</span>
      <span>⭐ Evalúa</span>
    </div>
  </div>

  <div class="hero-art" aria-hidden="true">
    <div class="art-glow"></div>

    <div class="art-card card-back">
      <span>⚔️</span>
      <strong>AVENTURA</strong>
    </div>

    <div class="art-card card-front">
      <span class="art-symbol">🎮</span>
      <strong>GAME ON!</strong>
      <small>TU PRÓXIMO NIVEL COMIENZA AQUÍ</small>
    </div>

    <div class="floating-label">★ LEVEL UP</div>
  </div>
</section>

<section class="features">
  <div class="section-heading">
    <p class="eyebrow">¿QUÉ ES GAMETRACK?</p>
    <h2>UNA BIBLIOTECA. <span>MIL HISTORIAS.</span></h2>
    <p>
      Todo lo que necesitas para mantener tus videojuegos
      organizados y disfrutar cada aventura.
    </p>
  </div>

  <div class="features-grid">
    <article class="feature-card">
      <div class="feature-icon">🎮</div>
      <h3>TU COLECCIÓN</h3>
      <p>
        Mantén todos tus videojuegos organizados
        por plataforma y categoría.
      </p>
    </article>

    <article class="feature-card">
      <div class="feature-icon">🏆</div>
      <h3>TU PROGRESO</h3>
      <p>
        Descubre qué juegos estás jugando,
        cuáles completaste y cuáles tienes pendientes.
      </p>
    </article>

    <article class="feature-card">
      <div class="feature-icon">⭐</div>
      <h3>TUS VALORACIONES</h3>
      <p>
        Guarda tus opiniones y puntuaciones
        de cada videojuego de tu biblioteca.
      </p>
    </article>
  </div>

  <p class="future-note">
    Las funciones de gestión y valoración se implementarán
    durante los próximos Sprints.
  </p>
</section>

<style>
  .hero {
    min-height: 590px;
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    align-items: center;
    gap: 40px;
    padding: 70px 6%;
    background:
      radial-gradient(circle at 80% 30%, #38263c 0%, transparent 48%),
      #10131c;
    overflow: hidden;
  }

  .eyebrow {
    color: #63dcc9;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 2px;
  }

  h1 {
    font-size: clamp(44px, 5vw, 76px);
    line-height: 1.07;
    letter-spacing: -3px;
    font-weight: 900;
    margin: 25px 0;
  }

  h1 span {
    display: block;
    color: #ff784f;
  }

  .description {
    font-size: 17px;
    line-height: 1.8;
    color: #abb3c4;
    max-width: 520px;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 34px;
  }

  .primary-button,
  .secondary-button {
    padding: 17px 23px;
    border-radius: 9px;
    font-size: 13px;
    font-weight: 900;
    transition: transform 0.2s;
  }

  .primary-button:hover,
  .secondary-button:hover {
    transform: translateY(-3px);
  }

  .primary-button {
    background: #ff784f;
    color: #10131c;
  }

  .secondary-button {
    border: 1px solid #596072;
    color: white;
  }

  .hero-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 46px;
    color: #aab3c4;
    font-size: 14px;
  }

  .hero-art {
    height: 410px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .art-glow {
    position: absolute;
    width: 360px;
    height: 360px;
    background: #ff784f;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.2;
  }

  .art-card {
    position: absolute;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 30px 70px #0006;
    text-align: center;
    font-weight: 900;
  }

  .card-back {
    width: 230px;
    height: 290px;
    background: linear-gradient(145deg, #4c5ed7, #281b64);
    transform: rotate(-17deg) translate(-95px, -18px);
    font-size: 24px;
  }

  .card-back span {
    font-size: 90px;
    margin-bottom: 25px;
  }

  .card-front {
    width: 250px;
    height: 330px;
    background: linear-gradient(145deg, #ff9b59, #f14f68);
    color: #16151d;
    transform: rotate(9deg) translate(75px, 12px);
    font-size: 35px;
  }

  .art-symbol {
    font-size: 105px;
    margin-bottom: 22px;
  }

  .card-front small {
    margin-top: 12px;
    font-size: 10px;
    letter-spacing: 1px;
    max-width: 170px;
  }

  .floating-label {
    position: absolute;
    bottom: 12px;
    left: 10%;
    padding: 16px 24px;
    border-radius: 12px;
    background: #63dcc9;
    color: #10131c;
    font-weight: 900;
    transform: rotate(-8deg);
  }

  .features {
    padding: 85px 6%;
    background: #191e2a;
  }

  .section-heading {
    max-width: 1200px;
    margin: 0 auto 42px;
  }

  h2 {
    font-size: clamp(30px, 4vw, 48px);
    margin: 15px 0;
    letter-spacing: -1px;
  }

  h2 span {
    color: #ff784f;
  }

  .section-heading > p:last-child {
    color: #aab3c4;
    line-height: 1.7;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
    max-width: 1200px;
    margin: auto;
  }

  .feature-card {
    background: #232938;
    padding: 34px;
    border: 1px solid #353c4e;
    border-radius: 16px;
  }

  .feature-icon {
    font-size: 40px;
    margin-bottom: 25px;
  }

  h3 {
    font-size: 19px;
  }

  .feature-card p {
    color: #aab3c4;
    font-size: 15px;
    line-height: 1.7;
  }

  .future-note {
    text-align: center;
    color: #929bad;
    font-size: 13px;
    margin-top: 34px;
  }

  @media (max-width: 850px) {
    .hero {
      grid-template-columns: 1fr;
      padding: 60px 7%;
    }

    .hero-art {
      height: 350px;
      transform: scale(0.8);
    }

    .features-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .hero-art {
      transform: scale(0.65);
      margin: -35px 0;
    }

    h1 {
      letter-spacing: -1px;
    }
  }
</style>
