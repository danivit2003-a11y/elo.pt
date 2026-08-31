import { useEffect, useState, type FormEvent } from 'react';
import BackButton from './components/BackButton';
import './ServiceRequest.css';

type ProfessionalData = {
  name: string;
  service: string;
  location: string;
  category: string;
  price: string;
};

type ServiceRequestData = {
  id: string;
  professional: string;
  service: string;
  description: string;
  location: string;
  date: string;
  budget: string;
  createdAt: string;
  status: string;
};

function ServiceRequest() {

  const [professional, setProfessional] =
    useState<ProfessionalData | null>(null);

  const [service, setService] =
    useState('');

  const [description, setDescription] =
    useState('');

  const [location, setLocation] =
    useState('');

  const [date, setDate] =
    useState('');

  const [budget, setBudget] =
    useState('');

  const [submitted, setSubmitted] =
    useState(false);


  /*
   * CARREGAR PROFISSIONAL
   *
   * O profissional vem sempre através
   * dos parâmetros enviados pelo perfil.
   */

  useEffect(() => {

    const params =
      new URLSearchParams(
        window.location.search
      );


    const name =
      params.get('name');

    const serviceFromUrl =
      params.get('service');

    const locationFromUrl =
      params.get('location');

    const price =
      params.get('price');

    const category =
      params.get('category');


    if (!name) {
      return;
    }


    const selectedProfessional: ProfessionalData = {

      name,

      service:
        serviceFromUrl ||
        'Serviço profissional',

      location:
        locationFromUrl ||
        'Localização não definida',

      category:
        category || '',

      price:
        price || '',

    };


    setProfessional(
      selectedProfessional
    );


    setService(
      serviceFromUrl || ''
    );


    setLocation(
      locationFromUrl || ''
    );

  }, []);


  /*
   * ENVIAR PEDIDO
   */

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {

    event.preventDefault();


    if (!professional) {
      return;
    }


    const request: ServiceRequestData = {

      id:
        Date.now().toString(),

      professional:
        professional.name,

      service,

      description,

      location,

      date,

      budget,

      createdAt:
        new Date().toISOString(),

      status:
        'pendente',

    };


    const existingRequests =
      localStorage.getItem(
        'elo-service-requests'
      );


    let requests: ServiceRequestData[] = [];


    try {

      requests =
        existingRequests
          ? JSON.parse(existingRequests)
          : [];

      if (!Array.isArray(requests)) {
        requests = [];
      }

    } catch {

      requests = [];

    }


    localStorage.setItem(

      'elo-service-requests',

      JSON.stringify([
        ...requests,
        request,
      ])

    );


    setSubmitted(true);

  }


  /*
   * PEDIDO ENVIADO
   */

  if (submitted) {

    return (

      <div className="service-request-page">

        <header className="service-request-header">

          <div className="service-request-header-left">

            <BackButton />

            <a
              href="/client-home"
              className="service-request-logo"
            >
              ELO<span>.</span>
            </a>

          </div>

        </header>


        <main className="service-request-success">

          <div className="success-icon">
            ✓
          </div>


          <span className="service-request-label">
            PEDIDO ENVIADO
          </span>


          <h1>
            O teu pedido
            <br />
            <em>foi enviado.</em>
          </h1>


          <p>
            O teu pedido de serviço foi registado
            com sucesso. Poderás acompanhar o estado
            do pedido na tua área de cliente.
          </p>


          {professional && (

            <div className="success-professional">

              <span>
                PROFISSIONAL
              </span>

              <strong>
                {professional.name}
              </strong>

              <small>
                {professional.service}
              </small>

            </div>

          )}


          <div className="success-actions">

            <a
              href="/client-home"
              className="primary-request-button"
            >
              Voltar à área de cliente
              <span>→</span>
            </a>


            <a
              href="/search"
              className="secondary-request-button"
            >
              Procurar outro serviço
            </a>

          </div>

        </main>

      </div>

    );

  }


  /*
   * SE NÃO EXISTIR PROFISSIONAL
   */

  if (!professional) {

    return (

      <div className="service-request-page">

        <header className="service-request-header">

          <div className="service-request-header-left">

            <BackButton />

            <a
              href="/client-home"
              className="service-request-logo"
            >
              ELO<span>.</span>
            </a>

          </div>

        </header>


        <main className="service-request-success">

          <div className="success-icon">
            !
          </div>

          <span className="service-request-label">
            PROFISSIONAL
          </span>

          <h1>
            Escolhe primeiro
            <br />
            <em>um profissional.</em>
          </h1>

          <p>
            Para pedir um serviço precisas de selecionar
            o profissional que queres contactar.
          </p>


          <div className="success-actions">

            <a
              href="/search"
              className="primary-request-button"
            >
              Procurar profissionais
              <span>→</span>
            </a>

            <a
              href="/client-home"
              className="secondary-request-button"
            >
              Voltar à área de cliente
            </a>

          </div>

        </main>

      </div>

    );

  }


  /*
   * FORMULÁRIO
   */

  return (

    <div className="service-request-page">

      {/* HEADER */}

      <header className="service-request-header">

        <div className="service-request-header-left">

          <BackButton />

          <a
            href="/client-home"
            className="service-request-logo"
          >
            ELO<span>.</span>
          </a>

        </div>


        <a
          href="/search"
          className="request-header-link"
        >
          Procurar serviços
        </a>

      </header>


      {/* MAIN */}

      <main className="service-request-main">

        <div className="service-request-heading">

          <span className="service-request-label">
            PEDIR SERVIÇO
          </span>

          <h1>
            Conta-nos
            <br />
            <em>o que precisas.</em>
          </h1>

          <p>
            Envia os detalhes do serviço que procuras
            e entra em contacto com o profissional.
          </p>

        </div>


        <div className="service-request-layout">

          {/* FORM */}

          <form
            className="service-request-form"
            onSubmit={handleSubmit}
          >

            {/* SERVIÇO */}

            <div className="request-form-section">

              <span className="request-section-label">
                SERVIÇO
              </span>


              <div className="request-field">

                <label>
                  Que serviço precisas?
                </label>

                <input
                  type="text"
                  value={service}
                  onChange={(event) =>
                    setService(
                      event.target.value
                    )
                  }
                  placeholder="Ex.: explicações de matemática"
                  required
                />

              </div>


              <div className="request-field">

                <label>
                  Descreve o que precisas
                </label>

                <textarea
                  value={description}
                  onChange={(event) =>
                    setDescription(
                      event.target.value
                    )
                  }
                  placeholder="Explica brevemente o que precisas, o trabalho a realizar, dificuldades, etc."
                  rows={6}
                  required
                />

              </div>

            </div>


            {/* LOCAL E DATA */}

            <div className="request-form-section">

              <span className="request-section-label">
                LOCAL E DATA
              </span>


              <div className="request-fields-grid">

                <div className="request-field">

                  <label>
                    Localização
                  </label>

                  <input
                    type="text"
                    value={location}
                    onChange={(event) =>
                      setLocation(
                        event.target.value
                      )
                    }
                    placeholder="Ex.: Lisboa"
                    required
                  />

                </div>


                <div className="request-field">

                  <label>
                    Quando precisas?
                  </label>

                  <input
                    type="date"
                    value={date}
                    onChange={(event) =>
                      setDate(
                        event.target.value
                      )
                    }
                  />

                </div>

              </div>

            </div>


            {/* ORÇAMENTO */}

            <div className="request-form-section">

              <span className="request-section-label">
                ORÇAMENTO
              </span>


              <div className="request-field">

                <label>
                  Orçamento aproximado
                </label>


                <div className="budget-input">

                  <input
                    type="number"
                    min="0"
                    value={budget}
                    onChange={(event) =>
                      setBudget(
                        event.target.value
                      )
                    }
                    placeholder="Ex.: 50"
                  />

                  <span>
                    €
                  </span>

                </div>


                <small>
                  Podes deixar este campo vazio
                  se não souberes o valor.
                </small>

              </div>

            </div>


            <button
              type="submit"
              className="submit-request-button"
            >
              Enviar pedido
              <span>→</span>
            </button>

          </form>


          {/* SIDEBAR */}

          <aside className="request-sidebar">

            <div className="selected-professional-card">

              <span className="request-section-label">
                PROFISSIONAL
              </span>


              <div className="selected-professional-avatar">

                {professional.name
                  .charAt(0)
                  .toUpperCase()}

              </div>


              <h2>
                {professional.name}
              </h2>


              <p>
                {professional.service}
              </p>


              <div className="selected-professional-details">

                <span>
                  ⌖ {professional.location}
                </span>


                {professional.price && (

                  <span>
                    € {professional.price}/h
                  </span>

                )}

              </div>


              <div className="selected-professional-note">

                <span>
                  ✓
                </span>

                <p>
                  Estás a pedir este serviço
                  diretamente a este profissional.
                </p>

              </div>

            </div>


            {/* COMO FUNCIONA */}

            <div className="request-info-card">

              <span className="request-section-label">
                COMO FUNCIONA
              </span>


              <div className="request-info-step">

                <strong>
                  01
                </strong>

                <div>

                  <h3>
                    Envia o pedido
                  </h3>

                  <p>
                    Conta ao profissional o que precisas.
                  </p>

                </div>

              </div>


              <div className="request-info-step">

                <strong>
                  02
                </strong>

                <div>

                  <h3>
                    Recebe uma resposta
                  </h3>

                  <p>
                    O profissional poderá responder
                    ao teu pedido.
                  </p>

                </div>

              </div>


              <div className="request-info-step">

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

export default ServiceRequest;