import {
  FaReact,
  FaGitAlt,
} from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiVite } from 'react-icons/si'
import { Reveal } from '@/components/ui'
import type { StackItem } from '@/data'

interface TechStackProps {
  stack?: StackItem[]
}

const IconMap = {
  FaReact,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  FaGitAlt,
} as const

export function TechStack({
  stack = [
    { name: 'React', icon: 'FaReact' },
    { name: 'TypeScript', icon: 'SiTypescript' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
    { name: 'Vite', icon: 'SiVite' },
    { name: 'Git', icon: 'FaGitAlt' },
  ],
}: TechStackProps) {
  return (
    <section className="py-16 md:py-24 border-t border-slate-800">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="space-y-8">
            <p className="text-sm font-medium text-slate-400">Stack principal</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {stack.map((item, index) => (
                <TechStackItem key={item.name} item={item} delay={index * 50} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function TechStackItem({ item, delay }: { item: StackItem; delay: number }) {
  const Icon = item.icon ? (IconMap[item.icon as keyof typeof IconMap] || null) : null

  return (
    <Reveal delay={delay}>
      <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-slate-700/50 bg-slate-900/30 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-600/10 hover:scale-105 group">
        {Icon && (
          <Icon className="text-2xl text-slate-400 group-hover:text-blue-400 transition-colors" />
        )}
        <span className="text-sm font-medium text-slate-300 text-center group-hover:text-slate-100 transition-colors">
          {item.name}
        </span>
      </div>
    </Reveal>
  )
}
