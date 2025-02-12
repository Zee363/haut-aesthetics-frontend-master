import React from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";

const Navbar = () => {
    return (
      <div className="container-fluid">
        <nav className="navigation">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link to="/beauty">BEAUTY</Link>
            </li>
            <li className="nav-item">
              <Link to="/fashion">FASHION</Link>
            </li>
            <li className="nav-item">
              <Link to="/lifestyle">LIFESTYLE</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">ADD A POST</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Navbar;