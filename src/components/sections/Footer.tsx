import { FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'Início', href: '#inicio' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ]

  const socials = [
    { label: 'GitHub', icon: FiGithub, href: '#' },
    { label: 'LinkedIn', icon: FiLinkedin, href: '#' },
  ]

  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Branding */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-100">
              PABLO <span className="text-blue-400">ANDRADE</span>
            </h3>
            <p className="text-sm text-slate-400">
              Desenvolvedor front-end focado em interfaces que funcionam.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-slate-300">Navegação</p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-slate-300">Redes Sociais</p>
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-600 text-slate-400 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-600/10 hover:text-blue-400"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon className="text-lg" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-slate-300">Pronto para começar?</p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 active:scale-95"
            >
              Vamos conversar
              <FiExternalLink className="text-sm" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {currentYear} Pablo Andrade. Todos os direitos reservados.
          </p>
          <p className="text-xs text-slate-500">
            Feito com React + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
