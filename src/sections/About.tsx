export function About() {
  return (
    <section
      id="about"
      className="section about-section"
      aria-labelledby="about-title"
    >
      <div className="container about-layout">
        <div className="about-aside">
          <span className="eyebrow">02 / THE PERSON BEHIND THE CODE</span>
          <div className="about-monogram" aria-hidden="true">
            d<span>g</span>
            <i>✳</i>
          </div>
          <span className="eyebrow">
            DENNY ALVITO GINTING
            <br />
            INDONESIA · UTC+7
          </span>
        </div>
        <div className="about-copy reveal">
          <h2 id="about-title">
            A little curiosity.
            <br />A lot of <span className="serif-word">making.</span>
          </h2>
          <p className="about-lead">
            I like the space where good engineering meets something people
            actually enjoy using.
          </p>
          <p>
            I’m a software engineer at Samsung R&amp;D Institute Indonesia,
            building interfaces and shared tools for the SmartThings ecosystem.
            My work stretches from reusable UI libraries to backend experiments
            with retrieval-augmented AI.
          </p>
          <p>
            Outside of that, I follow my own ideas. Coin gives me a place to
            explore everyday finance, from the first interface to the systems
            behind it.
          </p>
          <a className="text-link" href="#contact">
            Always up for a good conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
