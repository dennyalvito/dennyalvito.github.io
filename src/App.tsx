import { Cursor } from './components/Cursor'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { useActiveSection } from './hooks/useActiveSection'
import { useCursor } from './hooks/useCursor'
import { useHeroStagger } from './hooks/useHeroStagger'
import { useNavbarScroll } from './hooks/useNavbarScroll'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useTimelineReveal } from './hooks/useTimelineReveal'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { ExperienceSection } from './sections/ExperienceSection'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

export default function App() {
  const { cursorRef, ringRef, onEnter, onLeave } = useCursor()
  const scrolled = useNavbarScroll()
  const activeSection = useActiveSection()

  useScrollReveal()
  useTimelineReveal()
  useHeroStagger()

  return (
    <>
      <Cursor cursorRef={cursorRef} ringRef={ringRef} />

      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        onEnter={onEnter}
        onLeave={onLeave}
      />

      <Hero onEnter={onEnter} onLeave={onLeave} />
      <About onEnter={onEnter} onLeave={onLeave} />
      <Skills onEnter={onEnter} onLeave={onLeave} />
      <Projects onEnter={onEnter} onLeave={onLeave} />
      <ExperienceSection onEnter={onEnter} onLeave={onLeave} />
      <Contact onEnter={onEnter} onLeave={onLeave} />
      <Footer onEnter={onEnter} onLeave={onLeave} />
    </>
  )
}
