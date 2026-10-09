export type ProjectStatus = 'em-desenvolvimento' | 'concluido' | 'arquivado'

export interface Project {
  id: string
  name: string
  description: { pt: string; en: string }
  status: ProjectStatus
  stack: string[]
  image?: string // caminho da imagem em /public/projects/
  links?: {
    demo?: string
    github?: string
  }
  team?: boolean // true = desenvolvido em equipe
}

export const projects: Project[] = [
  {
    id: 'classfit-ia',
    name: 'ClassFit IA',
    description: {
      pt: 'Aplicação que coloca a inteligência artificial no centro da experiência, conectando treino, alimentação, acompanhamento e interação com IA',
      en: 'An application that puts artificial intelligence at the center of the experience, connecting training, nutrition, tracking, and AI interaction',
    },
    status: 'em-desenvolvimento',
    stack: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Claude AI', 'Vercel'],
    team: true,
    image: 'classfit-ia.png',
    links: {
      demo: 'https://app-fit-ia-tau.vercel.app/',
    },
  },
  {
    id: 'lead-prospection',
    name: 'Lead Prospection',
    description: {
      pt: 'Plataforma que encontra empresas numa região e usa IA pra identificar quem precisa de um site ou de mais presença digital, organizando tudo num painel de prospecção',
      en: 'A platform that finds businesses in a region and uses AI to identify who needs a website or better online presence, organizing everything in a prospecting dashboard',
    },
    status: 'em-desenvolvimento',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    image: 'lead-prospection.jpg',
    links: {
      demo: 'https://lead-prospection-psi.vercel.app/',
    },
  },
  {
    id: 'projeto-3',
    name: '', // TODO: preencher depois
    description: { pt: '', en: '' },
    status: 'concluido',
    stack: [],
  },
  {
    id: 'projeto-4',
    name: '', // TODO: preencher depois
    description: { pt: '', en: '' },
    status: 'concluido',
    stack: [],
  },
]

export const statusLabel: Record<ProjectStatus, { pt: string; en: string }> = {
  'em-desenvolvimento': { pt: 'Em desenvolvimento', en: 'In development' },
  concluido: { pt: 'Concluído', en: 'Completed' },
  arquivado: { pt: 'Arquivado', en: 'Archived' },
}
