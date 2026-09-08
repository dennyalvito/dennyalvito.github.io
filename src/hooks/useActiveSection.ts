import { useEffect, useState } from 'react'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('section[id]'),
    )
    let frame = 0
    const update = () => {
      frame = 0
      const activationLine = Math.min(window.innerHeight * 0.3, 220)
      let current = sections[0]?.id ?? 'hero'
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationLine)
          current = section.id
      }
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4
      )
        current = 'contact'
      setActiveSection(current)
    }
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  return activeSection
}
