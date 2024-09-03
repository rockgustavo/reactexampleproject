import { Header } from "./components/header";
import { Pessoa } from "./components/pessoa";

export default function App() {
  return (
    <div>
      <Header title="Project Example" />
      <Pessoa nome="Gustavo" idade={30} />
      <Pessoa nome="Teste" idade={23} />
    </div>
  );
}
