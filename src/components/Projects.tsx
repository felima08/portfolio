'use client'

import { projects, statusLabel } from '@/data/projects'
import { useReveal } from '@/hooks/useReveal'
import { useLanguage } from '@/lib/language'
import { getDictionary } from '@/data/dictionary'

export default function Projects() {
  const ref = useReveal<HTMLDivElement>()
  const { lang } = useLanguage()
  const t = getDictionary(lang).projects

  return (
    <section id="projetos" className="section section--alt">
      <div className="shell" ref={ref}>
        <div className="section-head" data-reveal>
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-lead">{t.lead}</p>
        </div>

        <div className="projects__list">
          {projects.map((project) => {
            const isPlaceholder = project.name === ''

            if (isPlaceholder) {
              return (
                <div key={project.id} className="project project--placeholder" data-reveal>
                  <div className="project__thumb">
                    <span className="project__thumb-empty">{t.comingSoon}</span>
                  </div>
                  <div className="project__body">
                    <div className="project__head">
                      <h3 className="project__name">{t.placeholderTitle}</h3>
                    </div>
                    <p className="project__desc">{t.placeholderDesc}</p>
                  </div>
                </div>
              )
            }

            return (
              <div key={project.id} className="project" data-reveal>
                <div className="project__thumb">
                  {/* TODO: adicionar em /public/projects/{project.id}.png */}
                  <div className="project__thumb-inner">
                    <span className="project__thumb-empty">{project.name}</span>
                  </div>
                </div>

                <div className="project__body">
                  <div className="project__head">
                    <h3 className="project__name">{project.name}</h3>
                    {project.status === 'em-desenvolvimento' && (
                      <span className="project__tag project__tag--live">
                        <span className="dot dot--live" />
                        {statusLabel[project.status][lang]}
                      </span>
                    )}
                    {project.status !== 'em-desenvolvimento' && (
                      <span className="project__tag">{statusLabel[project.status][lang]}</span>
                    )}
                    {project.team && <span className="project__tag">{t.team}</span>}
                  </div>

                  <p className="project__desc">{project.description[lang]}</p>

                  {project.stack.length > 0 && (
                    <p className="project__stack">{project.stack.join(' · ')}</p>
                  )}

                  <div className="project__footer">
                    {project.links?.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-arrow"
                      >
                        {t.demoLink}
                      </a>
                    )}
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-arrow"
                      >
                        {t.githubLink}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
