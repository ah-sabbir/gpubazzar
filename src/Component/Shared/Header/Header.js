import React from "react";
import Head from "./Head";
import "./Header.style.css";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <section className="header">
        <Head />
        <SearchBar />
        <Navbar />
      </section>
    </>
  );
};

export default Header;
