import type { ContactLink, Experience, Project, SkillGroup } from '../types/portfolio'

export const navLinks = ['about', 'skills', 'projects', 'experience', 'contact']

export const projects: Project[] = [
  {
    id: '01',
    year: '2024',
    type: 'UI Platform',
    title: 'SmartThings UI Library',
    description:
      'Helped develop a reusable UI library used by developers to build SmartThings plugins with more consistent interfaces, shared patterns, and smoother implementation workflows.',
    stack: ['Lit Element', 'TypeScript'],
  },
  {
    id: '02',
    year: '2024',
    type: 'Product Engineering',
    title: 'SmartThings Plugin Development',
    description:
      'Contributed to plugin development for Samsung SmartThings, working within an established product ecosystem while keeping implementation details aligned with internal standards.',
    stack: ['Frontend', 'SmartThings', 'Plugin Development'],
  },
  {
    id: '03',
    year: '2024',
    type: 'AI Experimentation',
    title: 'AI Chatbot System',
    description:
      'Contributed to experiments around an AI chatbot system, exploring RAG-based backend workflows and how AI-assisted interactions could support future product use cases.',
    stack: ['Python', 'FastAPI', 'LangChain', 'RAG'],
  },
  {
    id: '04',
    year: '2024',
    type: 'Developer Experience',
    title: 'Library Guidance Pipeline',
    description:
      'Improved developer experience by creating a SKILL.md-based guidance pipeline to help engineers understand, adopt, and work more effectively with the internal library.',
    stack: ['Developer Tooling', 'Documentation', 'Automation'],
  },
]

export const experiences: Experience[] = [
  {
    dates: '2024 - Present',
    role: 'Software Engineer',
    company: 'Samsung R&D Institute Indonesia',
    highlights: [
      'Contributed to plugin development for Samsung SmartThings.',
      'Helped develop a UI library used to build SmartThings plugins.',
      'Contributed to AI chatbot experimentation, including backend workflows around RAG-based systems.',
      'Improved developer experience by creating a SKILL.md-based guidance pipeline for engineers using the internal library.',
      'Supported other developers adopting and working with the internal UI library.',
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    desc: 'User interfaces with working systems',
    tags: ['React', 'TypeScript', 'Next.js', 'Lit Element'],
  },
  {
    title: 'Backend',
    desc: 'APIs and databases',
    tags: ['Node.js', 'Python', 'FastAPI', 'SQL'],
  },
  {
    title: 'AI/ML',
    desc: 'Generative AI and machine learning',
    tags: ['FastAPI', 'LangChain', 'RAG'],
  },
]

export const contactLinks: ContactLink[] = [
  {
    href: 'mailto:dennyalvitoginting@gmail.com',
    icon: '✉',
    label: 'dennyalvitoginting@gmail.com',
    type: 'Email',
  },
  { href: 'https://github.com/DnYAlv', icon: '◎', label: 'github.com/DnYAlv', type: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/dennyalvito',
    icon: '◉',
    label: 'linkedin.com/in/dennyalvito',
    type: 'LinkedIn',
  },
]
