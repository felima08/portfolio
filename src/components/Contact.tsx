'use client'

import { useReveal } from '@/hooks/useReveal'
import { useLanguage } from '@/lib/language'
import { getDictionary } from '@/data/dictionary'
import { useState } from 'react'

const CONTACT_EMAIL = 'felps112233@gmail.com'
const GITHUB_URL = 'https://github.com/felima08'
const LINKEDIN_URL = 'https://www.linkedin.com/in/felipe-gonçalves-740aab226'

const WHATSAPP_NUMBER = '5511990155753'

export default function Contact() {
  const ref = useReveal<HTMLDivElement>()
  const { lang } = useLanguage()
  const t = getDictionary(lang).contact
  const [copied, setCopied] = useState(false)

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsappMessage)}`

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // clipboard indisponível — ignora silenciosamente
    }
  }

  return (
    <section id="contato" className="section section--alt">
      <div className="shell" ref={ref}>
        <div className="contact__head" data-reveal>
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-lead">{t.lead}</p>
        </div>

        <div className="contact__grid" data-reveal>
          <button type="button" className="contact__card" onClick={handleCopyEmail}>
            <span className="contact__card-label">{t.emailLabel}</span>
            <span className="contact__card-value">{CONTACT_EMAIL}</span>
            <span className="link-arrow">{t.emailAction}</span>
          </button>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
          >
            <span className="contact__card-label">{t.linkedinLabel}</span>
            <span className="contact__card-value">linkedin.com/in/felipe-gonçalves-740aab226</span>
            <span className="link-arrow">{t.linkedinAction}</span>
          </a>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
          >
            <span className="contact__card-label">{t.githubLabel}</span>
            <span className="contact__card-value">github.com/felima08</span>
            <span className="link-arrow">{t.githubAction}</span>
          </a>
        </div>

        <div className="contact__cta" data-reveal>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            {t.ctaButton}
          </a>
        </div>
      </div>

      <div className={`contact__toast ${copied ? 'is-visible' : ''}`} role="status">
        <span className="dot" style={{ background: 'var(--emerald)' }} />
        {t.toast}
      </div>
    </section>
  )
}
