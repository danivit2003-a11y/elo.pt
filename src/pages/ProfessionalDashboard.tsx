import { useEffect, useState } from 'react';
import BackButton from './components/BackButton';
import './ProfessionalDashboard.css';

type ProfessionalProfile = {
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

function ProfessionalDashboard() {
  const [profile, setProfile] = useState<ProfessionalProfile | null>(null);

  useEffect(() => {
    const currentUserId = localStorage.getItem('elo-current-user');
    const savedUsers = localStorage.getItem('elo-users');
  
    if (!currentUserId || !savedUsers) {
      return;
    }
  
    try {
      const users = JSON.parse(savedUsers);
  
      if (!Array.isArray(users)) {
        return;
      }
  
      const currentUser = users.find(
        (user: any) => user.id === currentUserId
      );
  
      if (!currentUser) {
        return;
      }
  
      if (currentUser.professionalProfile) {
        setProfile(currentUser.professionalProfile);
      }
    } catch (error) {
      console.error('Erro ao carregar o perfil:', error);
    }
  }, []);

  const firstName = profile?.name || 'Profissional';
  const initial = firstName.charAt(0).toUpperCase();

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

  const categoryName = profile?.category
    ? categoryNames[profile.category] || profile.category
    : 'Serviço profissional';

  const modalities = [
    profile?.online ? 'Online' : '',
    profile?.presencial ? 'Presencial' : '',
  ]
    .filter(Boolean)
    .join(' e ');

  const profileFields = profile
    ? [
        profile.name,
        profile.location,
        profile.description,
        profile.category,
        profile.services,
        profile.price,
        profile.experience,
        profile.online || profile.presencial,
      ]
    : [];

  const completedFields = profileFields.filter(Boolean).length;

  const profileCompletion = profile
    ? Math.round((completedFields / profileFields.length) * 100)
    : 0;

  return (
    <div className="dashboard-page">

      {/* SIDEBAR */}
      <aside className="dashboard-sidebar">

        <a href="/" className="dashboard-logo">
          ELO<span>.</span>
        </a>

        <nav className="dashboard-nav">

          <a href="/professional-dashboard" className="active">
            <span>⌂</span>
            Início
          </a>

          <a href="#">
            <span>▱</span>
            Pedidos
          </a>

          <a href="#">
            <span>◯</span>
            Mensagens
          </a>

          <a href="#">
            <span>♡</span>
            Avaliações
          </a>

          <a href="/public-professional-profile">
            <span>✦</span>
            O meu perfil
          </a>

        </nav>

        <div className="sidebar-bottom">

          <a href="#">
            <span>⚙</span>
            Definições
          </a>

          <a href="/">
            <span>↪</span>
            Sair
          </a>

        </div>

      </aside>


      {/* MAIN */}
      <main className="dashboard-main">

        {/* HEADER */}
        <header className="dashboard-header">

          <div className="dashboard-header-left">

            <BackButton />

            <div>
              <span className="dashboard-label">
                ÁREA PROFISSIONAL
              </span>

              <h1>
                Olá, <em>{profile?.name || 'Profissional'}.</em>
              </h1>

              <p>
                Aqui tens tudo o que precisas para gerir os teus serviços.
              </p>
            </div>

          </div>

          <div className="dashboard-header-actions">

          <button
  className="notification-button"
  onClick={() => {
    window.location.href = '/favorites';
  }}
>
  ♡
</button>

  <a
    href="/public-professional-profile"
    className="user-avatar"
  >
    {initial}
  </a>

</div>

        </header>


        {/* PROFILE STATUS */}
        <section className="profile-status">

          <div className="profile-status-left">

            <div className="profile-avatar">
              {initial}
            </div>

            <div>

              <span className="status-label">
                O TEU PERFIL
              </span>

              <h2>
                {profile?.name || 'Perfil profissional'}
              </h2>

              <p>
                {profile
                  ? `${categoryName} · ${profile.location}`
                  : 'Cria o teu perfil profissional para começares.'}
              </p>

            </div>

          </div>

          <div className="profile-actions">

  <button
    className="outline-button"
    onClick={() => {
      window.location.href = '/create-professional-profile';
    }}
  >
    Editar perfil <span>↗</span>
  </button>

  <button
    className="dark-button"
    onClick={() => {
      window.location.href = '/public-professional-profile';
    }}
  >
    Ver perfil público <span>↗</span>
  </button>

</div>

        </section>


        {/* STATS */}
        <section className="stats-grid">

          <div className="stat-card">

            <span className="stat-icon">
              ◉
            </span>

            <div>
              <span className="stat-label">
                VISUALIZAÇÕES
              </span>

              <strong>128</strong>

              <p>
                +12% este mês
              </p>
            </div>

          </div>


          <div className="stat-card">

            <span className="stat-icon">
              ⌕
            </span>

            <div>
              <span className="stat-label">
                PEDIDOS
              </span>

              <strong>8</strong>

              <p>
                3 novos esta semana
              </p>
            </div>

          </div>


          <div className="stat-card">

            <span className="stat-icon">
              ★
            </span>

            <div>
              <span className="stat-label">
                AVALIAÇÃO
              </span>

              <strong>4.9</strong>

              <p>
                32 avaliações
              </p>
            </div>

          </div>


          <div className="stat-card">

            <span className="stat-icon">
              €
            </span>

            <div>
              <span className="stat-label">
                SERVIÇOS
              </span>

              <strong>
                {profile?.services ? 1 : 0}
              </strong>

              <p>
                Ativos no perfil
              </p>
            </div>

          </div>

        </section>


        {/* CONTENT GRID */}
        <section className="dashboard-content-grid">

          {/* PEDIDOS */}
          <div className="dashboard-panel requests-panel">

            <div className="panel-header">

              <div>
                <span className="panel-label">
                  NOVOS PEDIDOS
                </span>

                <h2>
                  Pedidos recentes
                </h2>
              </div>

              <a href="#">
                Ver todos →
              </a>

            </div>

            <div className="request-list">

              <div className="request-item">

                <div className="request-avatar">
                  M
                </div>

                <div className="request-info">

                  <strong>
                    Explicações de Matemática
                  </strong>

                  <p>
                    Nazaré · 8.º ano
                  </p>

                </div>

                <div className="request-time">

                  <span>
                    Novo
                  </span>

                  <small>
                    Há 2h
                  </small>

                </div>

              </div>


              <div className="request-item">

                <div className="request-avatar">
                  A
                </div>

                <div className="request-info">

                  <strong>
                    Apoio a Ciências
                  </strong>

                  <p>
                    Online · 7.º ano
                  </p>

                </div>

                <div className="request-time">

                  <span>
                    Novo
                  </span>

                  <small>
                    Há 5h
                  </small>

                </div>

              </div>


              <div className="request-item">

                <div className="request-avatar">
                  J
                </div>

                <div className="request-info">

                  <strong>
                    Matemática e FQ
                  </strong>

                  <p>
                    Lisboa · 9.º ano
                  </p>

                </div>

                <div className="request-time">

                  <small>
                    Ontem
                  </small>

                </div>

              </div>

            </div>

          </div>


          {/* VISIBILIDADE */}
          <div className="dashboard-panel profile-panel">

            <div className="panel-header">

              <div>
                <span className="panel-label">
                  O TEU PERFIL
                </span>

                <h2>
                  Visibilidade
                </h2>
              </div>

            </div>

            <div className="visibility-circle">

              <strong>
                {profileCompletion}%
              </strong>

              <span>
                completo
              </span>

            </div>

            <p className="visibility-text">

              {profileCompletion === 100
                ? 'O teu perfil está completo e pronto para ser encontrado pelos clientes.'
                : 'O teu perfil está quase completo. Adiciona mais informação para aumentares a confiança dos clientes.'}

            </p>

            <button
              className="dark-button"
              onClick={() => {
                window.location.href = '/create-professional-profile';
              }}
            >
              Completar perfil <span>→</span>
            </button>

          </div>

        </section>


        {/* SERVICES */}
        <section className="dashboard-panel services-panel">

          <div className="panel-header">

            <div>
              <span className="panel-label">
                SERVIÇOS
              </span>

              <h2>
                Os teus serviços
              </h2>
            </div>

            <button
              className="outline-button"
              onClick={() => {
                window.location.href = '/create-professional-profile';
              }}
            >
              + Adicionar serviço
            </button>

          </div>


          <div className="services-list">

            {profile?.services ? (

              <div className="service-row">

                <div className="service-icon">
                  ▱
                </div>

                <div className="service-info">

                  <strong>
                    {profile.services}
                  </strong>

                  <span>
                    {categoryName}
                    {modalities ? ` · ${modalities}` : ''}
                  </span>

                </div>

                <strong className="service-price">
                  {profile.price
                    ? `Desde ${profile.price}€/h`
                    : 'Preço a definir'}
                </strong>

                <span className="service-status">
                  Ativo
                </span>

                <button className="service-arrow">
                  ↗
                </button>

              </div>

            ) : (

              <div className="service-row">

                <div className="service-info">

                  <strong>
                    Ainda não tens serviços.
                  </strong>

                  <span>
                    Adiciona um serviço ao teu perfil profissional.
                  </span>

                </div>

              </div>

            )}

          </div>

        </section>


        {/* SUBSCRIPTION */}
        <section className="subscription-status">

          <div>

            <span className="panel-label">
              SUBSCRIÇÃO ELO
            </span>

            <h2>
              A tua subscrição está ativa.
            </h2>

            <p>
              Tens acesso completo à ELO até ao final deste mês.
            </p>

          </div>

          <button className="light-dashboard-button">
            Gerir subscrição <span>→</span>
          </button>

        </section>

      </main>

    </div>
  );
}

export default ProfessionalDashboard;