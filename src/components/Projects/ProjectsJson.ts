import tasksbook from '../../assets/tasksbook.png'
import portalSelosRR from '../../assets/portalselos.jpg'
import founding from '../../assets/founding.jpg'
import sistemaGM from '../../assets/sistemaguarda.jpg'
import petshop from '../../assets/wooofpetshop.png'
import babydev from '../../assets/babydev.png'
import guiador from '../../assets/guiador.png'
import stabel from '../../assets/stabel.png'
import casadovidro from '../../assets/casadovidro.png'
import tmdb from '../../assets/tmdb.png'

export const ProjectsJson = [
  {
    projectname: 'Portal do Selo - TJRR',
    projectType: 'Projeto Corporativo',
    desc: 'Atuei como programador full stack em uma equipe de desenvolvimento em um projeto que envolveu a criação de uma aplicação web. Essa aplicação foi desenvolvida para fornecer e gerenciar selos digitais no setor notarial no estado de Roraima.',
    image: portalSelosRR,
    link: 'https://selororaima.com.br/'
  },
  {
    projectname: 'Sistema de leitura de placas veiculares e ocorrências',
    projectType: 'Projeto freelance',
    desc: 'Sistema de ocorrências desenvolvido para a Guarda Municipal de Arapongas, PR, que integra câmeras para a captura automática de placas. Em casos de furto, os policiais podem visualizar informações cruciais, como placa do veículo, imagem ao vivo e outros detalhes, facilitando a resposta rápida e eficiente diante de situações de emergência.',
    image: sistemaGM,
    private: true,
    link: null
  },
  {
    projectname: 'Founding',
    projectType: 'Projeto freelance',
    desc: 'Founding é uma plataforma web que oferece um ambiente para gestão de equipes. Atuei nesse projeto como desenvolvedor freelancer Vue.js, realizando a implementação de novas features e correção de bugs.',
    image: founding,
    link: 'https://app.founding.com.br/'
  },
  {
    projectname: 'TasksBook',
    projectType: 'Projeto pessoal',
    desc: 'Aplicação SPA feita com Vue.js/Nuxt.js para o gerenciamento de tarefas. O sistema engloba um painel para a visualização geral das tarefas e com gráficos dinâmicos que mudam conforme a atualização do status da tarefa e layout 100% responsivo feito com css puro.',
    image: tasksbook,
    link: 'https://tasksbook.vercel.app/'
  },
  {
    projectname: 'Wooof PetShop',
    projectType: 'Projeto pessoal',
    desc: 'Este projeto é um marketplace feito com React.js, projeto voltado a petshop, Fornecemos linhas de produtos especializados, tais como comida orgânica, ração natural para e uma seleção ampla de guloseimas para cães e gatos.',
    image: petshop,
    link: 'https://wooofpetshop.vercel.app/'
  },
  {
    projectname: 'Guiador Digital',
    projectType: 'Projeto freelance',
    desc: 'Este projeto foi produzido para a empresa que trabalho, a Guiador Digital, é uma honra e um prazer trabalhar com esse time. Este projeto foi feito com React + Typescript, e axios para o consumo da API do curso.',
    image: guiador,
    link: 'https://www.guiador.digital/'
  },
  {
    projectname: 'Stabel Piercing',
    projectType: 'Projeto freelance',
    desc: 'Este projeto foi desafiador, pois o cliente me passou apenas as cores e as fontes que ele gostaria de ter no site dele, Mas como sou apaixonado por desafios fui fazendo detalhe por detalhe até chegar neste resultado, E o mais importante é que o cliente ficou bem satisfeito com o resultado.',
    image: stabel,
    link: 'https://stabelpiercing.vercel.app/'
  },
  {
    projectname: 'Casa do Vidro',
    projectType: 'Projeto freelance',
    desc: 'Este projeto estava sendo feito para uma vidraçaria da minha cidade, Porem o cliente acabou desistindo de fazer o site para sua empresa, então decidi continuar o projeto e deixar ele pronto pra caso no futuro ele mude de ideia.',
    image: casadovidro,
    link: 'https://casadovidro.vercel.app/'
  },
  {
    projectname: 'Baby Dev',
    projectType: 'Projeto Colaborador',
    desc: 'Portal de vagas tech focado em primeiras oportunidades. Vagas serão adicionadas pelos "curadores", pessoas que vasculham a rede em    buscam dessas oportunidades e divulgarão aqui (citando as fontes)',
    image: babydev,
    link: ''
  },
  {
    projectname: 'WatchFilms',
    projectType: 'Projeto pessoal',
    desc: 'Este projeto é um site de filmes criado com Vue.js, este projeto consome a API do TMDB(The Movie Data Base), conta com a opção de pesquisar por seus filmes favoritos, Apresenta informações do filme(Sinopse, data de lançamento, categorias e elenco principal), tambem é possivel assistir o trailer dos filmes',
    image: tmdb,
    link: 'https://watchfilms.vercel.app/'
  },

]