import BackButton from './components/BackButton';
import './Favorites.css';

function Favorites() {
  return (
    <div className="favorites-page">

      <header className="favorites-header">

        <div className="favorites-header-left">
          <BackButton />

          <a href="/" className="favorites-logo">
            ELO<span>.</span>
          </a>
        </div>

        <span className="favorites-title">
          Favoritos
        </span>

      </header>


      <main className="favorites-main">

        <span className="favorites-label">
          OS TEUS FAVORITOS
        </span>

        <h1>
          Profissionais que<br />
          <em>guardaste.</em>
        </h1>

        <p className="favorites-intro">
          Aqui vais encontrar os profissionais que guardaste
          para consultares mais tarde.
        </p>


        <section className="favorites-empty">

          <div className="favorites-empty-icon">
            ♡
          </div>

          <h2>
            Ainda não tens favoritos.
          </h2>

          <p>
            Quando encontrares um profissional de que gostes,
            guarda-o aqui para o encontrares facilmente mais tarde.
          </p>

          <button
            type="button"
            onClick={() => {
              window.location.href = '/search';
            }}
          >
            Procurar profissionais <span>→</span>
          </button>

        </section>

      </main>

    </div>
  );
}

export default Favorites;