import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="container__logo">Logo</div>
        <div className="container__menu">
          {/* Use Link component with proper 'to' prop */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/support">Support</Link>
          <Link to="/register">Register</Link>
        </div>
        <span className="menubtn">
          <i className="fa-solid fa-bars"></i>
        </span>
        <span className="closebtn">
          <i className="fa-solid fa-xmark"></i>
        </span>
      </div>{" "}
    </div>
  );
};

export default Navbar;
