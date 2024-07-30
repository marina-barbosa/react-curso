import { useReducer } from 'react';

export const HookUseReducerNoAction = () => {
  // Configurando o useReducer
  const [state, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  return (
    <div>
      <p>useReduce sem action</p>
      <p>numero: {state}</p>
      <button onClick={dispatch}>random</button>
    </div>
  )
}