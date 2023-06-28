import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import ComparingJobs from "./components/ComparingJobs/ComparingJobs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/comparing-jobs" element={<ComparingJobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
