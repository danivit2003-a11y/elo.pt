import './ProfessionalProfile.css';
import BackButton from './components/BackButton';

function ProfessionalProfile() {

  function contactProfessional() {
    const params = new URLSearchParams({
      name: 'João Silva',
      service: 'Eletricista',
      location: 'Lisboa',
      price: '20',
      category: 'eletricidade',
    });

    window.location.href = `/contact?${params.toString()}`;
  }

  function RequestService() {
    const params = new URLSearchParams({
      name: 'João Silva',
      service: 'Eletricista',
      location: 'Lisboa',
      price: '20',
      category: 'eletricidade',
    });

    window.location.href = `/service-request?${params.toString()}`;
  }

  return (
    <div className="professional-profile-page">

      {/* HEADER */}

      <header className="profile-header">

        <div className="profile-header-top">

          <BackButton />

          <a href="/" className="auth-logo">
            ELO<span>.</span>
          </a>

        </div>

      </header>


      {/* MAIN */}

      <main className="professional-profile-content">

        {/* CABEÇALHO DO PERFIL */}

        <section className="profile-intro">

          <div className="profile-avatar-large">
            J
          </div>

          <div className="profile-intro-info">

            <span className="profile-verified">
              ✓ PROFISSIONAL VERIFICADO
            </span>

            <h1>
              João Silva
            </h1>

            <p className="profile-service">
              Eletricista
            </p>

            <p className="profile-location">
              ⌖ Lisboa
            </p>

            <div className="profile-rating">

              <strong>
                ★ 4.9
              </strong>

              <span>
                · 27 avaliações
              </span>

            </div>

          </div>

          <button
            className="profile-favorite"
            type="button"
            aria-label="Adicionar aos favoritos"
          >
            ♡
          </button>

        </section>


        {/* CORPO */}

        <div className="profile-layout">

          <div className="profile-main">

            {/* SOBRE */}

            <section className="profile-section">

              <span className="profile-section-label">
                SOBRE
              </span>

              <h2>
                Experiência e confiança
                <br />
                <em>para o teu projeto.</em>
              </h2>

              <p>
                Sou profissional de eletricidade com experiência em
                instalações, reparações e manutenção. Trabalho com atenção
                ao detalhe e procuro garantir sempre um serviço seguro e
                de qualidade.
              </p>

            </section>


            {/* SERVIÇOS */}

            <section className="profile-section">

              <span className="profile-section-label">
                SERVIÇOS
              </span>

              <div className="profile-services">

                <div>
                  <strong>
                    Instalações elétricas
                  </strong>

                  <span>
                    Desde 20€/h
                  </span>
                </div>

                <div>
                  <strong>
                    Reparações
                  </strong>

                  <span>
                    Desde 20€/h
                  </span>
                </div>

                <div>
                  <strong>
                    Manutenção
                  </strong>

                  <span>
                    Desde 18€/h
                  </span>
                </div>

              </div>

            </section>


            {/* AVALIAÇÕES */}

            <section className="profile-section">

              <div className="profile-reviews-heading">

                <div>

                  <span className="profile-section-label">
                    AVALIAÇÕES
                  </span>

                  <h2>
                    O que dizem
                    <br />
                    <em>os clientes.</em>
                  </h2>

                </div>

                <strong>
                  ★ 4.9
                </strong>

              </div>


              <div className="review">

                <div className="review-top">

                  <strong>
                    Cliente verificado
                  </strong>

                  <span>
                    ★ 5.0
                  </span>

                </div>

                <p>
                  Excelente profissional. Muito pontual, cuidadoso e
                  resolveu o problema rapidamente.
                </p>

              </div>


              <div className="review">

                <div className="review-top">

                  <strong>
                    Cliente verificado
                  </strong>

                  <span>
                    ★ 5.0
                  </span>

                </div>

                <p>
                  Serviço impecável e muito profissional. Recomendo.
                </p>

              </div>

            </section>

          </div>


          {/* CARTÃO DE CONTACTO */}

          <aside className="profile-sidebar">

            <div className="contact-card">

              <span className="profile-section-label">
                CONTACTAR
              </span>

              <h3>
                Precisas deste
                <br />
                <em>serviço?</em>
              </h3>

              <div className="contact-price">

                <strong>
                  Desde 20€
                </strong>

                <span>
                  / hora
                </span>

              </div>


              {/* CONTACTAR */}

              <button
                className="contact-button"
                type="button"
                onClick={contactProfessional}
              >
                Contactar profissional
                <span>
                  →
                </span>
              </button>


              {/* PEDIR SERVIÇO */}

              <button
                className="request-service-button"
                type="button"
                onClick={RequestService}
              >
                Pedir serviço
                <span>
                  →
                </span>
              </button>


              <p>
                Podes contactar o profissional diretamente ou
                enviar um pedido de serviço com todos os detalhes.
              </p>

            </div>

          </aside>

        </div>

      </main>

    </div>
  );
}

export default ProfessionalProfile;