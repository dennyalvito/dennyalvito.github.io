import { useEffect, useRef } from 'react'

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0
    let my = 0
    let rx = 0
    let ry = 0
    let animId: number

    const onMove = (event: MouseEvent) => {
      mx = event.clientX
      my = event.clientY
    }

    document.addEventListener('mousemove', onMove)

    const tick = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = mx + 'px'
        cursorRef.current.style.top = my + 'px'
      }

      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12

      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top = ry + 'px'
      }

      animId = requestAnimationFrame(tick)
    }

    animId = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  const onEnter = () => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = 'translate(-50%,-50%) scale(2.5)'
    }

    if (ringRef.current) {
      ringRef.current.style.opacity = '0'
    }
  }

  const onLeave = () => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
    }

    if (ringRef.current) {
      ringRef.current.style.opacity = '0.5'
    }
  }

  return { cursorRef, ringRef, onEnter, onLeave }
}
