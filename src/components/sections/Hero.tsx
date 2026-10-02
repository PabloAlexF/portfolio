import { FiArrowRight, FiMonitor, FiZap, FiCode } from 'react-icons/fi'
import { AvailableBadge, CounterUp, Reveal } from '@/components/ui'

interface StackItem {
  name: string
  icon?: React.ReactNode
}

interface HeroProps {
  stack?: StackItem[]
}

export function Hero({ stack = [] }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-12 md:pt-24 md:pb-16"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-12">
            {/* Badge */}
            <Reveal delay={0}>
              <AvailableBadge />
            </Reveal>

            {/* Main Heading */}
            <Reveal delay={100}>
              <div className="space-y-4">
                <p className="text-sm sm:text-base font-medium tracking-wide text-blue-400">
                  Desenvolvedor Front-end
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-slate-100">
                  Transformo ideias em experiências digitais que{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 animate-gradient-x">
                      funcionam
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-sky-400/30 to-blue-600/30 blur-xl -z-10 animate-pulse" />
                  </span>{' '}
                  na prática.
                </h1>

                <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl">
                  Sou desenvolvedor front-end focado em interfaces limpas, responsivas e bem pensadas, com atenção para desempenho, clareza e impacto real.
                </p>
              </div>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={200} className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollToSection('projetos')}
                className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/50 active:scale-95"
              >
                Ver projetos
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-slate-300 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-600/10 hover:text-blue-400 active:scale-95"
              >
                Sobre mim
              </button>
            </Reveal>

            {/* Stats */}
            <Reveal delay={300} className="flex flex-wrap gap-8 sm:gap-12 pt-8 border-t border-slate-700/50">
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-bold text-slate-100">
                  +<CounterUp to={3} duration={2} />
                </p>
                <p className="text-sm sm:text-base text-slate-400">anos de prática</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-bold text-slate-100">
                  <CounterUp to={18} duration={2} suffix="+" />
                </p>
                <p className="text-sm sm:text-base text-slate-400">projetos entregues</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-bold text-blue-400">UX</p>
                <p className="text-sm sm:text-base text-slate-400">foco constante</p>
              </div>
            </Reveal>

            {/* Stack */}
            {stack.length > 0 && (
              <Reveal delay={400}>
                <div className="max-w-2xl space-y-4 pt-4">
                  <p className="text-sm font-medium text-slate-400">Stack principal</p>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((item) => (
                      <button
                        key={item.name}
                        className="rounded-lg border border-slate-700/50 bg-slate-900/30 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-600/10 hover:text-blue-400 hover:scale-105 focus-visible:ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-950"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          {/* Right Column: Floating Cards */}
          <Reveal delay={300} className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Central Element: Code Terminal Mockup */}
              <div className="absolute inset-0 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/30 via-slate-950/50 to-slate-950 backdrop-blur-md p-6 flex flex-col">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 space-y-2 font-mono text-xs text-slate-400">
                  <div>
                    <span className="text-blue-400">const</span> solucao ={' '}
                    <span className="text-green-400">'moderno'</span>;
                  </div>
                  <div>
                    <span className="text-blue-400">const</span> resultado ={' '}
                    <span className="text-green-400">'impactante'</span>;
                  </div>
                  <div className="pt-2">
                    <span className="text-slate-500"># Pronto para começar...</span>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 */}
              <div
                className="absolute top-0 -left-4 w-72 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-xl animate-float"
                style={{ animationDelay: '0s' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-blue-500/20">
                    <FiMonitor className="text-blue-400 text-xl" />
                  </div>
                  <span className="text-sm font-medium text-slate-300">Especialidade</span>
                </div>
                <p className="text-lg font-semibold text-slate-100">
                  Interfaces modernas
                </p>
              </div>

              {/* Floating Card 2 */}
              <div
                className="absolute top-32 -right-8 w-72 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-xl animate-float-2"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-blue-500/20">
                    <FiZap className="text-blue-400 text-xl" />
                  </div>
                  <span className="text-sm font-medium text-slate-300">Abordagem</span>
                </div>
                <p className="text-lg font-semibold text-slate-100">
                  Rápida e escalável
                </p>
              </div>

              {/* Floating Card 3 */}
              <div
                className="absolute -bottom-4 left-8 w-72 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-xl animate-float-3"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-blue-500/20">
                    <FiCode className="text-blue-400 text-xl" />
                  </div>
                  <span className="text-sm font-medium text-slate-300">Performance</span>
                </div>
                <p className="text-lg font-semibold text-slate-100">
                  Otimizada por padrão
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
