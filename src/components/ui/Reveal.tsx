import { useInView } from '@/hooks'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1, rootMargin: '0px 0px -5% 0px' })

  return (
    <div
      ref={ref}
      data-reveal
      className={`transition-[opacity,transform] duration-700 ease-out ${
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
