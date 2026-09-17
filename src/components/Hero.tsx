'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/language'
import { getDictionary } from '@/data/dictionary'

export default function Hero() {
  const { lang } = useLanguage()
  const t = getDictionary(lang).hero

  return (
    <section id="inicio" className="hero">
      <div className="shell hero__grid">
        <div>
          <div className="hero__eyebrow enter enter--1">
            <span>{t.location}</span>
            <span className="hero__sep">•</span>
            <span className="badge">
              <span className="dot dot--live" />
              {t.status}
            </span>
          </div>

          <div className="enter enter--2">
            <span className="hero__role">{t.role}</span>
            <h1 className="hero__title">Felipe Gonçalves</h1>
          </div>

          <p className="hero__lead enter enter--3">{t.lead}</p>

          <div className="hero__cta enter enter--4">
            <a href="#projetos" className="btn btn--primary">
              {t.ctaPrimary}
            </a>
            <a href="#trajetoria" className="btn btn--ghost">
              {t.ctaSecondary}
            </a>
          </div>

          <div className="hero__meta enter enter--5">
            <div>
              <span className="hero__meta-label">{t.metaSpecialtyLabel}</span>
              <span className="hero__meta-value">{t.metaSpecialtyValue}</span>
            </div>
            <div>
              <span className="hero__meta-label">{t.metaCurrentLabel}</span>
              <span className="hero__meta-value">{t.metaCurrentValue}</span>
            </div>
            <div>
              <span className="hero__meta-label">{t.metaRoleLabel}</span>
              <span className="hero__meta-value">{t.metaRoleValue}</span>
            </div>
          </div>
        </div>

        <div className="hero__visual enter enter--3">
          <Image
            src="/Heroo.jpg"
            alt="Felipe Gonçalves"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 45vw"
            className="hero__visual-img"
            style={{ objectPosition: '50% 22%' }}
          />
        </div>
      </div>
    </section>
  )
}
