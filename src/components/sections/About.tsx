import { FiDownload } from 'react-icons/fi'
import { Reveal } from '@/components/ui'
import { profile } from '@/data'

export function About() {
  const details = [
    { label: 'Experiência', value: `${profile.yearsExp} com React e TypeScript` },
    { label: 'Formação', value: profile.formation },
    { label: 'Idiomas', value: profile.languages },
    { label: 'Localização', value: `${profile.city} · Aberto a remoto` },
  ]

  const highlights = [
    'Acessibilidade e performance',
    'Código limpo e tipado (TypeScript)',
  ]

  return (
    <section id="sobre" className="py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:gap-20 lg:grid-cols-2 lg:items-center">

          {/* Left: Image Card */}
          <Reveal delay={0}>
            <div className="relative aspect-[4/5] max-h-[460px] w-full rounded-2xl overflow-hidden border border-blue-500/20 group">
              {/* Glow azul */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.22),transparent_60%)]" />

              {/* Grid sutil com fade */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                  maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                }}
              />

              {/* Iniciais como marca d'água */}
              <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                <span className="text-[10rem] font-black text-white/[0.06] leading-none">PA</span>
              </div>

              {/* Quando houver foto real, substituir todo o conteúdo acima por:
                  <img src="/pablo.jpg" alt="Foto de Pablo Andrade" loading="lazy"
                    className="h-full w-full object-cover grayscale-[20%] transition duration-500 group-hover:scale-105 group-hover:grayscale-0" />
              */}

              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-blue-500/10 transition-opacity duration-300" />

              {/* Legenda */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950/80 to-transparent">
                <p className="text-sm font-medium text-slate-300">{profile.name}</p>
                <p className="text-xs text-slate-500">{profile.role}</p>
              </div>
            </div>
          </Reveal>

          {/* Right: Content */}
          <div className="space-y-10">
            <Reveal delay={100}>
              <div className="space-y-4">
                <p className="text-sm sm:text-base font-medium tracking-wide text-blue-400">Sobre</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
                  Desenvolvedor com foco em <span className="text-blue-400">experiência</span>.
                </h2>
                <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed">
                  Há {profile.yearsExp} construo interfaces com React e TypeScript, com atenção a desempenho, acessibilidade e clareza visual. Moro em {profile.city} e busco oportunidades {profile.regime}, presencial ou remoto.
                </p>
              </div>
            </Reveal>

            {/* Details list */}
            <Reveal delay={200}>
              <dl className="space-y-3">
                {details.map(({ label, value }) => (
                  <div key={label} className="flex gap-3 text-sm sm:text-base">
                    <dt className="w-28 shrink-0 font-medium text-slate-400">{label}</dt>
                    <dd className="text-slate-300">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            {/* Highlights */}
            <Reveal delay={250}>
              <div className="space-y-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold shrink-0">
                      ✓
                    </div>
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={300}>
              <a
                href={profile.resumePath}
                download
                className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-[background-color,border-color,color,box-shadow,transform] duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/50 active:scale-95 group focus-visible:ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-950"
                aria-label="Baixar currículo em PDF"
              >
                <FiDownload className="transition-transform group-hover:-translate-y-1" />
                Baixar currículo
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
