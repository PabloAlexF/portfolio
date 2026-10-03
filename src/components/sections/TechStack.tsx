import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiJavascript,
  SiHtml5,
  SiCss,
} from 'react-icons/si'
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
  FaGithub,
  FaFigma,
  SiJavascript,
  SiHtml5,
  SiCss,
} as const

const categoryLabels: Record<string, string> = {
  frameworks: 'Linguagens e frameworks',
  estilo: 'Estilo',
  ferramentas: 'Ferramentas',
}

export function TechStack({ stack = [] }: TechStackProps) {
  const categories = ['frameworks', 'estilo', 'ferramentas'] as const
  const grouped = categories.map((cat) => ({
    key: cat,
    label: categoryLabels[cat],
    items: stack.filter((s) => s.category === cat),
  })).filter((g) => g.items.length > 0)

  return (
    <section id="stack" className="py-16 lg:py-20 scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="space-y-10">
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-medium tracking-wide text-blue-400">Stack</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">Tecnologias que uso no dia a dia.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {grouped.map(({ key, label, items }) => (
                <div key={key} className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{label}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, index) => (
                      <TechChip key={item.name} item={item} delay={index * 40} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function TechChip({ item, delay }: { item: StackItem; delay: number }) {
  const Icon = item.icon ? (IconMap[item.icon as keyof typeof IconMap] ?? null) : null

  return (
    <Reveal delay={delay}>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700/50 bg-slate-900/30 text-sm font-medium text-slate-300 transition-[transform,border-color,background-color] duration-300 hover:border-blue-500/50 hover:bg-blue-600/10 hover:text-blue-400 hover:scale-105 group">
        {Icon && <Icon className="text-sm text-slate-400 group-hover:text-blue-400 transition-colors" />}
        {item.name}
      </div>
    </Reveal>
  )
}
