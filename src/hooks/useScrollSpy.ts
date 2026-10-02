import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // offset para navbar fixed

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          if (top <= 100 && bottom >= 100) {
            setActiveId(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Run once on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return activeId
}
