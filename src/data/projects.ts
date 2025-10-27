export interface ProjectData {
  slug: string;
  titulo: string;
  descricao_curta: string;
  descricao_completa: string;
  tecnologias: string[];
  ano: number;
  url_live?: string;
  url_github: string;
  imagens_projeto: string[];
  categoria: string;
  destaque: boolean;
  dataEncerramento?: string;
}

export const projectsData: ProjectData[] = [
  {
    slug: "igreja-cei",
    titulo: "Igreja CEI - Escalas",
    descricao_curta: "Sistema de escalas para a Igreja CEI.",
    descricao_completa:
      "Sistema de escalas para a Igreja CEI, desenvolvido em TypeScript, React.js e Supabase. O sistema permite que os membros da igreja sejam escalados para diferentes funções em difentes departamentos da igreja. Os membros respondem o formulario de escala e o sistema gera a escala automaticamente do  mês, gerando um arquivo PDF para geral e envia para o email do responsável pela escala.",
    tecnologias: ["TypeScript", "React.js", "Supabase"],
    ano: 2025,
    url_github: "", //Private Project
    imagens_projeto: [
      "/images/igreja-cei/1.png",
      "/images/igreja-cei/2.png",
      "/images/igreja-cei/3.png",
      "/images/igreja-cei/4.png",
      "/images/igreja-cei/5.png",
    ],
    categoria: "Social Impact",
    destaque: true,
  },
  {
    slug: "healthby-ai",
    titulo: "Healthby AI",
    descricao_curta:
      "Sistema de IA para saúde que transcreve consultas e auxilia médicos na elaboração de anamnese e laudos.",
    descricao_completa:
      "Sistema revolucionário de inteligência artificial para saúde desenvolvido na CodeTime. Durante a consulta, o sistema transcreve automaticamente o áudio e auxilia o médico na elaboração de anamnese e hipóteses. Gera laudos, receitas e relatórios com um clique, incluindo prescrições via Memed com assinatura digital e integração ao prontuário eletrônico. Inclui leitura de exames em PDF e envio de documentos por WhatsApp corporativo. O sistema reduziu em 40% o tempo de registro por atendimento e aumentou 25% a produtividade da agenda.",
    tecnologias: [
      "IA em Saúde",
      "Reconhecimento de Voz",
      "PLN",
      "Integração WhatsApp",
      "Memed",
      "Prontuário Eletrônico",
    ],
    ano: 2025,
    url_live: "https://healthby.ai/",
    url_github: "https://codetime.com.br/",
    imagens_projeto: [
      "https://codetime.com.br/images/portfolio/health/image_capa2.webp",
    ],
    categoria: "Profissional - CodeTime",
    destaque: true,
    dataEncerramento: "10/08/2025",
  },
  {
    slug: "efficon-gestao",
    titulo: "Efficon Gestão",
    descricao_curta:
      "Sistema de gestão da qualidade da obra que centraliza inspeções, checklists e evidências em um único lugar.",
    descricao_completa:
      "Sistema completo de gestão da qualidade desenvolvido na CodeTime para a Efficon. Centraliza a gestão da qualidade da obra em um único sistema, permitindo que a equipe registre inspeções e checklists diretamente no canteiro, anexe evidências, acompanhe conformidades e gere relatórios e dashboards para correções rápidas. Inclui aplicativo mobile integrado ao sistema web e histórico centralizado de evidências. O objetivo é padronizar processos, reduzir retrabalhos e dar visibilidade ao andamento das frentes de serviço.",
    tecnologias: [
      "Gestão da Qualidade",
      "Construção Civil",
      "Checklists e Inspeções",
      "Dashboards",
      "Mobile-first",
      "Aplicativo Mobile",
    ],
    ano: 2025,
    url_live: "https://efficongest.com.br/",
    url_github: "https://codetime.com.br/",
    imagens_projeto: [
      "https://codetime.com.br/images/portfolio/efficon/cover.webp",
    ],
    categoria: "Profissional - CodeTime",
    destaque: true,
    dataEncerramento: "17/10/2025",
  },
  {
    slug: "sistema-sagrada-familia",
    titulo: "Sistema Sagrada Família",
    descricao_curta:
      "Software de gestão financeira para orfanato que acolhe crianças em situação de vulnerabilidade.",
    descricao_completa:
      "O objetivo principal deste projeto é desenvolver um software que aperfeiçoe a gestão financeira do Lar Sagrada Família, um orfanato que acolhe crianças em situação de vulnerabilidade. A ferramenta permitirá registrar, monitorar e organizar tanto as doações recebidas quanto as despesas realizadas, facilitando a prestação de contas e garantindo transparência na administração dos recursos da instituição.",
    tecnologias: ["PHP", "Vue.js", "TypeScript", "JavaScript", "Blade", "CSS"],
    ano: 2024,
    url_github: "https://github.com/Lucsvieirabr/sistema-sagrada-familia",
    imagens_projeto: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIs7HYaLL8xm8SOBcBcgf1jmZCqi9Z0zcl9Q&s",
    ],
    categoria: "Social Impact",
    destaque: true,
    dataEncerramento: "encerrado",
  },
  {
    slug: "sistema-cards-vuetify",
    titulo: "Sistema de Cards Vuetify",
    descricao_curta:
      "Sistema completo de gerenciamento de cards, listas e tags com autenticação e banco de dados.",
    descricao_completa:
      "Aplicação web moderna desenvolvida com Vue.js e Vuetify para gerenciamento de cards, listas e tags. O sistema inclui funcionalidades avançadas como sistema de autenticação completo, integração com Supabase para persistência de dados, interface responsiva e intuitiva, sistema de tags para organização, upload e gerenciamento de imagens, e filtros avançados para busca e organização de conteúdo. A aplicação demonstra boas práticas de desenvolvimento frontend com Vue 3 e Material Design.",
    tecnologias: ["Vue.js", "Vuetify", "JavaScript", "Supabase", "HTML", "CSS"],
    ano: 2024,
    url_live: "https://vuetify-card-list-app.vercel.app/",
    url_github: "https://github.com/Lucsvieirabr/vuetify-card-list-app",
    imagens_projeto: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoM-xIIQQFd61HpwYutAPhihaFqZPlRpkCg&s",
    ],
    categoria: "Web App",
    destaque: true,
    dataEncerramento: "encerrado",
  },
  {
    slug: "vuetify-chat-app",
    titulo: "Vuetify Chat App",
    descricao_curta:
      "Sistema de chat online em tempo real com múltiplos usuários e atualizações automáticas.",
    descricao_completa:
      "Aplicação de chat em tempo real desenvolvida durante estudos de Vuetify e Supabase. O sistema permite que múltiplos usuários conversem simultaneamente com mensagens que são atualizadas automaticamente. Inclui sistema de autenticação, interface moderna e responsiva com Vuetify, integração com Supabase para persistência de dados, e funcionalidades de chat em tempo real. O projeto estava em desenvolvimento para incluir sistema de salas para conversas únicas, demonstrando aprendizado prático de tecnologias modernas de frontend e backend.",
    tecnologias: ["Vue.js", "Vuetify", "JavaScript", "Supabase", "HTML", "CSS"],
    ano: 2024,
    url_live: "https://vuetify-chat-app.vercel.app/",
    url_github: "https://github.com/Lucsvieirabr/vuetify-chat-app",
    imagens_projeto: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoM-xIIQQFd61HpwYutAPhihaFqZPlRpkCg&s",
    ],
    categoria: "Web App",
    destaque: true,
    dataEncerramento: "encerrado",
  },
  {
    slug: "vue-projects-basics",
    titulo: "Vue Projects Basics",
    descricao_curta:
      "Coleção de projetos básicos desenvolvidos durante estudos de Vue.js incluindo sistema de alertas, todo app e card list.",
    descricao_completa:
      "Repositório contendo uma coleção de projetos práticos desenvolvidos durante o aprendizado de Vue.js. Inclui três aplicações distintas: um sistema de mensagens de alertas para notificações dinâmicas, um aplicativo de lista de tarefas (Todo App) com funcionalidades completas de CRUD, e um sistema de cards com listagem e filtros. Cada projeto demonstra conceitos fundamentais do Vue.js como componentes, reatividade, diretivas, gerenciamento de estado e integração com APIs. Os projetos servem como base para entender os princípios do framework e suas melhores práticas de desenvolvimento.",
    tecnologias: ["Vue.js", "JavaScript", "HTML", "CSS"],
    ano: 2024,
    url_github: "https://github.com/Lucsvieirabr/Vue-Projects-Basics",
    imagens_projeto: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoM-xIIQQFd61HpwYutAPhihaFqZPlRpkCg&s",
    ],
    categoria: "Learning",
    destaque: false,
    dataEncerramento: "encerrado",
  },
  {
    slug: "cnn-classificacao-imagens-python",
    titulo: "CNN para Classificação de Imagens CIFAR",
    descricao_curta:
      "Projeto acadêmico de rede neural convolucional para classificação de imagens usando Python e Keras.",
    descricao_completa:
      "Trabalho acadêmico desenvolvido na Universidade do Vale do Itajaí para a disciplina de Introdução à Ciência da Computação. O projeto implementa uma rede neural convolucional (CNN) para classificação de imagens do dataset CIFAR-10 usando Python e Keras. O trabalho inclui análise detalhada do código, documentação sobre a aplicabilidade do Python no mercado de trabalho, e implementação prática de conceitos de deep learning. A CNN é treinada para classificar imagens de 32x32 pixels em 10 classes diferentes, demonstrando conceitos fundamentais de aprendizado de máquina, processamento de imagens e otimização de modelos neurais.",
    tecnologias: [
      "Python",
      "Keras",
      "TensorFlow",
      "Jupyter Notebook",
      "Deep Learning",
      "CNN",
    ],
    ano: 2024,
    url_github: "https://github.com/Lucsvieirabr/Atividade-Python-Github",
    imagens_projeto: [
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    ],
    categoria: "Academic",
    destaque: false,
    dataEncerramento: "encerrado",
  },
  {
    slug: "wikipedia-game",
    titulo: "Wikipedia Game",
    descricao_curta:
      "Jogo multiplayer onde 3 jogadores leem artigos aleatórios da Wikipedia e 1 juiz testa quem realmente leu.",
    descricao_completa:
      "Jogo interativo desenvolvido para entreter grupos de amigos. O jogo funciona com no mínimo 4 jogadores: 3 jogadores recebem artigos aleatórios da Wikipedia para ler em 5 minutos, enquanto 1 juiz escolhe aleatoriamente um dos artigos e faz perguntas para descobrir quem realmente leu o conteúdo. O site oferece um design atrativo para distribuir os artigos aleatórios entre os jogadores separadamente, criando uma experiência divertida e educativa. O projeto demonstra habilidades em desenvolvimento frontend com JavaScript puro, CSS responsivo e integração com APIs da Wikipedia.",
    tecnologias: ["JavaScript", "CSS", "HTML", "Wikipedia API", "Games"],
    ano: 2024,
    url_live: "https://lucsvieirabr.github.io/WikipediaGame/",
    url_github: "https://github.com/Lucsvieirabr/WikipediaGame",
    imagens_projeto: [
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=600&fit=crop",
    ],
    categoria: "Games",
    destaque: false,
    dataEncerramento: "encerrado",
  },
  {
    slug: "primeira-guerra-mundial-game",
    titulo: "Primeira Guerra Mundial - Jogo Educacional 3D",
    descricao_curta:
      "Jogo 3D interativo desenvolvido na Unity para ensinar história da Primeira Guerra Mundial de forma lúdica.",
    descricao_completa:
      "Jogo educacional 3D desenvolvido na engine Unity para um trabalho de história do ensino médio. O projeto foi criado para contar a história da Primeira Guerra Mundial de forma interativa e envolvente, sendo jogado por todos os alunos de uma sala de terceiro ano durante uma aula de história. O jogo combina elementos educacionais com mecânicas de jogo para tornar o aprendizado mais dinâmico e memorável. Desenvolvido como aplicativo nativo, o código funciona perfeitamente, embora a versão WebGL tenha limitações devido à idade do projeto. Demonstra habilidades em desenvolvimento de jogos, design educacional e integração de conteúdo histórico com tecnologia interativa.",
    tecnologias: [
      "Unity",
      "C#",
      "3D Game Development",
      "Educational Games",
      "HTML",
      "CSS",
    ],
    ano: 2022,
    url_live: "https://lucsvieirabr.github.io/PrimeiraGuerraMundialGame/",
    url_github: "https://github.com/Lucsvieirabr/PrimeiraGuerraMundialGame",
    imagens_projeto: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    ],
    categoria: "Educational",
    destaque: false,
    dataEncerramento: "encerrado",
  },
  {
    slug: "ttt-ai-article",
    titulo: "TTT AI Article",
    descricao_curta:
      "Artigo de pesquisa para Computer on the Beach 2023, atualmente em processo.",
    descricao_completa:
      "Artigo de pesquisa acadêmica desenvolvido para apresentação na conferência Computer on the Beach 2023. O trabalho aborda temas relacionados à inteligência artificial e está atualmente em processo de finalização. Representa uma contribuição significativa para o campo de pesquisa em IA.",
    tecnologias: ["LaTeX", "Research", "AI"],
    ano: 2022,
    url_github:
      "https://drive.google.com/file/d/1QrGpERdGaMBKwnmWRIKdMJgJ0Ghxpb8a/view?usp=sharing",
    imagens_projeto: [
      "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3798.jpg?w=2000",
    ],
    categoria: "Research",
    destaque: false,
    dataEncerramento: "encerrado",
  },
  {
    slug: "ttt-ai",
    titulo: "TTT AI",
    descricao_curta: "IA para Jogo da Velha usando Algoritmo Minimax.",
    descricao_completa:
      "Implementação de uma inteligência artificial para o jogo da velha utilizando o algoritmo Minimax. O projeto demonstra conceitos fundamentais de IA, incluindo árvore de decisão, poda alfa-beta e estratégias de jogo. Desenvolvido com JavaScript puro, oferece uma interface web interativa para jogar contra a IA.",
    tecnologias: ["JavaScript", "HTML", "CSS", "Minimax Algorithm"],
    ano: 2022,
    url_github: "https://github.com/Lucsvieirabr/MinMax-Tic-Tac-Toe",
    imagens_projeto: [
      "https://t4.ftcdn.net/jpg/01/90/74/63/360_F_190746317_qjZikoohn97kiJrWpJZJLHilBXKVWTAD.jpg",
    ],
    categoria: "AI/Game",
    destaque: true,
    dataEncerramento: "encerrado",
  },
  {
    slug: "color-parrot",
    titulo: "Color Parrot",
    descricao_curta: "Bot do Discord que permite encontrar cores incríveis.",
    descricao_completa:
      "Bot do Discord desenvolvido para ajudar usuários a descobrir e trabalhar com cores de forma interativa. O bot oferece funcionalidades como geração de paletas de cores, conversão entre formatos de cor, busca por cores similares e integração com APIs de cores. Desenvolvido com Node.js e integração completa com a API do Discord.",
    tecnologias: ["JavaScript", "Node.js", "Discord API", "Color API"],
    ano: 2022,
    url_github: "https://github.com/AlissonSteffens/color-parrot-discord-bot",
    imagens_projeto: [
      "https://media.istockphoto.com/photos/blue-mesh-gradient-blurred-motion-abstract-background-picture-id1185747322?b=1&k=20&m=1185747322&s=612x612&w=0&h=cC2SNNh9axfU5U92H7ap0RtKBlQUcplp7nVu3F4fv0M=",
    ],
    categoria: "Bot",
    destaque: false,
    dataEncerramento: "encerrado",
  },
  {
    slug: "electrolysis-simulator",
    titulo: "Simulador de Eletrólise",
    descricao_curta:
      "Simulador de eletrólise desenvolvido para uso em aulas de química.",
    descricao_completa:
      "Simulador interativo de processos de eletrólise desenvolvido especificamente para auxiliar professores de química em suas aulas. O projeto utiliza a biblioteca P5.js para criar visualizações dinâmicas dos processos eletroquímicos, permitindo que os estudantes compreendam melhor os conceitos de oxidação, redução e fluxo de elétrons.",
    tecnologias: ["JavaScript", "HTML", "P5.js", "Chemistry"],
    ano: 2022,
    url_github: "https://github.com/Lucsvieirabr/Electrolysis-Simulator",
    imagens_projeto: [
      "https://media.istockphoto.com/photos/blue-light-defocused-blurred-motion-abstract-background-picture-id1212284111?b=1&k=20&m=1212284111&s=612x612&w=0&h=tsrwXk0mEU7MtZKtp91y4iNQTWAojTNSnWX5apZ39kg=",
    ],
    categoria: "Educational",
    destaque: false,
    dataEncerramento: "encerrado",
  },
];

export const getProjectBySlug = (slug: string): ProjectData | undefined => {
  return projectsData.find((project) => project.slug === slug);
};

export const getFeaturedProjects = (): ProjectData[] => {
  return projectsData.filter((project) => project.destaque);
};

export const getProjectsByCategory = (categoria: string): ProjectData[] => {
  return projectsData.filter((project) => project.categoria === categoria);
};

export const getAllCategories = (): string[] => {
  const categories = projectsData.map((project) => project.categoria);
  return [...new Set(categories)];
};
