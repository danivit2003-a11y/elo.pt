import BackButton from './components/BackButton';
import { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const savedUsers = localStorage.getItem('elo-users');
  
    let users = [];
  
    if (savedUsers) {
      try {
        const parsedUsers = JSON.parse(savedUsers);
  
        if (Array.isArray(parsedUsers)) {
          users = parsedUsers;
        }
      } catch {
        users = [];
      }
    }
  
    const emailExists = users.some(
      (user: any) =>
        user.email.toLowerCase() === email.toLowerCase()
    );
  
    if (emailExists) {
      alert('Já existe uma conta com este email.');
      return;
    }
  
    const newUser = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim(),
      password,
      role: null,
    };
  
    users.push(newUser);
  
    localStorage.setItem(
      'elo-users',
      JSON.stringify(users)
    );
  
    localStorage.setItem(
      'elo-current-user',
      newUser.id
    );
  
    window.location.href = '/choose-role';
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
            <span className="auth-label">JUNTA-TE À ELO</span>

            <h1>
              Cria a tua <em>conta.</em>
            </h1>

            <p>
              Começa a encontrar ou oferecer serviços.
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>

            <div className="form-field">
              <label htmlFor="name">Nome</label>

              <input
                id="name"
                type="text"
                placeholder="O teu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="register-email">Email</label>

              <input
                id="register-email"
                type="email"
                placeholder="O teu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="register-password">
                Palavra-passe
              </label>

              <input
                id="register-password"
                type="password"
                placeholder="Cria uma palavra-passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <label className="terms-checkbox">
              <input type="checkbox" required />
              <span>
                Aceito os <a href="#">Termos</a> e a{' '}
                <a href="#">Política de Privacidade</a>.
              </span>
            </label>

            <button
  type="submit"
  className="auth-button"
>
  Criar conta
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
            Já tens uma conta?
            <a href="/login">
               Entrar
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
            O que precisas.
            <br />
            <em>Está aqui.</em>
          </h2>

          <p>
            Encontra quem pode ajudar
            ou começa a oferecer o teu serviço.
          </p>

        </div>

        <span className="auth-side-bottom">
          Feito para aproximar pessoas.
        </span>

      </div>

    </div>
  );
}

export default Register;