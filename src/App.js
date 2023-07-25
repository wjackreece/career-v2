import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import CareerChange from "./components/CareerChangeSelector/CareerChangeSelector";
import axios from "axios";

function App() {
  const [currentCareer, setCurrentCareer] = useState("");
  const [desiredCareer, setDesiredCareer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatGPTResponse, setChatGPTResponse] = useState([]);

  const submitCareerChange = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const URL = "http://localhost:8020/chat";
    const prompt = `Give me an numbered list with 7 shows the similarities between ${currentCareer}s and ${desiredCareer}`;
    axios
      .post(URL, { prompt })
      .then((res) => {
        let resString = res.data.data;
        // console.log({ resString });
        const splitResArray = resString.split(/(?=[0-9])/);
        // console.log(splitResArray);
        // console.log(currentCareer, desiredCareer, prompt);
        setChatGPTResponse(splitResArray);
        // console.log(`Response: ${chatGPTResponse}`);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/career-help"
          element={
            <CareerChange
              currentCareer={currentCareer}
              setCurrentCareer={setCurrentCareer}
              desiredCareer={desiredCareer}
              setDesiredCareer={setDesiredCareer}
              submitCareerChange={submitCareerChange}
              isLoading={isLoading}
              chatGPTResponse={chatGPTResponse}
            />
          }
        />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
