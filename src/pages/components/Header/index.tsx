import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800/30 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link 
          to="/" 
          className="text-lg font-semibold tracking-tight text-slate-100 transition hover:text-blue-400"
        >
          PABLO <span className="text-blue-400">ANDRADE</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <Link 
            to="/" 
            className="text-sm text-slate-400 transition duration-200 hover:text-slate-100"
          >
            Início
          </Link>
          <Link 
            to="/sobre" 
            className="text-sm text-slate-400 transition duration-200 hover:text-slate-100"
          >
            Sobre
          </Link>
          <Link 
            to="/projetos" 
            className="text-sm text-slate-400 transition duration-200 hover:text-slate-100"
          >
            Projetos
          </Link>
          <Link 
            to="/contato" 
            className="text-sm text-slate-400 transition duration-200 hover:text-slate-100"
          >
            Contato
          </Link>
        </nav>

        <Link
          to="/contato"
          className="rounded-lg border border-blue-500/40 bg-blue-500/5 px-4 py-2 text-sm font-medium text-blue-400 transition duration-200 hover:border-blue-400/60 hover:bg-blue-500/10"
        >
          Fale comigo
        </Link>
      </div>
    </header>
  )
}