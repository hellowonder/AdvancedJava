import React from "react";
import { Link } from "react-router-dom";
import "../pages/style.css";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light w-100 "
      style={{ background: "rgba(255, 255, 255, 0.5)" }}
    >
      <div className="container-fluid">
        <div
          className="d-flex align-items-center"
          style={{ height: "62px", width: "15vw" }}
        >
          <div id="beutify-premier">
            <Link
              to="/home"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              PREMIER
            </Link>
            <div id="beutify-the-restaurant"> The Restaurant</div>
          </div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="top-links d-flex">
                <Link to="/home" className="nav-link">
                  <button
                    type="button"
                    className="btn btn-outline-light  text-dark fw-bold beautify-links"
                  >
                    Home
                  </button>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="top-links d-flex">
                <a className="nav-link" href="#about">
                  <button
                    type="button"
                    className="btn btn-outline-light  text-dark fw-bold beautify-links"
                  >
                    About
                  </button>
                </a>
              </div>
            </li>
            <li className="nav-item">
              <div className="top-links d-flex">
                <Link to="/booking" className="nav-link">
                  <button
                    type="button"
                    className="btn btn-outline-light  text-dark fw-bold beautify-links"
                  >
                    Book Table
                  </button>
                </Link>
              </div>
            </li>
            <li
              className="nav-item dropdown p-1"
              style={{ marginLeft: "40vw" }}
            >
              <a
                className="nav-link dropdown-toggle beautify-links"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  color: "black",
                  background: "rgba(255, 255, 255, 0.7)",
                }}
              >
                Log in / Sign up
              </a>
              <ul
                className="dropdown-menu bg-light"
                aria-labelledby="navbarDropdownMenuLink"
                style={{ background: "rgba(255, 255, 255, 0.5)" }}
              >
                <li>
                  <Link to="/" className="dropdown-item">
                    Log in
                  </Link>
                </li>
                <li>
                  <span>
                    <Link to="/signup" className="dropdown-item" href="/signup">
                      Sign up / Register
                    </Link>
                  </span>
                </li>
                {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
