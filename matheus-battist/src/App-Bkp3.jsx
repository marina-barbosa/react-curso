import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

import { useState } from "react";

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">

      <div>
        <h1>Lista de Tarefas</h1>
        <AddTodo onAddTodo={addTodo} />
        <TodoList todos={todos} />
      </div>

    </div>
  );
}

export default App;
