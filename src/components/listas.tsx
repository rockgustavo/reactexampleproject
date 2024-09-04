import { useState, FormEvent } from "react";

interface ListaProps {
  task: string;
}

export function Listas() {
  const [input, setInput] = useState<string>("");
  const [tarefas, setTarefas] = useState<ListaProps[]>([]);
  const [editTarefa, setEditTarefa] = useState({
    enabled: false,
    tarefa: "",
  });

  function handleRegister(event: FormEvent): void {
    event.preventDefault();
    if (!input) {
      alert("Preencha o nome da tarefa!");
      return;
    }
    if (editTarefa.enabled) {
      handleSaveEdit();
      return;
    }
    setTarefas((tarefas) => [...tarefas, { task: input }]);
    setInput("");
  }

  function handleSaveEdit() {
    const findEditTask = tarefas.findIndex(
      (tarefa) => tarefa.task === editTarefa.tarefa
    );

    if (findEditTask !== -1) {
      const updatedTarefas = [...tarefas];
      updatedTarefas[findEditTask] = { task: input };
      setTarefas(updatedTarefas);
      setEditTarefa({
        enabled: false,
        tarefa: "",
      });
      setInput("");
    }
  }

  function handleEdit(item: string): void {
    setInput(item);
    setEditTarefa({
      enabled: true,
      tarefa: item,
    });
  }

  function handleDelete(item: string): void {
    const removeTask = tarefas.filter((tarefa) => tarefa.task !== item);
    setTarefas(removeTask);
  }

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <form onSubmit={handleRegister}>
        <input
          placeholder="Digite o nome da tarefa..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          {editTarefa.enabled ? "Editar Tarefa" : "Adicionar Tarefa"}
        </button>
      </form>

      {/* Exibe a lista de tarefas */}
      <ul>
        {tarefas.map((item, index) => (
          <li key={index}>
            {item.task}{" "}
            <button onClick={() => handleEdit(item.task)}>Editar</button>
            <button onClick={() => handleDelete(item.task)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
