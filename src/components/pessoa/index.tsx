interface NomeProps {
  nome: string;
  idade: string;
}

export function Pessoa({ nome, idade }: NomeProps) {
  return (
    <div>
      <h3>Nome: {nome}</h3>
      <h3>Idade: {idade}</h3>
      <hr />
    </div>
  );
}
