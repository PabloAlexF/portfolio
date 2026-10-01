import type { IconType } from "react-icons"

interface FeatureCardProps {
  title: string
  description: string
  icon: IconType
}

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <div className="group flex flex-col gap-4">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 shrink-0 group-hover:bg-blue-500/15 transition duration-300">
          <Icon className="text-lg" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
          <p className="mt-2 text-slate-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

