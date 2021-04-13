import name from "./assets/name.svg";
import jj from "./assets/jj.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={jj} className="fixed top-0 left-0" alt="jj" />
      <div className="flex justify-center">
        <img src={name} alt="name" />

      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
