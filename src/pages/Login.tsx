import BackButton from './components/BackButton';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const savedUsers =
      localStorage.getItem('elo-users');
  
    if (!savedUsers) {
      alert('Não existe nenhuma conta com estes dados.');
      return;
    }
  
    try {
      const users = JSON.parse(savedUsers);
  
      if (!Array.isArray(users)) {
        alert('Ocorreu um erro ao carregar as contas.');
        return;
      }
  
      const user = users.find(
        (user: any) =>
          user.email.toLowerCase() === email.toLowerCase() &&
          user.password === password
      );
  
      if (!user) {
        alert('Email ou palavra-passe incorretos.');
        return;
      }
  
      localStorage.setItem(
        'elo-current-user',
        user.id
      );
  
      if (user.role === 'client') {
        window.location.href = '/client-home';
        return;
      }
  
      if (user.role === 'professional') {
        window.location.href = '/professional';
        return;
      }
  
      window.location.href = '/choose-role';
  
    } catch {
      alert('Ocorreu um erro ao entrar na conta.');
    }
  };

  return (
    <div className="auth-page">

<div className="auth-container">

<BackButton />

<a href="/" className="auth-logo">
  ELO<span>.</span>
</a>

        <div className="auth-content">

          <div className="auth-heading">
            <span className="auth-label">BEM-VINDO DE VOLTA</span>

            <h1>
              Entra na <em>ELO.</em>
            </h1>

            <p>
              Entra na tua conta para continuares.
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>

            <div className="form-field">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                placeholder="O teu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-field">
              <div className="password-label">
                <label htmlFor="password">Palavra-passe</label>

                <a href="#">
                  Esqueceste-te?
                </a>
              </div>

              <input
                id="password"
                type="password"
                placeholder="A tua palavra-passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="auth-button">
              Entrar
              <span>→</span>
            </button>

          </form>

          <div className="auth-divider">
            <span>ou</span>
          </div>

          <button className="google-button" type="button">
            <span>G</span>
            Continuar com Google
          </button>

          <p className="auth-switch">
            Ainda não tens conta?
            <a href="/register">
               Criar conta
            </a>
          </p>

        </div>

      </div>

      <div className="auth-side">

        <div className="auth-side-content">

          <span className="auth-side-label">
            ELO
          </span>

          <h2>
            Pessoas certas.
            <br />
            <em>Ligadas.</em>
          </h2>

          <p>
            Encontra profissionais de confiança
            ou mostra o que sabes fazer.
          </p>

        </div>

        <span className="auth-side-bottom">
          Feito para aproximar pessoas.
        </span>

      </div>

    </div>
  );
}

export default Login;