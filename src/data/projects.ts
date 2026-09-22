export interface Project {
  number: string
  url: string
  tag: string
  title: string
  description: string
  tech: string
  symbol: string
  style: 'map' | 'python' | 'cpp'
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
]

export const GITHUB_URL = 'https://github.com/cwcasado'
