'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'
import { useLanguage } from '@/lib/language'
import { getDictionary } from '@/data/dictionary'

export default function About() {
  const ref = useReveal<HTMLDivElement>()
  const { lang } = useLanguage()
  const t = getDictionary(lang).about

  return (
    <section id="sobre-mim" className="section">
      <div className="shell" ref={ref}>
        <div className="about__grid">
          <div className="about__visual" data-reveal>
            <Image
              src="/about.jpg"
              alt="Felipe Gonçalves"
              fill
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="about__visual-img"
              style={{ objectPosition: '50% 18%' }}
            />
            <div className="about__visual-tag">
              <span className="about__location mono">{t.location}</span>
              <span className="badge">{t.badge}</span>
            </div>
          </div>

          <div data-reveal>
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="section-title">{t.title}</h2>

            <p className="about__lead">{t.p1}</p>
            <p className="about__lead">{t.p2}</p>
            <p className="about__lead">{t.p3}</p>

            <div className="about__stats">
              <div>
                <span className="about__stat-value">{t.stat1Value}</span>
                <span className="about__stat-label">{t.stat1Label}</span>
              </div>
              <div>
                <span className="about__stat-value">{t.stat2Value}</span>
                <span className="about__stat-label">{t.stat2Label}</span>
              </div>
              <div>
                <span className="about__stat-value">{t.stat3Value}</span>
                <span className="about__stat-label">{t.stat3Label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
