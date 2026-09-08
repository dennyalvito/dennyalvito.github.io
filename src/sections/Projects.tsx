import { projects } from '../data/portfolio'

function CoinPreview() {
  return (
    <div className="coin-preview">
      <div className="preview-topline">
        <span>PERSONAL FINANCE, A LITTLE CLEARER.</span>
        <span aria-hidden="true">↗</span>
      </div>
      <div className="coin-orbit coin-orbit-one" aria-hidden="true" />
      <div className="coin-orbit coin-orbit-two" aria-hidden="true" />
      <div
        className="coin-window"
        role="img"
        aria-label="Illustrative Coin dashboard with sample cash flow, income, expenses, and a six-month chart. Figures are demo data."
      >
        <div className="coin-window-bar">
          <span className="window-dots" aria-hidden="true">
            ● ● ●
          </span>
          <span>duitku-planner.vercel.app</span>
          <span aria-hidden="true">↗</span>
        </div>
        <div className="coin-app">
          <aside className="coin-sidebar" aria-hidden="true">
            <div className="coin-brand">
              <span>◒</span> Coin
            </div>
            <span className="coin-nav-active">▦ &nbsp; Dashboard</span>
            <span>⇄ &nbsp; Transactions</span>
            <span>◷ &nbsp; Budgets</span>
            <span>⊞ &nbsp; Categories</span>
            <div className="coin-sidebar-bottom">
              <i /> Guest workspace
            </div>
          </aside>
          <div className="coin-dashboard" aria-hidden="true">
            <div className="coin-dash-header">
              <div>
                <span className="coin-kicker">YOUR MONEY, AT A GLANCE</span>
                <h4>Dashboard</h4>
                <p>A clearer picture of where you stand.</p>
              </div>
              <span className="coin-add">+ Add transaction</span>
            </div>
            <div className="coin-metrics">
              <div>
                <span>Net cash flow</span>
                <strong>Rp 8.450.000</strong>
                <small>Income minus expenses</small>
              </div>
              <div>
                <span>Total income</span>
                <strong>Rp 12.000.000</strong>
                <small className="coin-positive">↗ This month</small>
              </div>
              <div>
                <span>Total expenses</span>
                <strong>Rp 3.550.000</strong>
                <small>Across your categories</small>
              </div>
            </div>
            <div className="coin-chart-row">
              <div className="coin-chart">
                <div className="coin-chart-title">
                  Cash-flow rhythm <span>6 MONTHS</span>
                </div>
                <div className="coin-bars">
                  {[38, 60, 44, 76, 64, 88].map((height, index) => (
                    <div className="coin-bar-group" key={index}>
                      <div className="coin-bar-pair">
                        <i style={{ height: `${height}%` }} />
                        <i
                          style={{
                            height: `${height * (index % 2 ? 0.57 : 0.7)}%`,
                          }}
                        />
                      </div>
                      <span>
                        {['APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'][index]}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="coin-chart-legend">
                  <span>● Income</span>
                  <span>● Expenses</span>
                </div>
              </div>
              <div className="coin-budget">
                <span>Monthly budget pulse</span>
                <div className="coin-donut">
                  <span>
                    68<small>%</small>
                  </span>
                </div>
                <small>Room for what matters.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="preview-bottomline">
        <span>DESIGNED FOR EVERYDAY MONEY.</span>
        <span>INTERFACE PREVIEW · SAMPLE DATA</span>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section
      id="projects"
      className="section work-section"
      aria-labelledby="work-title"
    >
      <div className="container">
        <div className="section-topline">
          <span className="eyebrow">01 / SELECTED WORK</span>
          <span className="eyebrow">IDEAS, SHIPPED.</span>
        </div>
        <div className="section-heading reveal">
          <h2 id="work-title">
            Built with intent<span className="blue-text">.</span>
          </h2>
          <p>
            A personal project, and the systems
            <br />I help build with a team.
          </p>
        </div>
        <article className="featured-project reveal">
          <CoinPreview />
          <div className="featured-details">
            <div className="featured-name">
              <span className="eyebrow">PERSONAL PROJECT / FINANCE</span>
              <h3>
                Coin<span className="project-title-dot">↗</span>
              </h3>
            </div>
            <div className="featured-description">
              <p>
                A calmer way to keep track of your money. An IDR finance planner
                for income, expenses, and monthly budgets—with an offline guest
                workspace and a separate cloud account.
              </p>
              <div className="project-tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>Supabase</span>
                <span>IndexedDB</span>
              </div>
            </div>
            <div className="project-actions">
              <a
                className="button button-dark"
                href="https://duitku-planner.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Open live app <span aria-hidden="true">↗</span>
              </a>
              <a
                className="text-link"
                href="https://github.com/dennyalvito/finance-planner"
                target="_blank"
                rel="noreferrer"
              >
                View source <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>
        <div className="contributions-label">
          <span className="eyebrow">AT SAMSUNG R&amp;D INDONESIA</span>
          <span className="eyebrow">TEAM CONTRIBUTIONS / 2024—PRESENT</span>
        </div>
        <div className="contribution-list">
          {projects.map((project) => (
            <details key={project.id} className="contribution">
              <summary>
                <span className="contribution-index">{project.id}</span>
                <h3>{project.title}</h3>
                <span className="contribution-category">{project.type}</span>
                <span className="contribution-toggle" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="contribution-body">
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
