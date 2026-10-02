import { FiMonitor, FiZap, FiCode } from 'react-icons/fi'
import { useMousePosition } from '@/hooks'
import { Reveal } from '@/components/ui'
import { useRef } from 'react'
import type { Service } from '@/data'

interface ServicesProps {
  services?: Service[]
}

const IconMap = {
  FiMonitor,
  FiZap,
  FiCode,
} as const

export function Services({
  services = [
    {
      title: 'Interfaces focadas em clareza',
      description:
        'Design simples, legível e funcional, pensado para converter atenção em confiança.',
      icon: 'FiMonitor',
    },
    {
      title: 'Experiência de uso fluida',
      description:
        'Fluxos mais naturais, navegação intuitiva e atenção real à usabilidade em cada detalhe.',
      icon: 'FiZap',
    },
    {
      title: 'Performance e qualidade',
      description:
        'Codebase organizada, carregamento eficiente e entrega com foco em resultado real.',
      icon: 'FiCode',
    },
  ],
}: ServicesProps) {
  return (
    <section id="sobre" className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Heading */}
          <Reveal>
            <div className="space-y-4">
              <p className="text-sm sm:text-base font-medium tracking-wide text-blue-400">
                O que entrego
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-slate-100">
                Soluções que equilibram estética, clareza e resultado.
              </h2>
            </div>
          </Reveal>

          {/* Cards Grid */}
          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} delay={index * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, delay }: { service: any; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mousePos = useMousePosition(cardRef)

  const Icon = IconMap[service.icon as keyof typeof IconMap]

  return (
    <Reveal delay={delay}>
      <div
        ref={cardRef}
        className="spotlight group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 hover:bg-white/5 focus-within:ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-950"
        style={{
          '--x': mousePos.x,
          '--y': mousePos.y,
        } as React.CSSProperties}
      >
        {/* Icon */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
            {Icon ? <Icon className="text-xl sm:text-2xl" /> : null}
          </div>
        </div>

        {/* Content */}
        <h3 className="mb-3 text-lg sm:text-xl font-semibold text-slate-100 group-hover:text-white transition-colors">
          {service.title}
        </h3>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
          {service.description}
        </p>
      </div>
    </Reveal>
  )
}
