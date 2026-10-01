import type { IconType } from "react-icons"

interface FeatureCardProps {
  title: string
  description: string
  icon: IconType
}

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <article className="group rounded-2xl border border-blue-400/10 bg-slate-900/80 p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-300/20 hover:bg-slate-900">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 ring-1 ring-blue-300/15">
        <Icon className="text-xl" />
      </div>
      <h3 className="text-xl font-medium text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </article>
  )
}
