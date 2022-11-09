import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./Components/LandingScreen/Login";
import LoginNavBar from "./Components/LandingScreen/LoginnavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <LoginNavBar />
      <Login />
    </div>
  );
}

export default App;
