import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
export default function Dashboard() {
  useEffect(() => {
    console.log(userData);

    document.title = "Dashboard";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/";
    }
  }, []);

  const name = sessionStorage.getItem("username");
  const userData = sessionStorage.getItem("userData");

  const endSession = () => {
    sessionStorage.removeItem("userSession");
    sessionStorage.removeItem("userdata");
    sessionStorage.removeItem("username");
    localStorage.removeItem("user");
  };

  return (
    <div className="dashboard-body">
      {/* ________________________Top Navbar_____________________________________________________________________________________________________________ */}
      <nav
        className="navbar navbar-expand-lg navbar-light w-100"
        style={{ background: "rgba(255, 255, 255, 0.5)" }}
      >
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            <div
              className="d-flex align-items-center"
              style={{ height: "60px", width: "15vw" }}
            >
              <div id="beutify-premier">
                PREMIER
                <div id="beutify-the-restaurant"> The Restaurant</div>
              </div>
            </div>
          </Link>
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
                <div className="top-links ">
                  <Link to="/" className="nav-link">
                    <button
                      type="button"
                      className="btn btn-outline-light  text-dark fw-bold beautify-links"
                      // style={{ background: "rgba(255, 255, 255,0.5)" }}
                    >
                      Home
                    </button>
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="top-links">
                  <a className="nav-link" href="#menu">
                    <button
                      type="button"
                      className="btn btn-outline-light  text-dark fw-bold beautify-links"
                    >
                      Check Menu
                    </button>
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <div className="top-links">
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

              <li className="text-dark fw-bold mx-5">
                <span className="text-right fw-bold d-flex w-100">
                  Welcome {name}
                </span>
              </li>

              <li className="nav-item">
                <div className="top-links">
                  <Link to="/dashboard" className="nav-link">
                    <button
                      type="button"
                      className="btn btn-outline-light  text-dark fw-bold beautify-links"
                    >
                      My Dashboard
                    </button>
                  </Link>
                </div>
              </li>

              <li class="nav-item  nav-logout mt-3 ">
                <form onSubmit={endSession} action="/">
                  <button type="submit" class="btn btn-sm btn-primary">
                    <span className="fs-6 ">LOGOUT</span>
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* -----------------------------Dashboard--------------------------------- */}
      <div className="mx-4">
        <div
          className=" fs-2 fw-bolder text-center  p-2 mb-0 mt-3 border border-dark border-1"
          style={{
            background: "rgba(220, 53, 69, 0.7)",
            color: "yellow",
            fontFamily: "cursive",
          }}
        >
          My Dashboard
        </div>
        <div className="container-fluid mt-0 ">
          <div className="row">
            <div className="col-4 ">
              <div
                style={{ height: "18%" }}
                className="fs-3 mt-3 text-light  justify-content-center  border border-light border-1 "
              >
                <h4>Profile</h4>
                <h5>Name : {name}</h5>
              </div>
              <hr style={{ height: "5px", color: "rgb(19, 19, 18)" }} />
              <div
                style={{ height: "18%" }}
                className="fs-3 fw-bold text-light d-flex justify-content-center align-items-center border-light "
              >
                <button className="btn btn-lg btn-outline-success text-light">
                  My Bookings
                </button>
              </div>
              <hr style={{ height: "5px", color: "rgb(19, 19, 18)" }} />
              <div
                style={{ height: "18%" }}
                className="fs-3 fw-bold text-light d-flex justify-content-center align-items-center"
              >
                <form onSubmit={endSession} action="/">
                  <button className="btn btn-lg btn-outline-warning text-light">
                    SignOut
                  </button>
                </form>
              </div>
              <hr style={{ height: "5px", color: "rgb(19, 19, 18)" }} />
              <div style={{ height: "18%" }} className />
              {/* <hr style="height: 5px; color: rgb(19, 19, 18);"> */}
            </div>
            <div className="col-8" style={{ height: "90vh" }}>
              <h1>text content</h1>
            </div>
          </div>
        </div>
      </div>

      {/* __________________________Footer___________________________________________________________________________________________________________ */}
      <div
        className="container-fluid mt-5 text-light"
        style={{ background: "rgba(0, 0, 0, 0.35)" }}
      >
        <div className="row">
          <div className="fw-bold fs-1 bg-light justify-content-center row mx-0 text-dark ">
            PREMIER
            <a name="about">
              {" "}
              <p className="fs-6 text-center text-dark">The Restaurant</p>
            </a>
          </div>
          <div className="row justify-content-center mt-4">
            {" "}
            We don't care if we're doing haute cuisine or burgers and pizza.
          </div>
          <div className="row justify-content-center mb-4">
            {" "}
            We just do it right. Always.
          </div>
          <div className="justify-content-center d-flex mt-5 mb-5">
            <a
              className="btn btn-primary col-1 me-3 d-flex justify-content-center"
              style={{ backgroundColor: "#3b5998" }}
              href="https://www.facebook.com"
              role="button"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-primary col-1 me-3 d-flex justify-content-center "
              style={{ backgroundColor: "#55acee" }}
              href="https://twitter.com/explore"
              role="button"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-primary col-1 me-3 d-flex justify-content-center"
              style={{ backgroundColor: "#ac2bac" }}
              href="https://www.instagram.com/"
              role="button"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="btn btn-primary col-1 me-3 d-flex justify-content-center"
              style={{ backgroundColor: "#ed302f" }}
              href="https://www.youtube.com/"
              role="button"
            >
              <i className="fab fa-youtube" />
            </a>
          </div>
          <hr />
          <div className="text-center mb-1">
            © 2022 PREMIER - info@restaurant.com - +91 7758024039 - Wall Street
            Avenue 502, Mumbai - Restaurant Management System - by
            cdacmumbai@gov.in
            <p>Team- Shubham Mandlik, Priyanka Satpute, Tushar Jangale</p>
          </div>
        </div>
      </div>
    </div>
  );
}
