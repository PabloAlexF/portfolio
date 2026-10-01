import { HeroProfile, Features } from "../components/Hero"
import { ProjectCard } from "../components/ProjectCard"
import { CTA } from "../components/CTA"
import { SectionTitle } from "../components/SectionTitle"

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

      <main id="inicio" className="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:pt-16">
        <HeroProfile stack={stack} />
        <Features />

        <section id="projetos" className="py-12">
          <SectionTitle
            label="Projetos em destaque"
            title="Trabalho com foco em comunicação visual e funcionalidade."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
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