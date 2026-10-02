export function BackgroundDecor() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Glow 1: Azul atrás do Hero */}
      <div className="absolute -top-40 left-1/4 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Glow 2: Roxo/Ciano em outra região */}
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-600/15 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid de linhas sutis */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(59, 130, 246, 0.5)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Noise overlay (opcional, muito sutil) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Fade mask para as bordas */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/20 via-transparent to-[#030712]/20 pointer-events-none" />
    </div>
  )
}
