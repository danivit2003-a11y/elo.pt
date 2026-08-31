import { useState } from 'react';
import BackButton from './components/BackButton';
import './ContactProfessional.css';

function Contact() {
  const params = new URLSearchParams(window.location.search);

  const professionalName = params.get('name') || 'João Silva';
  const professionalService =
    params.get('service') || 'Eletricista';
  const professionalLocation =
    params.get('location') || 'Lisboa';

  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newMessage = {
      id: Date.now().toString(),
      professional: professionalName,
      service: professionalService,
      message,
      createdAt: new Date().toISOString(),
      status: 'enviada',
    };

    const existingMessages =
      localStorage.getItem('elo-messages');

    let messages = [];

    try {
      messages = existingMessages
        ? JSON.parse(existingMessages)
        : [];
    } catch {
      messages = [];
    }

    localStorage.setItem(
      'elo-messages',
      JSON.stringify([
        ...messages,
        newMessage,
      ])
    );

    setSent(true);
  }

  if (sent) {
    return (
      <div className="contact-page">

        <header className="contact-header">
          <div className="contact-header-left">
            <BackButton />

            <a href="/client-home" className="contact-logo">
              ELO<span>.</span>
            </a>
          </div>
        </header>

        <main className="contact-success">

          <div className="contact-success-icon">
            ✓
          </div>

          <span className="contact-label">
            MENSAGEM ENVIADA
          </span>

          <h1>
            A tua mensagem
            <br />
            <em>foi enviada.</em>
          </h1>

          <p>
            A tua mensagem foi enviada para o profissional.
            Poderás acompanhar o contacto na tua área de cliente.
          </p>

          <div className="contact-success-professional">
            <span>PROFISSIONAL</span>

            <strong>
              {professionalName}
            </strong>

            <small>
              {professionalService} · {professionalLocation}
            </small>
          </div>

          <div className="contact-success-actions">

            <a
              href="/client-home"
              className="contact-primary-button"
            >
              Voltar à área de cliente
              <span>→</span>
            </a>

            <a
              href="/search"
              className="contact-secondary-button"
            >
              Procurar outro profissional
            </a>

          </div>

        </main>

      </div>
    );
  }

  return (
    <div className="contact-page">

      {/* HEADER */}

      <header className="contact-header">

        <div className="contact-header-left">

          <BackButton />

          <a
            href="/client-home"
            className="contact-logo"
          >
            ELO<span>.</span>
          </a>

        </div>

        <a
          href="/search"
          className="contact-header-link"
        >
          Procurar serviços
        </a>

      </header>


      {/* MAIN */}

      <main className="contact-main">

        <div className="contact-heading">

          <span className="contact-label">
            CONTACTAR PROFISSIONAL
          </span>

          <h1>
            Fala diretamente
            <br />
            <em>com o profissional.</em>
          </h1>

          <p>
            Envia uma mensagem ao profissional para esclarecer
            dúvidas, combinar detalhes ou perceber se pode ajudar.
          </p>

        </div>


        <div className="contact-layout">

          {/* FORM */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="contact-form-section">

              <span className="contact-section-label">
                MENSAGEM
              </span>

              <div className="contact-field">

                <label>
                  A tua mensagem
                </label>

                <textarea
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  placeholder="Escreve aqui a tua mensagem..."
                  rows={8}
                  required
                />

              </div>

            </div>


            <button
              type="submit"
              className="send-contact-button"
            >
              Enviar mensagem
              <span>→</span>
            </button>

          </form>


          {/* SIDEBAR */}

          <aside className="contact-sidebar">

            <div className="contact-professional-card">

              <span className="contact-section-label">
                PROFISSIONAL
              </span>

              <div className="contact-professional-avatar">
                {professionalName
                  .charAt(0)
                  .toUpperCase()}
              </div>

              <h2>
                {professionalName}
              </h2>

              <p>
                {professionalService}
              </p>

              <div className="contact-professional-details">

                <span>
                  ⌖ {professionalLocation}
                </span>

              </div>

              <div className="contact-note">

                <span>
                  ✓
                </span>

                <p>
                  Estás a contactar diretamente este
                  profissional através da ELO.
                </p>

              </div>

            </div>


            <div className="contact-info-card">

              <span className="contact-section-label">
                COMO FUNCIONA
              </span>

              <div className="contact-info-step">

                <strong>
                  01
                </strong>

                <div>
                  <h3>
                    Envia a mensagem
                  </h3>

                  <p>
                    Explica ao profissional o que precisas.
                  </p>
                </div>

              </div>


              <div className="contact-info-step">

                <strong>
                  02
                </strong>

                <div>
                  <h3>
                    Recebe uma resposta
                  </h3>

                  <p>
                    O profissional poderá responder-te.
                  </p>
                </div>

              </div>


              <div className="contact-info-step">

                <strong>
                  03
                </strong>

                <div>
                  <h3>
                    Combina os detalhes
                  </h3>

                  <p>
                    Fala diretamente com o profissional.
                  </p>
                </div>

              </div>

            </div>

          </aside>

        </div>

      </main>

    </div>
  );
}

export default Contact;