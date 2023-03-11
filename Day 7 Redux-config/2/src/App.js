import "./App.css";
import Counter from "./components/Counter";
import Login from "./pages/Login";
import MainRoutes from "./pages/MainRoutes";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <Todos /> */}
      <MainRoutes />
    </div>
  );
}

export default App;
