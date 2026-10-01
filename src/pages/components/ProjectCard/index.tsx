import { FiArrowRight } from "react-icons/fi"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  index?: number
}

export function ProjectCard({ title, description, tags, index = 0 }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <div className={`grid items-center gap-8 lg:gap-12 lg:grid-cols-2 py-12 lg:py-20 border-b border-slate-800/50 last:border-b-0`}>
      {/* Imagem */}
      <div className={isEven ? "lg:order-1" : "lg:order-2"}>
        <div className="aspect-video rounded-lg bg-linear-to-br from-slate-800 to-slate-900 ring-1 ring-slate-700/50 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-slate-600">
            <div className="text-center">
              <p className="text-sm">Screenshot do projeto</p>
              <p className="text-xs text-slate-700 mt-2">{title}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className={isEven ? "lg:order-2" : "lg:order-1"}>
        <div className="space-y-4">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-slate-100">{title}</h3>
            <p className="text-lg leading-relaxed text-slate-400">{description}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-800/50 px-3 py-1 text-xs font-medium text-slate-300 border border-slate-700/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-6">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-blue-400 font-medium text-sm transition duration-300 hover:gap-3 hover:text-blue-300"
            >
              Solicitar detalhes
              <FiArrowRight className="text-base" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
