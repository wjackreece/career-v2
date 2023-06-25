import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
