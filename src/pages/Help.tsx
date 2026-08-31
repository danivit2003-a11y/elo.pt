import { useState } from 'react';
import BackButton from './components/BackButton';
import './Help.css';

type FAQItem = {
  question: string;
  answer: string;
};

const clientFAQs: FAQItem[] = [
  {
    question: 'Como posso procurar um serviço?',
    answer:
      'Podes utilizar a barra de pesquisa para indicar aquilo de que precisas e a localização onde procuras o serviço.',
  },
  {
    question: 'Como posso contactar um profissional?',
    answer:
      'Depois de encontrares um profissional, podes consultar o seu perfil e entrar em contacto diretamente através da plataforma.',
  },
  {
    question: 'Posso guardar profissionais nos favoritos?',
    answer:
      'Sim. Podes guardar os profissionais que mais te interessam nos teus favoritos.',
  },
  {
    question: 'Como posso publicar um pedido?',
    answer:
      'Se não encontrares exatamente o que procuras, podes publicar um pedido com os detalhes daquilo de que precisas.',
  },
];

const professionalFAQs: FAQItem[] = [
  {
    question: 'Como posso criar um perfil profissional?',
    answer:
      'Cria uma conta e seleciona a opção de profissional. Depois poderás criar o teu perfil e indicar os serviços que ofereces.',
  },
  {
    question: 'Como posso receber pedidos de clientes?',
    answer:
      'Depois de criares o teu perfil, poderás encontrar pedidos compatíveis com os teus serviços.',
  },
  {
    question: 'Posso apresentar vários serviços?',
    answer:
      'Sim. O teu perfil pode apresentar os diferentes serviços que ofereces.',
  },
];

const accountFAQs: FAQItem[] = [
  {
    question: 'Como posso alterar os meus dados?',
    answer:
      'Podes consultar a área do teu perfil para atualizar as informações associadas à tua conta.',
  },
  {
    question: 'Esqueci-me da minha palavra-passe. O que faço?',
    answer:
      'Utiliza a opção de recuperação de palavra-passe disponível na página de entrada.',
  },
  {
    question: 'Como funciona a subscrição ELO?',
    answer:
      'A ELO funciona através de uma subscrição mensal que permite utilizar as funcionalidades da plataforma.',
  },
];
const securityFAQs: FAQItem[] = [
  {
    question: 'Como posso utilizar a ELO em segurança?',
    answer:
      'Mantém os teus dados pessoais protegidos e comunica através da plataforma sempre que possível. Nunca partilhes palavras-passe ou informações sensíveis.',
  },
  {
    question: 'Como posso denunciar um problema?',
    answer:
      'Se encontrares algum comportamento inadequado ou situação que te preocupe, podes entrar em contacto connosco através da página de Contactos.',
  },
  {
    question: 'O que devo fazer se tiver um problema com um profissional?',
    answer:
      'Se tiveres algum problema com um profissional, contacta a ELO para que possamos analisar a situação e ajudar-te.',
  },
];

