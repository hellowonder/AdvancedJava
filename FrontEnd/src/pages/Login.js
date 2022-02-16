import React from "react";
import "./style.css";
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Login() {
  const [user, setUser] = useState({});

  // Called on onSubmit
  const handlerForm = (e) => {
    checkLogin(user);
    console.log(user);
    e.preventDefault();
  };

  //Check if user exists

  const checkLogin = (data) => {
    axios.post(`http://localhost:8080/login`, data).then(
      (response) => {
        if (response.data.length == 0) {
          alert("WARNING : Wrong Credentials Entered.. ");
        } else {
          if (response.data.phone == 7758024039) {
            alert("Logged in successfully... ");
            window.location = "/admin";
            sessionStorage.setItem("admin", "admin");
          } else {
            alert("Logged in successfully... ");
            sessionStorage.setItem("username", response.data.name);
            const userdata = {
              name: response.data.name,
              email: response.data.email,
              phone: response.phone,
            };
            sessionStorage.setItem("userdata", JSON.stringify(userdata));
            sessionStorage.setItem("userSession", response.data.email);
            localStorage.setItem("user", response.data.email);
            window.location = "/home";
          }
        }
      },
      (error) => {
        console.log(error);
        alert("Something went wrong..  ");
      }
    );
  };

  return (
    <div className="login-body">
      {/* style="background-image: url(/images/login/login-img.jpg); background-size: cover;" */}
      <Navbar />
      {/* ________________________Form_____________________________________________________________________________________________________________ */}
      <div className="container-fluid ">
        <div
          className="row m-0 text-light justify-content-center align-items-center fs-4 "
          style={{ height: "60px" }}
        >
          <div className="col-xl-8">
            <marquee>
              <h3
                className="text-dark"
                style={{ fontSize: "20px", fontStyle: "italic" }}
              >
                Welcome to PREMIER THE RESTAURANT's Login Page
              </h3>
            </marquee>
          </div>
        </div>
        <div
          className="row pb-2 p-xl-3 text-light text-decoration align-items-center justify-content-center fs-1"
          style={{ background: "rgba(0, 0, 0, 0.7)", fontFamily: "cursive" }}
        >
          Login to your Account
        </div>
        <br />
        <div className="d-flex justify-content-center mt-4 ">
          <div
            className="row justify-content-center mx-0 pt-3"
            style={{ background: "rgba(255, 255, 255, 0.5)", width: "75vw" }}
          >
            <form onSubmit={handlerForm} className="col pt-4 mx-5">
              <div className="form-group mt-2 mx-5">
                <label className=" text-dark">
                  <h5 className=" d-flex mb-3" style={{ width: "100vw" }}>
                    Email Id
                  </h5>
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="emails"
                  placeholder="Enter Email here"
                  autoComplete="off"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group mx-5 ">
                <label className=" text-dark">
                  <h5 className="d-flex mt-4 mb-3" style={{ width: "100vw" }}>
                    Password
                  </h5>
                </label>
                <input
                  type="password"
                  name="pass"
                  className="form-control "
                  placeholder="Enter password here"
                  id="pass"
                  autoComplete="off"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  required
                />
              </div>
              <div className="d-flex justify-content-center w-100 mt-5">
                <button
                  type="submit"
                  className="btn btn-primary text-dark fw-bold  mx-2 "
                >
                  Login
                </button>
                <input
                  type="reset"
                  name="reset"
                  defaultValue="Reset"
                  className="btn btn-warning text-dark fw-bold float-xl-right mx-2"
                  autoComplete="off"
                />
              </div>
              <div className="form-group d-flex mt-3">
                <label className="font-weight-regular text-dark ">
                  Forgot Password?
                </label>
                <span className="text-dark">
                  <a
                    className=" text-dark "
                    style={{ color: "rgba(255, 255, 255, 0.801)" }}
                    href="#"
                  >
                    Click here
                  </a>
                </span>
              </div>
            </form>
            <div
              className="d-flex justify-content-end align-items-center mb-4 mt-4"
              style={{ marginRight: "20px" }}
            >
              <p className="fw-bold">Don't have an acount ?</p>
              <a href="/signup">
                <button className="btn btn-primary mx-2 ">sign up</button>{" "}
              </a>
            </div>
          </div>
        </div>
        <br />
        <hr className=" border-dark " />
      </div>
      {/* __________________________Footer___________________________________________________________________________________________________________ */}
      <div
        className="container-fluid mt-5"
        style={{ background: "rgba(255, 255, 255, 0.5)" }}
      >
        <div className="row">
          <div className="fw-bold fs-1 bg-light justify-content-center row mx-0 ">
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
