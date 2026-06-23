import type { HoverHandlers } from '../types/portfolio'

export function About({ onEnter, onLeave }: HoverHandlers) {
  return (
    <section id="about" className="section border-t border-[#222]">
      <div className="container">
        <div className="section-label">
          <span>01</span> About
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <h2>
              Engineer by craft,
              <br />
              builder by nature.
            </h2>
            <p>
              I'm a software engineer with <strong>2+ years</strong> of experience building UI
              products. I mainly work in frontend development, but I also have experience building
              backend systems focused on AI RAG. I enjoy working on projects that challenge me to
              learn new technologies and improve my skills.
            </p>
            <p>
              Currently open to <strong>software engineering roles</strong> at product-focused
              companies. I thrive in environments where I can ship fast, iterate often, and work
              with people who care deeply about their craft.
            </p>
            <div style={{ marginTop: '32px' }}>
              <a href="#contact" className="btn" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                Let's Talk →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
