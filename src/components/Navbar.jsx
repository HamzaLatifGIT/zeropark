import React, { useState } from "react";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import logo from "../assets/zeropark-logo-color-cm.svg";
import "./style/Navbar.scss";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container max-width">
        <div onClick={() => navigate("/")} className="navbar__logo">
          <img src={logo} alt="Zeropark Logo" />
        </div>

        <button className="navbar__hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoIosClose size={24} color="black" />
          ) : (
            <IoIosMenu color="black" style={{ color: "black" }} size={24} />
          )}
        </button>

        <div
          className={`navbar__links ${
            isMenuOpen ? "navbar__links--open" : ""
          }`}>
          <ul>
            <li>
              <Link to="/">
                {" "}
                <span>
                  Solutions <IoIosArrowDown />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>
                  Resources <IoIosArrowDown />
                </span>
              </Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
            <li>
              <Link to="/">Events</Link>
            </li>
          </ul>
          <div className="navbar__auth">
            <div>
              <button className="signup-btn">Sign up</button>
            </div>
            <div>
              <button className="login-btn">
                {" "}
                <span className="icon">
                  <IoMdPerson size={20} /> Login
                </span>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
