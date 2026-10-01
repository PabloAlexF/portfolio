import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/#inicio" className="text-sm font-medium tracking-[0.2em] text-stone-100 uppercase">
          Pablo Andrade
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm text-stone-300 transition hover:text-white">
            Início
          </Link>
          <Link to="/sobre" className="text-sm text-stone-300 transition hover:text-white">
            Sobre
          </Link>
          <Link to="/projetos" className="text-sm text-stone-300 transition hover:text-white">
            Projetos
          </Link>
          <Link to="/contato" className="text-sm text-stone-300 transition hover:text-white">
            Contato
          </Link>
        </nav>

        <Link
          to="/contato"
          className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-100 px-4 py-2 text-sm font-medium text-stone-900 transition hover:bg-white"
        >
          Fale comigo
        </Link>
      </div>
    </header>
  )
}