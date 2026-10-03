import { FiGithub, FiLinkedin, FiMessageCircle, FiCheck } from 'react-icons/fi'
import { Reveal } from '@/components/ui'
import { useState } from 'react'
import { profile } from '@/data'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const socials = [
    { name: 'LinkedIn', icon: FiLinkedin, href: profile.linkedin, label: 'Abrir LinkedIn' },
    { name: 'GitHub', icon: FiGithub, href: profile.github, label: 'Abrir GitHub' },
    { name: 'WhatsApp', icon: FiMessageCircle, href: profile.whatsapp, label: 'Abrir WhatsApp' },
  ]

  return (
    <section id="contato" className="py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <Reveal className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100">Vamos conversar?</h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
              Aberto a oportunidades. Me chame por e-mail ou LinkedIn.
            </p>
          </Reveal>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-600/20 rounded-2xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />

            <Reveal
              delay={100}
              className="relative rounded-2xl border border-blue-500/30 bg-slate-950/50 backdrop-blur-md p-8 sm:p-12 space-y-8"
            >
              {/* Email */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-slate-400">E-mail</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={profile.email}
                    readOnly
                    aria-label="Endereço de e-mail"
                    className="flex-1 rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-3 text-slate-300 focus-visible:ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-950 outline-none"
                  />
                  <button
                    onClick={handleCopyEmail}
                    className={`rounded-lg px-6 py-3 text-sm font-semibold text-white transition-[background-color,transform] duration-150 active:scale-95 whitespace-nowrap focus-visible:ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-950 inline-flex items-center gap-2 ${
                      copied ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                    aria-label={copied ? 'E-mail copiado' : 'Copiar e-mail'}
                    aria-live="polite"
                  >
                    {copied ? <FiCheck className="text-base" /> : null}
                    {copied ? 'Copiado!' : 'Copiar'}
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-700/50" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-slate-950 px-4 text-sm text-slate-400">Ou conecte-se em:</span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {socials.map(({ name, icon: Icon, href, label }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-600/10 hover:text-blue-400 active:scale-95 focus-visible:ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-950"
                    aria-label={label}
                  >
                    <Icon className="text-lg" />
                    {name}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
