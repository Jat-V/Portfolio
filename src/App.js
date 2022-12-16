import './App.css';
import {About} from "./dependencies/about";
import {Cover} from "./dependencies/cover";
import {Experience} from "./dependencies/experience";

function App() {
  return (
      <div className="App">
          <About />
          <Cover />
          <Experience />
      </div>
  );
}

export default App;
