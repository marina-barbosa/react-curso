
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <h1>Change Counter</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Add
      </button>
    </div>
  )
}