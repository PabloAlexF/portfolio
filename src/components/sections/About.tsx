import { FiDownload } from 'react-icons/fi'
import { Reveal } from '@/components/ui'

export function About() {
  const highlights = [
    'Foco em UX e clareza',
    'Código limpo e escalável',
    'Entrega no prazo',
  ]

  return (
    <section id="sobre-completo" className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:gap-20 lg:grid-cols-2 lg:items-center">
          {/* Left: Image Placeholder */}
          <Reveal delay={0}>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-blue-500/30 bg-gradient-to-br from-blue-600/20 via-slate-900 to-slate-950 flex items-center justify-center group">
              {/* Placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
              
              {/* Avatar placeholder */}
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-500/20 border-2 border-blue-500/40 flex items-center justify-center text-5xl">
                  👨‍💻
                </div>
                <p className="text-slate-400 text-sm">Pablo Andrade</p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-blue-500/5 backdrop-blur-sm transition-opacity duration-300" />
            </div>
          </Reveal>

          {/* Right: Content */}
          <div className="space-y-12">
            <Reveal delay={100}>
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
                  Desenvolvedor com foco em <span className="text-blue-400">experiência</span>.
                </h2>
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                  Há mais de 3 anos construo interfaces web que não apenas parecem boas, mas
                  funcionam excepcionalmente bem. Meu trabalho é guiado pela
                  convicção de que great design is invisible — deve ser tão intuitivo que o
                  usuário nem pensa sobre ele.
                </p>
              </div>
            </Reveal>

            {/* Highlights */}
            <Reveal delay={200}>
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                    <span className="text-base text-slate-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={300}>
              <a
                href="#contato"
                className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/50 active:scale-95 group"
              >
                <FiDownload className="transition-transform group-hover:-translate-y-1" />
                Baixar Currículo
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
