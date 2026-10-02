interface ProjectMockupProps {
  project: string
  color?: 'blue' | 'purple' | 'cyan'
}

const colorGradients = {
  blue: 'from-blue-600/20 via-slate-900 to-slate-950',
  purple: 'from-purple-600/20 via-slate-900 to-slate-950',
  cyan: 'from-cyan-600/20 via-slate-900 to-slate-950',
}

export function ProjectMockup({ project, color = 'blue' }: ProjectMockupProps) {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br group-hover:border-blue-500/30 transition-colors duration-300">
      {/* Browser Frame */}
      <div className="flex flex-col h-full bg-gradient-to-br from-slate-900 to-slate-950">
        {/* Browser Header */}
        <div className="flex items-center gap-3 px-4 py-3 bg-slate-800/50 border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 text-center">
            <p className="text-xs text-slate-400 font-mono">localhost:3000</p>
          </div>
        </div>

        {/* Content Area - Grid com linhas e boxes para simular UI */}
        <div className={`flex-1 bg-gradient-to-br ${colorGradients[color]} p-6 relative overflow-hidden`}>
          {/* Grid BG */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id={`grid-${project}`}
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="rgba(59, 130, 246, 0.5)"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#grid-${project})`} />
            </svg>
          </div>

          {/* Mock UI Elements */}
          <div className="relative z-10 space-y-4">
            {/* Header Bar */}
            <div className="h-12 bg-white/10 rounded-lg backdrop-blur-sm border border-white/5" />

            {/* Content Blocks */}
            <div className="space-y-3">
              <div className="h-4 bg-white/10 rounded w-3/4" />
              <div className="h-4 bg-white/10 rounded w-full" />
              <div className="h-4 bg-white/10 rounded w-5/6" />
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <div className="h-10 bg-blue-500/30 rounded-lg w-32 border border-blue-400/30 backdrop-blur-sm" />
            </div>

            {/* Accent Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>

      {/* Hover Glow Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-blue-500/10 blur-2xl transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}
