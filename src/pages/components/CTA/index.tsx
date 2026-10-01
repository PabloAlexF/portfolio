import { FiGithub, FiMail } from "react-icons/fi"

export function CTA() {
  return (
    <section id="contato" className="py-16">
      <div className="rounded-[28px] border border-blue-400/10 bg-slate-900/80 p-8 text-center sm:p-12">
        <p className="text-xs font-medium tracking-[0.26em] text-blue-200/80 uppercase">
          Contato
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Vamos construir algo claro, útil e bonito.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-300">
          Se você busca alguém que entenda interfaces, experiência e qualidade de entrega, pode me chamar.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:seuemail@email.com"
            className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-400"
          >
            <FiMail className="text-base" />
            seuemail@email.com
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/5 px-5 py-3 text-sm font-medium text-blue-100 transition hover:border-blue-300/50 hover:bg-blue-500/10"
          >
            <FiGithub className="text-base" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
