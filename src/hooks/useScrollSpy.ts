'use client'

import { useEffect, useState } from 'react'

/**
 * Detecta qual seção está ativa no scroll.
 *
 * Usa a linha logo abaixo da navbar como referência: a seção ativa é a última
 * cujo topo já passou por essa linha. No fim da página, força a última seção
 * (senão seções curtas no rodapé nunca ficariam ativas).
 *
 * IMPORTANTE: `offset` precisa ser >= ao `scroll-margin-top` de `.section`
 * no globals.css (hoje: --nav-h + 1.5rem = 76 + 24 = 100px). Se for menor,
 * ao clicar num link do menu a seção pousa corretamente, mas o link errado
 * (o anterior) fica destacado — foi exatamente esse bug que aconteceu aqui.
 */
export function useScrollSpy(ids: string[], offset = 112) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const scrollY = window.scrollY

      if (window.innerHeight + scrollY >= document.body.scrollHeight - 2) {
        setActiveId(ids[ids.length - 1] ?? '')
        return
      }

      let current = ids[0] ?? ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top - offset <= 0) current = id
      }
      setActiveId(current)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return activeId
}
