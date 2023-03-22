import "./App.css";
import { useToggleItems } from "./hooks/useToggleItems";

function App() {
  var pos = 1;
  const [state, toggle] = useToggleItems(["A", "B", "C"], pos);
  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <h1 data-testid="status">{state}</h1>
      <button data-testid="toggle" onClick={toggle}>
        Toggle
      </button>
    </div>
  );
}

export default App;