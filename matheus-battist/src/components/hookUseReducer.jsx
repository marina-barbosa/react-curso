import { useReducer } from 'react';
// Estado inicial
const initialState = { count: 7 };
// Reducer que manipula o estado com base na ação
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unknown action type');
  }
}

export const HookUseReducer = () => {
  // Configurando o useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  // Funções para enviar ações
  const increment = () => dispatch({ type: 'increment' });
  const decrement = () => dispatch({ type: 'decrement' });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}