import { useState } from "react";
import {
  cadastrarAluno,
  relatorioPorNome,
  relatorioPorRAdecrescente,
  relatorioAprovadosPorNome,
} from "./alunos";

function App() {
  const [form, setForm] = useState({ nome: "", ra: "", idade: "", media: "", sexo: "" });
  const [lista, setLista] = useState([]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    cadastrarAluno(form);
    alert("Aluno cadastrado!");
    setForm({ nome: "", ra: "", idade: "", media: "", sexo: "" });
  }

  return (
    <div className="w-[600px] h-[800px] bg-gray-900 rounded-2xl justify-center ml-150">
      <h1 className="text-3xl font-bold mb-4">Tela de Apresentação do Programa</h1>

      {/* Formulário de Cadastro */}
      <div className="bg-gray-800 p-4 rounded-xl space-y-4 w-full max-w-2xl">
        <h2 className="text-xl font-bold">Cadastrar Alunos</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Nome:</label>
            <input
              name="nome"
              value={form.nome}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700"
              required
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label>RA:</label>
              <input
                name="ra"
                value={form.ra}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700"
                required
              />
            </div>
            <div>
              <label>Idade:</label>
              <input
                name="idade"
                value={form.idade}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700"
                required
              />
            </div>
            <div>
              <label>Média:</label>
              <input
                name="media"
                value={form.media}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700"
                required
              />
            </div>
          </div>

          <div>
            <label>Sexo:</label>
            <select
              name="sexo"
              value={form.sexo}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700"
              required
            >
              <option value="">Selecione</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
          </div>

          <button type="submit" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Cadastrar
          </button>
        </form>
      </div>

      {/* Botões de relatórios */}
      <div className="mt-6 space-x-3">
        <button
          onClick={() => setLista(relatorioPorNome())}
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
        >
          Relatório: Nome ↑
        </button>
        <button
          onClick={() => setLista(relatorioPorRAdecrescente())}
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
        >
          Relatório: RA ↓
        </button>
        <button
          onClick={() => setLista(relatorioAprovadosPorNome())}
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
        >
          Relatório: Aprovados Nome ↑
        </button>
      </div>

      {/* Exibir Lista */}
      <table className="mt-6 w-full max-w-2xl text-left">
        <thead>
          <tr>
            <th className="border-b border-gray-600 p-2">Nome</th>
            <th className="border-b border-gray-600 p-2">RA</th>
            <th className="border-b border-gray-600 p-2">Idade</th>
            <th className="border-b border-gray-600 p-2">Média</th>
            <th className="border-b border-gray-600 p-2">Sexo</th>
            <th className="border-b border-gray-600 p-2">Resultado</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((aluno, index) => (
            <tr key={index} className="hover:bg-gray-700">
              <td className="p-2">{aluno.nome}</td>
              <td className="p-2">{aluno.ra}</td>
              <td className="p-2">{aluno.idade}</td>
              <td className="p-2">{aluno.media}</td>
              <td className="p-2">{aluno.sexo}</td>
              <td className="p-2">{aluno.resultado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
