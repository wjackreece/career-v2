import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-window">
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            ReWork
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
