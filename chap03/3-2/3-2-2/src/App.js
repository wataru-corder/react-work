import "./App.css";
import ForNest from "./ForNest";
import books from "./books";
import ForFilter from "./ForFilter";
import ForSort from "./ForSort";

function App() {
  return (
    <>
      <ForNest src={books} />
      <ForFilter src={books} />
      <ForSort src={books} />
    </>
  );
}

export default App;
