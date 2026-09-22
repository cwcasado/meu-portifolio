import { useEffect, useState } from 'react'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato ↗' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open ])

  return (
    <header className="header">
      <a className="brand" href="#inicio" aria-label="Portfólio, início">
        c<span>.</span>
      </a>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="navegacao-principal"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true">{open ? '✕' : '☰'}</span>
      </button>
      <nav
        id="navegacao-principal"
        aria-label="Navegação principal"
        data-open={open}
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
