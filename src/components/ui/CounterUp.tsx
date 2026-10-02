import { useEffect, useState } from 'react'
import { useInView } from '@/hooks'

interface CounterUpProps {
  from?: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function CounterUp({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
}: CounterUpProps) {
  const [count, setCount] = useState(from)
  const { ref, isInView } = useInView({ once: true })

  useEffect(() => {
    if (!isInView) return

    const range = to - from
    const increment = range / (duration * 60) // 60fps
    let current = from
    const timer = setInterval(() => {
      current += increment
      if (current >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isInView, from, to, duration])

  const displayValue =
    typeof to === 'string'
      ? to
      : `${prefix}${count.toLocaleString()}${suffix}`

  return <span ref={ref}>{displayValue}</span>
}
