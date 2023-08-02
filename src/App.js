import { useState } from "react";
import "./index.css";

function App() {
  const [movement, setMovement] = useState(true);

  const changeLocation = () => {
    setMovement(!movement);
  };

  return (
    <div className="App" onClick={changeLocation}>
      <div className="circle" style={{ top: movement ? "35%" : "22%" }}></div>
      <h1>HELLO.</h1>
    </div>
  );
}

export default App;
