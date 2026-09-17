'use client'

import { stack } from '@/data/stack'
import { useReveal } from '@/hooks/useReveal'
import { useLanguage } from '@/lib/language'
import { getDictionary } from '@/data/dictionary'

export default function Stack() {
  const ref = useReveal<HTMLDivElement>()
  const { lang } = useLanguage()
  const t = getDictionary(lang).stack

  return (
    <section id="stack" className="section section--alt">
      <div className="shell" ref={ref}>
        <div className="section-head" data-reveal>
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-lead">{t.lead}</p>
        </div>

        <div className="stack__grid">
          {stack.map((category) => (
            <div key={category.title} data-reveal>
              <h3 className="stack__title">{category.title}</h3>
              {category.items.map((item) => (
                <div className="stack__item" key={item.name}>
                  <span className="stack__name">{item.name}</span>
                  {item.note && <span className="stack__note">{item.note[lang]}</span>}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
