import { skillGroups } from '../data/portfolio';
import type { HoverHandlers } from '../types/portfolio';

export function Skills({ onEnter, onLeave }: HoverHandlers) {
  return (
    <section id="skills" className="section border-t border-[#222]">
      <div className="container">
        <div className="section-label">
          <span>02</span> Skills &amp; Stack
        </div>
        <div className="skills-header reveal">
          <h2>
            Tools of
            <br />
            <em>the trade.</em>
          </h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="skill-group reveal"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <h3>{group.title}</h3>
              <p>{group.desc}</p>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
