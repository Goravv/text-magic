import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import moonpng from '../images/moon.png';
import sunpng from '../images/sun.png';
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container">
        <Link className="navbar-brand fs-1 " to="/">
          {props.title} ✨
        </Link>
        <div className="" id="navbarSupportedContent">


          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <img src={moonpng} alt="" width="50px" height="50px" id="darkModeBtn" 
            onClick={props.toggleMode}
            />

            {/* <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.text}
            </label> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title here",
};
