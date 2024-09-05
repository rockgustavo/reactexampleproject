import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Rotas } from "../rotas";

export function Layout() {
  return (
    <>
      <Header title="Project Example" />
      <Outlet />
      <Rotas />
    </>
  );
}
