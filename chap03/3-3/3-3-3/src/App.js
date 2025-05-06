import "./App.css";
import ListTemplate from "./ListTemplate";
import books from "./books";
function App() {
  return (
    <ListTemplate src={books}>
      {(elm) => (
        <>
          <dt>
            <a>
              {elm.title}({elm.price}円)
            </a>
          </dt>
          <dd>{elm.summary}</dd>
        </>
      )}
    </ListTemplate>
  );
}

export default App;
