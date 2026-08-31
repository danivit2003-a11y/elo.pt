import './SearchResults.css';
import BackButton from './components/BackButton';

type Professional = {
  name: string;
  service: string;
  location: string;
  price: string;
  rating: string;
  reviews: string;
  verified: boolean;
};

function SearchResults() {

  const params =
    new URLSearchParams(
      window.location.search
    );


  const service =
    params.get('service') ||
    'serviço';


  const location =
    params.get('location') ||
    'a tua localização';


  const formattedService =
    service.charAt(0).toUpperCase() +
    service.slice(1);


  const professionals: Professional[] = [

    {
      name: 'João Silva',
      service: formattedService,
      location,
      price: '20',
      rating: '4.9',
      reviews: '27',
      verified: true,
    },

    {
      name: 'Pedro Santos',
      service: `${formattedService} residencial`,
      location,
      price: '18',
      rating: '4.8',
      reviews: '19',
      verified: true,
    },

    {
      name: 'Rui Martins',
      service: formattedService,
      location,
      price: '22',
      rating: '5.0',
      reviews: '34',
      verified: true,
    },

  ];


  function openProfessionalProfile(
    professional: Professional
  ) {

    /*
     * Neste momento o perfil detalhado
     * continua a ser a página de demonstração
     * do João.
     *
     * Os dados são passados para que a página
     * seguinte saiba quem foi selecionado.
     */

    const profileParams =
      new URLSearchParams({

        name:
          professional.name,

        service:
          professional.service,

        location:
          professional.location,

        price:
          professional.price,

        category:
          'eletricidade',

      });


    window.location.href =
      `/professional-profile?${profileParams.toString()}`;

  }


  return (

    <div className="search-results-page">

      {/* HEADER */}

      <header className="results-header">

        <div className="results-header-top">

          <BackButton />

          <a
            href="/"
            className="auth-logo"
          >
            ELO<span>.</span>
          </a>

        </div>


        <div className="results-heading">

          <span className="auth-label">
            RESULTADOS
          </span>

          <h1>
            Profissionais para <em>ti.</em>
          </h1>

          <p>
            Encontrámos profissionais que podem ajudar.
          </p>

        </div>

      </header>


      {/* MAIN */}

      <main className="results-content">

        {/* SEARCH */}

        <div className="results-search">

          <div>

            <span>
              O QUE PROCURAS?
            </span>

            <strong>
              {formattedService}
            </strong>

          </div>


          <div>

            <span>
              ONDE?
            </span>

            <strong>
              {location}
            </strong>

          </div>


          <button
            type="button"
            onClick={() =>
              window.location.href =
                '/search'
            }
          >
            Procurar
            <span>→</span>
          </button>

        </div>


        {/* TOP */}

        <div className="results-top">

          <div>

            <span className="results-count">
              12 profissionais encontrados
            </span>

            <h2>
              {formattedService} em{' '}
              <em>{location}</em>
            </h2>

          </div>


          <button
            type="button"
            className="filter-button"
          >
            Filtrar
            <span>☰</span>
          </button>

        </div>


        {/* PROFESSIONALS */}

        <div className="professionals-grid">

          {professionals.map(
            (professional) => (

              <article
                className="professional-card"
                key={professional.name}
              >

                <div className="professional-image">

                  <span>
                    {professional.name
                      .charAt(0)
                      .toUpperCase()}
                  </span>

                </div>


                <div className="professional-info">

                  <div className="professional-top">

                    {professional.verified && (

                      <span className="verified">
                        ✓ Verificado
                      </span>

                    )}

                    <button
                      type="button"
                      className="favorite"
                      aria-label="Adicionar aos favoritos"
                    >
                      ♡
                    </button>

                  </div>


                  <h3>
                    {professional.name}
                  </h3>


                  <p className="professional-service">
                    {professional.service}
                  </p>


                  <p className="professional-location">
                    ⌖ {professional.location}
                  </p>


                  <div className="professional-rating">

                    <strong>
                      ★ {professional.rating}
                    </strong>

                    <span>
                      {' '}
                      · {professional.reviews} avaliações
                    </span>

                  </div>


                  <div className="professional-bottom">

                    <strong>
                      Desde {professional.price}€/h
                    </strong>


                    <button
                      type="button"
                      onClick={() =>
                        openProfessionalProfile(
                          professional
                        )
                      }
                    >
                      Ver perfil
                      <span>→</span>
                    </button>

                  </div>

                </div>

              </article>

            )
          )}

        </div>

      </main>

    </div>

  );
}

export default SearchResults;