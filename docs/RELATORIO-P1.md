# Relatório Técnico — Trabalho P1 (Portfólio)

**Aluno:** Carlos Wagner de Souza Venceslao — Engenharia de Software, Universidade de Vassouras (Saquarema), 2026.2
**Disciplina:** Laboratório de Programação Front End · **Repositório:** https://github.com/cwcasado/meu-portifolio · **Site:** https://cwcasado.github.io/meu-portifolio/

## 1. Introdução

Este relatório descreve o desenvolvimento do portfólio pessoal exigido como trabalho P1: uma landing page estática que apresenta o aluno, seus projetos no GitHub e seus meios de contato. O foco do trabalho foi unir os conteúdos da disciplina (HTML semântico, CSS responsivo, componentização) a práticas profissionais de qualidade (tipagem estrita, lint, CI/CD e auditoria de performance).

## 2. Objetivos

- **Geral:** entregar um portfólio publicado, responsivo e acessível.
- **Específicos:** (a) componentizar a interface com React + TypeScript strict; (b) atender todos os itens do enunciado (ver `REQUISITOS.md`); (c) publicar com deploy automatizado; (d) atingir nota máxima nas quatro categorias do Lighthouse no desktop.

## 3. Metodologia

Desenvolvimento incremental em commits pequenos e testáveis: estrutura base → conteúdo real → responsividade/menu mobile → SEO e acessibilidade → otimização de mídia → CI/CD → auditoria Lighthouse. Cada etapa foi validada com `npm run lint`, `npx tsc -b` e `npm run build` antes do commit; o workflow `ci.yml` repete essa validação a cada push.

## 4. Desenvolvimento

### 4.1 Arquitetura

SPA com Vite e React 19, sem backend. Componentes de seção (`Hero`, `Sobre`, `Projetos`, `Contato`, `Footer`) compostos em `App.tsx`; dados dos projetos isolados em `src/data/projects.ts` (tipados via interface `Project`), o que permite adicionar projetos sem tocar no layout. Estilos em CSS puro com design tokens (`:root`), abordagem mobile-first e dois breakpoints (760 px e 360 px).

### 4.2 Decisões técnicas e tradeoffs

| Decisão | Motivo | Tradeoff |
|---|---|---|
| Menu hamburger com `aria-expanded`/`aria-controls` + fechamento por Escape | O menu inline espremia os links em telas estreitas, descumprindo o requisito | Pequeno estado local no `Header.tsx`; sem dependências |
| Foto 920×920 servida em WebP com fallback JPG | LCP era dominado pela foto original de 2332×2332 (890 KB) | Geração manual via Pillow; dois arquivos em `public/` |
| Áudio MP3 como fonte primária, WAV como fallback, `preload="none"` | Economiza ~1 MB no carregamento inicial; mantém o artefato original documentado | ZIP carrega os dois formatos |
| `base: '/meu-portifolio/'` + `import.meta.env.BASE_URL` | Exigência do GitHub Pages (site em subcaminho) | URLs de mídia via código em vez de caminho absoluto simples |
| `strict: true` no TypeScript | Regra de qualidade do projeto; impede `any` implícito | Nenhum custo em projeto deste porte |
| Bundle React (~230 KB) mantido | Trocar de framework para economizar KB seria over-engineering para um P1 | Meta de 100 KB de JS conscientemente não perseguida |

### 4.3 Acessibilidade e SEO

Skip link, landmarks (`header/nav/main/section/article/aside/footer`), `aria-labelledby` por seção, ícones decorativos com `aria-hidden`, foco visível, contraste do tema escuro, `prefers-reduced-motion` e player de áudio com rótulo e link de download. SEO: `description`, `author`, `theme-color`, Open Graph e Twitter Card com imagem absoluta.

## 5. Resultados

| Métrica | Valor |
|---|---|
| Lighthouse desktop (Performance · Acessibilidade · Boas práticas · SEO) | 100 · 100 · 100 · 100 |
| Foto: original → JPG otimizado → WebP servido | 890 KB → 125 KB → 83 KB |
| Áudio: WAV original → MP3 servido | 1.503 KB → 547 KB |
| Bundle de produção | JS ~230 KB (~72 KB gzip) · CSS ~9 KB |
| Projetos exibidos (todos com repositório real) | 6 cards + bloco de habilidades |
| Qualidade de código | ESLint 0 erros · `tsc --strict` limpo · CI verde a cada push |

## 6. Conclusão

Todos os objetivos foram atingidos: o portfólio cumpre cada item do enunciado (detalhe em `REQUISITOS.md`), está publicado com deploy automatizado e alcança nota máxima no Lighthouse para desktop. Como evolução futura, ficam a auditoria mobile do Lighthouse e a compressão adicional do bundle. O aprendizado central do trabalho foi aplicar o ciclo completo — codar, validar, otimizar com evidência e documentar — em vez de apenas "fazer a página funcionar".

## 7. Referências

- React — https://react.dev
- Vite — https://vite.dev
- MDN Web Docs — https://developer.mozilla.org
- WCAG 2.1 (W3C) — https://www.w3.org/TR/WCAG21/
- Lighthouse — https://developer.chrome.com/docs/lighthouse
