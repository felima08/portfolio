'use client'

import { useLanguage } from '@/lib/language'
import { getDictionary } from '@/data/dictionary'

export default function Footer() {
  const year = new Date().getFullYear()
  const { lang } = useLanguage()
  const nav = getDictionary(lang).nav
  const t = getDictionary(lang).footer

  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__brand">
          <span>Felipe Gonçalves</span>
          <span className="footer__brand-sep">•</span>
          <span className="footer__meta mono">
            © {year} {t.role}
          </span>
        </div>

        <div className="footer__status">
          <span className="dot" />
          {t.status}
        </div>

        <nav className="footer__links">
          <a href="#inicio">{nav.inicio}</a>
          <a href="#projetos">{nav.projetos}</a>
          <a href="#stack">{nav.stack}</a>
          <a href="#contato">{nav.contato}</a>
        </nav>
      </div>
    </footer>
  )
}
