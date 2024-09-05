import { useParams } from "react-router-dom";
import { Header } from "../../components/header";
import { Rotas } from "../../components/rotas";

export function Produto() {
  const { id } = useParams();
  return (
    <div>
      <Header title="Project Example" />
      <h1>Exemplo de produto com o ID: {id}</h1>
      <Rotas />
    </div>
  );
}
