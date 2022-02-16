import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Booking() {
  useEffect(() => {
    document.title = "Booking";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/";
    }
  }, []);

  const name = sessionStorage.getItem("username");
  const endSession = () => {
    sessionStorage.removeItem("userSession");
    sessionStorage.removeItem("userdata");
    sessionStorage.removeItem("username");
    localStorage.removeItem("user");
  };

  let [oseats, setSeats] = useState("");
  let [odate, setDate] = useState("");
  let [otime, setTime] = useState("");
  let [ophone, setPhone] = useState("");

  function clearErrors() {
    document.getElementById("phones").innerHTML = "";
    document.getElementById("seatss").innerHTML = "";
  }

  const order = {
    seats: oseats,
    date: odate,
    time: otime,
    phone: ophone,
  };

  const bookTable = (data) => {
    axios.post(`http://localhost:8080/addtables`, data).then(
      (response) => {
        alert("SUCCESS : Booked Succesfully.. :) ");
        window.location = "/dashboard";
        clearFields();
      },
      (error) => {
        console.log(error);

        alert(" ERROR : Failed to Book a Table.. ");
      }
    );
  };

  const clearFields = () => {
    setSeats("");
    setDate("");
    setTime("");
    setPhone("");
  };

  function handlerForm(e) {
    if (oseats <= 0) {
      document.getElementById("seatss").innerHTML =
        "Enter a valid no of seats.. ";
    } else if (ophone == "" || ophone.length != 10) {
      document.getElementById("phones").innerHTML = "Enter a valid phone no..";
    }
    // document.getElementById("ephone").classList.add("is-invalid");
    // setEphone("Enter valid Mobile Number");
    else {
      console.log(order);
      bookTable(order);
      clearFields();
    }
  }

  return (
    <div className="booking-body">
      {/* -------------------------------------------Navbar--------------------------------------------------------- */}

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

      {/* ______________________________________________________Form-Booking-Details____________________________________________________ */}
      <div
        className="contact d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <form action="/success.html" onsubmit=" return validation()">
          <div>
            <div
              className="box1 d-flex justify-content-center align-items-center flex-column "
              style={{
                height: "90vh",
                width: "80vw",
                background: "rgba(0, 0, 0, 0.55)",
              }}
            >
              <h2
                className="heading"
                style={{
                  color: "#ffb535",
                  fontFamily: "Playfair Display, serif",
                  fontSize: "36px",
                }}
              >
                Booking Details
              </h2>

              <div className="form-group">
                <input
                  id="seats"
                  className="form-control my-2"
                  type="number"
                  autoComplete="off"
                  placeholder="Enter Number Of Members"
                  value={oseats}
                  onChange={(e) => setSeats(e.target.value)}
                  onBlur={clearErrors}
                  required
                />
                <span
                  id="seatss"
                  className=" font-weight-regular"
                  style={{ color: "yellow" }}
                />
              </div>
              <div className="form-group">
                <input
                  id="date"
                  className="form-control my-2"
                  type="date"
                  autoComplete="off"
                  placeholder="Enter Date"
                  value={odate}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <span
                  className=" font-weight-regular"
                  style={{ color: "yellow" }}
                ></span>
              </div>
              <div className="form-group">
                <input
                  id="time"
                  className="form-control my-2"
                  type="time"
                  autoComplete="off"
                  placeholder="Enter time"
                  value={otime}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
                <span
                  id="times"
                  className=" font-weight-regular"
                  style={{ color: "yellow" }}
                />
              </div>
              <div className="form-group">
                <input
                  id="phone"
                  className="form-control my-2"
                  type="number"
                  autoComplete="off"
                  placeholder="Enter Phone Number"
                  value={ophone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={clearErrors}
                  required
                  maxLength="10"
                  minLength="10"
                />
                <span
                  id="phones"
                  className=" font-weight-regular"
                  style={{ color: "yellow" }}
                ></span>
              </div>
              <div className="d-flex justify-content-center w-100 mt-5">
                <button
                  type="button"
                  className="btn btn-primary text-light fw-bold  mx-2 "
                  onClick={handlerForm}
                >
                  Submit
                </button>
              </div>
              <br />
            </div>
          </div>
        </form>
      </div>

      {/* __________________________Footer___________________________________________________________________________________________________________ */}
      <div
        className="container-fluid mt-5 text-black"
        style={{ background: "rgba(255, 255, 255, 0.45)" }}
      >
        <div className="row">
          <div className="fw-bold fs-1 bg-light justify-content-center row mx-0">
            PREMIER
            <a name="about">
              {" "}
              <p className="fs-6 text-center">The Restaurant</p>{" "}
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
            {" "}
            © 2022 PREMIER - info@restaurant.com - +91 7287374567 - Wall Street
            Avenue 502, Mumbai - Restaurant Template Handmade by cdacstudents.in
            <p>Team- Vaibhav Patil, Vallabha Ambole, Tushar Jangale</p>
          </div>
        </div>
      </div>
    </div>
  );
}
