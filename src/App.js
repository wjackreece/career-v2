import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/welcome" exact element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
