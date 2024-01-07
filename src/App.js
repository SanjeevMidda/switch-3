import "./index.css";
import ColorBlock from "./components/ColorBlock";
import { useState } from "react";

function App() {
  const [colorBlockSelected, setColorBlockSelected] = useState("");

  return (
    <div className="App">
      <div className="switch">
        <div className="switch">
          <div
            className="circle"
            onClick={() => setColorBlockSelected("blue")}
          ></div>
          <div
            className="circle"
            onClick={() => setColorBlockSelected("pink")}
          ></div>
          <div
            className="circle"
            onClick={() => setColorBlockSelected("grey")}
          ></div>
        </div>
      </div>

      {colorBlockSelected === "blue" && <ColorBlock color="blue" />}
      {colorBlockSelected === "pink" && <ColorBlock color="pink" />}
      {colorBlockSelected === "grey" && <ColorBlock color="grey" />}
    </div>
  );
}

export default App;
