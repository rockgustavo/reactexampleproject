import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Formulario } from "./pages/formulario";
import { Listas } from "./pages/listas";
import { Produto } from "./pages/produto";
import { NotFound } from "./pages/notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/formulario",
    element: <Formulario />,
  },
  {
    path: "/listas",
    element: <Listas />,
  },
  {
    path: "/produto/:id",
    element: <Produto />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export { router };
