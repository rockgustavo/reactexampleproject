import { Header } from "../../components/header";
import { Rotas } from "../../components/rotas";

export function NotFound() {
  return (
    <div>
      <Header title="Project Example" />
      <h1>Opss! Esta página não existe!</h1>
      <Rotas />
    </div>
  );
}
