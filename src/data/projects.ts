import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'solidar-brasil',
    number: '01',
    title: 'SolidarBrasil',
    description: 'Plataforma de solidariedade comunitária que conecta pessoas que precisam de ajuda com aquelas que podem ajudar.',
    role: 'Front-end completo, integração com API Node.js e autenticação Firebase',
    tags: ['React', 'Node.js', 'Firebase', 'CSS'],
    image: '/Page1-solidarBrasil.png',
    image_alt: 'Interface da plataforma SolidarBrasil',
    codeUrl: 'https://github.com/PabloAlexF/Solidar-bairro',
  },
  {
    id: 'zavlo-ia',
    number: '02',
    title: 'Zavlo.ia',
    description: 'Plataforma agregadora de marketplaces brasileiros (OLX, Mercado Livre, Shopee e mais) com busca inteligente por texto e imagem usando IA. Inclui scraping automático, comparação de preços, alertas e analytics em tempo real.',
    role: 'Backend completo com NestJS — autenticação JWT, scraping com Playwright, busca por imagem via Hugging Face (CLIP/ViT), cache Redis e integração Firebase Firestore',
    tags: ['NestJS', 'TypeScript', 'Firebase', 'Redis', 'Playwright', 'Hugging Face', 'JWT'],
    image: '/Page1-Zavloia.png',
    metrics: 'Scraping automático a cada 6h · Cache Redis com TTL · Rate limiting 10 req/min',
    image_alt: 'Interface da plataforma Zavlo.ia',
    codeUrl: 'https://github.com/PabloAlexF/zavlo-ia-backend',
  },
]
