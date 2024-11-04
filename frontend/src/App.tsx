import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App overflow-hidden">
      <Navbar />
      {/* <Signup /> */}
      <Homepage />
    </div>
  );
}

export default App;
