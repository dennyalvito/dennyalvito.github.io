import { experiences } from '../data/portfolio'

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section experience-section"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div className="section-topline">
          <span className="eyebrow">03 / EXPERIENCE</span>
          <span className="eyebrow">LEARNING BY BUILDING.</span>
        </div>
        <div className="experience-layout">
          <h2 id="experience-title" className="reveal">
            Part of
            <br />
            something <span className="serif-word">bigger.</span>
          </h2>
          <div>
            {experiences.map((experience) => (
              <article
                className="experience-entry reveal"
                key={experience.company}
              >
                <div className="experience-date">
                  <span className="availability">
                    <i /> {experience.dates}
                  </span>
                  <span>01</span>
                </div>
                <h3>{experience.role}</h3>
                <p className="experience-company">{experience.company}</p>
                <ul>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
