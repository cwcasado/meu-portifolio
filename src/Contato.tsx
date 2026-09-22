import { GITHUB_URL } from './data/projects'

export default function Contato() {
  return (
    <section id="contato" className="contact section" aria-labelledby="titulo-contato">
      <p className="eyebrow">03 — CONTATO</p>
      <h2 id="titulo-contato">
        Boas ideias começam
        <br />
        com uma <em>conversa.</em>
      </h2>
      <p>
        Quer conhecer meus estudos ou trocar uma ideia sobre tecnologia?
        <br />
        Encontre-me no GitHub.
      </p>
      <a className="btn" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
        Vamos nos conectar <span aria-hidden="true">↗</span>
      </a>
      <span className="contact-handle">github.com/cwcasado</span>
    </section>
  )
}
