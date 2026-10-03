import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMapPin, FiGlobe } from 'react-icons/fi'
import { AvailableBadge, Reveal } from '@/components/ui'
import { profile } from '@/data'

const S = {
  kw:   'text-sky-400',
  name: 'text-blue-300',
  str:  'text-emerald-400',
  pun:  'text-slate-500',
}

function CodeWindow() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#060b1a] shadow-2xl shadow-blue-900/20">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="ml-3 font-mono text-xs text-slate-500">pablo.ts</span>
      </div>

      <pre className="overflow-x-auto px-6 pt-6 pb-16 font-mono text-sm xl:text-base leading-7 text-slate-400">
        <code>
          <div><span className={S.kw}>const</span> <span className={S.name}>pablo</span> <span className={S.pun}>=</span> <span className={S.pun}>{'{'}</span></div>
          <div>{'  '}role<span className={S.pun}>:</span> <span className={S.str}>"Front-end Developer"</span><span className={S.pun}>,</span></div>
          <div>{'  '}stack<span className={S.pun}>:</span> [<span className={S.str}>"React"</span><span className={S.pun}>,</span> <span className={S.str}>"TypeScript"</span><span className={S.pun}>,</span> <span className={S.str}>"Tailwind"</span>]<span className={S.pun}>,</span></div>
          <div>{'  '}openToWork<span className={S.pun}>:</span> <span className={S.kw}>true</span><span className={S.pun}>,</span></div>
          <div><span className={S.pun}>{'}'}</span><span className={S.pun}>;</span></div>
        </code>
      </pre>
    </div>
  )
}

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative flex justify-center overflow-hidden pt-28 lg:pt-32 pb-8 lg:pb-12 scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:items-center">

          <div className="space-y-8">
            <Reveal delay={0}>
              <AvailableBadge />
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-6">
                <p className="text-sm sm:text-base font-medium tracking-wide text-blue-400">
                  Desenvolvedor Front-end Júnior · React &amp; TypeScript · {profile.city}
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-slate-100">
                  Transformo ideias em experiências digitais que{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 animate-gradient-x">
                      funcionam
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-sky-400/30 to-blue-600/30 blur-xl -z-10" />
                  </span>{' '}
                  na prática.
                </h1>

                <p className="mt-6 text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl">
                  Desenvolvedor front-end com {profile.yearsExp} de experiência em React, TypeScript e Tailwind, focado em interfaces responsivas, acessíveis e performáticas.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200} className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollToSection('projetos')}
                className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-[background-color,border-color,color,box-shadow,transform] duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/50 active:scale-95 focus-visible:ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-950"
              >
                Ver projetos
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={profile.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-slate-300 transition-[background-color,border-color,color,box-shadow,transform] duration-300 hover:border-blue-500/50 hover:bg-blue-600/10 hover:text-blue-400 active:scale-95 focus-visible:ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-950"
                aria-label="Baixar currículo em PDF"
              >
                <FiDownload className="text-base" />
                Baixar currículo
              </a>
              <div className="flex items-center gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil no GitHub"
                  title="GitHub"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-lg border border-slate-700 text-slate-400 transition-colors duration-300 hover:border-blue-500/50 hover:bg-blue-600/10 hover:text-blue-400 focus-visible:ring-2 ring-blue-500"
                >
                  <FiGithub className="text-lg" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil no LinkedIn"
                  title="LinkedIn"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-lg border border-slate-700 text-slate-400 transition-colors duration-300 hover:border-blue-500/50 hover:bg-blue-600/10 hover:text-blue-400 focus-visible:ring-2 ring-blue-500"
                >
                  <FiLinkedin className="text-lg" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={300} className="flex flex-wrap gap-8 sm:gap-12 pt-6 border-t border-slate-700/50">
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-bold text-slate-100">{profile.yearsExp}</p>
                <p className="text-sm sm:text-base text-slate-400">de experiência</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-bold text-slate-100">{profile.projectsCount}</p>
                <p className="text-sm sm:text-base text-slate-400">projetos publicados</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300} className="hidden lg:flex items-center justify-center">
            <div className="relative mx-auto w-full max-w-lg xl:max-w-xl">

              <div className="absolute -inset-6 -z-10 rounded-full bg-blue-600/15 blur-3xl" />

              <CodeWindow />

              <div
                className="absolute -top-8 -right-8 w-44 rounded-xl border border-white/10 bg-slate-900/90 backdrop-blur-md p-3.5 shadow-lg hover:border-blue-500/50 transition-colors duration-300 animate-float will-change-transform z-10"
                style={{ animationDelay: '0s' }}
              >
                <p className="text-[11px] font-medium text-slate-400 mb-1 flex items-center gap-1">
                  <FiMapPin className="text-[11px]" /> Local
                </p>
                <p className="text-sm font-semibold text-slate-100 leading-snug">
                  {profile.city}
                  <br />
                  <span className="text-xs font-normal text-slate-400">{profile.regime}</span>
                </p>
              </div>

              <div
                className="absolute -bottom-8 -left-8 w-44 rounded-xl border border-white/10 bg-slate-900/90 backdrop-blur-md p-3.5 shadow-lg hover:border-blue-500/50 transition-colors duration-300 animate-float-2 will-change-transform z-10"
                style={{ animationDelay: '0.35s' }}
              >
                <p className="text-[11px] font-medium text-slate-400 mb-1 flex items-center gap-1">
                  <FiGlobe className="text-[11px]" /> Idiomas
                </p>
                <p className="text-sm font-semibold text-slate-100 leading-snug">
                  {profile.languages}
                </p>
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
