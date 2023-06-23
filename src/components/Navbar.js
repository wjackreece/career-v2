import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            ReWork <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/job-comparisons"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Job Comparisons
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/job-qualifications"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Job Qualifications
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/find-jobs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Find Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resume-builder"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Resume Builder
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
