import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./Components/LandingScreen/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Login />
      <h1>Helfda</h1>
    </div>
  );
}

export default App;
