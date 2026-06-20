import {
  about,
  differentials,
  faqs,
  hero,
  metrics,
  navigation,
  plans,
  principles,
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
          <a className="brand" href="#inicio" aria-label="KOL início">
            <span className="brand-mark">K</span>
            <span>KOL</span>
          </a>

          <nav className="nav" aria-label="Navegação principal">
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
            <div className="hero-copy">
              <span className="eyebrow">{hero.eyebrow}</span>
              <h1>{hero.title}</h1>
              <p className="hero-description">{hero.description}</p>

              <div className="hero-actions">
                <a className="button" href="#contato">
                  Quero agendar
                </a>
                <a className="button secondary" href="#planos">
                  Ver planos
                </a>
              </div>

              <div className="hero-meta">
                {hero.highlights.map((item) => (
                  <div key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-image" aria-label="Foto da Thays Kohl">
              <div className="hero-portrait">
                <img
                  src="/images/thays.png"
                  alt="Thays Kohl"
                  fetchPriority="high"
                />
              </div>
              <div className="hero-visual-note">
                <span className="eyebrow">KOL</span>
                <strong>Presença, acolhimento e autoridade clínica.</strong>
                <p>
                  A foto real reforça a identidade da marca sem competir com a
                  mensagem principal da página.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt" id="sobre">
          <div className="container about-grid">
            <div className="about-copy">
              <span className="eyebrow">{about.eyebrow}</span>
              <h2>{about.title}</h2>

              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <div className="quote-panel">{about.quote}</div>
            </div>

            <div className="about-editorial">
              <div className="about-frame">
                <div className="about-frame-inner">
                  <span className="about-frame-kicker">{about.card.eyebrow}</span>
                  <div className="about-frame-copy">
                    <strong>{about.card.title}</strong>
                    <p>{about.card.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="servicos">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Serviços</span>
                <h2>Como a KOL pode te acompanhar</h2>
              </div>
              <p>
                O acompanhamento nutricional é construído para respeitar sua fase
                de vida, sua rotina e os objetivos que fazem sentido para você.
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
                <h2>Uma metodologia pensada para a mulher real</h2>
              </div>
              <p>
                Mais do que um plano alimentar, o acompanhamento é construído
                com proximidade, estratégia e adaptação à sua realidade.
              </p>
            </div>

            <div className="differentials">
              {differentials.map((item) => (
                <div className="differential" key={item}>
                  {item}
                </div>
              ))}
            </div>

            <div className="principles">
              {principles.map((item) => (
                <div className="principle" key={item.title}>
                  <span className="eyebrow">{item.title}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="planos">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Planos</span>
                <h2>Acompanhamentos pensados para diferentes momentos da sua jornada</h2>
              </div>
              <p>
                Escolha o formato ideal para o seu momento, com acompanhamento
                individualizado, ajustes estratégicos e suporte próximo durante o processo.
              </p>
            </div>

            <div className="grid three">
              {plans.map((plan) => (
                <article className="plan-card card" key={plan.title}>
                  <div className="plan-shell">
                    <span className="tag">{plan.tag}</span>
                    <h3>{plan.title}</h3>
                    <strong className="plan-price">{plan.price}</strong>

                    <p className="plan-highlight">{plan.highlight}</p>

                    <div className="plan-block">
                      <strong>Para quem é</strong>
                      <p>{plan.audience}</p>
                    </div>

                    <div className="plan-block">
                      <strong>O que inclui</strong>
                      <ul className="plan-list">
                        {plan.includes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <a className="button secondary" href="#contato">
                      Quero este plano
                    </a>
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
                <h2>Da avaliação inicial à sua evolução com consistência</h2>
              </div>
              <p>
                O acompanhamento é pensado para transformar orientação em prática,
                com um caminho claro, individualizado e sustentável.
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
            <div className="metrics metrics-stack">
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
                <h2>Dúvidas frequentes</h2>
              </div>
              <p>
                Algumas respostas para dúvidas comuns antes de iniciar seu acompanhamento.
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
              <h2>
                Comer bem hoje é o que garante a sua independência e vitalidade amanhã.
              </h2>
              <p>
                Invista no seu futuro com um acompanhamento nutricional pensado para
                a sua rotina, seus objetivos e a fase de vida que você está vivendo agora.
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
                <label htmlFor="phone">WhatsApp</label>
                <input
                  id="phone"
                  name="phone"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className="field">
                <label htmlFor="plan">Plano de interesse</label>
                <select id="plan" name="plan" defaultValue="">
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="mensal">Plano mensal</option>
                  <option value="trimestral">Plano trimestral</option>
                  <option value="semestral">Plano semestral</option>
                  <option value="nao-sei">Ainda não sei</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">Objetivo</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Conte brevemente o que você busca no acompanhamento."
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
            <a href="#inicio">Política de privacidade</a>
            <span>&copy; 2026 KOL</span>
          </div>
        </div>
      </footer>

      <a className="whatsapp-float" href={site.whatsapp} aria-label="WhatsApp">
        W
      </a>
    </>
  );
}
