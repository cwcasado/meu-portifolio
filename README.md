# Portfólio — Carlos Wagner de Souza Venceslao

Portfólio pessoal para o trabalho P1 de Laboratório de Programação Front End, Engenharia de Software, Universidade de Vassouras — Campus Saquarema, 2026.2.

## Executar

Pré-requisito: Node.js 22.12+ (ou 24) e npm.

```sh
npm install
npm run dev
```

Abra o endereço indicado pelo Vite no terminal.

## Validar e compilar

```sh
npm run lint
npm run build
npm run preview
```

A versão de produção é gerada em `dist/`.

## Conteúdo

- Início com nome, apresentação e link para os projetos.
- Sobre com trajetória e objetivo de aprendizado.
- Três cards com projetos públicos reais: ordenação, recursividade e matrizes.
- Contato pelo GitHub: https://github.com/cwcasado.
- Menu que funciona também em telas estreitas.
- HTML semântico com header, nav, main, section, article e footer.
- Foto pessoal enviada por Carlos Wagner (`public/perfil-carlos.jpg`), incluída com sua autorização. Segundo tipo de mídia: trilha instrumental original Neon Afterhours (`public/neon-afterhours.wav`), com aproximadamente 35 segundos, sintetizada sem samples externos. O player possui controles e não inicia automaticamente. O gerador está em `scripts/generate_music.py` (Python + NumPy; opcional, não necessário para executar o site).
- Animação CSS no indicador do início, respeitando a preferência por movimento reduzido.

## Estrutura

`src/` contém os componentes React e estilos. `public/` contém mídias e favicon. O projeto usa Vite, React e TypeScript, sem API, banco ou Docker.

## Personalizar

- `src/Hero.tsx`: nome e apresentação.
- `src/Sobre.tsx`: biografia.
- `src/Projetos.tsx`: cards e links.
- `src/contato.tsx`: contato.
- `src/App.css` e `src/index.css`: aparência e responsividade.

## Entrega no AVA — até 15/09/2026

1. Publique a versão final neste repositório: https://github.com/cwcasado/meu-portifolio.
2. Confira se o repositório está acessível à professora e contém pelo menos três commits com mensagens claras.
3. Envie `portfolio-carlos-wagner.zip` na atividade do AVA, sem `node_modules`.
4. Cole também o link do repositório no campo ou comentário da atividade. Os dois são obrigatórios.
5. Antes de enviar, teste o site e os links.

O ZIP não inclui `node_modules`, `.git` ou `dist`. Instale as dependências após extrair.




