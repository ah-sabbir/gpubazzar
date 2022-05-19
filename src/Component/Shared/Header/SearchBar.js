import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.ico";
const SearchBar = ({ CartItem }) => {
  const isAuthenticated = true;
  console.log(logo);
  return (
    <>
      <section className="search">
        <div className="container f_flex">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search" />
            <span>All Category</span>
          </div>

          <div className="search-icons f_flex">
            <div className="user">
              <Link to="/profile">
                <i className="fa fa-user icon-circle"></i>
              </Link>
            </div>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-cart icon-circle"></i>
                {CartItem && (
                  <span>
                    {CartItem && CartItem.length === 0 ? "" : CartItem.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchBar;
