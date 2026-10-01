import { FiGithub, FiMail } from "react-icons/fi"

export function CTA() {
  return (
    <section id="contato" className="py-24 lg:py-32">
      <div className="space-y-8 text-center">
        <div className="space-y-4">
          <p className="text-sm font-medium text-blue-400">Entre em contato</p>
          <h2 className="text-4xl font-bold leading-tight text-slate-100 sm:text-5xl">
            Vamos construir algo incrível.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Se você busca um desenvolvedor front-end que entende de design, performance e qualidade, vamos conversar.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
          <a
            href="mailto:seuemail@email.com"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-blue-600"
          >
            <FiMail className="text-base" />
            seuemail@email.com
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:border-slate-500 hover:text-slate-100 hover:bg-slate-900/50"
          >
            <FiGithub className="text-base" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
