import React from "react";
import "../../styles/_navbar.scss";
import { FaArrowRight } from "react-icons/fa";
import usd from "../../assets/icons/usd.svg";
import { Link, NavLink } from "react-router-dom";
import navLogo from "../../assets/images/nav-logo.svg";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      <div className="header">
        <div className="header__first">
          <div className="container container-navbar ">
            <div className="signup">
              <h4>Get early access on launches and offers.</h4>
              <a href="/">
                Sign Up For Texts
                <FaArrowRight />
              </a>
            </div>
            <div className="usd">
              <img src={usd} alt="usd" />
              <h3>USD</h3>
            </div>
          </div>
        </div>

        <div className="header__second">
          <div className="container">
            <div className="wrappar">
              <div className="categories">
                <NavLink to="/"> Women</NavLink>
                <NavLink to="/"> Men</NavLink>
                <NavLink to="/"> About</NavLink>
                <NavLink to="/"> Everworld Stories</NavLink>
              </div>

              <img src={navLogo} alt="nav-logo" />
              <div className="action__inputs">
                <Link to="/search">
                  <CiSearch />
                </Link>
                <Link to="/user">
                  <CiUser />
                </Link>
                <Link to="/shopping">
                 <FaShoppingCart/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
