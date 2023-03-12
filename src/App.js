import "./App.css";
import { Fetch } from "./components/fetch";
import { Hover } from "./components/hover";
import { LocalStorage } from "./components/localStorage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Custom Hooks Tasks</p>
        <Fetch />
        <LocalStorage />
        <Hover />
      </header>
    </div>
  );
}

export default App;
