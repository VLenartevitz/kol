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
import { ProcessTimeline } from "./components/process-timeline";
import { FaqAccordion } from "./components/faq-accordion";

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
            <img src="/images/logo.png" alt="KOL" />
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
                  src="/images/thaysSemFundo.png"
                  alt="Thays Kohl"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[
              "Nutrição personalizada",
              "Saúde da mulher",
              "Nutrição estética",
              "Nutrição esportiva",
              "Performance",
              "Bem-estar",
              "Acompanhamento contínuo",
              "Plano individualizado",
              "Atendimento online",
              "Saúde hormonal",
              "Composição corporal",
              "Longevidade",
            ]
              .concat([
                "Nutrição personalizada",
                "Saúde da mulher",
                "Nutrição estética",
                "Nutrição esportiva",
                "Performance",
                "Bem-estar",
                "Acompanhamento contínuo",
                "Plano individualizado",
                "Atendimento online",
                "Saúde hormonal",
                "Composição corporal",
                "Longevidade",
              ])
              .map((kw, i) => (
                <span key={i}>{kw}</span>
              ))}
          </div>
        </div>

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

            <ProcessTimeline steps={process} />
          </div>
        </section>

        {/* <section className="section">
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
        </section> */}

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

            <FaqAccordion items={faqs} />
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
                <a className="button whatsappbtn" href={site.whatsapp}>
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
              <img src="/images/logo.png" alt="KOL" />
            </a>
            <p>
              {site.descriptor} por {site.professional}. {site.location}.
            </p>
          </div>

          <div className="footer-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`mailto:${site.email2}`}>{site.email2}</a>

            <a href={site.instagram}>Instagram</a>
            <a href="#inicio">Política de privacidade</a>
            <span>&copy; 2026 KOL</span>
          </div>
        </div>
      </footer>

      <a className="whatsapp-float" href={site.whatsapp} aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
