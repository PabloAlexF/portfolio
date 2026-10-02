import { FiMail, FiGithub, FiLinkedin, FiMessageCircle } from 'react-icons/fi'
import { Reveal } from '@/components/ui'
import { useState } from 'react'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'seuemail@email.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const socials = [
    {
      name: 'Email',
      icon: FiMail,
      action: handleCopyEmail,
      label: 'Copiar email',
    },
    {
      name: 'GitHub',
      icon: FiGithub,
      href: '#',
      label: 'Abrir GitHub',
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      href: '#',
      label: 'Abrir LinkedIn',
    },
    {
      name: 'WhatsApp',
      icon: FiMessageCircle,
      href: '#',
      label: 'Abrir WhatsApp',
    },
  ]

  return (
    <section id="contato" className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Content */}
          <Reveal className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100">
              Vamos conversar?
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Se você tem um projeto em mente ou quer discutir ideias, adoraria ouvir.
              Envie uma mensagem ou clique em um dos botões abaixo para entrar em contato.
            </p>
          </Reveal>

          {/* CTA Container with Glow */}
          <div className="relative group">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-600/20 rounded-2xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <Reveal
              delay={100}
              className="relative rounded-2xl border border-blue-500/30 bg-slate-950/50 backdrop-blur-md p-8 sm:p-12 space-y-8"
            >
              {/* Email Section */}
              <div className="space-y-4">
                <p className="text-sm font-medium text-slate-400">Email</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    readOnly
                    className="flex-1 rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-3 text-slate-300 focus-visible:ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-950"
                  />
                  <button
                    onClick={handleCopyEmail}
                    className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 active:scale-95 whitespace-nowrap"
                  >
                    {copied ? '✓ Copiado!' : 'Copiar'}
                  </button>
                </div>
              </div>

              {/* Or Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-700/50" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-slate-950 px-4 text-sm text-slate-400">Ou conecte-se em:</span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {socials.map((social) => {
                  const Icon = social.icon
                  const isEmail = social.name === 'Email'

                  if (!isEmail) {
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-600/10 hover:text-blue-400 active:scale-95"
                        aria-label={social.label}
                        title={social.label}
                      >
                        <Icon className="text-lg" />
                        <span className="hidden sm:inline">{social.name}</span>
                      </a>
                    )
                  }

                  return (
                    <button
                      key={social.name}
                      onClick={social.action}
                      className="group/btn inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-600/10 hover:text-blue-400 active:scale-95"
                      aria-label={social.label}
                      title={social.label}
                    >
                      <Icon className="text-lg" />
                      <span className="hidden sm:inline">{social.name}</span>
                    </button>
                  )
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
