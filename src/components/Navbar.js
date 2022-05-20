import React from "react";
import PropTypes from "prop-types";
import {} from "../css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className={`navbar-brand bg-${props.mode}`} to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className={`nav-link active bg-${props.mode}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active bg-${props.mode}`}
                  to="/about"
                >
                  {props.aboutText}
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
              {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
            </ul>
            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

            {/* Radio buttons for various color themes */}
            <div
              className="btn-toolbar mb-3 "
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group me-2"
                role="group"
                aria-label="First group"
              >
                <button
                  type="button"
                  onClick={props.lightToggle}
                  className={`btn btn-outline-${
                    props.mode === "light" ? "secondary" : "light"
                  } `}
                >
                  Light
                </button>
                <button
                  type="button"
                  onClick={props.darkToggle}
                  className={`btn btn-outline-${
                    props.mode === "light" ? "secondary" : "light"
                  } `}
                >
                  Dark
                </button>
                <button
                  type="button"
                  onClick={props.blueToggle}
                  className={`btn btn-outline-${
                    props.mode === "light" ? "secondary" : "light"
                  } `}
                >
                  Blue
                </button>
                <button
                  type="button"
                  onClick={props.greenToggle}
                  className={`btn btn-outline-${
                    props.mode === "light" ? "secondary" : "light"
                  } `}
                >
                  Green
                </button>
              </div>
            </div>
            {/* <div className="form-check form-switch">
              <input
                onClick={props.toggleMode}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {`Enable ${props.mode === "light" ? "dark" : "light"} Mode`}
              </label>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title here",
  aboutText: "About",
};
