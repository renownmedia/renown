import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const lightSection = document.querySelector('.light-sections');
      if (lightSection) {
        const rect = lightSection.getBoundingClientRect();
        const scrollPosition = window.scrollY + rect.top;
        setShowScrollButton(scrollPosition <= window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const row1Text = "ONLINE PRESENCE SOCIAL MEDIA CONTENT VIDEA FOTOGRAFIE GRAFIKA DIGITÁLNÍ MARKETING EDIT GEN Z ANALYTIKA";
  const row2Text = "DIGITÁLNÍ MARKETING EDIT GEN Z ANALYTIKA ONLINE PRESENCE SOCIAL MEDIA CONTENT VIDEA FOTOGRAFIE GRAFIKA";

  const services = [
    {
      title: "Social media - správa",
      description: "Postaráme se o vaše sociální sítě. Vhodné pro ty, kteří chtějí zvýšit povědomí o značce a budovat loajalitu."
    },
    {
      title: "Tvorba contentu",
      description: "Navrhneme a vytvoříme vám content pro PPC nebo organický dosah. Od nápadu až po postprodukci a schválení."
    },
    {
      title: "Edit videí",
      description: "Nemáte čas zpracovat všechen content, který máte na disku? Ozvěte se nám a edit vyřešíme za vás."
    }
  ];

  const processSteps = [
    { number: "1", title: "Kontaktujte nás" },
    { number: "2", title: "Úvodní Meeting a smlouva" },
    { number: "3", title: "Práce na domluveném projektu" },
    { number: "4", title: "Optimalizace a reporting" }
  ];

  const faqItems = [
    {
      question: "Jak s vámi mohu začít spolupracovat?",
      answer: "Stačí nás kontaktovat prostřednictvím e-mailu nebo přes sociální sítě. Domluvíme se na úvodní bezplatné konzultaci, kde probereme vaše potřeby, cíle a vybereme vhodnou službu."
    },
    {
      question: "Jaké jsou platební podmínky?",
      answer: "Po úvodní konzultaci spolu sepíšeme smlouvu, která chrání zájmy obou stran a zajišťuje jasné podmínky doručení služeb. Po podpisu smlouvy a před zahájením prací se hradí 50% částky předem, jakmile obdržíme platbu na účet začneme ihned pracovat na vašem projektu. Zbývající část se doplácí dle domluveného termínu uvedeného ve smlouvě. Tímto způsobem zajišťujeme hladkou realizaci projektu a vaši spokojenost"
    },
    {
      question: "Kolik stojí vaše služby?",
      answer: "Platby jsou nastaveny individuálně podle typu a rozsahu projektu. Podrobnosti s vámi probereme během úvodní bezplatné konzultace."
    },
    {
      question: "Jaké ostatní služby nabízíte?",
      answer: "Nabízíme tvorbu obsahu, specializujeme se na krátká videa a správu sociálních sítí, zařídíme grafiku, videa a fotografie, analytika nebo si s námi můžete domluvit konzultaci a rádi vám poradíme s oblastí digitálního marketingu."
    },
    {
      question: "Kdy dostanu odpověď na email?",
      answer: "Na vaše zprávy odpovídáme průběžně a zpravidla se vám dostane odpovědi do 1–2 pracovních dnů."
    }
  ];

  return (
    <div className="app">
      <nav className="nav-bar">
        <div className="nav-logo">
          <img src="/images/logo.png" alt="Renown Media" className="nav-logo-img" />
          <span className="nav-logo-text">Renown Media</span>
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('sluzby')}>služby</button>
          <button onClick={() => scrollToSection('reference')}>portfolio</button>
          <button onClick={() => scrollToSection('o-nas')}>o nás</button>
          <button className="nav-contact-btn" onClick={() => scrollToSection('kontakt')}>
            kontakt
          </button>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text-box">
            <h1>Digitální marketing & content</h1>
            <p>Zvyšte povědomí o vaší značce, získejte nové zákazníky a budujte jejich loajalitu.</p>
            <div className="hero-buttons">
              <button onClick={() =>scrollToSection('kontakt')} className="primary-btn">Kontaktujte nás</button>
              <button onClick={() => scrollToSection('sluzby')} className="secondary-btn">Služby</button>
            </div>
          </div>
          <div className="hero-logo">
            <img src="/images/logo-large.png" alt="Renown Media Logo" />
          </div>
        </div>

        <div className="marquee-container">
          <div className="marquee-wrap">
            <div className="marquee-text">
              <span className="marquee-part">{row1Text}</span>
              <span className="marquee-part">{row1Text}</span>
              <span className="marquee-part">{row1Text}</span>
              <span className="marquee-part">{row1Text}</span>
            </div>
          </div>
          <div className="marquee-wrap">
            <div className="marquee-text marquee-reverse">
              <span className="marquee-part">{row2Text}</span>
              <span className="marquee-part">{row2Text}</span>
              <span className="marquee-part">{row2Text}</span>
              <span className="marquee-part">{row2Text}</span>
            </div>
          </div>
        </div>

        <div className="team-statement">
          <h2>Jsme tým, který pomáhá firmám i jednotlivcům růst ve světě onlinu.</h2>
        </div>
      </section>

      <div className="light-sections">
        <button 
          onClick={scrollToTop} 
          className="scroll-to-top" 
          style={{ display: showScrollButton ? 'flex' : 'none' }}
          aria-label="Scroll to top"
        >
          ↑
        </button>

        <section className="services-section" id="sluzby">
          <h2>Služby</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="zjistit-vice">
                  + Zjistit více
                </button>
              </div>
            ))}
          </div>
          <button className="contact-button">
            Kontaktujte nás
          </button>
        </section>

        <section className="process-section">
          <h2>Proces spolupráce</h2>
          <div className="process-grid">
            {processSteps.map((step) => (
              <div key={step.number} className={`process-step step-${step.number}`}>
                <span className="step-number">{step.number.padStart(2, '0')}</span>
                <span className="step-title">{step.title}</span>
              </div>
            ))}
          </div>
        </section>

  

        <section className="about-section" id="o-nas">
          <h2>O nás</h2>
          <div className="about-content">
            <div className="about-logo">
              <img src="/images/logo-large.png" alt="Renown Media Logo" />
            </div>
            <div className="about-text">
              <h3>Renown Media</h3>
              <p>
                Jsme mladý tým sestavený z generace Z, který baví oblast digitálního marketingu a v online světě jsme jako doma. 
                Pomůžeme vám vytvořit content, který rezonuje s vašimi diváky, správou sociálních sítí a nebo edit videí. 
                Naším cílem je kvalita, smysluplnost a poskytnutí individuálního přístupu.
              </p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <h2>Časté dotazy (FAQ)</h2>
          <div className="faq-container">
            {faqItems.map((item, index) => (
              <div 
              key={index} 
              className="faq-item"
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <span>{item.question}</span>
                <div className={`faq-toggle ${expandedFaq === index ? 'expanded' : ''}`}>
                  <span>+</span>
                </div>
              </div>
              <div className={`faq-answer ${expandedFaq === index ? 'expanded' : ''}`}>
                {item.answer}
              </div>
            </div>
            ))}
          </div>
        </section>
        <section className="contact-section" id="kontakt">
  <h2>Kontaktujte nás</h2>
  
  <div className="contact-email">
    <h3>EMAIL</h3>
    <a href="mailto:renownmediateam@gmail.com" className="email-button">
      📧 renownmediateam@gmail.com
    </a>
  </div>

  <div className="social-section">
    <h3>SOCIÁLNÍ SÍTĚ</h3>
    <div className="social-links">
      <a href="#" className="social-link" aria-label="Facebook">
        f
      </a>
      <a href="#" className="social-link" aria-label="Instagram">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1.5" />
        </svg>
      </a>
      <a href="#" className="social-link" aria-label="LinkedIn">
        in
      </a>
    </div>
  </div>

  <footer className="footer">
    <div className="footer-links">
      <a href="#">Cookies</a>
      <a href="#">Obchodní podmínky</a>
    </div>
    <div>
      Copyright 2024, Virtigo
    </div>
  </footer>
</section>
      </div>
    </div>
  );
}

export default App;