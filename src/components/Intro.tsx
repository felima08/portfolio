'use client'

import { useReveal } from '@/hooks/useReveal'
import { useLanguage } from '@/lib/language'
import { getDictionary } from '@/data/dictionary'

const CARDS = [
  {
    index: { pt: '01. Filosofia', en: '01. Philosophy' },
    title: { pt: 'Construção com Propósito', en: 'Building with Purpose' },
    body: {
      pt: 'Gosto de transformar ideias abstratas em softwares que as pessoas realmente usam. Cada linha de código deve responder a uma dor real com simplicidade e elegância técnica.',
      en: 'I like turning abstract ideas into software people actually use. Every line of code should answer a real pain point with simplicity and technical elegance.',
    },
    note: { pt: 'Zero abstração desnecessária', en: 'Zero unnecessary abstraction' },
  },
  {
    index: { pt: '02. Execução', en: '02. Execution' },
    title: { pt: 'Prática & Autonomia', en: 'Practice & Autonomy' },
    body: {
      pt: 'Experiência consolidada em sistemas administrativos reais de missão crítica somada ao desenvolvimento ativo de produtos independentes, gerindo ponta a ponta o ciclo de vida da aplicação.',
      en: 'Solid experience with real, mission-critical admin systems, combined with active development of independent products, managing the full application lifecycle end to end.',
    },
    note: { pt: 'Resiliência corporativa comprovada', en: 'Proven corporate resilience' },
  },
  {
    index: { pt: '03. Aprendizado', en: '03. Learning' },
    title: { pt: 'Evolução Contínua', en: 'Continuous Evolution' },
    body: {
      pt: 'Migração arquitetural intencional e constante aprofundamento em frameworks reativos modernos. Estudo constante de tendências para adotar soluções com real ganho de produtividade.',
      en: 'Intentional architectural migration and constant deep-diving into modern reactive frameworks. Ongoing study of trends to adopt solutions with real productivity gains.',
    },
    note: { pt: 'Adaptação técnica cirúrgica', en: 'Surgical technical adaptation' },
  },
]

export default function Intro() {
  const ref = useReveal<HTMLDivElement>()
  const { lang } = useLanguage()
  const t = getDictionary(lang).intro

  return (
    <section id="sobre" className="section section--alt">
      <div className="shell" ref={ref}>
        <div className="section-head" data-reveal>
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-lead">{t.lead}</p>
        </div>

        <div className="intro__grid">
          {CARDS.map((card) => (
            <div className="intro__card" key={card.index.pt} data-reveal>
              <span className="intro__card-index">{card.index[lang]}</span>
              <h3 className="intro__card-title">{card.title[lang]}</h3>
              <p className="intro__card-body">{card.body[lang]}</p>
              <span className="intro__card-note">{card.note[lang]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
