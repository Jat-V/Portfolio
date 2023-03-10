import './App.css';
import {About} from "./dependencies/about";
import {Cover} from "./dependencies/cover";
import {Experience} from "./dependencies/experience";
import {Footer} from "./dependencies/footer";
import {useState} from "react";

function App() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    return (
      <div className={`App_${theme}`}>
          <div className={`DK_switch_${theme}`}>Dark Mode <label className="switch">
              <input id="Dark_Mode_S" type="checkbox" onClick={toggleTheme}/>
              <span className="slider round"></span>
          </label>
          </div>
          <About />
          <Cover />
          <Experience />
          <Footer />
      </div>
    );
}

export default App;
