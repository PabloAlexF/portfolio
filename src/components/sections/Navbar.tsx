import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { useScrollSpy } from '@/hooks'
import { profile } from '@/data'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showBorder, setShowBorder] = useState(false)
  const activeId = useScrollSpy(['inicio', 'projetos', 'stack', 'sobre', 'contato'])

  useEffect(() => {
    const handleScroll = () => setShowBorder(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showBorder ? 'border-b border-slate-800/50' : 'border-b border-transparent'
      } bg-slate-950/80 backdrop-blur-md`}
    >
      <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a
          href="#inicio"
          onClick={(e) => { e.preventDefault(); handleNavClick('#inicio') }}
          className="text-lg font-bold text-slate-100 hover:text-slate-50 transition-colors"
        >
          PABLO <span className="text-blue-400">ANDRADE</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const linkId = link.href.replace('#', '')
            const isActive = linkId === activeId
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isActive ? 'text-blue-400' : 'text-slate-400 hover:text-slate-300'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full animate-scale-in" />
                )}
              </button>
            )
          })}
        </div>

        <a
          href={profile.resumePath}
          download
          className="hidden md:inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/50 active:scale-95 focus-visible:ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-950"
          aria-label="Baixar currículo em PDF"
        >
          <FiDownload className="text-base" />
          Baixar currículo
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-700 text-slate-300 transition-colors hover:border-blue-500/50 hover:bg-blue-600/10 hover:text-blue-400 focus-visible:ring-2 ring-blue-500"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-slate-800/50 bg-slate-950/95 backdrop-blur-md animate-slide-down">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-2">
            {navLinks.map((link) => {
              const linkId = link.href.replace('#', '')
              const isActive = linkId === activeId
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium ${
                    isActive
                      ? 'bg-blue-600/10 text-blue-400 border border-blue-500/30'
                      : 'text-slate-300 hover:bg-slate-900/50 hover:text-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
            <a
              href={profile.resumePath}
              download
              className="flex items-center justify-center gap-2 w-full mt-4 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 active:scale-95"
              aria-label="Baixar currículo em PDF"
            >
              <FiDownload className="text-base" />
              Baixar currículo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
