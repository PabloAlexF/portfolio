import {
  Navbar,
  Hero,
  Services,
  Projects,
  TechStack,
  About,
  Contact,
  Footer,
} from '@/components/sections'
import { BackgroundDecor } from '@/components/ui'
import { stack, projects } from '@/data'

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <BackgroundDecor />
      <Navbar />

      <main className="pt-20">
        <Hero stack={stack} />
        <Services />
        <Projects projects={projects} />
        <TechStack stack={stack} />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
