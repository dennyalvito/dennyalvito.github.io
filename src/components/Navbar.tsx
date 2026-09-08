import { useEffect, useRef, useState } from 'react'

const links = [
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
]

export function Navbar({
  scrolled,
  activeSection,
}: {
  scrolled: boolean
  activeSection: string
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 701px)')
    const onResize = () => {
      if (media.matches) setMenuOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    media.addEventListener('change', onResize)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      media.removeEventListener('change', onResize)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a
        href="#hero"
        className="nav-logo"
        aria-label="Denny Alvito Ginting, home"
        onClick={() => setMenuOpen(false)}
      >
        <span className="logo-mark" aria-hidden="true">
          d<span>g</span>
        </span>
        <span className="logo-name">
          Denny Alvito
          <br />
          Ginting
        </span>
      </a>
      <div className="nav-note">
        SOFTWARE ENGINEER
        <br />
        <span>BASED IN INDONESIA</span>
      </div>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? 'active' : ''}
            aria-current={activeSection === id ? 'location' : undefined}
          >
            {label}
          </a>
        ))}
        <a href="#contact" className="nav-contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
      <button
        ref={menuButton}
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-controls="mobile-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? 'Close −' : 'Menu +'}
      </button>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {[...links, { id: 'contact', label: 'Let’s talk' }].map(
            ({ id, label }, index) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                <span>0{index + 1}</span>
                {label}
                <span aria-hidden="true">↗</span>
              </a>
            ),
          )}
        </nav>
      )}
    </header>
  )
}
