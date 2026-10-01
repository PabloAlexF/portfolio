interface SectionTitleProps {
  label: string
  title: string
}

export function SectionTitle({ label, title }: SectionTitleProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-medium tracking-[0.26em] text-blue-200/80 uppercase">
        {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}
