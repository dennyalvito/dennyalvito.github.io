import type { RefObject } from 'react'

interface CursorProps {
  cursorRef: RefObject<HTMLDivElement>
  ringRef: RefObject<HTMLDivElement>
}

export function Cursor({ cursorRef, ringRef }: CursorProps) {
  return (
    <>
      <div ref={cursorRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
