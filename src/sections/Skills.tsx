import { skillGroups } from '../data/portfolio'

export function Skills() {
  return (
    <section
      id="skills"
      className="skills-section"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <div className="skills-heading">
          <h2 id="skills-title">My working toolkit</h2>
          <span className="eyebrow">THE RIGHT TOOL FOR THE IDEA.</span>
        </div>
        <div className="skills-list">
          {skillGroups.map((group, index) => (
            <div className="skill-row" key={group.title}>
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.title}</h3>
              <div className="skill-tools">
                {group.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
