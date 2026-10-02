import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { profile } from '@/data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'Início', href: '#inicio' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Stack', href: '#stack' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ]

  const socials = [
    { label: 'LinkedIn', icon: FiLinkedin, href: profile.linkedin },
    { label: 'GitHub', icon: FiGithub, href: profile.github },
  ]

  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 py-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <a href="#inicio" className="text-lg font-bold text-slate-100 hover:text-slate-50 transition-colors">
            PABLO <span className="text-blue-400">ANDRADE</span>
          </a>

          <nav aria-label="Rodapé" className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition-colors duration-300 hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-700 text-slate-400 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-600/10 hover:text-blue-400 focus-visible:ring-2 ring-blue-500"
              >
                <Icon className="text-base" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">© {currentYear} {profile.name}</p>
          <p className="text-xs text-slate-600">React · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
