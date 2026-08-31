import BackButton from './components/BackButton';
import './HelpContact.css';

function HelpContact() {
  return (
    <div className="help-contact-page">

      {/* NAVBAR */}
      <header className="help-contact-navbar">

        <div className="help-contact-navbar-left">

          <BackButton />

          <a
            href="/"
            className="help-contact-logo"
          >
            ELO<span>.</span>
          </a>

        </div>

        <nav className="help-contact-nav">

          <a href="/client-home">
            Início
          </a>

          <a href="/search">
            Procurar serviços
          </a>

          <a href="/favorites">
            Favoritos
          </a>

          <a href="/help">
            Centro de ajuda
          </a>

        </nav>

        <div className="help-contact-actions">

          <a
            href="/login"
            className="help-contact-login"
          >
            Entrar
          </a>

          <a
            href="/register"
            className="help-contact-register"
          >
            Criar conta
          </a>

        </div>

      </header>

      {/* HERO */}
      <main>

        <section className="help-contact-hero">

          <div className="help-contact-hero-inner">

            <span className="help-contact-label">
              CONTACTOS
            </span>

            <h1>
              Estamos aqui
              <br />
              <em>para te ouvir.</em>
            </h1>

            <p>
              Tens uma dúvida, sugestão ou precisas de ajuda?
              <br />
              Entra em contacto connosco.
            </p>

          </div>

        </section>

        {/* CONTACT CONTENT */}
        <section className="help-contact-content">

          <div className="help-contact-info">

            <span className="help-contact-small-label">
              FALA CONNOSCO
            </span>

            <h2>
              Como podemos
              <br />
              <em>ajudar?</em>
            </h2>

            <p>
              Estamos disponíveis para esclarecer dúvidas,
              receber sugestões e ajudar-te com qualquer
              questão relacionada com a ELO.
            </p>

            <div className="help-contact-methods">

              <div className="help-contact-method">

                <span className="help-contact-method-icon">
                  @
                </span>

                <div>
  <span className="help-contact-method-label">
    EMAIL
  </span>

  <a
    href="#contact-form"
    className="help-contact-email-link"
  >
    <strong>
      Envia-nos uma mensagem
    </strong>

    <p>
      Respondemos assim que possível.
    </p>
  </a>
</div>

              </div>

              <div className="help-contact-method">

                <span className="help-contact-method-icon">
                  ?
                </span>

                <div>
                  <span className="help-contact-method-label">
                    CENTRO DE AJUDA
                  </span>

                  <strong>
                    Consulta as perguntas frequentes
                  </strong>

                  <p>
                    Talvez já tenhamos a resposta que procuras.
                  </p>

                  <a href="/help">
                    Ver Centro de Ajuda <span>→</span>
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* FORM */}
          <div className="help-contact-form-card">

            <div className="help-contact-form-header">

              <span>
                CONTACTA A ELO
              </span>

              <h3>
                Envia-nos uma
                <br />
                <em>mensagem.</em>
              </h3>

            </div>

            <form id="contact-form">

              <div className="help-contact-form-row">

                <div className="help-contact-field">

                  <label>
                    Nome
                  </label>

                  <input
                    type="text"
                    placeholder="O teu nome"
                  />

                </div>

                <div className="help-contact-field">

                  <label>
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="O teu email"
                  />

                </div>

              </div>

              <div className="help-contact-field">

                <label>
                  Assunto
                </label>

                <input
                  type="text"
                  placeholder="Como podemos ajudar?"
                />

              </div>

              <div className="help-contact-field">

                <label>
                  Mensagem
                </label>

                <textarea
                  placeholder="Escreve aqui a tua mensagem..."
                  rows={6}
                />

              </div>

              <button
                type="submit"
                className="help-contact-submit"
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                Enviar mensagem
                <span>→</span>
              </button>

            </form>

          </div>

        </section>

        {/* BOTTOM CTA */}
        <section className="help-contact-bottom">

          <span className="help-contact-bottom-number">
            01
          </span>

          <div>

            <span className="help-contact-small-label">
              ANTES DE NOS CONTACTARES
            </span>

            <h2>
              Talvez a resposta
              <br />
              <em>já esteja aqui.</em>
            </h2>

            <p>
              Consulta o Centro de Ajuda e encontra
              respostas rápidas às perguntas mais frequentes.
            </p>

            <a
              href="/help"
              className="help-contact-bottom-button"
            >
              Ir para o Centro de Ajuda
              <span>→</span>
            </a>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="help-contact-footer">

        <div className="help-contact-footer-top">

          <div className="help-contact-footer-brand">

            <a
              href="/"
              className="help-contact-logo"
            >
              ELO<span>.</span>
            </a>

            <p>
              Ligamos pessoas.
              <br />
              Resolvemos necessidades.
            </p>

          </div>

          <div className="help-contact-footer-links">

            <div>

              <strong>
                Plataforma
              </strong>

              <a href="/search">
                Procurar serviços
              </a>

              <a href="/#categorias">
                Categorias
              </a>

              <a href="/#como-funciona">
                Como funciona
              </a>

              <a href="/#profissionais">
                Para profissionais
              </a>

            </div>

            <div>

              <strong>
                Ajuda
              </strong>

              <a href="/help">
                Centro de ajuda
              </a>

              <a href="/help-contact">
                Contactos
              </a>

              <a href="/help">
                Segurança
              </a>

            </div>

            <div>

              <strong>
                Legal
              </strong>

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

        <div className="help-contact-footer-bottom">

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

export default HelpContact;