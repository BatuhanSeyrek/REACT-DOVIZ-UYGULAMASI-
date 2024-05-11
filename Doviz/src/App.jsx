import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Currency from "./Components/Currency";
function App() {
  return (
    <div
      className="body"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Currency></Currency>
    </div>
  );
}

export default App;
