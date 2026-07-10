import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { navLinks } from '../data/portfolio';
import type { HoverHandlers } from '../types/portfolio';

interface NavbarProps extends HoverHandlers {
  scrolled: boolean;
  activeSection: string;
}

export function Navbar({
  scrolled,
  activeSection,
  onEnter,
  onLeave,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 769px)');
    const closeOnDesktop = () => {
      if (mediaQuery.matches) {
        setMenuOpen(false);
      }
    };

    closeOnDesktop();
    mediaQuery.addEventListener('change', closeOnDesktop);

    return () => mediaQuery.removeEventListener('change', closeOnDesktop);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a
          href="#hero"
          className="nav-logo"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          DAG.
        </a>

        <ul className="nav-links-list">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className={`nav-link ${activeSection === link ? 'active' : ''}`}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="hamburger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`ham-line ${menuOpen ? 'open-top' : ''}`} />
          <span className={`ham-line ${menuOpen ? 'open-mid' : ''}`} />
          <span className={`ham-line ${menuOpen ? 'open-bot' : ''}`} />
        </button>
      </nav>

      <div className={`mobile-drawer ${menuOpen ? 'drawer-open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link, index) => (
            <li key={link} style={{ '--i': index } as CSSProperties}>
              <a
                href={`#${link}`}
                className={`mobile-nav-link ${activeSection === link ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className="mobile-nav-num">0{index + 1}</span>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && <div className="drawer-backdrop" onClick={closeMenu} />}
    </>
  );
}
