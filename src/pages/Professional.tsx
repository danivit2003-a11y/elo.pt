import { useEffect, useState } from 'react';
import BackButton from './components/BackButton';

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'client' | 'professional' | null;
};

function Professional() {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {

    const currentUserId =
      localStorage.getItem('elo-current-user');

    const savedUsers =
      localStorage.getItem('elo-users');

    if (!currentUserId || !savedUsers) {
      window.location.href = '/login';
      return;
    }

    try {

      const users = JSON.parse(savedUsers);

      if (!Array.isArray(users)) {
        window.location.href = '/login';
        return;
      }

      const currentUser = users.find(
        (user: User) =>
          user.id === currentUserId
      );

      if (!currentUser) {
        window.location.href = '/login';
        return;
      }

      if (currentUser.role !== 'professional') {
        window.location.href = '/client-home';
        return;
      }

      setUser(currentUser);

    } catch {

      window.location.href = '/login';

    }

  }, []);


  if (!user) {
    return null;
  }


  const initial =
    user.name
      ? user.name.charAt(0).toUpperCase()
      : 'P';


  return (
    <div className="professional-page">

      <header className="dashboard-navbar">

        <div className="dashboard-navbar-left">

          <BackButton />

          <a
            href="/"
            className="auth-logo"
          >
            ELO<span>.</span>
          </a>

        </div>


        <nav className="dashboard-nav">

          <a href="/professional">
            Dashboard
          </a>

          <a href="/professional">
            Pedidos
          </a>

          <a href="/public-professional-profile">
            O meu perfil
          </a>

        </nav>


        <div className="dashboard-actions">

          <button className="dashboard-icon-button">
            ♡
          </button>

          <button className="dashboard-profile-button">
            {initial}
          </button>

        </div>

      </header>


      <main className="professional-main">

        <section className="professional-hero">

          <div className="professional-welcome">

            <span className="section-label">
              ÁREA DO PROFISSIONAL
            </span>

            <h1>
              Olá, {user.name}.
              <br />
              <em>As tuas oportunidades.</em>
            </h1>

            <p>
              Mostra o que sabes fazer, encontra novos clientes
              e gere os teus serviços num só lugar.
            </p>

            <button
              className="primary-button large"
              onClick={() => {
                window.location.href =
                  '/create-professional-profile';
              }}
            >
              Criar o meu perfil
              <span>→</span>
            </button>

          </div>


          <div className="professional-status-card">

            <div className="status-card-top">

              <span>
                O TEU PERFIL
              </span>

              <span className="status-dot"></span>

            </div>


            <div className="status-icon">
              ✦
            </div>


            <h3>
              Ainda não tens
              <br />
              um perfil profissional.
            </h3>


            <p>
              Cria o teu perfil para começares
              a aparecer para potenciais clientes.
            </p>


            <div className="status-progress">
              <span></span>
            </div>


            <small>
              0% completo
            </small>

          </div>

        </section>


        <section className="professional-opportunities">

          <div className="section-heading">

            <div>

              <span className="section-label">
                OPORTUNIDADES
              </span>

              <h2>
                Pedidos perto de <em>ti.</em>
              </h2>

            </div>


            <a
              href="/"
              className="view-all"
            >
              Ver todos <span>→</span>
            </a>

          </div>


          <div className="request-grid">

            <div className="request-card">

              <div className="request-top">

                <span className="request-category">
                  EXPLICAÇÕES
                </span>

                <span>↗</span>

              </div>


              <h3>
                Procuro explicações
                <br />
                de Matemática
              </h3>


              <p>
                Aluno do 8.º ano procura apoio
                para preparação de testes.
              </p>


              <div className="request-bottom">

                <span>
                  📍 Nazaré
                </span>

                <strong>
                  12€/h
                </strong>

              </div>

            </div>


            <div className="request-card">

              <div className="request-top">

                <span className="request-category">
                  BABYSITTING
                </span>

                <span>↗</span>

              </div>


              <h3>
                Babysitter para
                <br />
                fim de semana
              </h3>


              <p>
                Procuro alguém responsável para
                tomar conta de duas crianças.
              </p>


              <div className="request-bottom">

                <span>
                  📍 Caldas da Rainha
                </span>

                <strong>
                  10€/h
                </strong>

              </div>

            </div>

          </div>

        </section>


        <section className="professional-benefits">

          <div>

            <span className="section-label">
              PORQUÊ A ELO?
            </span>

            <h2>
              Mais clientes.
              <br />
              <em>Menos complicações.</em>
            </h2>

          </div>


          <div className="benefits-list">

            <div className="professional-benefit">

              <span>01</span>

              <div>

                <h3>
                  Cria o teu perfil
                </h3>

                <p>
                  Mostra os teus serviços, experiência,
                  preços e portefólio.
                </p>

              </div>

            </div>


            <div className="professional-benefit">

              <span>02</span>

              <div>

                <h3>
                  Encontra clientes
                </h3>

                <p>
                  Descobre pedidos de pessoas que
                  procuram exatamente o que ofereces.
                </p>

              </div>

            </div>


            <div className="professional-benefit">

              <span>03</span>

              <div>

                <h3>
                  Começa a trabalhar
                </h3>

                <p>
                  Contacta diretamente com clientes
                  e combina todos os detalhes.
                </p>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Professional;