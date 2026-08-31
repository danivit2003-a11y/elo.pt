import { useEffect, useMemo, useState } from 'react';
import BackButton from './components/BackButton';
import './SearchServices.css';

type Professional = {
  id: string;
  initial: string;
  name: string;
  service: string;
  location: string;
  category: string;
  rating: number;
  reviews: number;
  price: number;
  verified: boolean;
  isOwnProfile?: boolean;
};

const mockProfessionals: Professional[] = [
  {
    id: 'maria-silva',
    initial: 'M',
    name: 'Maria Silva',
    service: 'Explicações de Matemática',
    location: 'Lisboa',
    category: 'explicacoes',
    rating: 4.9,
    reviews: 32,
    price: 12,
    verified: true,
  },
  {
    id: 'ana-costa',
    initial: 'A',
    name: 'Ana Costa',
    service: 'Limpezas domésticas',
    location: 'Leiria',
    category: 'limpezas',
    rating: 4.8,
    reviews: 24,
    price: 10,
    verified: true,
  },
  {
    id: 'rui-martins',
    initial: 'R',
    name: 'Rui Martins',
    service: 'Eletricidade',
    location: 'Setúbal',
    category: 'eletricidade',
    rating: 5.0,
    reviews: 18,
    price: 15,
    verified: true,
  },
  {
    id: 'carla-santos',
    initial: 'C',
    name: 'Carla Santos',
    service: 'Babysitting',
    location: 'Lisboa',
    category: 'babysitting',
    rating: 4.9,
    reviews: 41,
    price: 9,
    verified: true,
  },
  {
    id: 'pedro-oliveira',
    initial: 'P',
    name: 'Pedro Oliveira',
    service: 'Canalização',
    location: 'Santarém',
    category: 'canalizacao',
    rating: 4.7,
    reviews: 16,
    price: 20,
    verified: true,
  },
  {
    id: 'joana-ferreira',
    initial: 'J',
    name: 'Joana Ferreira',
    service: 'Explicações de Ciências',
    location: 'Coimbra',
    category: 'explicacoes',
    rating: 5.0,
    reviews: 27,
    price: 13,
    verified: true,
  },
];

