export interface Project {
  number: string
  url: string
  tag: string
  title: string
  description: string
  tech: string
  symbol: string
  style: 'map' | 'python' | 'cpp' | 'react' | 'legacy'
}

export const projects: Project[] = [
  {
    number: '01',
    url: 'https://github.com/cwcasado/Algoritmos_sort',
    tag: 'ALGORITMOS',
    title: 'Algoritmos de ordenação',
    description:
      'Trabalho de apresentação de nove algoritmos de ordenação. Um estudo em Python sobre diferentes formas de organizar dados.',
    tech: 'Python · Ordenação',
    symbol: '◎',
    style: 'map',
  },
  {
    number: '02',
    url: 'https://github.com/cwcasado/algoritmos-segundo-per-odo-lista-4',
    tag: 'LÓGICA & PRÁTICA',
    title: 'Funções recursivas',
    description:
      'Exercícios de funções recursivas em Python. Explorando a resolução de problemas a partir de versões menores do mesmo problema.',
    tech: 'Python · Recursividade',
    symbol: '>_',
    style: 'python',
  },
  {
    number: '03',
    url: 'https://github.com/cwcasado/Exerc-cio-algoritmo',
    tag: 'FUNDAMENTOS',
    title: 'Explorando matrizes',
    description:
      'Exercícios em Python para aprender sobre matrizes. Praticando a organização de dados e desenvolvendo o raciocínio lógico.',
    tech: 'Python · Matrizes',
    symbol: '{ }',
    style: 'cpp',
  },
  {
    number: '04',
    url: 'https://github.com/cwcasado/Aula03_-React-Vite-Docker-portf-lio',
    tag: 'FRONT-END',
    title: 'Portfólio em React + Vite',
    description:
      'Exercício de aula: segunda versão de portfólio construída com React, Vite e TypeScript. Onde pratiquei componentes e build moderno.',
    tech: 'React · TypeScript · Vite',
    symbol: '</>',
    style: 'react',
  },
  {
    number: '05',
    url: 'https://github.com/cwcasado/Migra-o-',
    tag: 'ENGENHARIA DE SOFTWARE',
    title: 'Migração de sistemas',
    description:
      'Migração de programas em Java, C e COBOL para Python, com documento de requisitos funcionais. Um estudo de modernização de legados.',
    tech: 'Python · Java · COBOL · Requisitos',
    symbol: '⇄',
    style: 'legacy',
  },
  {
    number: '06',
    url: 'https://github.com/cwcasado/meu-portifolio',
    tag: 'ESTE SITE',
    title: 'Este portfólio no GitHub',
    description:
      'O código-fonte desta página: landing page responsiva com menu mobile acessível, SEO, mídias otimizadas e pipeline de CI.',
    tech: 'React · TypeScript · CSS · CI',
    symbol: '✦',
    style: 'map',
  },
]

export const GITHUB_URL = 'https://github.com/cwcasado'

export interface SkillGroup {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { label: 'LINGUAGENS', items: ['Python', 'TypeScript', 'Java', 'C', 'COBOL', 'HTML/CSS'] },
  { label: 'FERRAMENTAS', items: ['React', 'Vite', 'Git & GitHub'] },
  { label: 'PRÁTICAS', items: ['Algoritmos', 'Requisitos (RF)', 'Migração de legados', 'Acessibilidade (WCAG)'] },
]
