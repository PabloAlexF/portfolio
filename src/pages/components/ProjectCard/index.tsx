import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  index?: number
}

export function ProjectCard({ title, description, tags, index = 0 }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <div className={`grid items-center gap-12 lg:gap-16 lg:grid-cols-2 py-16 lg:py-24 border-b border-slate-800/50 last:border-b-0 group`}>
      {/* Imagem */}
      <div className={isEven ? "lg:order-1" : "lg:order-2"}>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="aspect-video bg-linear-to-br from-slate-800 to-slate-900 ring-1 ring-white/10 overflow-hidden relative">
            {/* Placeholder com gradiente */}
            <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-slate-800/50 via-slate-900 to-slate-950">
              <div className="text-center space-y-3">
                <div className="text-slate-500 text-5xl">📱</div>
                <p className="text-sm text-slate-500 font-medium">{title}</p>
              </div>
            </div>
          </div>
          {/* Glow on hover */}
          <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl pointer-events-none" />
        </div>
      </div>

      {/* Conteúdo */}
      <div className={isEven ? "lg:order-2" : "lg:order-1"}>
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-slate-100">{title}</h3>
            <p className="text-lg leading-relaxed text-slate-400">{description}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium text-slate-300 hover:border-blue-500/50 hover:bg-blue-500/10 transition duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-blue-600 hover:gap-3"
            >
              <FiExternalLink className="text-base" />
              Ver demo
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-4 py-2.5 text-sm font-medium text-slate-300 transition duration-300 hover:border-slate-500 hover:text-slate-100 hover:bg-slate-900/50"
            >
              <FiGithub className="text-base" />
              Código
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition duration-300 hover:gap-3 hover:text-blue-300"
            >
              Mais detalhes
              <FiArrowRight className="text-base" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
