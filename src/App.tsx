import { useState } from "react";

import { Header } from "./components/header";
import { Pessoa } from "./components/pessoa";

interface InfoPessoa {
  nome: string;
  idade: string;
}

export default function App() {
  const [pessoa, setPessoa] = useState<InfoPessoa>({ nome: "", idade: "" });

  function mostrarPessoa() {
    if (pessoa.nome.length == 0 || pessoa.idade.length == 0) {
      alert("Preencha todos os campos");
      return;
    }
    alert("Nome: " + pessoa.nome + "\nIdade: " + pessoa.idade);
  }

  return (
    <div>
      <Header title="Project Example" />
      <Pessoa nome={pessoa.nome} idade={pessoa.idade} />

      <input
        type="text"
        placeholder="Digite o nome"
        value={pessoa.nome || ""}
        onChange={(e) => setPessoa({ ...pessoa, nome: e.target.value })}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Digite a idade"
        value={pessoa.idade || ""}
        onChange={(e) => setPessoa({ ...pessoa, idade: e.target.value })}
      />
      <br />
      <br />
      <button onClick={mostrarPessoa}>Mostrar Pessoa</button>
    </div>
  );
}
