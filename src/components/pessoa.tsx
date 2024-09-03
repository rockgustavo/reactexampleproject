interface NomeProps {
  nome: String;
  idade: number;
}

export function Pessoa({ nome, idade }: NomeProps) {
  return (
    <div>
      <h2>Nome: {nome}</h2>
      <h3>Idade: {idade}</h3>
      *******************************
    </div>
  );
}
