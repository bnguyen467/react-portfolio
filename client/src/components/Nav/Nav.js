import React, { useState } from "react";
import { Link } from "react-router-dom";

// Importing Images
import Portrait from "../img/portrait.jpg";

// Importing Styling Elements
import "../Style/main.css";

function Nav() {
  const [modifyClass, setModifyClass] = useState({
    menuBtn: "",
    menu: "",
    menuNav: "",
    menuBranding: "",
    navItem: "",
  });

  function clickMenuBtn() {
    if (modifyClass.menuBtn === "") {
      setModifyClass({
        menuBtn: "close",
        menu: "show",
        menuNav: "show",
        menuBranding: "show",
        navItem: "show",
      });
    } else {
      setModifyClass({
        menuBtn: "",
        menu: "",
        menuNav: "",
        menuBranding: "",
        navItem: "",
      });
    }
  }

  return (
    <>
      <header>
        <div
          className={`menu-button ${modifyClass.menuBtn}`}
          onClick={clickMenuBtn}
        >
          <div className="button-line"></div>
          <div className="button-line"></div>
          <div className="button-line"></div>
        </div>

        <nav className={`menu ${modifyClass.menu}`}>
          <div className={`menu-branding ${modifyClass.menuBranding}`}>
            <div className="portrait">
              <img src={Portrait} alt="Portrait" />
            </div>
          </div>

          <ul className={`menu-nav ${modifyClass.menuNav}`}>
            <li className={`nav-item ${modifyClass.navItem}`}>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className={`nav-item ${modifyClass.navItem}`}>
              <Link to="/about" className="nav-link">
                About Me
              </Link>
            </li>
            <li className={`nav-item ${modifyClass.navItem}`}>
              <Link to="/portfolio" className="nav-link">
                My Projects
              </Link>
            </li>
            <li className={`nav-item ${modifyClass.navItem}`}>
              <Link to="/contact" className="nav-link">
                How To Reach Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
