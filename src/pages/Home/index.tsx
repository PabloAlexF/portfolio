import { HeroProfile, Features } from "../components/Hero"
import { ProjectCard } from "../components/ProjectCard"
import { CTA } from "../components/CTA"

export function Home() {
  const stack = ["React", "TypeScript", "Tailwind", "Vite", "Git", "UX"]

  const projects = [
    {
      title: "Portfólio profissional",
      description: "Estrutura clara para apresentar trabalho, processo e diferenciais de forma objetiva.",
      tags: ["UI", "Branding", "Portfolio"],
    },
    {
      title: "Dashboard de produto",
      description: "Visualização direta de métricas e dados com foco em produtividade e tomada de decisão.",
      tags: ["Data", "UX", "React"],
    },
    {
      title: "Landing page de conversão",
      description: "Mensagem forte, hierarquia visual simples e chamada para ação bem posicionada.",
      tags: ["Marketing", "Design", "Performance"],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      <main id="inicio" className="mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40">
        <HeroProfile stack={stack} />
        <Features />

        <section id="projetos" className="py-24 lg:py-32">
          <div className="space-y-4 mb-16">
            <p className="text-sm font-medium tracking-wide text-blue-400">Projetos</p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-100">
              Trabalho com foco em comunicação visual e funcionalidade.
            </h2>
          </div>

          <div>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                index={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </div>
        </section>

        <CTA />
      </main>
    </div>
  )
}