function SearchServices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [district, setDistrict] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');

  const [professionals, setProfessionals] =
    useState<Professional[]>(mockProfessionals);

  useEffect(() => {
    const savedProfile = localStorage.getItem(
      'elo-professional-profile'
    );

    if (!savedProfile) {
      return;
    }

    try {
      const profile = JSON.parse(savedProfile);

      if (!profile || !profile.name) {
        return;
      }

      const ownProfessional: Professional = {
        id: 'my-profile',
        initial: profile.name
          .charAt(0)
          .toUpperCase(),
        name: profile.name,
        service:
          profile.services ||
          'Serviço profissional',
        location:
          profile.location ||
          'Localização não definida',
        category: profile.category || '',
        rating: 0,
        reviews: 0,
        price: Number(profile.price) || 0,
        verified: false,
        isOwnProfile: true,
      };

      setProfessionals([
        ownProfessional,
        ...mockProfessionals,
      ]);
    } catch (error) {
      console.error(
        'Não foi possível carregar o perfil profissional.',
        error
      );
    }
  }, []);

  function toggleCategory(category: string) {
    setSelectedCategories((current) => {
      if (current.includes(category)) {
        return current.filter(
          (item) => item !== category
        );
      }

      return [...current, category];
    });
  }

  function clearFilters() {
    setSearchTerm('');
    setDistrict('');
    setSelectedCategories([]);
    setMaxPrice(null);
    setVerifiedOnly(false);
    setSortBy('relevance');
  }

  const filteredProfessionals = useMemo(() => {
    let results = [...professionals];

    const normalizedSearch =
      searchTerm.trim().toLowerCase();

    if (normalizedSearch) {
      results = results.filter((professional) => {
        return (
          professional.name
            .toLowerCase()
            .includes(normalizedSearch) ||
          professional.service
            .toLowerCase()
            .includes(normalizedSearch) ||
          professional.location
            .toLowerCase()
            .includes(normalizedSearch)
        );
      });
    }

    if (district) {
      results = results.filter(
        (professional) =>
          professional.location.toLowerCase() ===
          district.toLowerCase()
      );
    }

    if (selectedCategories.length > 0) {
      results = results.filter((professional) =>
        selectedCategories.includes(
          professional.category
        )
      );
    }

    if (maxPrice !== null) {
      results = results.filter(
        (professional) =>
          professional.price > 0 &&
          professional.price <= maxPrice
      );
    }

    if (verifiedOnly) {
      results = results.filter(
        (professional) =>
          professional.verified
      );
    }

    if (sortBy === 'rating') {
      results.sort(
        (a, b) => b.rating - a.rating
      );
    }

    if (sortBy === 'price') {
      results.sort(
        (a, b) => a.price - b.price
      );
    }

    return results;
  }, [
    professionals,
    searchTerm,
    district,
    selectedCategories,
    maxPrice,
    verifiedOnly,
    sortBy,
  ]);

  function openProfile(
    professional: Professional
  ) {
    if (professional.isOwnProfile) {
      window.location.href =
        '/public-professional-profile';
      return;
    }

    alert(
      `O perfil de ${professional.name} é um perfil de demonstração.`
    );
  }

  return (
    <div className="search-page">

      {/* NAVBAR */}
      <header className="search-navbar">

        <div className="search-navbar-left">

          <BackButton />

          <a
            href="/client-home"
            className="search-logo"
          >
            ELO<span>.</span>
          </a>

        </div>

        <nav className="search-nav">

          <a href="/client-home">
            Início
          </a>

          <a
            href="/search"
            className="active"
          >
            Procurar serviços
          </a>

          <a href="/requests">
            Os meus pedidos
          </a>

          <a href="/favorites">
            Favoritos
          </a>

        </nav>

        <div className="search-actions">

          <button
            className="search-notification"
            type="button"
          >
            ♡
          </button>

          <button
            className="search-profile"
            type="button"
          >
            D
          </button>

        </div>

      </header>

      {/* MAIN */}
      <main className="search-main">

        <div className="search-heading">

          <div>

            <span className="search-label">
              ENCONTRA O QUE PRECISAS
            </span>

            <h1>
              Procurar
              <br />
              <em>serviços.</em>
            </h1>

            <p>
              Encontra profissionais de confiança
              perto de ti.
            </p>

          </div>

        </div>

        {/* SEARCH BAR */}
        <section className="services-search-box">

          <div className="services-search-field">

            <span>⌕</span>

            <div>

              <label>
                O que procuras?
              </label>

              <input
                type="text"
                placeholder="Ex.: explicações, eletricista..."
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
              />

            </div>

          </div>

          <div className="services-search-divider"></div>

          <div className="services-search-field">

            <span>⌖</span>

            <div>

              <label>
                Distrito
              </label>

              <select
                value={district}
                onChange={(event) =>
                  setDistrict(event.target.value)
                }
              >

                <option value="">
                  Todos os distritos
                </option>

                <option value="Lisboa">
                  Lisboa
                </option>

                <option value="Leiria">
                  Leiria
                </option>

                <option value="Setúbal">
                  Setúbal
                </option>

                <option value="Santarém">
                  Santarém
                </option>

                <option value="Coimbra">
                  Coimbra
                </option>

                <option value="Porto">
                  Porto
                </option>

                <option value="Braga">
                  Braga
                </option>

                <option value="Aveiro">
                  Aveiro
                </option>

                <option value="Faro">
                  Faro
                </option>

              </select>

            </div>

          </div>

          <button
            className="services-search-button"
            type="button"
            onClick={() => {
              document
                .querySelector('.search-results')
                ?.scrollIntoView({
                  behavior: 'smooth',
                });
            }}
          >
            Procurar
            <span>→</span>
          </button>

        </section>

        {/* CONTENT */}
        <div className="search-content">

          {/* FILTERS */}
          <aside className="search-filters">

            <div className="filters-header">

              <strong>
                Filtros
              </strong>

              <button
                type="button"
                onClick={clearFilters}
              >
                Limpar
              </button>

            </div>

            <div className="filter-group">

              <span>
                Categoria
              </span>

              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(
                    'explicacoes'
                  )}
                  onChange={() =>
                    toggleCategory(
                      'explicacoes'
                    )
                  }
                />
                Explicações
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(
                    'babysitting'
                  )}
                  onChange={() =>
                    toggleCategory(
                      'babysitting'
                    )
                  }
                />
                Babysitting
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(
                    'limpezas'
                  )}
                  onChange={() =>
                    toggleCategory(
                      'limpezas'
                    )
                  }
                />
                Limpezas
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(
                    'eletricidade'
                  )}
                  onChange={() =>
                    toggleCategory(
                      'eletricidade'
                    )
                  }
                />
                Eletricidade
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(
                    'canalizacao'
                  )}
                  onChange={() =>
                    toggleCategory(
                      'canalizacao'
                    )
                  }
                />
                Canalização
              </label>

            </div>

            <div className="filter-group">

              <span>
                Preço máximo
              </span>

              <div className="price-options">

                {[10, 15, 20, 30].map(
                  (price) => (
                    <button
                      key={price}
                      type="button"
                      onClick={() =>
                        setMaxPrice(
                          maxPrice === price
                            ? null
                            : price
                        )
                      }
                      className={
                        maxPrice === price
                          ? 'selected'
                          : ''
                      }
                    >
                      {price}€/h
                    </button>
                  )
                )}

              </div>

            </div>

            <div className="filter-group">

              <span>
                Apenas verificados
              </span>

              <label className="switch-row">

                <input
                  type="checkbox"
                  checked={verifiedOnly}
                  onChange={(event) =>
                    setVerifiedOnly(
                      event.target.checked
                    )
                  }
                />

                <span className="fake-switch"></span>

              </label>

            </div>

          </aside>

          {/* RESULTS */}
          <section className="search-results">

            <div className="results-top">

              <div>

                <strong>
                  Profissionais encontrados
                </strong>

                <span>
                  {' '}
                  · {filteredProfessionals.length}{' '}
                  {filteredProfessionals.length === 1
                    ? 'resultado'
                    : 'resultados'}
                </span>

              </div>

              <select
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value)
                }
              >

                <option value="relevance">
                  Mais relevantes
                </option>

                <option value="rating">
                  Melhor avaliação
                </option>

                <option value="price">
                  Menor preço
                </option>

              </select>

            </div>

            <div className="professional-results">

              {filteredProfessionals.length === 0 ? (
                <div className="result-card">

                  <div className="result-info">

                    <h2>
                      Não encontrámos profissionais.
                    </h2>

                    <p className="result-service">
                      Tenta alterar os termos de
                      pesquisa ou remover alguns filtros.
                    </p>

                  </div>

                </div>
              ) : (
                filteredProfessionals.map(
                  (professional) => (
                    <article
                      className="result-card"
                      key={professional.id}
                    >

                      <div className="result-avatar">
                        {professional.initial}
                      </div>

                      <div className="result-info">

                        <div className="result-name">

                          <h2>
                            {professional.name}
                          </h2>

                          {professional.verified ? (
                            <span className="verified-badge">
                              ✓ Verificado
                            </span>
                          ) : null}

                        </div>

                        <p className="result-service">
                          {professional.service}
                        </p>

                        <div className="result-details">

                          {professional.rating > 0 ? (
                            <span>
                              ★{' '}
                              {professional.rating.toFixed(
                                1
                              )}

                              <small>
                                {' '}
                                ({professional.reviews})
                              </small>
                            </span>
                          ) : null}

                          <span>
                            ⌖ {professional.location}
                          </span>

                        </div>

                      </div>

                      <div className="result-price">

                        <strong>
                          {professional.price > 0
                            ? `${professional.price}€/h`
                            : 'Preço a definir'}
                        </strong>

                        <button
                          type="button"
                          onClick={() =>
                            openProfile(
                              professional
                            )
                          }
                        >
                          Ver perfil →
                        </button>

                      </div>

                    </article>
                  )
                )
              )}

            </div>

            {filteredProfessionals.length > 0 ? (
              <div className="results-more">

                <button
                  type="button"
                  onClick={() =>
                    alert(
                      'Mais profissionais serão carregados quando a plataforma estiver ligada à base de dados.'
                    )
                  }
                >
                  Carregar mais profissionais
                  <span>↓</span>
                </button>

              </div>
            ) : null}

          </section>

        </div>

      </main>

    </div>
  );
}

export default SearchServices;