export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div>
        <p className="eyebrow"><span className="status" /> EM CONSTANTE APRENDIZADO</p>
        <h1>Olá, eu sou<br /><span>Carlos Wagner.</span></h1>
        <p className="hero-description">Carlos Wagner de Souza Venceslao.<br />Estudante de Engenharia de Software.<br />Transformando curiosidade em código e ideias em experiências.</p>
        <a className="btn" href="#projetos">Explore meu trabalho <span>↗</span></a>
        <div className="hero-tags"><span>Python</span><span>C++</span><span>React & TypeScript</span></div>
      </div>
      <figure className="hero-art">
        <div className="portrait-label"><span>PERFIL // CW</span><span>2026</span></div>
        <div className="portrait-frame"><img src="/perfil-carlos.jpg" alt="Retrato de Carlos Wagner em preto e branco" width="460" height="460" /><span className="portrait-cross" aria-hidden="true">+</span></div>
        <figcaption><span>@CWCASADO</span><span>ENGENHARIA DE SOFTWARE</span></figcaption>
      </figure>
    </section>
  )
}

