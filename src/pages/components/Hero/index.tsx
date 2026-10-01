import {
  FiBriefcase,
  FiCode,
  FiMonitor,
  FiZap,
} from "react-icons/fi"
import { FeatureCard } from "../FeatureCard"

interface HeroProfileProps {
  stack: string[]
}

export function HeroProfile({ stack }: HeroProfileProps) {
  return (
    <section className="flex min-h-[72vh] items-center">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-5 text-xs font-medium tracking-[0.28em] text-blue-200/80 uppercase">
            Front-end • React • TypeScript
          </p>

          <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Transformo ideias em experiências digitais que funcionam na prática.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Sou desenvolvedor front-end focado em interfaces limpas, responsivas e bem pensadas,
            com atenção para desempenho, clareza e impacto real para quem usa o produto.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center rounded-full bg-blue-500 px-5 py-3 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Ver projetos
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/5 px-5 py-3 text-sm font-medium text-blue-100 transition duration-200 hover:-translate-y-0.5 hover:border-blue-300/50 hover:bg-blue-500/10"
            >
              Sobre mim
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <div>
              <span className="block text-2xl font-semibold text-white">+3</span>
              anos de prática
            </div>
            <div>
              <span className="block text-2xl font-semibold text-white">18+</span>
              projetos entregues
            </div>
            <div>
              <span className="block text-2xl font-semibold text-white">UX</span>
              foco constante
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-blue-400/20 bg-linear-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-[0_30px_80px_rgba(6,18,39,0.7)]">
          <div className="rounded-2xl border border-blue-400/10 bg-slate-900/80 p-5">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-medium tracking-[0.22em] text-slate-400 uppercase">
                Perfil
              </span>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-[10px] font-medium text-emerald-300">
                Disponível
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-blue-400/10 bg-slate-800/70 p-4 transition duration-200 hover:border-blue-300/30 hover:bg-slate-800">
                <div className="mb-3 flex items-center gap-3 text-blue-300">
                  <FiBriefcase className="text-lg" />
                  <p className="text-sm text-slate-400">Especialidade</p>
                </div>
                <p className="mt-2 text-xl font-medium text-white">Interfaces modernas</p>
              </div>

              <div className="rounded-xl border border-blue-400/10 bg-slate-800/70 p-4 transition duration-200 hover:border-blue-300/30 hover:bg-slate-800">
                <div className="mb-3 flex items-center gap-3 text-blue-300">
                  <FiZap className="text-lg" />
                  <p className="text-sm text-slate-400">Abordagem</p>
                </div>
                <p className="mt-2 text-xl font-medium text-white">Rápida, clara, escalável</p>
              </div>

              <div className="rounded-xl border border-blue-400/10 bg-slate-800/70 p-4 transition duration-200 hover:border-blue-300/30 hover:bg-slate-800">
                <div className="mb-3 flex items-center gap-3 text-blue-300">
                  <FiCode className="text-lg" />
                  <p className="text-sm text-slate-400">Stack</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-blue-400/20 bg-slate-950 px-2.5 py-1 text-[11px] text-blue-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
    <section id="sobre" className="mt-10 py-12">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-xs font-medium tracking-[0.26em] text-blue-200/80 uppercase">
          O que entrego
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Soluções que equilibram estética, clareza e resultado.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {highlights.map(({ title, description, icon }) => (
          <FeatureCard
            key={title}
            title={title}
            description={description}
            icon={icon}
          />
        ))}
      </div>
    </section>
  )
}
