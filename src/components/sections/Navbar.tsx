import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useScrollSpy } from '@/hooks'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showBorder, setShowBorder] = useState(false)
  const activeId = useScrollSpy(['inicio', 'projetos', 'sobre', 'contato'])

  useEffect(() => {
    const handleScroll = () => {
      setShowBorder(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showBorder
          ? 'border-b border-slate-800/50'
          : 'border-b border-transparent'
      } bg-slate-950/80 backdrop-blur-md`}
    >
      <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#inicio')
          }}
          className="text-lg font-bold text-slate-100 hover:text-slate-50 transition-colors flex items-center gap-1"
        >
          PABLO <span className="text-blue-400">ANDRADE</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const linkId = link.href.replace('#', '')
            const isActive = linkId === activeId
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isActive
                    ? 'text-blue-400'
                    : 'text-slate-400 hover:text-slate-300'
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

        {/* CTA Button (Desktop) */}
        <button
          onClick={() => handleNavClick('#contato')}
          className="hidden md:inline-flex rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/50 active:scale-95"
        >
          Vamos conversar
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-700 text-slate-300 transition-colors hover:border-blue-500/50 hover:bg-blue-600/10 hover:text-blue-400"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>
      </nav>

      {/* Mobile Menu */}
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
            <button
              onClick={() => handleNavClick('#contato')}
              className="w-full mt-4 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 active:scale-95"
            >
              Vamos conversar
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
