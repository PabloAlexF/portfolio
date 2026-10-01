import { FiArrowRight } from "react-icons/fi"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
}

export function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-blue-400/10 bg-slate-900/80 p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-300/20 hover:bg-slate-900">
      <div className="mb-5 h-36 rounded-xl bg-linear-to-br from-slate-800 via-slate-900 to-blue-950/40 ring-1 ring-blue-300/10" />

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-blue-400/20 bg-slate-950 px-2.5 py-1 text-[10px] font-medium tracking-[0.08em] text-blue-100 uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="mt-5 text-xl font-medium text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>

      <a
        href="#contato"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-200 transition group-hover:text-white"
      >
        Solicitar detalhes
        <FiArrowRight className="text-base" />
      </a>
    </article>
  )
}
