import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { useActiveSection } from './hooks/useActiveSection'
import { useNavbarScroll } from './hooks/useNavbarScroll'
import { useScrollReveal } from './hooks/useScrollReveal'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { ExperienceSection } from './sections/ExperienceSection'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

export default function App() {
  const scrolled = useNavbarScroll()
  const activeSection = useActiveSection()
  useScrollReveal()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar scrolled={scrolled} activeSection={activeSection} />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <ExperienceSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
