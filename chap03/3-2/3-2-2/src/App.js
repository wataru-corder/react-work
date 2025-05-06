import logo from "./logo.svg";
import "./App.css";
import ForList from "./ForList";
import books from "./books";

function App() {
  return <ForList src={books} />;
}

export default App;
