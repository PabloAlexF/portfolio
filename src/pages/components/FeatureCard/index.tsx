import type { IconType } from "react-icons"

interface FeatureCardProps {
  title: string
  description: string
  icon: IconType
}

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition duration-300 hover:border-blue-500/50 hover:bg-white/10">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 shrink-0 group-hover:bg-blue-500/30 group-hover:scale-110 transition duration-300">
          <Icon className="text-2xl" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition">{title}</h3>
          <p className="mt-2 text-slate-400 leading-relaxed group-hover:text-slate-300 transition">{description}</p>
        </div>
      </div>
    </div>
  )
}

