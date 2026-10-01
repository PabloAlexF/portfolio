import { FiCode, FiMonitor, FiZap } from "react-icons/fi"
import { FeatureCard } from "../FeatureCard"

interface HeroProfileProps {
  stack: string[]
}

export function HeroProfile({ stack }: HeroProfileProps) {
  return (
    <section className="flex min-h-screen items-center pt-20">
      <div className="w-full space-y-20">
        {/* Hero Text */}
        <div className="max-w-4xl space-y-6">
          <p className="text-sm font-medium tracking-wide text-blue-400">
            Desenvolvedor Front-end
          </p>

          <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
            Transformo ideias em experiências digitais que <span className="text-blue-400">funcionam</span> na prática.
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
            Sou desenvolvedor front-end focado em interfaces limpas, responsivas e bem pensadas, com atenção para desempenho, clareza e impacto real.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projetos"
              className="rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-blue-600"
            >
              Ver projetos
            </a>
            <a
              href="#sobre"
              className="rounded-lg border border-slate-600 px-6 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:border-slate-500 hover:text-slate-100 hover:bg-slate-900/50"
            >
              Sobre mim
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-12 border-t border-slate-700/50">
            <div>
              <p className="text-3xl font-bold text-slate-100">+3</p>
              <p className="mt-1 text-sm text-slate-400">anos de prática</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-100">18+</p>
              <p className="mt-1 text-sm text-slate-400">projetos entregues</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">UX</p>
              <p className="mt-1 text-sm text-slate-400">foco constante</p>
            </div>
          </div>
        </div>

        {/* Stack Section */}
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-medium text-slate-400">Stack principal</p>
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-slate-700/50 bg-slate-900/30 px-4 py-2 text-sm text-slate-300 transition duration-300 hover:border-blue-500/50 hover:bg-slate-900/50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Features() {
  const highlights = [
    {
      title: "Interfaces focadas em clareza",
      description:
        "Design simples, legível e funcional, pensado para converter atenção em confiança.",
      icon: FiMonitor,
    },
    {
      title: "Experiência de uso fluida",
      description:
        "Fluxos mais naturais, navegação intuitiva e atenção real à usabilidade em cada detalhe.",
      icon: FiZap,
    },
    {
      title: "Performance e qualidade",
      description:
        "Codebase organizada, carregamento eficiente e entrega com foco em resultado real.",
      icon: FiCode,
    },
  ]

  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="space-y-16">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-medium tracking-wide text-blue-400">O que entrego</p>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-100">
            Soluções que equilibram estética, clareza e resultado.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {highlights.map(({ title, description, icon }) => (
            <FeatureCard
              key={title}
              title={title}
              description={description}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
