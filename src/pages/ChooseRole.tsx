import BackButton from './components/BackButton';
function ChooseRole() {
  function chooseRole(role: 'client' | 'professional') {
    const currentUserId =
      localStorage.getItem('elo-current-user');
  
    const savedUsers =
      localStorage.getItem('elo-users');
  
    if (!currentUserId || !savedUsers) {
      window.location.href = '/register';
      return;
    }
  
    try {
      const users = JSON.parse(savedUsers);
  
      if (!Array.isArray(users)) {
        window.location.href = '/register';
        return;
      }
  
      const updatedUsers = users.map((user: any) => {
        if (user.id === currentUserId) {
          return {
            ...user,
            role,
          };
        }
  
        return user;
      });
  
      localStorage.setItem(
        'elo-users',
        JSON.stringify(updatedUsers)
      );
  
      if (role === 'client') {
        window.location.href = '/client-home';
      } else {
        window.location.href = '/professional';
      }
  
    } catch {
      window.location.href = '/register';
    }
  }
  return (
    <div className="role-page">

      <div className="role-container">

      <BackButton />

        <a href="/" className="auth-logo">
          ELO<span>.</span>
        </a>

        <div className="role-content">

          <div className="role-heading">
            <span className="auth-label">BEM-VINDO À ELO</span>

            <h1>
              Como vais usar <em>a ELO?</em>
            </h1>

            <p>
              Escolhe a opção que melhor se aplica a ti.
            </p>
          </div>

          <div className="role-options">

          <button
  className="role-card"
  onClick={() => chooseRole('client')}
>

              <div className="role-card-top">
                <span className="role-icon">⌕</span>
                <span className="role-arrow">↗</span>
              </div>

              <div className="role-card-content">
                <span className="role-label">CLIENTE</span>

                <h2>Procuro serviços</h2>

                <p>
                  Encontra profissionais para aquilo
                 que precisas.
                </p>
              </div>

            </button>


            <button
  className="role-card"
  onClick={() => chooseRole('professional')}
>

              <div className="role-card-top">
                <span className="role-icon">✦</span>
                <span className="role-arrow">↗</span>
              </div>

              <div className="role-card-content">
                <span className="role-label">PROFISSIONAL</span>

                <h2>Ofereço serviços</h2>

                <p>
                  Cria o teu perfil e encontra
                  novos clientes.
                </p>
              </div>

            </button>

          </div>

          <p className="role-switch">
            Já tens uma conta?
            <a href="/login">Entrar</a>
          </p>

        </div>

      </div>

    </div>
  );
}

export default ChooseRole;