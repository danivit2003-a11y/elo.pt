import BackButton from './components/BackButton';
import { useState } from 'react';
import './ClientHome.css';
function ClientHome() {
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');

const currentUserId = localStorage.getItem('elo-current-user');
const savedUsers = localStorage.getItem('elo-users');

let userName = 'Cliente';

if (currentUserId && savedUsers) {
  try {
    const users = JSON.parse(savedUsers);

    if (Array.isArray(users)) {
      const currentUser = users.find(
        (user: any) => user.id === currentUserId
      );

      if (currentUser?.name) {
        userName = currentUser.name;
      }
    }
  } catch {
    userName = 'Cliente';
  }
}

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (service.trim()) {
      params.set('service', service.trim());
    }

    if (location.trim()) {
      params.set('location', location.trim());
    }

    window.location.href = `/search-results?${params.toString()}`;
  };

  return (
    <div className="client-page">

      {/* NAVBAR */}
      <header className="client-navbar">
  <BackButton />

  <a href="/" className="client-logo">
          ELO<span>.</span>
        </a>

        <nav className="client-nav">
          <a href="/client-home" className="active">Início</a>
          <a href="/search">Procurar serviços</a>
          <a href="/requests">Os meus pedidos</a>
          <a href="/favorites">Favoritos</a>
        </nav>

        <div className="client-actions">

  <button
    className="notification-button"
    onClick={() => {
      window.location.href = '/favorites';
    }}
  >
    ♡
  </button>

  <button
    className="profile-button"
    onClick={() => {
      window.location.href = '/client';
    }}
  >
    {userName.charAt(0).toUpperCase()}
  </button>

</div>
      </header>


      {/* CONTEÚDO */}
      <main className="client-main">

        <section className="client-welcome">

          <div>
            <span className="client-label">ÁREA DO CLIENTE</span>

            <h1>
  Olá, {userName}.
  <br />
  <em>O que precisas?</em>
</h1>

            <p>
              Encontra profissionais de confiança para aquilo
              de que precisas.
            </p>
          </div>

        </section>


        {/* PESQUISA */}
        <section className="client-search-section">

          <div className="client-search-box">

            <div className="client-search-field">
              <span>⌕</span>

              <div>
                <label>O que procuras?</label>
                <input
  type="text"
  placeholder="Ex.: eletricista, explicações..."
  value={service}
  onChange={(e) => setService(e.target.value)}
/>
              </div>
            </div>

            <div className="client-search-divider"></div>

            <div className="client-search-field">
              <span>⌖</span>

              <div>
                <label>Onde?</label>
                <input
  type="text"
  placeholder="Distrito ou cidade"
  value={location}
  onChange={(e) => setLocation(e.target.value)}
/>
              </div>
            </div>

            <button onClick={handleSearch}>
  Procurar
  <span>→</span>
</button>

          </div>

        </section>


        {/* CATEGORIAS */}
        <section className="client-section">

          <div className="client-section-heading">
            <div>
              <span className="client-section-label">
                EXPLORA
              </span>

              <h2>
                O que precisas
                <br />
                <em>de encontrar?</em>
              </h2>
            </div>

            <a href="/search">
              Ver todas →
            </a>
          </div>


          <div className="client-categories">

            <button>
              <span>▱</span>
              <strong>Explicações</strong>
              <small>Estudo e aprendizagem</small>
              <b>↗</b>
            </button>

            <button>
              <span>♡</span>
              <strong>Babysitting</strong>
              <small>Crianças e famílias</small>
              <b>↗</b>
            </button>

            <button>
              <span>✧</span>
              <strong>Limpezas</strong>
              <small>Casa e espaços</small>
              <b>↗</b>
            </button>

            <button>
              <span>⌁</span>
              <strong>Canalização</strong>
              <small>Reparações e manutenção</small>
              <b>↗</b>
            </button>

            <button>
              <span>⌁</span>
              <strong>Eletricidade</strong>
              <small>Instalações e reparações</small>
              <b>↗</b>
            </button>

            <button>
              <span>✦</span>
              <strong>Beleza</strong>
              <small>Cuidados pessoais</small>
              <b>↗</b>
            </button>

          </div>

        </section>


        {/* PEDIDO */}
        <section className="client-request">

          <div>
            <span className="client-section-label">
              NÃO ENCONTRAS O QUE PROCURAS?
            </span>

            <h2>
              Publica um pedido.
              <br />
              <em>Deixa os profissionais vir até ti.</em>
            </h2>

            <p>
              Explica o que precisas e encontra profissionais
              interessados em ajudar.
            </p>

            <button>
              Publicar um pedido <span>→</span>
            </button>
          </div>

          <div className="client-request-number">
            01
          </div>

        </section>


        {/* PROFISSIONAIS */}
        <section className="client-section recommended-section">

          <div className="client-section-heading">

            <div>
              <span className="client-section-label">
                PARA TI
              </span>

              <h2>
                Profissionais
                <br />
                <em>perto de ti.</em>
              </h2>
            </div>

            <a href="/search">
              Explorar →
            </a>

          </div>


          <div className="professional-preview">

            <div className="professional-card">
              <div className="professional-avatar">M</div>

              <div className="professional-info">
                <div className="professional-name">
                  Profissional verificado
                  <span>✓</span>
                </div>

                <p>Explicações · Matemática</p>

                <div className="professional-rating">
                  ★ 4.9
                  <small> · 32 avaliações</small>
                </div>
              </div>

              <strong>12€/h</strong>
            </div>


            <div className="professional-card">
              <div className="professional-avatar">A</div>

              <div className="professional-info">
                <div className="professional-name">
                  Profissional verificado
                  <span>✓</span>
                </div>

                <p>Limpezas domésticas</p>

                <div className="professional-rating">
                  ★ 4.8
                  <small> · 24 avaliações</small>
                </div>
              </div>

              <strong>10€/h</strong>
            </div>


            <div className="professional-card">
              <div className="professional-avatar">R</div>

              <div className="professional-info">
                <div className="professional-name">
                  Profissional verificado
                  <span>✓</span>
                </div>

                <p>Eletricidade</p>

                <div className="professional-rating">
                  ★ 5.0
                  <small> · 18 avaliações</small>
                </div>
              </div>

              <strong>15€/h</strong>
            </div>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="client-footer">

        <div>
          <a href="/" className="client-logo">
            ELO<span>.</span>
          </a>

          <p>
            Ligamos pessoas.
            <br />
            Resolvemos necessidades.
          </p>
        </div>

        <span>
          © 2026 ELO. Todos os direitos reservados.
        </span>

      </footer>

    </div>
  );
}

export default ClientHome;