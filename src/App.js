import "./App.css";
import { WindowScroll } from "./components/windowScroll.jsx";
import { ViewportSize } from "./components/viewportSize";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Custom Hooks Tasks</p>
        <WindowScroll />
        <ViewportSize />
      </header>
    </div>
  );
}

export default App;
