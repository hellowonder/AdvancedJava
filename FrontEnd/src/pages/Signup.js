import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
import Navbar from "../components/Navbar";

export default function Signup() {
  useEffect(() => {
    document.title = "Signup";
  }, []);

  let navigate = useNavigate();

  let [uname, setUname] = useState("");
  let [uphone, setUphone] = useState("");
  let [uemail, setUemail] = useState("");
  let [upassword, setUpassword] = useState("");
  let [uconpassword, setUconpassword] = useState("");

  let user = {
    name: uname,
    phone: uphone,
    email: uemail,
    password: upassword,
  };

  //Register data
  const registerUser = (data) => {
    axios.post(`http://localhost:8080/register`, data).then(
      (response) => {
        alert("SUCCESS : Registered Succesfully.. :) ");
        window.location = "/";
        clearFields();
      },
      (error) => {
        console.log(error);

        alert(" ERROR : Failed to Register");
      }
    );
  };

  let [ename, setEname] = useState();
  let [eemail, setEemail] = useState();
  let [ephone, setEphone] = useState();
  let [epassword, setEpassword] = useState();
  let [econpassword, setEconpassword] = useState();
  let [etnc, setEtnc] = useState();

  function clearErrors() {
    document.getElementById("name").classList.remove("is-invalid");
    setEname("");

    document.getElementById("phone").classList.remove("is-invalid");
    setEphone("");

    document.getElementById("email").classList.remove("is-invalid");
    setEemail("");

    document.getElementById("password").classList.remove("is-invalid");
    setEpassword("");

    document.getElementById("conpassword").classList.remove("is-invalid");
    setEconpassword("");

    document.getElementById("tnc").classList.remove("is-invalid");
    setEtnc("");
  }

  function clearFields() {
    setUname("");
    setUphone("");
    setUemail("");
    setUpassword("");
    setUconpassword("");

    document.getElementById("tnc").checked = false;
  }

  let validate = () => {
    if (
      uname.trim() === "" ||
      uphone.trim() === "" ||
      uemail.trim() === "" ||
      upassword.trim() === "" ||
      uconpassword.trim === ""
    ) {
      alert("WARNING : All fields are  required");
    } else if (
      uname.search(/^[a-zA-Z ]*$/) < 0 ||
      uname.length < 3 ||
      uname.length > 40
    ) {
      document.getElementById("name").classList.add("is-invalid");
      setEname(
        "Please enter characters only and must have length of minimum 3 and maximum 30"
      );
    } else if (uphone === "" || uphone.search(/^[789][0-9]{9}$/) < 0) {
      document.getElementById("phone").classList.add("is-invalid");
      setEphone("Enter valid Mobile Number");
    } else if (
      uemail === "" ||
      uemail.search(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) < 0
    ) {
      document.getElementById("email").classList.add("is-invalid");
      setEemail("Enter valid Email ID");
    } else if (
      upassword === "" ||
      upassword.search(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
      ) < 0 ||
      upassword.length < 6
    ) {
      document.getElementById("password").classList.add("is-invalid");
      setEpassword(
        "Enter a password with atleast 8 characters and must include 1 capital, 1 number and 1 special character"
      );
    } else if (upassword !== uconpassword) {
      document.getElementById("conpassword").classList.add("is-invalid");
      setEconpassword("Password mismatch.");
    } else if (document.getElementById("tnc").checked == false) {
      document.getElementById("tnc").classList.add("is-invalid");
      setEtnc("Please accept terms and conditions");
    } else {
      registerUser(user);
    }
  };

  return (
    <div className="signup-body">
      <Navbar />
      <div
        className="row text-dark justify-content-center align-items-center fs-4 d-flex reg"
        style={{ height: "60px; " }}
      >
        <div className="m-auto  pt-2 ps-5 pe-5 pb-2  align-self-center text-white reg-form">
          <div>
            <div
              className="row text-light justify-content-center align-items-center fs-4"
              style={{ height: "60px" }}
            >
              <div className="col-xl-8">
                <marquee>
                  <h3
                    className="text-light"
                    style={{ fontSize: "20px", fontStyle: "italic" }}
                  >
                    Welcome to PREMIER THE RESTAURANT Sign-Up Page
                  </h3>
                </marquee>
              </div>
            </div>
            <div
              className="row  p-xl-3 text-decoration  align-items-center justify-content-center fs-1"
              style={{
                background: "rgba(0, 0, 0, 0.6)",
                fontFamily: "cursive",
                color: "rgb(255, 192, 56)",
              }}
            >
              Sign-Up Here
            </div>
            <br />
          </div>
          <div
            className="container-fluid w-75 mb-4"
            style={{ background: "rgba(0, 0, 0, 0.6)" }}
          >
            <form className="row g-3 mt-1">
              <div className="col-md-6 fw-bold  ">
                <label for="name" className="form-label fs-5">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  onChange={(e) => setUname(e.target.value)}
                  onFocus={clearErrors}
                  value={uname}
                  required
                />
                <div
                  class="invalid-feedback fs-6 fw-bold "
                  style={{ color: " yellow" }}
                >
                  {ename}
                </div>
              </div>

              <div className="col-md-6 fw-bold">
                <label for="email" className="form-label fs-5">
                  Email-ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email id"
                  onChange={(e) => setUemail(e.target.value)}
                  onFocus={clearErrors}
                  value={uemail}
                  required
                />
                <div
                  class="invalid-feedback fs-6 fw-bold"
                  style={{ color: " yellow" }}
                >
                  {eemail}
                </div>
              </div>

              <div className="col-md-6 fw-bold">
                <label for="phone" className="form-label fs-5">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Enter Phone no."
                  onChange={(e) => setUphone(e.target.value)}
                  onFocus={clearErrors}
                  value={uphone}
                  required
                />
                <div
                  class="invalid-feedback fs-6 fw-bold"
                  style={{ color: " yellow" }}
                >
                  {ephone}
                </div>
              </div>

              <div className="col-md-6 fw-bold">
                <label for="password" className="form-label fs-5">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={(e) => setUpassword(e.target.value)}
                  onFocus={clearErrors}
                  value={upassword}
                  required
                />
                <div
                  class="invalid-feedback fs-6  "
                  style={{ color: "yellow" }}
                >
                  {epassword}
                </div>
              </div>

              <div className="col-md-6 fw-bold">
                <label for="conpassword" className="form-label fs-5">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="conpassword"
                  name="conpassword"
                  placeholder="Confirm entered password"
                  onChange={(e) => setUconpassword(e.target.value)}
                  onFocus={clearErrors}
                  value={uconpassword}
                  required
                />
                <div
                  class="invalid-feedback fs-6 fw-bold"
                  style={{ color: " yellow" }}
                >
                  {econpassword}
                </div>
              </div>

              <div className="col-md-7 text-right mt-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="tnc"
                  name="tnc"
                  required
                />
                <label for="tnc" className="form-label fs-5">
                  Accept terms and conditions
                </label>
                <div class="invalid-feedback fs-6 fw-bold">{etnc}</div>
              </div>
              <div className="col-md-5  mt-3">
                <Link
                  to="#"
                  href="#"
                  className="text-decoration-none fs-5"
                  id="tnc"
                >
                  Terms and Conditions
                </Link>
              </div>

              <div className="col-md-12 text-center">
                <input
                  type="button"
                  className="btn fw-bold btn-lg btn-warning"
                  value="Register"
                  onClick={validate}
                />
              </div>
            </form>

            <div>
              <hr size="5px" className="bg-light" />
              <div
                className=" row justify-content-center align-items-center mb-5"
                style={{ width: "100%" }}
              >
                <label className=" col fs-5 font-weight-regular text-light text-end">
                  Already have an account?
                </label>
                <span className=" col  text-danger font-weight-regular d-flex justify-content-start ">
                  <Link to="/">
                    <button className=" btn btn-primary text-light fw-bold">
                      Login
                    </button>
                  </Link>
                </span>
              </div>
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
