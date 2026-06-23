import { contactLinks } from '../data/portfolio'
import type { HoverHandlers } from '../types/portfolio'

export function Contact({ onEnter, onLeave }: HoverHandlers) {
  return (
    <section id="contact" className="section border-t border-b border-[#222]">
      <div className="container">
        <div className="section-label">
          <span>05</span> Contact
        </div>
        <div className="contact-left reveal">
          <h2>
            Let's build
            <br />
            <em>something.</em>
          </h2>
          <p>
            Whether you have a role in mind, a project to collaborate on, or just want to talk shop
            - my inbox is always open.
          </p>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                key={link.type}
                href={link.href}
                className="contact-link"
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                {link.icon} {link.label}
                <span>{link.type}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
