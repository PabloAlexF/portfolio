import { FiGithub, FiLinkedin } from "react-icons/fi"

export function Contato() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 pt-40">
      <div className="space-y-16 max-w-3xl">
        <div className="space-y-6">
          <p className="text-sm font-medium text-blue-400">Contato</p>
          <h1 className="text-5xl font-bold text-slate-100">
            Vamos conversar sobre seu próximo projeto.
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Estou sempre aberto para novos desafios e oportunidades de trabalho.
          </p>
        </div>

        <div className="border-t border-slate-800/50 pt-12 space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-100">Email</h3>
            <a href="mailto:seuemail@email.com" className="text-lg text-blue-400 hover:text-blue-300 transition">
              seuemail@email.com
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-100">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-100 transition"
              >
                <FiGithub className="text-xl" />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-100 transition"
              >
                <FiLinkedin className="text-xl" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}