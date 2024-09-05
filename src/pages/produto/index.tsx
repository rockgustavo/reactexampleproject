import { useParams } from "react-router-dom";

export function Produto() {
  const { id } = useParams();
  return (
    <div>
      <h1>Exemplo de produto com o ID: {id}</h1>
    </div>
  );
}
