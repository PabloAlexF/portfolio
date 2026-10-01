export function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-950 px-6 py-12 text-stone-100">
      <div className="w-full max-w-xl text-center">
        <p className="mb-4 text-xs font-medium tracking-[0.28em] text-stone-400 uppercase">
          404
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Página não encontrada
        </h1>

        <p className="mt-5 text-base leading-7 text-stone-400 sm:text-lg">
          A página que você tentou acessar não existe ou foi movida.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-100 px-5 py-2.5 text-sm font-medium text-stone-900 transition hover:bg-white"
          >
            Voltar para o início
          </a>
        </div>
      </div>
    </main>
  )
}