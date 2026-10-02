import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'
import { ProjectMockup } from '@/components/ProjectMockup'
import { Reveal } from '@/components/ui'
import type { Project } from '@/data'

interface ProjectsProps {
  projects?: Project[]
}

export function Projects({
  projects = [
    {
      id: 'portfolio-profissional',
      number: '01',
      title: 'Portfólio profissional',
      description:
        'Estrutura clara para apresentar trabalho, processo e diferenciais de forma objetiva.',
      tags: ['UI', 'Branding', 'Portfolio'],
      metrics: 'LCP -40%',
    },
    {
      id: 'dashboard-produto',
      number: '02',
      title: 'Dashboard de produto',
      description:
        'Visualização direta de métricas e dados com foco em produtividade e tomada de decisão.',
      tags: ['Data', 'UX', 'React'],
      metrics: '+25% conversão',
    },
    {
      id: 'landing-page',
      number: '03',
      title: 'Landing page de conversão',
      description:
        'Mensagem forte, hierarquia visual simples e chamada para ação bem posicionada.',
      tags: ['Marketing', 'Design', 'Performance'],
      metrics: '+18% engagement',
    },
  ],
}: ProjectsProps) {
  return (
    <section id="projetos" className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 lg:space-y-24">
          {/* Heading */}
          <Reveal>
            <div className="space-y-4">
              <p className="text-sm sm:text-base font-medium tracking-wide text-blue-400">
                Projetos
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-slate-100">
                Trabalho com foco em comunicação visual e funcionalidade.
              </h2>
            </div>
          </Reveal>

          {/* Projects List */}
          <div className="space-y-16 lg:space-y-24">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0
  const delay = (index + 1) * 100

  return (
    <Reveal delay={delay}>
      <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 lg:items-center">
        {/* Image / Mockup */}
        <div
          className={`group relative aspect-video rounded-2xl overflow-hidden ${
            !isEven ? 'lg:order-2' : ''
          }`}
        >
          <ProjectMockup project={project.id} color="blue" />
        </div>

        {/* Content */}
        <div className={`space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
          {/* Number and Title */}
          <div className="space-y-2">
            <p className="text-6xl sm:text-7xl font-bold text-slate-800 dark:text-slate-900">
              {project.number}
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            {project.description}
          </p>

          {/* Metrics Badge */}
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/30 px-4 py-2 text-sm font-medium text-blue-300">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              {project.metrics}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm text-slate-300 transition-colors duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-6">
            <a
              href={project.demoUrl || '#'}
              className="group/btn inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/50 active:scale-95"
            >
              <FiExternalLink className="text-base" />
              Ver demo
            </a>
            <a
              href={project.codeUrl || '#'}
              className="group/btn inline-flex items-center gap-2 rounded-lg border border-slate-600 px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-600/10 hover:text-blue-400"
            >
              <FiGithub className="text-base" />
              Código
            </a>
            <button className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors duration-300 hover:text-blue-400">
              Mais detalhes
              <FiArrowRight className="transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
