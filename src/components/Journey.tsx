'use client'

import { journey } from '@/data/journey'
import { useReveal } from '@/hooks/useReveal'
import { useLanguage } from '@/lib/language'
import { getDictionary } from '@/data/dictionary'

export default function Journey() {
  const ref = useReveal<HTMLDivElement>()
  const { lang } = useLanguage()
  const t = getDictionary(lang).journey

  return (
    <section id="trajetoria" className="section">
      <div className="shell" ref={ref}>
        <div className="section-head" data-reveal>
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-lead">{t.lead}</p>
        </div>

        <div className="journey__list">
          {journey.map((step) => (
            <div
              key={step.index}
              className={`journey__item ${step.isCurrent ? 'journey__item--current' : ''}`}
              data-reveal
            >
              <span className="journey__index">{step.index}</span>
              <div className="journey__body">
                <h3 className="journey__title">
                  {step.title[lang]}
                  {step.isCurrent && <span className="journey__now">{t.current}</span>}
                </h3>
                <p className="journey__desc">{step.description[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
