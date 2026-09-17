'use client'

import { useEffect, useRef } from 'react'

/**
 * Reveal on scroll.
 *
 * Observa o elemento raiz e todos os descendentes marcados com `[data-reveal]`.
 * Ao entrar na viewport, cada elemento recebe `.is-visible` — a transição
 * (opacity + translateY) vive no CSS, em `globals.css`.
 *
 * O observer é desligado após o primeiro trigger de cada elemento.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets: Element[] = [
      ...(root.hasAttribute('data-reveal') ? [root] : []),
      ...Array.from(root.querySelectorAll('[data-reveal]')),
    ]
    if (targets.length === 0) return

    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}
