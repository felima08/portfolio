export interface StackItem {
  name: string
  note?: { pt: string; en: string } // 'atual' | 'experiência profissional' | 'projetos próprios'
}

export interface StackCategory {
  title: string
  items: StackItem[]
}

const CURRENT = { pt: 'atual', en: 'current' }
const PROFESSIONAL = { pt: 'experiência profissional', en: 'professional experience' }
const PERSONAL = { pt: 'projetos próprios', en: 'personal projects' }

export const stack: StackCategory[] = [
  {
    title: 'Frontend',
    items: [
      { name: 'Svelte & SvelteKit', note: CURRENT },
      { name: 'Angular', note: PROFESSIONAL },
      { name: 'React', note: PERSONAL },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend & Data',
    items: [
      { name: 'PHP', note: PROFESSIONAL },
      { name: 'REST APIs' },
      { name: 'PostgreSQL' },
      { name: 'Supabase', note: PERSONAL },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git & GitHub' },
      { name: 'Vercel' },
      { name: 'Claude' },
    ],
  },
]
