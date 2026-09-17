'use client'

import { processSteps } from '@/data/process'
import { useReveal } from '@/hooks/useReveal'
import { useLanguage } from '@/lib/language'
import { getDictionary } from '@/data/dictionary'

export default function Process() {
  const ref = useReveal<HTMLDivElement>()
  const { lang } = useLanguage()
  const t = getDictionary(lang).process

  return (
    <section id="como-construo" className="section">
      <div className="shell" ref={ref}>
        <div className="section-head" data-reveal>
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-lead">{t.lead}</p>
        </div>

        <div className="process__grid" data-reveal>
          {processSteps.map((step) => (
            <div
              key={step.index}
              className={`process__step ${step.isAI ? 'process__step--ai' : ''}`}
            >
              <span className="process__index">{step.index}</span>
              <h3 className="process__title">{step.title[lang]}</h3>
              <p className="process__desc">{step.description[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
