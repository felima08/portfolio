export interface JourneyStep {
  index: string
  title: { pt: string; en: string }
  description: { pt: string; en: string }
  isCurrent?: boolean
}

export const journey: JourneyStep[] = [
  {
    index: '01',
    title: { pt: 'Início', en: 'Getting Started' },
    description: {
      pt: 'Comecei a me interessar por desenvolvimento web antes de entrar no mercado, experimentando na prática e entendendo como as peças se encaixam — o que acontece no navegador, como o servidor responde, como um produto funciona de verdade.',
      en: 'I got interested in web development before entering the job market, experimenting hands-on and understanding how the pieces fit together — what happens in the browser, how the server responds, how a product actually works.',
    },
  },
  {
    index: '02',
    title: { pt: 'Estágio', en: 'Internship' },
    description: {
      pt: 'Entrei no mercado como estagiário, com trabalho real em ambiente de produção desde o início. Aprendi a velocidade que um time exige, como revisar código de outras pessoas e como entregar funcionalidades sem quebrar o que já existia.',
      en: 'I entered the job market as an intern, working on real production systems from day one. I learned the pace a team demands, how to review other people’s code, and how to ship features without breaking what already existed.',
    },
  },
  {
    index: '03',
    title: { pt: 'Angular', en: 'Angular' },
    description: {
      pt: 'Passei a trabalhar de forma mais aprofundada com Angular, construindo e mantendo interfaces de aplicações reais. Foi aqui que comecei a ter mais autonomia sobre decisões de frontend e a entender melhor o custo de cada escolha técnica.',
      en: 'I started working more deeply with Angular, building and maintaining interfaces for real applications. This is where I gained more autonomy over frontend decisions and better understood the cost of each technical choice.',
    },
  },
  {
    index: '04',
    title: { pt: 'Desenvolvedor Júnior', en: 'Junior Developer' },
    description: {
      pt: 'A evolução para Desenvolvedor de Software Júnior veio com mais responsabilidade sobre o código que entregava. Deixei de só implementar e passei a pensar mais no impacto de cada decisão — na arquitetura, na manutenção e na experiência do usuário.',
      en: 'The move to Junior Software Developer came with more responsibility for the code I shipped. I stopped just implementing and started thinking more about the impact of each decision — on architecture, maintenance, and user experience.',
    },
  },
  {
    index: '05',
    title: { pt: 'Svelte & SvelteKit', en: 'Svelte & SvelteKit' },
    description: {
      pt: 'Participei da migração de sistemas de Angular para Svelte, o que exigiu entender os dois mundos ao mesmo tempo. Esse processo me deu uma visão mais clara sobre como frameworks resolvem os mesmos problemas de maneiras diferentes — e quando cada escolha faz sentido.',
      en: 'I took part in migrating systems from Angular to Svelte, which required understanding both worlds at once. That process gave me a clearer view of how frameworks solve the same problems differently — and when each choice makes sense.',
    },
  },
  {
    index: '06',
    title: { pt: 'Projetos próprios', en: 'Personal Projects' },
    description: {
      pt: 'Comecei a construir produtos fora do trabalho, onde eu precisava tomar todas as decisões — desde a stack até a experiência do usuário. Esse espaço me ajudou a desenvolver uma visão mais completa do que significa construir um produto do começo ao fim.',
      en: 'I started building products outside of work, where I had to make every decision myself — from the stack to the user experience. That space helped me develop a more complete view of what it means to build a product from start to finish.',
    },
  },
  {
    index: '07',
    title: { pt: 'ClassFit IA', en: 'ClassFit IA' },
    description: {
      pt: 'Estou construindo em equipe uma aplicação que coloca a inteligência artificial no centro da experiência, conectando treino, alimentação e acompanhamento. É o projeto onde estou aprendendo mais sobre produto, IA e sobre trabalhar com uma visão de longo prazo.',
      en: 'I’m building, as part of a team, an application that puts artificial intelligence at the center of the experience, connecting training, nutrition, and tracking. It’s the project where I’m learning the most about product, AI, and working with a long-term vision.',
    },
    isCurrent: true,
  },
  {
    index: '08',
    title: { pt: 'Próximos passos', en: "What's Next" },
    description: {
      pt: 'Continuar construindo produtos próprios, aprofundar meu conhecimento em IA e assumir desafios cada vez maiores como desenvolvedor.',
      en: 'Keep building my own products, deepen my knowledge of AI, and take on increasingly bigger challenges as a developer.',
    },
  },
]
