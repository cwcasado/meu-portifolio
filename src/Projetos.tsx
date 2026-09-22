import { projects } from './data/projects'

export default function Projetos() {
  return (
    <section id="projetos" className="section projects" aria-labelledby="titulo-projetos">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 — PROJETOS &amp; HABILIDADES</p>
          <h2 id="titulo-projetos">Da teoria à prática.</h2>
        </div>
        <p>
          Um pouco do que estou
          <br />
          estudando e desenvolvendo.
        </p>
      </div>
      <div className="cards-container">
        {projects.map((project) => (
          <article className="card" key={project.number}>
            <div className={`card-art ${project.style}`} aria-hidden="true">
              <span>{project.symbol}</span>
              <small>{project.number}</small>
            </div>
            <div className="card-copy">
              <p className="eyebrow">{project.tag}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="card-tech">{project.tech}</div>
              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver repositório <span aria-hidden="true">↗</span>
                <span className="sr-only">: {project.title} (abre em nova aba)</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <aside className="soundtrack" aria-label="Trilha sonora">
        <div>
          <p className="eyebrow">SOUNDTRACK // 01</p>
          <h3>Neon Afterhours</h3>
          <p>Sintetizadores, pulsos noturnos e um futuro em neon.</p>
        </div>
        <audio
          controls
          preload="none"
          aria-label="Reproduzir Neon Afterhours, trilha instrumental"
        >
          <source src="/neon-afterhours.mp3" type="audio/mpeg" />
          <source src="/neon-afterhours.wav" type="audio/wav" />
          Seu navegador não suporta áudio.{' '}
          <a href="/neon-afterhours.mp3">Baixar música</a>
        </audio>
      </aside>
    </section>
  )
}
