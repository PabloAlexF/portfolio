export interface StackItem {
  name: string
  icon?: string
  category: 'frameworks' | 'estilo' | 'ferramentas'
}

export interface Project {
  id: string
  number: string
  title: string
  description: string
  role: string
  tags: string[]
  image?: string
  image_alt?: string
  metrics?: string
  demoUrl?: string
  codeUrl?: string
}
