import { useEffect } from 'react'

export function useTimelineReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), index * 120)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll('.timeline-item').forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}
