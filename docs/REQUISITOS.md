# Checklist de Requisitos — Trabalho P1

Mapeamento de cada item do enunciado (atividade no AVA) para a evidência correspondente no repositório. Status em 22/09/2026: todos atendidos.

| # | Requisito | Status | Evidência | Como verificar |
|---|---|---|---|---|
| 1 | Página inicial com nome, apresentação e link para os projetos | ✅ | `src/Hero.tsx` | Abrir o site e conferir o bloco inicial |
| 2 | Seção sobre com trajetória e objetivo | ✅ | `src/Sobre.tsx` | Rolagem até "01 — Sobre mim" |
| 3 | Pelo menos 3 cards com projetos públicos reais | ✅ (6) | `src/data/projects.ts` (ordenação, recursividade, matrizes, React+Vite, migração, este site) | Clicar em "Ver repositório" em cada card |
| 4 | Contato pelo GitHub | ✅ | `src/Contato.tsx` → https://github.com/cwcasado | Botão "Vamos nos conectar" |
| 5 | Menu funcional também em telas estreitas | ✅ | `src/Header.tsx` — hamburger com `aria-expanded`, fecha com Escape e ao navegar | Redimensionar para < 760 px e testar |
| 6 | HTML semântico (`header`, `nav`, `main`, `section`, `article`, `footer`) | ✅ | `src/App.tsx`, `src/Projetos.tsx` (inclui `aside`) | Inspecionar o DOM |
| 7 | Foto pessoal | ✅ | `public/perfil-carlos.jpg` + `public/perfil-carlos.webp` (uso autorizado) | Seção inicial |
| 8 | Segundo tipo de mídia (áudio) com controles, sem autoplay | ✅ | `public/neon-afterhours.mp3` (servido) + `.wav` (fallback); `preload="none"` | Player em "Soundtrack // 01" |
| 9 | Animação CSS respeitando movimento reduzido | ✅ | `.status` em `src/App.css` + `@media (prefers-reduced-motion: reduce)` em `src/index.css` | Observar o indicador do início |
| 10 | Repositório acessível à professora com ≥ 3 commits claros | ✅ | https://github.com/cwcasado/meu-portifolio (8+ commits) | `git log --oneline` |
| 11 | ZIP sem `node_modules` + link do repo no AVA | ✅ | `portfolio-carlos-wagner.zip` (exclui `node_modules`, `.git`, `dist`) | Extrair e rodar `npm install && npm run dev` |
| 12 | Site e links testados antes do envio | ✅ | Lighthouse 100/100/100/100 (desktop); CI verde | Badges no README + `docs/RELATORIO-P1.md` § 5 |

**Observação:** os links externos usam `rel="noopener noreferrer"` e abrem em nova aba com aviso a leitores de tela.
