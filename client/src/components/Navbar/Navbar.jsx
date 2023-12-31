import React from "react";
import { Link } from "react-router-dom";

import search from "../../assets/search-solid.svg"
import logo from "../../assets/logo.png";
import Avatar from "../Avatar/Avatar";
import "./Navbar.css";


const Navbar = () => {

  var User = null

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo" />
       </Link>
       <Link to="/" className="nav-item nav-btn">
         About
       </Link>
       <Link to="/" className="nav-item nav-btn">
         Products
       </Link>
       <Link to="/" className="nav-item nav-btn">
         For Teams
       </Link>
        <form>
          <input type="text" placeholder="Search.."/>
          <img src={search} alt="search-icon" width="18" className="search-icon"/>
        </form>
        {User === null ? (
          <div className="nav-links-container">
            <Link to="/Auth" className="nav-item nav-links log-in">
              Log In
            </Link>
            <Link to="/Auth2" className="nav-item sign-up">
              Sign Up
            </Link>
          </div>
        ) : (
          <>
              <Avatar  backgroundColor='#009dff' px='12px' py='6px' borderRadius='50%' textDecoration="none"><Link to="/" style={ {color: 'white', textDecoration: 'none'}}>C</Link></Avatar>
            <button className="nav-item nav-links">Log Out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
