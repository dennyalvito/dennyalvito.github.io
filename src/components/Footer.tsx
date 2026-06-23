import type { HoverHandlers } from '../types/portfolio'

export function Footer({ onEnter, onLeave }: HoverHandlers) {
  return (
    <footer className="footer">
      <p>© 2026 Denny Alvito Ginting. Designed &amp; built with care.</p>
      <div className="footer-right">
        <a href="#hero" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          Back to top ↑
        </a>
        <a href="#" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          Resume ↓
        </a>
      </div>
    </footer>
  )
}
