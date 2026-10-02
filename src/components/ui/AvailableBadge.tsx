export function AvailableBadge() {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      Aberto a oportunidades · CLT / PJ
    </div>
  )
}
