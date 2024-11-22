import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Charts from "./components/Charts";
import AddCrops from "./components/AddCrops";
import HomeContent from "./components/HomeContent";
import ExplorePage from "./components/ExplorePage";
import ViewCrops from "./components/ViewCrops";

function App() {
  return (
    <div className="App overflow-hidden bg-[#25883F]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Homepage />} path="/">
            <Route element={<HomeContent />} path="" />
            <Route element={<ExplorePage />} path="explore" />
          </Route>
          <Route element={<Signup />} path="/signup" />
          <Route element={<Login />} path="/login" />
          <Route element={<Dashboard />} path="/dashboard">
            <Route element={<Charts />} path="" />
            <Route element={<AddCrops />} path="add-crop" />
            <Route element={<ViewCrops />} path="view-crop" />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
