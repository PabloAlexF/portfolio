import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home"
import { Sobre } from "./pages/Sobre"
import { Contato } from "./pages/Contato"
import { Projetos } from "./pages/Projetos"
import { NotFound } from "./pages/NotFound"

import { Layout } from "./layout"

const router = createBrowserRouter([
    {
      element: <Layout/>,
      children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sobre",
      element: <Sobre />,
    },
    {
      path: "/projetos",
      element: <Projetos />,
    },
    {
      path: "/contato",
      element: <Contato />,
    },
    {
      path: "*",
      element: <NotFound />,
    },

      ]
    }
])

export { router }
