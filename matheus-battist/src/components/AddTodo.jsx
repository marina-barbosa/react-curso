
import { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');



  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      onAddTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default AddTodo
