import { useEffect, useState, useCallback } from 'react'

interface MousePosition {
  x: number
  y: number
}

export function useMousePosition(ref: React.RefObject<HTMLElement>) {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePos({ x, y })
  }, [ref])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    element.addEventListener('mousemove', handleMouseMove)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  return mousePos
}
