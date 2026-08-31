import { useEffect, useState } from 'react';
import BackButton from './components/BackButton';
import './CreateProfessionalProfile.css';

function CreateProfessionalProfile() {

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [services, setServices] = useState('');
  const [price, setPrice] = useState('');
  const [experience, setExperience] = useState('');
  const [online, setOnline] = useState(false);
  const [presencial, setPresencial] = useState(false);

  const [isEditing, setIsEditing] = useState(false);


  /* =========================================
     CARREGAR PERFIL EXISTENTE
  ========================================= */

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

  if (!currentUser?.professionalProfile) {
    return;
  }

  const profile = currentUser.professionalProfile;

      setName(profile.name || '');
      setLocation(profile.location || '');
      setDescription(profile.description || '');
      setCategory(profile.category || '');
      setServices(profile.services || '');
      setPrice(profile.price || '');
      setExperience(profile.experience || '');
      setOnline(profile.online || false);
      setPresencial(profile.presencial || false);

      setIsEditing(true);

    } catch (error) {

      console.error(
        'Erro ao carregar o perfil profissional:',
        error
      );

    }

  }, []);


  /* =========================================
     GUARDAR PERFIL
  ========================================= */

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {

    event.preventDefault();


    /* CAMPOS OBRIGATÓRIOS */

    if (
      !name.trim() ||
      !location.trim() ||
      !description.trim() ||
      !category ||
      !services.trim() ||
      !price ||
      !experience
    ) {

      alert(
        'Preenche todos os campos obrigatórios antes de guardar o perfil.'
      );

      return;
    }


    /* MODALIDADE */

    if (!online && !presencial) {

      alert(
        'Seleciona pelo menos uma modalidade: Online ou Presencial.'
      );

      return;
    }


    /* PERFIL */

    const profile = {

      name: name.trim(),

      location: location.trim(),

      description: description.trim(),

      category,

      services: services.trim(),

      price,

      experience,

      online,

      presencial,

    };


    /* GUARDAR NO UTILIZADOR ATUAL */

const currentUserId = localStorage.getItem('elo-current-user');
const savedUsers = localStorage.getItem('elo-users');

if (!currentUserId || !savedUsers) {
  alert('Não foi possível identificar a tua conta.');
  return;
}

try {
  const users = JSON.parse(savedUsers);

  if (!Array.isArray(users)) {
    alert('Ocorreu um erro ao carregar a tua conta.');
    return;
  }

  const updatedUsers = users.map((user: any) => {
    if (user.id === currentUserId) {
      return {
        ...user,
        professionalProfile: profile,
      };
    }

    return user;
  });

  localStorage.setItem(
    'elo-users',
    JSON.stringify(updatedUsers)
  );

} catch {
  alert('Ocorreu um erro ao guardar o perfil.');
  return;
}


    /* VOLTAR AO DASHBOARD */

    window.location.href = '/professional-dashboard';

  }


  return (

    <div className="create-profile-page">


      {/* =========================================
          HEADER
      ========================================= */}

      <header className="create-profile-header">

        <div className="create-profile-header-left">

          <BackButton />

          <a
            href="/"
            className="create-profile-logo"
          >
            ELO<span>.</span>
          </a>

        </div>


        <span className="create-profile-step">

          {isEditing
            ? 'EDITAR PERFIL'
            : 'PERFIL PROFISSIONAL'}

        </span>

      </header>


      {/* =========================================
          MAIN
      ========================================= */}

      <main className="create-profile-main">


        {/* =========================================
            INTRO
        ========================================= */}

        <div className="create-profile-intro">

          <span className="create-profile-label">

            {isEditing
              ? 'O TEU PERFIL'
              : 'COMEÇA AQUI'}

          </span>


          <h1>

            {isEditing ? (
              <>
                Edita o teu
                <br />
                <em>perfil profissional.</em>
              </>
            ) : (
              <>
                Cria o teu
                <br />
                <em>perfil profissional.</em>
              </>
            )}

          </h1>


          <p>

            {isEditing
              ? 'Atualiza as informações do teu perfil. Podes alterar qualquer campo e guardar as alterações quando terminares.'
              : 'Conta-nos um pouco sobre ti e sobre os serviços que ofereces. Podes editar estas informações a qualquer momento.'}

          </p>

        </div>


        {/* =========================================
            FORM
        ========================================= */}

        <form
          className="create-profile-form"
          onSubmit={handleSubmit}
        >


          {/* =========================================
              01 — SOBRE TI
          ========================================= */}

          <section className="profile-form-section">

            <div className="form-section-heading">

              <span>01</span>

              <div>

                <h2>
                  Sobre ti
                </h2>

                <p>
                  As informações que os clientes vão ver primeiro.
                </p>

              </div>

            </div>


            {/* FOTO */}

            <div className="profile-photo-area">

              <div className="profile-photo-placeholder">

                {name
                  ? name.charAt(0).toUpperCase()
                  : 'D'}

              </div>


              <div>

                <strong>
                  Foto de perfil
                </strong>

                <p>
                  Uma fotografia ajuda a criar confiança com os clientes.
                </p>

                <button
                  type="button"
                  className="form-secondary-button"
                >
                  Adicionar fotografia
                </button>

              </div>

            </div>


            {/* NOME + LOCALIZAÇÃO */}

            <div className="form-grid">


              <div className="form-field">

                <label htmlFor="name">
                  Nome
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Ex.: Daniela"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                />

              </div>


              <div className="form-field">

                <label htmlFor="location">
                  Localização
                </label>

                <input
                  id="location"
                  type="text"
                  placeholder="Ex.: Nazaré"
                  value={location}
                  onChange={(e) =>
                    setLocation(e.target.value)
                  }
                />

              </div>


            </div>


            {/* SOBRE TI */}

            <div className="form-field">

              <label htmlFor="description">
                Sobre ti
              </label>

              <textarea
                id="description"
                rows={5}
                placeholder="Fala um pouco sobre ti, a tua experiência e a forma como trabalhas..."
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
              />

              <span className="field-hint">
                Esta informação será apresentada no teu perfil público.
              </span>

            </div>

          </section>


          {/* =========================================
              02 — SERVIÇOS
          ========================================= */}

          <section className="profile-form-section">

            <div className="form-section-heading">

              <span>02</span>

              <div>

                <h2>
                  Os teus serviços
                </h2>

                <p>
                  Escolhe aquilo que podes oferecer através da ELO.
                </p>

              </div>

            </div>


            {/* CATEGORIA */}

            <div className="form-field">

              <label htmlFor="category">
                Categoria principal
              </label>

              <select
                id="category"
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
              >

                <option value="" disabled>
                  Seleciona uma categoria
                </option>

                <option value="explicacoes">
                  Explicações
                </option>

                <option value="babysitting">
                  Babysitting
                </option>

                <option value="limpezas">
                  Limpezas
                </option>

                <option value="canalizacao">
                  Canalização
                </option>

                <option value="eletricidade">
                  Eletricidade
                </option>

                <option value="jardinagem">
                  Jardinagem
                </option>

                <option value="informatica">
                  Informática
                </option>

                <option value="mudancas">
                  Mudanças
                </option>

                <option value="reparacoes">
                  Reparações
                </option>

                <option value="animais">
                  Animais
                </option>

                <option value="beleza">
                  Beleza
                </option>

                <option value="fotografia">
                  Fotografia
                </option>

              </select>

            </div>


            {/* SERVIÇOS */}

            <div className="form-field">

              <label htmlFor="services">
                Que serviços ofereces?
              </label>

              <textarea
                id="services"
                rows={4}
                placeholder="Ex.: Explicações de Matemática, Ciências e Físico-Química..."
                value={services}
                onChange={(e) =>
                  setServices(e.target.value)
                }
              />

            </div>


            {/* PREÇO + EXPERIÊNCIA */}

            <div className="form-grid">


              <div className="form-field">

                <label htmlFor="price">
                  Preço por hora
                </label>

                <div className="input-with-suffix">

                  <input
                    id="price"
                    type="number"
                    placeholder="12"
                    min="0"
                    value={price}
                    onChange={(e) =>
                      setPrice(e.target.value)
                    }
                  />

                  <span>
                    €/h
                  </span>

                </div>

              </div>


              <div className="form-field">

                <label htmlFor="experience">
                  Experiência
                </label>

                <select
                  id="experience"
                  value={experience}
                  onChange={(e) =>
                    setExperience(e.target.value)
                  }
                >

                  <option value="" disabled>
                    Seleciona
                  </option>

                  <option value="menos-1">
                    Menos de 1 ano
                  </option>

                  <option value="1-2">
                    1–2 anos
                  </option>

                  <option value="3-5">
                    3–5 anos
                  </option>

                  <option value="5-plus">
                    Mais de 5 anos
                  </option>

                </select>

              </div>


            </div>

          </section>


          {/* =========================================
              03 — MODALIDADE
          ========================================= */}

          <section className="profile-form-section">

            <div className="form-section-heading">

              <span>03</span>

              <div>

                <h2>
                  Como trabalhas?
                </h2>

                <p>
                  Diz aos clientes onde e como estás disponível.
                </p>

              </div>

            </div>


            <div className="availability-options">


              {/* ONLINE */}

              <label className="availability-option">

                <input
                  type="checkbox"
                  checked={online}
                  onChange={(e) =>
                    setOnline(e.target.checked)
                  }
                />

                <span className="custom-checkbox">
                  ✓
                </span>

                <div>

                  <strong>
                    Online
                  </strong>

                  <small>
                    Atendo clientes à distância.
                  </small>

                </div>

              </label>


              {/* PRESENCIAL */}

              <label className="availability-option">

                <input
                  type="checkbox"
                  checked={presencial}
                  onChange={(e) =>
                    setPresencial(e.target.checked)
                  }
                />

                <span className="custom-checkbox">
                  ✓
                </span>

                <div>

                  <strong>
                    Presencial
                  </strong>

                  <small>
                    Atendo clientes presencialmente.
                  </small>

                </div>

              </label>


            </div>

          </section>


          {/* =========================================
              04 — PORTEFÓLIO
          ========================================= */}

          <section className="profile-form-section">

            <div className="form-section-heading">

              <span>04</span>

              <div>

                <h2>
                  Portefólio
                </h2>

                <p>
                  Mostra exemplos do teu trabalho, se tiveres.
                </p>

              </div>

            </div>


            <button
              type="button"
              className="portfolio-upload"
            >

              <span>
                +
              </span>

              <div>

                <strong>
                  Adicionar trabalhos
                </strong>

                <small>
                  Fotografias ou exemplos do teu trabalho
                </small>

              </div>

            </button>

          </section>


          {/* =========================================
              FINAL
          ========================================= */}

          <div className="create-profile-submit">

            <div>

              <strong>

                {isEditing
                  ? 'Tudo atualizado.'
                  : 'Quase lá.'}

              </strong>

              <p>

                {isEditing
                  ? 'Podes continuar a editar o teu perfil sempre que quiseres.'
                  : 'Podes editar o teu perfil mais tarde.'}

              </p>

            </div>


            <button
              type="submit"
              className="create-profile-button"
            >

              {isEditing
                ? 'Guardar alterações'
                : 'Criar perfil'}

              <span>
                →
              </span>

            </button>

          </div>


        </form>

      </main>

    </div>
  );
}

export default CreateProfessionalProfile;