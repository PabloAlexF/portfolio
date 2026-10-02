export interface StackItem {
  name: string
  icon?: string
}

export interface Service {
  title: string
  description: string
  icon: string
  emoji?: string
}

export interface Project {
  id: string
  number: string
  title: string
  description: string
  tags: string[]
  image?: string
  image_alt?: string
  metrics: string
  demoUrl?: string
  codeUrl?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
  label: string
}

export interface NavLink {
  name: string
  href: string
}
