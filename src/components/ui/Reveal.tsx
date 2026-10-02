import { useInView } from '@/hooks'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ${
        isInView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{
        transitionDelay: isInView ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  )
}
