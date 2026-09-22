# Portfólio — Trabalho P1 de Laboratório de Programação Front End

[![CI](https://github.com/cwcasado/meu-portifolio/actions/workflows/ci.yml/badge.svg)](https://github.com/cwcasado/meu-portifolio/actions/workflows/ci.yml)
[![Deploy](https://github.com/cwcasado/meu-portifolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/cwcasado/meu-portifolio/actions/workflows/deploy.yml)

🌐 **Site no ar:** https://cwcasado.github.io/meu-portifolio/

## 1. Identificação acadêmica

| Item | Descrição |
|------|-----------|
| Instituição | Universidade de Vassouras — Campus Saquarema |
| Curso | Engenharia de Software |
| Disciplina | Laboratório de Programação Front End |
| Trabalho | P1 — Portfólio pessoal (landing page) |
| Semestre | 2026.2 |
| Aluno | Carlos Wagner de Souza Venceslao |
| Professor(a) | *(a preencher)* |
| Repositório | https://github.com/cwcasado/meu-portifolio |
| Site publicado | https://cwcasado.github.io/meu-portifolio/ |

## 2. Resumo

Landing page de portfólio pessoal desenvolvida com React, TypeScript e Vite. A página apresenta o aluno, seis projetos reais hospedados no GitHub, um bloco de habilidades, seção de contato e dois tipos de mídia local (foto e trilha sonora autoral). O projeto segue HTML semântico, layout responsivo com menu mobile acessível e pipeline de CI/CD com publicação automática no GitHub Pages.

Documentação complementar em [`docs/`](docs/): relatório técnico ([`RELATORIO-P1.md`](docs/RELATORIO-P1.md)) e checklist de requisitos ([`REQUISITOS.md`](docs/REQUISITOS.md)).

## 3. Objetivos

- **Geral:** construir um portfólio web funcional que apresente a trajetória e os projetos do aluno.
- **Específicos:**
  1. Aplicar componentização com React e tipagem estrita com TypeScript.
  2. Garantir responsividade (desktop e telas estreitas) e acessibilidade básica (WCAG AA como referência).
  3. Publicar o site com deploy automatizado e versionar o código com commits claros.

## 4. Requisitos da atividade e atendimento

| Requisito (enunciado no AVA) | Atendimento | Evidência |
|---|---|---|
| Página inicial com apresentação | ✅ | `src/Hero.tsx` — nome, descrição, link para projetos |
| Seção sobre | ✅ | `src/Sobre.tsx` — trajetória e objetivo |
| Pelo menos 3 projetos reais | ✅ (6 projetos) | `src/data/projects.ts` + `src/Projetos.tsx` |
| Contato pelo GitHub | ✅ | `src/Contato.tsx` → https://github.com/cwcasado |
| Menu funcional em telas estreitas | ✅ | `src/Header.tsx` — botão hamburger com `aria-expanded`, fecha com Escape |
| HTML semântico | ✅ | `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` |
| Foto pessoal + 2º tipo de mídia | ✅ | `public/perfil-carlos.jpg` (+ WebP) e trilha `Neon Afterhours` (MP3 servido, WAV como fallback) |
| Animação CSS | ✅ | Indicador pulsante no início, com `prefers-reduced-motion` |
| Repositório acessível + ≥ 3 commits | ✅ | 8+ commits com mensagens claras |
| ZIP sem `node_modules` + link do repo no AVA | ✅ | `portfolio-carlos-wagner.zip` (ver § 8) |

Detalhamento item a item em [`docs/REQUISITOS.md`](docs/REQUISITOS.md).

## 5. Tecnologias

| Camada | Tecnologia |
|---|---|
| Interface | React 19 + TypeScript (strict) |
| Build | Vite 8 |
| Estilos | CSS puro (design tokens em `:root`, mobile-first) |
| Qualidade | ESLint + `tsc -b` |
| CI/CD | GitHub Actions (`ci.yml` + `deploy.yml`) → GitHub Pages |
| Mídia | Foto otimizada (WebP/JPG via Pillow); áudio MP3/WAV via FFmpeg |

Sem API, banco de dados ou Docker — site 100% estático.

## 6. Estrutura do projeto

```text
├── index.html              # SEO (Open Graph, theme-color, description)
├── public/                 # foto, trilha sonora, favicon
├── scripts/                # generate_music.py (gera a trilha; opcional)
├── src/
│   ├── App.tsx             # composição + skip link
│   ├── Header.tsx          # marca + menu mobile acessível
│   ├── Hero.tsx            # apresentação + foto (WebP com fallback)
│   ├── Sobre.tsx           # biografia
│   ├── Projetos.tsx        # 6 cards + bloco de habilidades + player
│   ├── Contato.tsx         # chamada para o GitHub
│   ├── Footer.tsx          # rodapé
│   ├── data/projects.ts    # dados dos projetos e habilidades
│   ├── App.css / index.css # estilos e responsividade
├── docs/                   # relatório técnico e checklist de requisitos
└── .github/workflows/      # CI (lint+build) e Deploy (Pages)
```

Arquivos por componente em "Personalizar" (abaixo) indicam onde editar cada seção.

## 7. Como executar e validar

Pré-requisito: Node.js 22.12+ (ou 24) e npm.

```sh
npm install
npm run dev      # ambiente local
npm run lint     # ESLint — 0 erros
npm run build    # tsc + build de produção em dist/
npm run preview  # serve a versão de produção
```

## 8. Resultados

- **Lighthouse (desktop):** Performance 100 · Acessibilidade 100 · Boas práticas 100 · SEO 100.
- **Otimização de mídia:** foto 890 KB → 125 KB (JPG 920×920) → 83 KB (WebP servido, JPG como fallback); áudio WAV 1.503 KB → MP3 547 KB com `preload="none"`.
- **Bundle:** JS ~230 KB (~72 KB gzip) · CSS ~9 KB — baseline do React via Vite.

Metodologia e decisões técnicas em [`docs/RELATORIO-P1.md`](docs/RELATORIO-P1.md).

## 9. Personalizar

- `src/Hero.tsx`: nome e apresentação.
- `src/Sobre.tsx`: biografia.
- `src/Projetos.tsx`: cards e links.
- `src/Contato.tsx`: contato.
- `src/data/projects.ts`: dados dos projetos e URL do GitHub.
- `src/Footer.tsx`: rodapé.
- `src/Header.tsx`: marca + menu mobile acessível (botão com `aria-expanded`, fecha com Escape).
- `src/App.css` e `src/index.css`: aparência e responsividade.

## 10. Entrega no AVA — realizada ✅

1. ✅ Versão final publicada neste repositório: https://github.com/cwcasado/meu-portifolio.
2. ✅ Repositório acessível à professora, com commits de mensagens claras (8+).
3. ✅ `portfolio-carlos-wagner.zip` enviado na atividade do AVA, sem `node_modules`.
4. ✅ Link do repositório colado no campo/comentário da atividade.
5. ✅ Site e links testados (Lighthouse 100/100/100/100 no desktop).

O ZIP não inclui `node_modules`, `.git` ou `dist`. Instale as dependências após extrair.

## 11. Referências

- Documentação do React — https://react.dev
- Documentação do Vite — https://vite.dev
- MDN Web Docs (HTML, CSS, ARIA) — https://developer.mozilla.org
- WCAG 2.1 (W3C) — https://www.w3.org/TR/WCAG21/
- Web.dev / Lighthouse — https://developer.chrome.com/docs/lighthouse

## 12. Autoria

Trabalho individual de Carlos Wagner de Souza Venceslao para a disciplina Laboratório de Programação Front End (2026.2). A foto é pessoal (uso autorizado pelo próprio autor) e a trilha `Neon Afterhours` é composição original sintetizada via `scripts/generate_music.py`, sem samples externos.