function FAQSection({
  title,
  items,
  id,
}: {
  title: string;
  items: FAQItem[];
  id: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
  id={id}
  className="help-faq-section"
>
      <h2>{title}</h2>

      <div className="help-faq-list">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              className={`help-faq-item ${isOpen ? 'open' : ''}`}
              key={item.question}
            >
              <button
                type="button"
                className="help-faq-question"
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
              >
                <span>{item.question}</span>
                <span className="help-faq-icon">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div className="help-faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Help() {
  return (
    <div className="help-page">

      <header className="help-navbar">

        <div className="help-navbar-left">
          <BackButton />

          <a href="/" className="help-logo">
            ELO<span>.</span>
          </a>
        </div>

        <nav className="help-nav">
          <a href="/client-home">Início</a>
          <a href="/search">Procurar serviços</a>
          <a href="/requests">Os meus pedidos</a>
          <a href="/favorites">Favoritos</a>
        </nav>

        <div className="help-actions">
          <a href="/login" className="help-login">
            Entrar
          </a>

          <a href="/register" className="help-register">
            Criar conta
          </a>
        </div>

      </header>

      <main>

        <section className="help-hero">

          <span className="help-label">
            CENTRO DE AJUDA
          </span>

          <h1>
            Como podemos
            <br />
            <em>ajudar?</em>
          </h1>

          <p>
            Encontra respostas para as dúvidas mais
            frequentes sobre a ELO.
          </p>

          <div className="help-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Pesquisa uma dúvida..."
            />
          </div>

        </section>

        <section className="help-categories">

        <div
  className="help-category"
  onClick={() =>
    document.getElementById('faq-clientes')?.scrollIntoView({
      behavior: 'smooth',
    })
  }
>
            <span className="help-category-icon">◌</span>

            <div>
              <h3>Para clientes</h3>
              <p>
                Procurar serviços, contactar profissionais
                e fazer pedidos.
              </p>
            </div>
          </div>

          <div
  className="help-category"
  onClick={() =>
    document.getElementById('faq-profissionais')?.scrollIntoView({
      behavior: 'smooth',
    })
  }
>
            <span className="help-category-icon">✦</span>

            <div>
              <h3>Para profissionais</h3>
              <p>
                Criar o teu perfil e encontrar novas
                oportunidades.
              </p>
            </div>
          </div>

          <div
  className="help-category"
  onClick={() =>
    document.getElementById('faq-conta')?.scrollIntoView({
      behavior: 'smooth',
    })
  }
>
            <span className="help-category-icon">□</span>

            <div>
              <h3>Conta e subscrição</h3>
              <p>
                Informações sobre a tua conta e a
                subscrição ELO.
              </p>
            </div>
          </div>

          <div
  className="help-category"
  onClick={() =>
    document.getElementById('faq-seguranca')?.scrollIntoView({
      behavior: 'smooth',
    })
  }
>
            <span className="help-category-icon">♡</span>

            <div>
              <h3>Segurança</h3>
              <p>
                Dicas para uma utilização segura da
                plataforma.
              </p>
            </div>
          </div>

        </section>

        <div className="help-content">

        <FAQSection
  id="faq-clientes"
  title="Para clientes"
  items={clientFAQs}
/>

<FAQSection
  id="faq-profissionais"
  title="Para profissionais"
  items={professionalFAQs}
/>

<FAQSection
  id="faq-conta"
  title="Conta e subscrição"
  items={accountFAQs}
/>

<FAQSection
  id="faq-seguranca"
  title="Segurança"
  items={securityFAQs}
/>

        </div>

        <section className="help-contact">

          <div>

            <span className="help-label">
              AINDA PRECISAS DE AJUDA?
            </span>

            <h2>
              Estamos aqui
              <br />
              <em>para ajudar.</em>
            </h2>

            <p>
              Se não encontraste a resposta que procuravas,
              entra em contacto connosco.
            </p>

            <a
  href="/help-contact"
  className="help-contact-button"
>
              Contactar a ELO
              <span>→</span>
            </a>

          </div>

          <span className="help-contact-number">
            01
          </span>

        </section>

      </main>

      <footer className="help-footer">

        <div className="help-footer-brand">

          <a href="/" className="help-logo">
            ELO<span>.</span>
          </a>

          <p>
            Ligamos pessoas.
            <br />
            Resolvemos necessidades.
          </p>

        </div>

        <div className="help-footer-links">

          <div>
            <strong>Plataforma</strong>

            <a href="/search">
              Procurar serviços
            </a>

            <a href="/#categorias">
              Categorias
            </a>

            <a href="/#como-funciona">
              Como funciona
            </a>

            <a href="/#profissionais">
              Para profissionais
            </a>
          </div>

          <div>
            <strong>Ajuda</strong>

            <a href="/help">
              Centro de ajuda
            </a>

            <a href="/contact">
              Contactos
            </a>

            <a href="/help">
              Segurança
            </a>
          </div>

          <div>
            <strong>Legal</strong>

            <a href="#">
              Termos
            </a>

            <a href="#">
              Privacidade
            </a>

            <a href="#">
              Cookies
            </a>
          </div>

        </div>

        <div className="help-footer-bottom">

          <span>
            © 2026 ELO. Todos os direitos reservados.
          </span>

          <span>
            Feito para aproximar pessoas.
          </span>

        </div>

      </footer>

    </div>
  );
}

export default Help;