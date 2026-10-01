export function Projetos() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 pt-40">
      <div className="space-y-16 max-w-3xl">
        <div className="space-y-6">
          <p className="text-sm font-medium text-blue-400">Projetos</p>
          <h1 className="text-5xl font-bold text-slate-100">
            Alguns dos projetos que desenvolvi.
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Trabalho com foco em comunicação visual, performance e funcionalidade.
          </p>
        </div>

        <div className="border-t border-slate-800/50 pt-12 space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-100 mb-2">Portfólio Profissional</h3>
            <p className="text-slate-400">Estrutura clara para apresentar trabalho e diferenciais.</p>
            <div className="flex gap-2 mt-4">
              <span className="rounded-full bg-slate-800/50 px-3 py-1 text-xs text-slate-300">UI</span>
              <span className="rounded-full bg-slate-800/50 px-3 py-1 text-xs text-slate-300">Branding</span>
            </div>
          </div>

          <div className="border-t border-slate-800/30 pt-8">
            <h3 className="text-xl font-semibold text-slate-100 mb-2">Dashboard de Produto</h3>
            <p className="text-slate-400">Visualização de métricas com foco em produtividade.</p>
            <div className="flex gap-2 mt-4">
              <span className="rounded-full bg-slate-800/50 px-3 py-1 text-xs text-slate-300">Data</span>
              <span className="rounded-full bg-slate-800/50 px-3 py-1 text-xs text-slate-300">UX</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}