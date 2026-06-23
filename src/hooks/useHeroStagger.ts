import { useEffect } from 'react'

export function useHeroStagger() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.hero-stagger > *')

    elements.forEach((element, index) => {
      element.style.opacity = '0'
      element.style.transform = 'translateY(20px)'
      element.style.transition = 'all 0.6s ease'

      setTimeout(() => {
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)'
      }, 200 + index * 120)
    })
  }, [])
}
