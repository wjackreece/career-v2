import React from "react";
import { Button } from "../Button/Button";
import "./CareerChangeSelector.css";

function CareerChangeSelector() {
  return (
    <div className="selector-container">
      <h1 className="selector-title">
        Tell us a little bit about you current career <br />
        and your career change goals{" "}
      </h1>
      <h2 className="selector-subtitle">
        This will help us make sure we analyze all possible options
      </h2>
      <div className="currentCareer-selector">
        <div>
          I currently work in the{" "}
          <select name="" id="currentCareer" required>
            <option value="" selected disabled>
              --Please choose an option--
            </option>
            <option value="">Agriculture, Food and Natural Resources</option>
            <option value="">Architecture & Construction</option>
            <option value="hamster">
              Arts, Audio/Video Technology and Communication
            </option>
            <option value="parrot">
              Business Management and Administration
            </option>
            <option value="spider">Education and Training</option>
            <option value="goldfish">Finance</option>
            <option value="goldfish">
              Government and Public Administration
            </option>
            <option value="goldfish">Health Science</option>
            <option value="goldfish">Hospitality and Tourism</option>
            <option value="goldfish">Information Technology</option>
            <option value="goldfish">
              Law, Public Safety, Corrections and Security
            </option>
            <option value="goldfish">
              Manufacturing, Engineering & Mining
            </option>
            <option value="goldfish">
              Science, Technology, Engineering and Mathematics
            </option>
            <option value="goldfish">
              Transportation, Distribution and Logistics
            </option>
          </select>{" "}
          field, <br /> as a{" "}
          <input type="text" name="" id="" placeholder="Ex: Server" /> .
        </div>
        <div>
          I would like to work in the{" "}
          <select name="" id="desiredCareer" required>
            <option value="" selected disabled>
              --Please choose an option--
            </option>
            <option value="">Agriculture, Food and Natural Resources</option>
            <option value="">Architecture & Construction</option>
            <option value="hamster">
              Arts, Audio/Video Technology and Communication
            </option>
            <option value="parrot">
              Business Management and Administration
            </option>
            <option value="spider">Education and Training</option>
            <option value="goldfish">Finance</option>
            <option value="goldfish">
              Government and Public Administration
            </option>
            <option value="goldfish">Health Science</option>
            <option value="goldfish">Hospitality and Tourism</option>
            <option value="goldfish">Information Technology</option>
            <option value="goldfish">
              Law, Public Safety, Corrections and Security
            </option>
            <option value="goldfish">
              Manufacturing, Engineering & Mining
            </option>
            <option value="goldfish">
              Science, Technology, Engineering and Mathematics
            </option>
            <option value="goldfish">
              Transportation, Distribution and Logistics
            </option>
          </select>{" "}
          field, <br /> as a{" "}
          <input
            type="text"
            name=""
            id=""
            placeholder="Ex: Electrical Engineer"
          />{" "}
          .
        </div>
      </div>
      <div className="selector-btn">
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default CareerChangeSelector;
