import { Header } from "../../components/header";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <Header title="Project Example" />
      <Link to="/">Home</Link>
      <hr />
      <Link to="/listas">Listas</Link>
      <hr />
      <Link to="/formulario">Formulario</Link>
    </div>
  );
}
