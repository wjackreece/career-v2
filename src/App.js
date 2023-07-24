import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import CareerChangeSelector from "./components/CareerChangeSelector/CareerChangeSelector";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import ChatGPTInfo from "./components/ChatGPTInfo/ChatGPTInfo";

function App() {
  const [currentCareer, setCurrentCareer] = useState("");
  const [desiredCareer, setDesiredCareer] = useState("");
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/job-comparisons"
          element={
            <CareerChangeSelector
              currentCareer={currentCareer}
              setCurrentCareer={setCurrentCareer}
              desiredCareer={desiredCareer}
              setDesiredCareer={setDesiredCareer}
            />
          }
        />
        <Route path="/loading-page" element={<LoadingPage />} />
        <Route
          path="/chatGPTInfo"
          element={
            <ChatGPTInfo
              currentCareer={currentCareer}
              desiredCareer={desiredCareer}
            />
          }
        />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
