import BackButton from './components/BackButton';
function Client() {
  return (
    <div className="dashboard-page">

<header className="client-navbar">

<BackButton />

<a href="/" className="client-logo">
  ELO<span>.</span>
</a>

        <nav className="dashboard-nav">
          <a href="/client">Procurar serviços</a>
          <a href="/client">Os meus pedidos</a>
          <a href="/client">Favoritos</a>
        </nav>

        <div className="dashboard-actions">
          <button className="dashboard-icon-button">♡</button>
          <button className="dashboard-profile-button">D</button>
        </div>
      </header>


      <main className="client-main">

        <section className="client-hero">

          <div>
            <span className="section-label">ÁREA DO CLIENTE</span>

            <h1>
              O que precisas,
              <br />
              <em>encontramos.</em>
            </h1>

            <p>
              Procura profissionais de confiança perto de ti
              ou encontra alguém que trabalhe online.
            </p>
          </div>

        </section>


        <section className="client-search-section">

          <div className="client-search-heading">
            <span className="section-label">ENCONTRA UM SERVIÇO</span>

            <h2>
              O que precisas <em>hoje?</em>
            </h2>
          </div>

          <div className="client-search-box">

            <div className="client-search-field">
              <span>⌕</span>

              <div>
                <label>Serviço</label>
                <input
                  type="text"
                  placeholder="Ex.: explicações, limpeza..."
                />
              </div>
            </div>

            <div className="client-search-field">
              <span>⌖</span>

              <div>
                <label>Localização</label>
                <input
                  type="text"
                  placeholder="Cidade ou código postal"
                />
              </div>
            </div>

            <button className="primary-button">
              Procurar <span>→</span>
            </button>

          </div>

        </section>


        <section className="client-categories">

          <div className="section-heading">
            <div>
              <span className="section-label">CATEGORIAS</span>

              <h2>
                Explora por <em>categoria.</em>
              </h2>
            </div>

            <a href="/" className="view-all">
              Ver todas <span>→</span>
            </a>
          </div>

          <div className="client-category-grid">

            <button className="client-category-card">
              <span className="category-icon">▱</span>
              <strong>Explicações</strong>
              <span>↗</span>
            </button>

            <button className="client-category-card">
              <span className="category-icon">♡</span>
              <strong>Babysitting</strong>
              <span>↗</span>
            </button>

            <button className="client-category-card">
              <span className="category-icon">✧</span>
              <strong>Limpezas</strong>
              <span>↗</span>
            </button>

            <button className="client-category-card">
              <span className="category-icon">⌁</span>
              <strong>Canalização</strong>
              <span>↗</span>
            </button>

          </div>

        </section>


        <section className="client-request">

          <div>
            <span className="section-label">NÃO ENCONTRAS O QUE PROCURAS?</span>

            <h2>
              Publica um pedido.
              <br />
              <em>Deixa os profissionais vir até ti.</em>
            </h2>

            <p>
              Explica o que precisas e deixa que profissionais
              interessados entrem em contacto contigo.
            </p>

            <button className="light-button">
              Publicar um pedido <span>→</span>
            </button>
          </div>

        </section>

      </main>

    </div>
  );
}

export default Client;