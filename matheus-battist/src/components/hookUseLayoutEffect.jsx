import { useEffect, useLayoutEffect, useState } from 'react';

export const HookUseLeyoutEffect = () => {
  const [count, setCount] = useState(0);

  // Este useEffect será executado após a renderização
  useEffect(() => {
    console.log('useEffect - Renderizou depois do DOM');
  });

  // Este useEffect será executado após a renderização
  useEffect(() => {
    console.log('Outro useEffect - Também após a renderização');
  });

  // Este useLayoutEffect será executado antes da pintura final
  useLayoutEffect(() => {
    console.log('useLayoutEffect - Executa antes da pintura final');
  });

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};
