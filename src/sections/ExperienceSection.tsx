import { experiences } from '../data/portfolio'
import type { HoverHandlers } from '../types/portfolio'

export function ExperienceSection({ onEnter, onLeave }: HoverHandlers) {
  return (
    <section id="experience" className="section border-t border-[#222]">
      <div className="container">
        <div className="section-label">
          <span>04</span> Experience
        </div>
        <div style={{ marginBottom: '60px' }} className="reveal">
          <h2>
            Where I've
            <br />
            <em>been.</em>
          </h2>
        </div>
        <div className="timeline">
          {experiences.map((experience) => (
            <div
              key={experience.company}
              className="timeline-item"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <div className="timeline-dot" />
              <div className="timeline-date">{experience.dates}</div>
              <div className="timeline-role">{experience.role}</div>
              <div className="timeline-company">{experience.company}</div>
              <div className="timeline-desc">{experience.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
