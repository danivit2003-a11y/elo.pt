import { useEffect, useState } from 'react';
import BackButton from './components/BackButton';
import './PublicProfessionalProfile.css';

type ProfessionalProfileData = {
  name: string;
  location: string;
  description: string;
  category: string;
  services: string;
  price: string;
  experience: string;
  online: boolean;
  presencial: boolean;
};

function PublicProfessionalProfile() {

  const [profile, setProfile] =
    useState<ProfessionalProfileData | null>(null);

  useEffect(() => {

    const savedProfile = localStorage.getItem(
      'elo-professional-profile'
    );

    if (!savedProfile) {
      return;
    }

    try {

      const parsedProfile =
        JSON.parse(savedProfile);

      if (!parsedProfile?.name) {
        return;
      }

      setProfile(parsedProfile);

    } catch {

      console.error(
        'Não foi possível carregar o perfil.'
      );

    }

  }, []);


  const categoryNames: Record<string, string> = {

    explicacoes: 'Explicações',
    babysitting: 'Babysitting',
    limpezas: 'Limpezas',
    canalizacao: 'Canalização',
    eletricidade: 'Eletricidade',
    jardinagem: 'Jardinagem',
    informatica: 'Informática',
    mudancas: 'Mudanças',
    reparacoes: 'Reparações',
    animais: 'Animais',
    beleza: 'Beleza',
    fotografia: 'Fotografia',

  };


  function goToServiceRequest() {

    if (!profile) {
      return;
    }

    const params = new URLSearchParams({

      name: profile.name,

      service:
        profile.services ||
        categoryNames[profile.category] ||
        'Serviço profissional',

      location:
        profile.location ||
        'Localização não definida',

      price:
        profile.price || '',

      category:
        profile.category || '',

    });

    window.location.href =
      `/service-request?${params.toString()}`;

  }
  function goToContact() {

    if (!profile) {
      return;
    }
  
    const params = new URLSearchParams({
  
      name: profile.name,
  
      service:
        profile.services ||
        categoryNames[profile.category] ||
        'Serviço profissional',
  
      location:
        profile.location ||
        'Localização não definida',
  
      price:
        profile.price || '',
  
      category:
        profile.category || '',
  
    });
  
    window.location.href =
      `/contact?${params.toString()}`;
  }


  if (!profile) {

    return (

      <div className="public-profile-page">

        <header className="public-profile-header">

          <BackButton />

          <a
            href="/"
            className="public-profile-logo"
          >
            ELO<span>.</span>
          </a>

        </header>


        <main className="public-profile-empty">

          <span className="public-profile-label">
            PERFIL PROFISSIONAL
          </span>

          <h1>
            Perfil ainda não criado.
          </h1>

          <p>
            Cria o teu perfil profissional para começares
            a apresentar os teus serviços aos clientes.
          </p>

          <a
            href="/create-professional-profile"
            className="public-profile-button"
          >
            Criar perfil
            <span>→</span>
          </a>

        </main>

      </div>

    );

  }


  const initial =
    profile.name
      ? profile.name.charAt(0).toUpperCase()
      : 'P';


  const categoryName =
    categoryNames[profile.category] ||
    profile.category ||
    'Serviço profissional';


  const modalities = [

    profile.online
      ? 'Online'
      : '',

    profile.presencial
      ? 'Presencial'
      : '',

  ]
    .filter(Boolean)
    .join(' e ');


  return (

    <div className="public-profile-page">

      {/* HEADER */}

      <header className="public-profile-header">

        <div className="public-profile-header-left">

          <BackButton />

          <a
            href="/"
            className="public-profile-logo"
          >
            ELO<span>.</span>
          </a>

        </div>

        <a
          href="/professional-dashboard"
          className="public-profile-dashboard-link"
        >
          Área profissional →
        </a>

      </header>


      {/* PROFILE */}

      <main className="public-profile-main">

        <section className="public-profile-hero">

          <div className="public-profile-avatar">
            {initial}
          </div>


          <div className="public-profile-hero-info">

            <span className="public-profile-label">
              PROFISSIONAL ELO
            </span>

            <h1>
              {profile.name}
            </h1>

            <p className="public-profile-location">
              ⌖ {profile.location}
            </p>


            <div className="public-profile-tags">

              {categoryName && (
                <span>
                  {categoryName}
                </span>
              )}

              {modalities && (
                <span>
                  {modalities}
                </span>
              )}

            </div>

          </div>


          <div className="public-profile-hero-action">

          <button
  type="button"
  className="contact-profile-button"
  onClick={goToContact}
>
  Contactar
  <span>↗</span>
</button>

          </div>

        </section>


        {/* CONTENT */}

        <div className="public-profile-content">

          {/* LEFT */}

          <div className="public-profile-left">

            {/* SOBRE */}

            <section className="public-profile-card">

              <span className="public-profile-section-label">
                SOBRE
              </span>

              <h2>
                Sobre {profile.name}
              </h2>

              <p className="public-profile-description">
                {profile.description}
              </p>

            </section>


            {/* SERVIÇOS */}

            <section className="public-profile-card">

              <span className="public-profile-section-label">
                SERVIÇOS
              </span>

              <h2>
                O que oferece
              </h2>


              <div className="public-service">

                <div className="public-service-icon">
                  ✦
                </div>


                <div className="public-service-info">

                  <strong>
                    {profile.services ||
                      categoryName}
                  </strong>

                  <span>

                    {categoryName}

                    {modalities
                      ? ` · ${modalities}`
                      : ''}

                  </span>

                </div>


                <strong className="public-service-price">

                  {profile.price
                    ? `${profile.price}€/h`
                    : 'Preço a definir'}

                </strong>

              </div>

            </section>


            {/* EXPERIÊNCIA */}

            <section className="public-profile-card">

              <span className="public-profile-section-label">
                EXPERIÊNCIA
              </span>

              <h2>
                Experiência profissional
              </h2>


              <div className="experience-item">

                <div className="experience-icon">
                  ✓
                </div>

                <div>

                  <strong>
                    Experiência na área
                  </strong>

                  <span>

                    {profile.experience === 'menos-1'
                      ? 'Menos de 1 ano'
                      : profile.experience === '1-2'
                      ? '1–2 anos'
                      : profile.experience === '3-5'
                      ? '3–5 anos'
                      : 'Mais de 5 anos'}

                  </span>

                </div>

              </div>

            </section>

          </div>


          {/* RIGHT */}

          <aside className="public-profile-right">

            {/* DISPONIBILIDADE */}

            <div className="public-contact-card">

              <span className="public-profile-section-label">
                DISPONIBILIDADE
              </span>

              <h2>
                Trabalha como?
              </h2>


              <div className="availability-list">

                {profile.online && (

                  <div className="availability-item">

                    <span>
                      ✓
                    </span>

                    <div>

                      <strong>
                        Online
                      </strong>

                      <small>
                        Atendimento à distância
                      </small>

                    </div>

                  </div>

                )}


                {profile.presencial && (

                  <div className="availability-item">

                    <span>
                      ✓
                    </span>

                    <div>

                      <strong>
                        Presencial
                      </strong>

                      <small>
                        Atendimento presencial
                      </small>

                    </div>

                  </div>

                )}

              </div>

            </div>


            {/* PREÇO */}

            <div className="public-price-card">

              <span className="public-profile-section-label">
                PREÇO
              </span>


              <div className="price-value">

                {profile.price
                  ? `${profile.price}€`
                  : '—'}

                <small>
                  /hora
                </small>

              </div>


              <button
                type="button"
                className="contact-profile-button full"
                onClick={goToServiceRequest}
              >
                Pedir serviço
                <span>→</span>
              </button>

            </div>

          </aside>

        </div>

      </main>

    </div>

  );
}

export default PublicProfessionalProfile;