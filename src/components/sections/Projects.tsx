import { useEffect } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { Reveal } from '@/components/ui'
import type { Project } from '@/data'

interface ProjectsProps {
  projects?: Project[]
}

const isPlaceholder = (v?: string) => !v || v.includes('[') || v === '#' || v === ''

function isComplete(p: Project) {
  return (
    !isPlaceholder(p.title) &&
    !isPlaceholder(p.description) &&
    !!p.image &&
    !isPlaceholder(p.image)
  )
}

export function Projects({ projects = [] }: ProjectsProps) {
  const isDev = import.meta.env.DEV

  const visible = isDev
    ? projects
    : projects.filter(isComplete)

  // Aviso único em DEV com campos pendentes
  useEffect(() => {
    if (!isDev) return
    const pending: string[] = []
    projects.forEach((p) => {
      if (isPlaceholder(p.title)) pending.push(`[${p.id}] title`)
      if (isPlaceholder(p.description)) pending.push(`[${p.id}] description`)
      if (!p.image || isPlaceholder(p.image)) pending.push(`[${p.id}] image`)
      if (!p.role || isPlaceholder(p.role)) pending.push(`[${p.id}] role`)
      if (!p.demoUrl || isPlaceholder(p.demoUrl)) pending.push(`[${p.id}] demoUrl`)
      if (!p.codeUrl || isPlaceholder(p.codeUrl)) pending.push(`[${p.id}] codeUrl`)
    })
    if (pending.length > 0) {
      console.warn('[Portfolio] Campos pendentes nos projetos:\n' + pending.map((f) => `  • ${f}`).join('\n'))
    }
  }, [projects, isDev])

  return (
    <section id="projetos" className="py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 lg:space-y-20">
          <Reveal>
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-medium tracking-wide text-blue-400">Projetos</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-slate-100">
                Projetos selecionados.
              </h2>
            </div>
          </Reveal>

          <div className="space-y-16 lg:space-y-20">
            {visible.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} isDraft={isDev && !isComplete(project)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isDraft,
}: {
  project: Project
  index: number
  isDraft: boolean
}) {
  const isEven = index % 2 === 0
  const showDemo = !!project.demoUrl && !isPlaceholder(project.demoUrl)
  const showCode = !!project.codeUrl && !isPlaceholder(project.codeUrl)

  return (
    <Reveal delay={(index + 1) * 100}>
      <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 lg:items-center">
        {/* Image */}
        <div
          className={`group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 ${!isEven ? 'lg:order-2' : ''}`}
        >
          {project.image && !isPlaceholder(project.image) ? (
            <img
              src={project.image}
              alt={project.image_alt ?? project.title}
              loading="lazy"
              className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="aspect-video max-h-64 flex items-center justify-center">
              <p className="text-xs text-slate-600 tracking-wide">Print em breve</p>
            </div>
          )}
          {isDraft && (
            <span className="absolute top-3 left-3 rounded-md bg-amber-500/20 border border-amber-500/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-amber-400">
              Rascunho
            </span>
          )}
        </div>

        {/* Content */}
        <div className={`space-y-5 ${!isEven ? 'lg:order-1' : ''}`}>
          <div className="space-y-2">
            <p className="text-6xl sm:text-7xl font-bold text-slate-800/80 select-none">{project.number}</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">{project.title}</h3>
          </div>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">{project.description}</p>

          {project.role && !isPlaceholder(project.role) && (
            <p className="text-sm text-slate-400">
              <span className="font-medium text-slate-300">Meu papel:</span> {project.role}
            </p>
          )}

          {project.metrics && !isPlaceholder(project.metrics) && (
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 text-sm font-medium text-blue-300">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              {project.metrics}
            </span>
          )}

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm text-slate-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-300 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {(showDemo || showCode) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {showDemo && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/50 active:scale-95 focus-visible:ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-950"
                  aria-label={`Ver demo de ${project.title}`}
                >
                  <FiExternalLink className="text-base" />
                  Ver demo
                </a>
              )}
              {showCode && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-600/10 hover:text-blue-400 active:scale-95 focus-visible:ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-950"
                  aria-label={`Ver código de ${project.title} no GitHub`}
                >
                  <FiGithub className="text-base" />
                  Código
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </Reveal>
  )
}
