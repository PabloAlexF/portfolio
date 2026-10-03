import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

interface UseInViewOptions {
  threshold?: number | number[]
  rootMargin?: string
  once?: boolean
}

export function useInView<T extends HTMLElement = HTMLElement>({
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin, once])

  return { ref: ref as RefObject<T>, isInView }
}
