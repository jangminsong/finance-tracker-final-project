import { useState } from "react";
import "./App.css";
import Homepage from "./Homepage";
import Sidenav from "./Sidenav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App flex">
      <Sidenav />
      <div className="flex-grow">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
