import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Formulario } from "./pages/formulario";
import { Listas } from "./pages/listas";

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
]);

export { router };
