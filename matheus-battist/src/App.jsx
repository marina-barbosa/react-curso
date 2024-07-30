import "./App.css";
import { ThemedButton } from "./components/CSS_Inline_Dinamico/ThemedButton";
import { ButtonOne } from "./components/CSS_Modules/ButtonOne";
import { ButtonTwo } from "./components/CSS_Modules/ButtonTwo";
import { HookUseLeyoutEffect } from "./components/hookUseLayoutEffect";
import { HookUseReducer } from "./components/hookUseReducer";
import { HookUseReducerNoAction } from "./components/hookUseReducer_noAction";
import LoginForm from "./components/Styled_Components/LoginForm";
import { useTitleColorContext } from "./hooks/useTitleColorContext";

export function App() {

  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color })
  }

  return (
    <main className="App" style={{ marginBottom: "500px" }}>
      <p>context api e useContext</p>
      <h2 style={{ color: color }}>App.js</h2>
      <div>
        <button onClick={() => setTitleColor("RED")}>Change Color with Context: RED</button>
      </div>
      <div>
        <button onClick={() => setTitleColor("GREEN")}>Change Color with Context: GREEN</button>
      </div>
      <hr style={{ marginBlock: "55px" }} />
      <p>css modules</p>
      <ButtonOne />
      <ButtonTwo />
      <hr style={{ marginBlock: "55px" }} />
      <p>css inline dinamico</p>
      <ThemedButton />
      <hr style={{ marginBlock: "55px" }} />
      <p>styled components</p>
      <div style={{ display: "flex" }}>
        <LoginForm primary={true} theme="dark" />
        <LoginForm primary={false} theme="light" />
      </div>
      <hr style={{ marginBlock: "55px" }} />
      <p>useReducer</p>
      <HookUseReducer />
      <HookUseReducerNoAction />
      <hr style={{ marginBlock: "55px" }} />
      <p>useLayoutEffect</p>
      <HookUseLeyoutEffect />

    </main>
  );
}