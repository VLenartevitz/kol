import {
  differentials,
  faqs,
  metrics,
  navigation,
  portfolio,
  process,
  services,
  site,
  testimonials,
} from "../data/site-content";

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "KOL Nutrição em Saúde da Mulher",
    founder: site.professional,
    description:
      "Atendimento nutricional personalizado para saúde da mulher, estética, performance e rotina.",
    email: site.email,
    areaServed: "Brasil",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="KOL inicio">
            <span className="brand-mark">K</span>
            <span>KOL</span>
          </a>

          <nav className="nav" aria-label="Navegacao principal">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button" href="#contato">
            Agendar conversa
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">{site.descriptor}</span>
              <h1>Nutrir sua saúde e também a sua história.</h1>
              <p>
                Estratégias nutricionais personalizadas para mulheres que buscam
                performance, estética, autonomia e uma rotina alimentar possível
                de sustentar.
              </p>
              <div className="hero-actions">
                <a className="button" href="#contato">
                  Quero agendar
                </a>
                <a className="button secondary" href="#servicos">
                  Conhecer servicos
                </a>
              </div>
            </div>

            <div className="hero-media" aria-label="Identidade visual KOL">
              <img
                src="/images/brand/kol-hero.png"
                alt="KOL Nutricao por Thays Kohl"
                fetchPriority="high"
              />
              <div className="media-note">
                Cuidado nutricional com escuta, evidência e estratégia para a
                mulher em todas as fases.
              </div>
            </div>
          </div>
        </section>

        <section className="section alt" id="sobre">
          <div className="container about-grid">
            <div className="about-image">
              <img
                src="/images/brand/thays-profile.png"
                alt="Apresentacao de Thays Kohl"
                loading="lazy"
              />
            </div>
            <div className="about-copy">
              <span className="eyebrow">Sobre a KOL</span>
              <h2>Um olhar humano, técnico e integrativo.</h2>
              <p>
                A KOL nasce para atender mulheres que querem cuidar da
                alimentação sem perder sua rotina, suas preferências e sua
                individualidade. A metodologia une nutrição baseada em
                evidências, acompanhamento próximo e clareza para transformar
                orientações em prática.
              </p>
              <p>
                A frente da marca, Thays Kohl conduz um atendimento acolhedor e
                estratégico para saúde feminina, estética, esporte e mudanças de
                hábito com constância.
              </p>
              <div className="quote-panel">
                Comer bem hoje é o que protege sua vitalidade amanhã.
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="servicos">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Serviços</span>
                <h2>O que a KOL entrega</h2>
              </div>
              <p>
                Planos de cuidado para diferentes momentos: do primeiro ajuste
                alimentar a um acompanhamento premium com foco em transformação.
              </p>
            </div>

            <div className="grid four">
              {services.map((service, index) => (
                <article className="card" key={service.title}>
                  <span className="icon">{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="diferenciais">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Diferenciais</span>
                <h2>Por que escolher a KOL</h2>
              </div>
              <p>
                A metodologia foi desenhada para reduzir fricção, aumentar
                adesão e respeitar a vida real de cada paciente.
              </p>
            </div>
            <div className="differentials">
              {differentials.map((item) => (
                <div className="differential" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="cases">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Portfólio e planos</span>
                <h2>Caminhos de acompanhamento</h2>
              </div>
              <p>
                Estrutura preparada para substituir por cases reais, projetos,
                depoimentos ou pacotes finais quando a copy comercial estiver
                fechada.
              </p>
            </div>
            <div className="grid three">
              {portfolio.map((item) => (
                <article className="portfolio-card card" key={item.title}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="card">
                    <span className="tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="processo">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Processo</span>
                <h2>Da conversa inicial à evolução</h2>
              </div>
              <p>
                Uma jornada simples para que a paciente saiba exatamente o que
                acontece depois do primeiro contato.
              </p>
            </div>
            <div className="process-list">
              {process.map((item) => (
                <article className="process-card" key={item.step}>
                  <span className="step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container proof-grid">
            <div className="metrics">
              {metrics.map((metric) => (
                <div className="metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
            <div className="testimonials">
              {testimonials.map((testimonial) => (
                <blockquote className="testimonial" key={testimonial.quote}>
                  <p>"{testimonial.quote}"</p>
                  <strong>{testimonial.author}</strong>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="faq">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">FAQ</span>
                <h2>Duvidas frequentes</h2>
              </div>
              <p>
                Respostas para objeções comuns antes do agendamento. Tudo pode
                ser refinado quando os detalhes comerciais forem definidos.
              </p>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details className="faq" key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contato">
          <div className="container contact">
            <div className="contact-panel">
              <span className="eyebrow">CTA final</span>
              <h2>Vamos desenhar seu plano?</h2>
              <p>
                Envie uma mensagem para iniciar o atendimento ou deixe seus
                dados no formulário. O CTA pode apontar para WhatsApp, CRM ou
                ferramenta de formulário na próxima etapa.
              </p>
              <div className="section-actions">
                <a className="button" href={site.whatsapp}>
                  Chamar no WhatsApp
                </a>
              </div>
            </div>

            <form className="form" action={site.whatsapp}>
              <div className="field">
                <label htmlFor="name">Nome</label>
                <input id="name" name="name" placeholder="Seu nome" />
              </div>
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="voce@email.com"
                />
              </div>
              <div className="field">
                <label htmlFor="message">Objetivo</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Conte brevemente o que você busca."
                />
              </div>
              <button className="button" type="submit">
                Enviar interesse
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer">
          <div>
            <a className="brand" href="#inicio">
              <span className="brand-mark">K</span>
              <span>KOL</span>
            </a>
            <p>
              {site.descriptor} por {site.professional}. {site.location}.
            </p>
          </div>
          <div className="footer-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.instagram}>Instagram</a>
            <a href="#inicio">Politica de privacidade</a>
            <span>© 2026 KOL</span>
          </div>
        </div>
      </footer>

      <a className="whatsapp-float" href={site.whatsapp} aria-label="WhatsApp">
        W
      </a>
    </>
  );
}
