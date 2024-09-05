import { Link } from "react-router-dom";
import { Listas } from "../../components/listas";
import { Header } from "../../components/header";

export function Formulario() {
  return (
    <div>
      <Header title="Project Example" />
      <Listas />
      <Link to="/listas">Listas</Link>
    </div>
  );
}
