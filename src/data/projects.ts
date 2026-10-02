import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'portfolio-profissional',
    number: '01',
    title: 'Portfólio profissional',
    description:
      'Estrutura clara para apresentar trabalho, processo e diferenciais de forma objetiva.',
    tags: ['UI', 'Branding', 'Portfolio'],
    metrics: 'LCP -40%',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 'dashboard-produto',
    number: '02',
    title: 'Dashboard de produto',
    description:
      'Visualização direta de métricas e dados com foco em produtividade e tomada de decisão.',
    tags: ['Data', 'UX', 'React'],
    metrics: '+25% conversão',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 'landing-page',
    number: '03',
    title: 'Landing page de conversão',
    description:
      'Mensagem forte, hierarquia visual simples e chamada para ação bem posicionada.',
    tags: ['Marketing', 'Design', 'Performance'],
    metrics: '+18% engagement',
    demoUrl: '#',
    codeUrl: '#',
  },
]
