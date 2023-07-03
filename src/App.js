import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import CareerChangeSelector from "./components/CareerChangeSelector/CareerChangeSelector";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/job-comparisons" element={<CareerChangeSelector />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
