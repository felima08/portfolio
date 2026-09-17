export interface ProcessStep {
  index: string
  title: { pt: string; en: string }
  description: { pt: string; en: string }
  isAI?: boolean
}

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: { pt: 'Ideia', en: 'Idea' },
    description: {
      pt: 'Entender o problema antes de qualquer decisão técnica.',
      en: 'Understand the problem before any technical decision.',
    },
  },
  {
    index: '02',
    title: { pt: 'Design', en: 'Design' },
    description: {
      pt: 'Pensar na experiência de quem vai usar o produto.',
      en: 'Think about the experience of whoever will use the product.',
    },
  },
  {
    index: '03',
    title: { pt: 'Desenvolvimento', en: 'Development' },
    description: {
      pt: 'Construir com atenção à arquitetura e à qualidade do código.',
      en: 'Build with attention to architecture and code quality.',
    },
  },
  {
    index: '04',
    title: { pt: 'IA', en: 'AI' },
    description: {
      pt: 'Usar IA como ferramenta dentro do processo — não como substituta.',
      en: 'Use AI as a tool within the process — not as a replacement.',
    },
    isAI: true,
  },
  {
    index: '05',
    title: { pt: 'Testes', en: 'Testing' },
    description: {
      pt: 'Validar antes de considerar algo pronto.',
      en: 'Validate before considering anything done.',
    },
  },
  {
    index: '06',
    title: { pt: 'Deploy', en: 'Deploy' },
    description: {
      pt: 'Colocar em produção com previsibilidade e controle.',
      en: 'Ship to production with predictability and control.',
    },
  },
  {
    index: '07',
    title: { pt: 'Produto', en: 'Product' },
    description: {
      pt: 'Acompanhar, aprender e evoluir continuamente.',
      en: 'Track, learn, and continuously evolve.',
    },
  },
]
