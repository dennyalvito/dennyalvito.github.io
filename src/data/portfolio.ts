import type { ContactLink, Experience, Project, SkillGroup } from '../types/portfolio'

export const navLinks = ['about', 'skills', 'projects', 'experience', 'contact']

export const projects: Project[] = [
  {
    id: '01',
    year: '2024',
    type: 'SaaS Platform',
    title: 'Pulse Analytics',
    description:
      'A real-time analytics platform handling 50M+ events per day. Built with event-driven architecture, streaming pipelines, and a React dashboard that updates live without page refreshes.',
    stack: ['React', 'Go', 'Kafka', 'ClickHouse', 'AWS'],
    featured: true,
    bars: [
      { height: 40, delay: 0 },
      { height: 80, delay: 0.1 },
      { height: 55, delay: 0.2 },
      { height: 100, delay: 0.3 },
      { height: 70, delay: 0.4 },
      { height: 120, delay: 0.5 },
      { height: 90, delay: 0.6 },
      { height: 140, delay: 0.7 },
      { height: 110, delay: 0.8 },
    ],
  },
  {
    id: '02',
    year: '2024',
    type: 'Open Source',
    title: 'FlowQL',
    description:
      'A schema-first query builder for TypeScript with full type inference. 2k+ GitHub stars, used by teams at Vercel and Linear.',
    stack: ['TypeScript', 'PostgreSQL', 'Zod'],
  },
  {
    id: '03',
    year: '2023',
    type: 'Mobile App',
    title: 'Meridian',
    description:
      'A cross-platform habit tracker with AI-powered insights and streak predictions. 50k+ downloads on iOS and Android.',
    stack: ['React Native', 'Python', 'FastAPI'],
  },
]

export const experiences: Experience[] = [
  {
    dates: '2024 - Present',
    role: 'Software Engineer',
    company: 'Samsung R&D Institute Indonesia',
    description:
      "Led the rebuild of the Stripe Dashboard's transaction search infrastructure, reducing p99 latency from 4s to 180ms. Mentored 3 junior engineers and drove adoption of our internal component library.",
  },
  {
    dates: '2020 - 2022',
    role: 'Software Engineer II',
    company: 'Notion',
    description:
      "Core contributor to the Block Editor - Notion's foundational editing engine. Shipped collaborative editing improvements that reduced conflict rates by 40% for real-time multiplayer sessions.",
  },
  {
    dates: '2019 - 2020',
    role: 'Software Engineer',
    company: 'Figma',
    description:
      'Worked on the rendering pipeline and export features. Built the SVG optimizer that shipped with Figma 3.0, cutting exported file sizes by an average of 35%.',
  },
  {
    dates: '2015 - 2019',
    role: 'B.Sc. Computer Science',
    company: 'UC Berkeley',
    description:
      'Graduated with honors. Research in distributed systems under Prof. Ion Stoica. President of the Open Source Club.',
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
    desc: 'APIs and Databases',
    tags: ['Node.js', 'Python', 'FastAPI', 'SQL'],
  },
  {
    title: 'AI/ML',
    desc: 'Generative AI and Machine Learning',
    tags: ['FastAPI', 'Langchain'],
  },
]

export const contactLinks: ContactLink[] = [
  { href: 'mailto:dennyalvitoginting@gmail.com', icon: '✉', label: 'dennyalvitoginting@gmail.com', type: 'Email' },
  { href: 'https://github.com/DnYAlv', icon: '◎', label: 'github.com/DnYAlv', type: 'GitHub' },
  { href: 'https://www.linkedin.com/in/dennyalvito', icon: '◉', label: 'linkedin.com/in/dennyalvito', type: 'LinkedIn' },
]