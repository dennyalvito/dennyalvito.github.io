import { HeroArtwork } from '../components/HeroArtwork'

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-section container"
      aria-labelledby="hero-title"
    >
      <div className="hero-topline">
        <span className="availability">
          <i /> OPEN TO OPPORTUNITIES
        </span>
        <span>PORTFOLIO / 2026</span>
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-intro">
            Hi, I’m Denny. An engineer who cares how it feels.
          </p>
          <h1 id="hero-title">
            Serious code.
            <br />
            <span>Playful</span>
            <br />
            <span className="hero-last-line">
              possibilities<span className="hero-period">.</span>
            </span>
          </h1>
          <p className="hero-desc">
            I build interfaces, untangle systems, and follow the occasional
            “what if.” Currently engineering at Samsung R&amp;D Indonesia.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#projects">
              Explore my work <span aria-hidden="true">↘</span>
            </a>
            <a
              className="text-link"
              href="https://github.com/dennyalvito"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-art">
          <HeroArtwork />
        </div>
      </div>
      <div className="hero-bottom">
        <span>
          FRONTEND DEVELOPMENT &nbsp; / &nbsp; SYSTEMS &nbsp; / &nbsp; AI
        </span>
        <a href="#projects">
          A little further down <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}
