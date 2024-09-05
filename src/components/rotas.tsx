import { Link } from "react-router-dom";

export function Rotas() {
  return (
    <div>
      <Link to="/">Home</Link>
      <hr />
      <Link to="/listas">Listas</Link>
      <hr />
      <Link to="/formulario">Formulario</Link>
    </div>
  );
}
