import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section className="navbar">
        <div className="container">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about">About</Link>
            </li>
            <li className="navbar-item">
              <Link to="/products">Products</Link>
            </li>
            <li className="navbar-item">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
