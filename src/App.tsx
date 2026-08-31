import { useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import ChooseRole from './pages/ChooseRole';
import Client from './pages/Client';
import Professional from './pages/Professional';
import ClientHome from './pages/ClientHome';
import SearchServices from './pages/SearchServices';
import SearchResults from './pages/SearchResults';
import ProfessionalProfile from './pages/ProfessionalProfile';
import ProfessionalDashboard from './pages/ProfessionalDashboard';
import CreateProfessionalProfile from './pages/CreateProfessionalProfile';
import PublicProfessionalProfile from './pages/PublicProfessionalProfile';
import ServiceRequestPage from './pages/ServiceRequestPage';
import ContactProfessional from './pages/ContactProfessional';
import Favorites from './pages/Favorites';
import Help from './pages/Help';
import HelpContact from './pages/HelpContact';

const categories = [
  { name: 'Explicações', icon: '▱' },
  { name: 'Babysitting', icon: '♡' },
  { name: 'Limpezas', icon: '✧' },
  { name: 'Canalização', icon: '⌁' },
  { name: 'Eletricidade', icon: '⌁' },
  { name: 'Jardinagem', icon: '⌁' },
  { name: 'Informática', icon: '⌘' },
  { name: 'Mudanças', icon: '□' },
  { name: 'Reparações', icon: '⌕' },
  { name: 'Animais', icon: '♡' },
  { name: 'Beleza', icon: '✦' },
  { name: 'Fotografia', icon: '○' },
];

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const path = window.location.pathname;

  if (path === '/login') {
    return <Login />;
  }

  if (path === '/register') {
    return <Register />;
  }

  if (path === '/choose-role') {
    return <ChooseRole />;
  }

  if (path === '/client') {
    return <Client />;
  }

  if (path === '/professional') {
    return <Professional />;
  }

  if (path === '/professional-dashboard') {
    return <ProfessionalDashboard />;
  }

  if (path === '/client-home') {
    return <ClientHome />;
  }

  if (path === '/search') {
    return <SearchServices />;
  }

  if (path === '/search-results') {
    return <SearchResults />;
  }

  if (path === '/professional-profile') {
    return <ProfessionalProfile />;
  }

  if (path === '/create-professional-profile') {
    return <CreateProfessionalProfile />;
  }

  if (path === '/public-professional-profile') {
    return <PublicProfessionalProfile />;
  }

  if (path === '/service-request') {
    return <ServiceRequestPage />;
  }
  
  if (path === '/contact') {
    return <ContactProfessional />;
  }

  if (path === '/favorites') {
    return <Favorites />;
  }
  
  if (path === '/help') {
    return <Help />;
  }

  if (path === '/help-contact') {
    return <HelpContact />;
  }

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">

          <a className="logo" href="/">
            ELO<span>.</span>
          </a>

          <nav className={`nav-links ${mobileMenu ? 'open' : ''}`}>

            <a
              href="#servicos"
              onClick={() => setMobileMenu(false)}
            >
              Procurar serviços
            </a>

            <a
              href="#categorias"
              onClick={() => setMobileMenu(false)}
            >
              Categorias
            </a>

            <a
              href="#como-funciona"
              onClick={() => setMobileMenu(false)}
            >
              Como funciona
            </a>

            <a
              href="#profissionais"
              onClick={() => setMobileMenu(false)}
            >
              Para profissionais
            </a>

            <div className="mobile-nav-actions">

              <button
                className="login-button"
                onClick={() => {
                  window.location.href = '/login';
                }}
              >
                Entrar
              </button>

              <button
                className="primary-button"
                onClick={() => {
                  window.location.href = '/register';
                }}
              >
                Criar conta
              </button>

            </div>

          </nav>

          <div className="nav-actions">

            <button
              className="login-button"
              onClick={() => {
                window.location.href = '/login';
              }}
            >
              Entrar
            </button>

            <button
              className="primary-button"
              onClick={() => {
                window.location.href = '/register';
              }}
            >
              Criar conta
            </button>

          </div>

          <button
            className="menu-button"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Abrir menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </header>

      {/* HERO */}
      <main>

        <section className="hero">
          <div className="hero-container">

            <div className="hero-content">

              <div className="eyebrow">
                <span className="eyebrow-dot"></span>
                Serviços perto de ti
              </div>

              <h1>
                Encontra
                <br />
                <em>quem precisas.</em>
              </h1>

              <p className="hero-subtitle">
                Encontra profissionais de confiança para tudo o que
                precisas, perto de ti ou online.
              </p>

              <div className="search-box">

                <div className="search-field">
                  <span className="search-icon">⌕</span>

                  <div>
                    <label>O que precisas?</label>

                    <input
                      type="text"
                      placeholder="Ex.: explicações, babysitter..."
                    />
                  </div>
                </div>

                <div className="search-divider"></div>

                <div className="search-field location-field">
                  <span className="location-icon">⌖</span>

                  <div>
                    <label>Onde?</label>

                    <input
                      type="text"
                      placeholder="Localização"
                    />
                  </div>
                </div>

                <button
                  className="search-button"
                  onClick={() => {
                    window.location.href = '/search';
                  }}
                >
                  Encontrar
                  <span>→</span>
                </button>

              </div>

              <div className="hero-professional">

                <span>
                  Tens um serviço para oferecer?
                </span>

                <button
                  onClick={() => {
                    window.location.href = '/choose-role';
                  }}
                >
                  Quero ser profissional <span>↗</span>
                </button>

              </div>

            </div>

            <div className="hero-visual">

              <div className="hero-card main-card">

                <div className="card-top">
                  <span className="verified">
                    ✓ Verificado
                  </span>

                  <span className="heart">
                    ♡
                  </span>
                </div>

                <div className="profile-placeholder">
                  <div className="profile-head"></div>
                  <div className="profile-body"></div>
                </div>

                <div className="profile-info">

                  <h3>
                    Profissional de confiança
                  </h3>

                  <p>
                    Disponível perto de ti
                  </p>

                  <div className="profile-rating">
                    <span>★</span> 4.9
                    <small>
                      {' '}· 32 avaliações
                    </small>
                  </div>

                </div>

                <div className="card-service">
                  <span>Explicações</span>
                  <strong>Desde 12€/h</strong>
                </div>

              </div>

              <div className="floating-card floating-rating">

                <div className="floating-icon">
                  ★
                </div>

                <div>
                  <strong>4.9/5</strong>
                  <span>Avaliações</span>
                </div>

              </div>

              <div className="floating-card floating-location">

                <div className="location-pin">
                  ⌖
                </div>

                <div>
                  <strong>Perto de ti</strong>
                  <span>Profissionais locais</span>
                </div>

              </div>

              <div className="hero-shape"></div>

            </div>

          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="trust-strip">

          <div className="trust-container">

            <span>
              UMA FORMA MAIS SIMPLES DE ENCONTRAR SERVIÇOS
            </span>

            <div className="trust-items">
              <span>✓ Perfis verificados</span>
              <span>✓ Avaliações reais</span>
              <span>✓ Contacto direto</span>
              <span>✓ Sem créditos</span>
            </div>

          </div>

        </section>

        {/* CATEGORIES */}
        <section
          className="section categories-section"
          id="categorias"
        >

          <div className="section-container">

            <div className="section-heading">

              <div>

                <span className="section-label">
                  CATEGORIAS
                </span>

                <h2>
                  Que serviço
                  <br />
                  <em>procuras?</em>
                </h2>

              </div>

              <a
                href="#servicos"
                className="view-all"
              >
                Ver todas <span>→</span>
              </a>

            </div>

            <div className="categories-grid">

              {categories.map((category) => (
                <button
                  className="category-card"
                  key={category.name}
                  onClick={() => {
                    window.location.href = '/search';
                  }}
                >
                  <span className="category-icon">
                    {category.icon}
                  </span>

                  <span>
                    {category.name}
                  </span>

                  <span className="category-arrow">
                    ↗
                  </span>
                </button>
              ))}

            </div>

          </div>

        </section>

        {/* HOW IT WORKS */}
        <section
          className="section how-section"
          id="como-funciona"
        >

          <div className="section-container">

            <div className="section-heading centered">

              <span className="section-label">
                COMO FUNCIONA
              </span>

              <h2>
                Simples <em>para todos.</em>
              </h2>

              <p>
                Uma plataforma pensada para tornar a procura e oferta
                de serviços muito mais simples.
              </p>

            </div>

            <div className="how-grid">

              <div className="how-column">

                <div className="how-header">

                  <div className="how-number">
                    01
                  </div>

                  <h3>
                    Para clientes
                  </h3>

                </div>

                <div className="step">
                  <span>01</span>

                  <div>
                    <h4>Pesquisa</h4>
                    <p>
                      Encontra o serviço de que precisas.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <span>02</span>

                  <div>
                    <h4>Compara</h4>
                    <p>
                      Consulta perfis, preços e avaliações.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <span>03</span>

                  <div>
                    <h4>Contacta</h4>
                    <p>
                      Fala diretamente com profissionais.
                    </p>
                  </div>
                </div>

              </div>

              <div className="how-column professional-column">

                <div className="how-header">

                  <div className="how-number">
                    02
                  </div>

                  <h3>
                    Para profissionais
                  </h3>

                </div>

                <div className="step">
                  <span>01</span>

                  <div>
                    <h4>Cria o teu perfil</h4>
                    <p>
                      Mostra os serviços que ofereces.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <span>02</span>

                  <div>
                    <h4>Encontra clientes</h4>
                    <p>
                      Recebe pedidos compatíveis contigo.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <span>03</span>

                  <div>
                    <h4>Começa a trabalhar</h4>
                    <p>
                      Sem créditos e sem comissões.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* SUBSCRIPTION */}
        <section
          className="subscription-section"
          id="profissionais"
        >

          <div className="subscription-container">

            <div className="subscription-copy">

              <span className="section-label">
                SUBSCRIÇÃO ELO
              </span>

              <h2>
                Uma mensalidade.
                <br />
                <em>Acesso completo.</em>
              </h2>

              <p>
                Sem créditos. Sem comissões. Sem complicações.
                Uma única subscrição para utilizar a ELO.
              </p>

              <div className="price">
                <strong>7,99€</strong>
                <span>/ mês</span>
              </div>

              <button
                className="light-button"
                onClick={() => {
                  window.location.href = '/register';
                }}
              >
                Começar por 7,99€ <span>→</span>
              </button>

            </div>

            <div className="subscription-card">

              <div className="subscription-card-header">
                <span>ELO</span>
                <span>7,99€ / mês</span>
              </div>

              <div className="subscription-divider"></div>

              <h3>Para todos.</h3>

              <div className="benefit-group">

                <span className="benefit-title">
                  CLIENTES
                </span>

                <p>✓ Pesquisa ilimitada</p>
                <p>✓ Contacto direto</p>
                <p>✓ Publicação de pedidos</p>
                <p>✓ Mensagens e favoritos</p>

              </div>

              <div className="benefit-group">

                <span className="benefit-title">
                  PROFISSIONAIS
                </span>

                <p>✓ Perfil profissional</p>
                <p>✓ Pedidos de clientes</p>
                <p>✓ Respostas ilimitadas</p>
                <p>✓ Portefólio e avaliações</p>

              </div>

            </div>

          </div>

        </section>

        {/* FINAL CTA */}
        <section className="final-cta">

          <div>

            <span className="section-label">
              ELO
            </span>

            <h2>
              Há sempre alguém
              <br />
              <em>que pode ajudar.</em>
            </h2>

            <p>
              Ligamos pessoas. Resolvemos necessidades.
            </p>

            <button
              className="primary-button large"
              onClick={() => {
                window.location.href = '/register';
              }}
            >
              Criar conta <span>→</span>
            </button>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand">

            <a
              className="logo"
              href="/"
            >
              ELO<span>.</span>
            </a>

            <p>
              Ligamos pessoas.
              <br />
              Resolvemos necessidades.
            </p>

          </div>

          <div className="footer-links">

            <div>

              <strong>Plataforma</strong>

              <a href="#">
                Procurar serviços
              </a>

              <a href="#categorias">
                Categorias
              </a>

              <a href="#como-funciona">
                Como funciona
              </a>

              <a href="#profissionais">
                Para profissionais
              </a>

            </div>

            <div>

              <strong>Ajuda</strong>

              <a href="/help">
  Centro de ajuda
</a>

<a href="/help-contact">
  Contactos
</a>

              <a href="#">
                Segurança
              </a>

            </div>

            <div>

              <strong>Legal</strong>

              <a href="#">
                Termos
              </a>

              <a href="#">
                Privacidade
              </a>

              <a href="#">
                Cookies
              </a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 ELO. Todos os direitos reservados.
          </span>

          <span>
            Feito para aproximar pessoas.
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;