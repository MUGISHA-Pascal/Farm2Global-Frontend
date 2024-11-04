import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App overflow-hidden">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
