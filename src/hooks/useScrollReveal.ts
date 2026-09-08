import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    document.querySelectorAll('.reveal').forEach((element) => {
      element.classList.add('reveal-pending')
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
      document
        .querySelectorAll('.reveal-pending')
        .forEach((element) => element.classList.remove('reveal-pending'))
    }
  }, [])
}
