'use client'

import { useEffect, useRef, useState } from 'react'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useLanguage } from '@/lib/language'
import { getDictionary } from '@/data/dictionary'

const GITHUB_URL = 'https://github.com/felima08'
const LINKEDIN_URL = 'https://www.linkedin.com/in/felipe-gonçalves-740aab226'

const SECTION_IDS = [
  'inicio',
  'sobre',
  'trajetoria',
  'projetos',
  'como-construo',
  'stack',
  'contato',
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const activeId = useScrollSpy(SECTION_IDS)
  const { lang, toggleLang } = useLanguage()
  const t = getDictionary(lang).nav

  const LINKS = [
    { id: 'inicio', label: t.inicio },
    { id: 'sobre', label: t.sobre },
    { id: 'trajetoria', label: t.trajetoria },
    { id: 'projetos', label: t.projetos },
    { id: 'como-construo', label: t.comoConstruo },
    { id: 'stack', label: t.stack },
    { id: 'contato', label: t.contato },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // O painel mobile fica no DOM o tempo todo (só troca opacidade/visibilidade),
  // então a rolagem interna dele persiste entre aberturas. Sem isso, se o
  // usuário rolar até "Contato" e fechar, a próxima abertura reaparece já
  // rolada, cortando os primeiros itens.
  useEffect(() => {
    if (menuOpen && mobileMenuRef.current) {
      mobileMenuRef.current.scrollTop = 0
    }
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="shell nav__inner">
        <a href="#inicio" className="nav__brand" onClick={handleLinkClick}>
          <span className="nav__brand-mark">FG</span>
          Felipe Gonçalves
        </a>

        <nav className="nav__links">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav__link ${activeId === link.id ? 'is-active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="nav__lang"
            onClick={toggleLang}
            aria-label="Switch language / Trocar idioma"
          >
            <span className={lang === 'pt' ? 'is-active' : ''}>PT</span>
            <span className="nav__lang-sep">/</span>
            <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
          </button>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="nav__icon"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
            </svg>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="nav__icon"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M7.5 10v7M7.5 7.01V7M11 17v-4.5a2 2 0 0 1 4 0V17M11 12.5V17" />
            </svg>
          </a>

          <a href="#contato" className="btn btn--ghost btn--sm nav__cta">
            {t.cta}
          </a>

          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div ref={mobileMenuRef} className={`nav__mobile ${menuOpen ? 'is-open' : ''}`}>
        {LINKS.map((link, i) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={handleLinkClick}
            className={`nav__mobile-link ${activeId === link.id ? 'is-active' : ''}`}
          >
            <span className="nav__mobile-index">{String(i + 1).padStart(2, '0')}</span>
            {link.label}
          </a>
        ))}

        <button type="button" className="nav__lang nav__lang--mobile" onClick={toggleLang}>
          <span className={lang === 'pt' ? 'is-active' : ''}>PT</span>
          <span className="nav__lang-sep">/</span>
          <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
        </button>
      </div>
    </header>
  )
}
