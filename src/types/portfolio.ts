export interface Project {
  id: string
  year: string
  type: string
  title: string
  description: string
  stack: string[]
  featured?: boolean
  bars?: { height: number; delay: number }[]
}

export interface Experience {
  dates: string
  role: string
  company: string
  highlights: string[]
}

export interface SkillGroup {
  title: string
  desc: string
  tags: string[]
}

export interface ContactLink {
  href: string
  icon: string
  label: string
  type: string
}

export interface HoverHandlers {
  onEnter: () => void
  onLeave: () => void
}
