import type { HoverHandlers } from '../types/portfolio';

export function Hero({ onEnter, onLeave }: HoverHandlers) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid-bg" />

      <div className="hero-left hero-stagger" style={{ paddingLeft: '40px' }}>
        <div className="hero-tag">Available for work</div>
        <h1>
          Denny Alvito
          <br />
          <em>Ginting</em>
          <br />
          builds things.
        </h1>
        <p className="hero-desc">
          Software Engineer crafting scalable systems and interfaces. Passionate
          about clean architecture, developer experience, and the details that
          make software feel alive.
        </p>
        <div className="hero-cta">
          <a
            href="#projects"
            className="btn"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            View Work ↓
          </a>
          <a
            href="#contact"
            className="btn btn-ghost"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="hero-right" style={{ paddingRight: '40px' }}>
        <div
          className="hero-card"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          <div className="card-header">
            <div className="dot red" />
            <div className="dot yellow" />
            <div className="dot green" />
            <span className="card-title">portfolio.ts</span>
          </div>
          <div className="code-line">
            <span className="cm">// Software Engineer</span>
          </div>
          <div className="code-line">
            <span className="kw">const</span> denny = {'{'}
          </div>
          <div className="code-line" style={{ paddingLeft: '16px' }}>
            name: <span className="str">"Denny Alvito Ginting"</span>,
          </div>
          <div className="code-line" style={{ paddingLeft: '16px' }}>
            role: <span className="str">"Software Engineer"</span>,
          </div>
          <div className="code-line" style={{ paddingLeft: '16px' }}>
            exp: <span className="str">"2 years"</span>,
          </div>
          <div className="code-line" style={{ paddingLeft: '16px' }}>
            open: <span className="kw">true</span>,
          </div>
          <div className="code-line">{'};'}</div>
          <div className="code-line">&nbsp;</div>
          <div className="code-line">
            <span className="fn">hire</span>(denny);{' '}
            <span className="cursor-blink" />
          </div>
        </div>
      </div>
    </section>
  );
}
