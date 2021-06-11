import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import Richtext from "./components/Richtext";

function App() {
  return (
    <div className="App">
      <Counter />
      <Todo />
      {/* <Richtext/> */}
    </div>
  );
}

export default App;
