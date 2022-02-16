import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Reschedule() {
  useEffect(() => {
    document.title = "Reschedule";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/";
    }
  }, []);

  return (
    <div className="reschedule-body">
      <Navbar />
      {/* ______________________________________________________Form-Booking-Details____________________________________________________ */}
      <div
        className="contact d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <form
          action="/success.html"
          onsubmit=" return validation()"
          className="col d-flex justify-content-center "
        >
          <div>
            <div
              className=" row box1 d-flex justify-content-center align-items-center flex-column "
              style={{
                height: "90vh",
                width: "55vw",
                background: "rgba(0, 0, 0, 0.55)",
              }}
            >
              <h2
                className="heading mb-3"
                style={{
                  color: "#ffb535",
                  fontFamily: "Playfair Display, serif",
                  fontSize: "36px",
                }}
              >
                Reschedule <br></br> (Update the Details)
              </h2>

              <div className="form-group w-50">
                <label className=" text-light">
                  <h5 className=" col d-flex m-0 mt-2">Number of Persons</h5>
                </label>
                <input
                  id="seat"
                  className="form-control my-2"
                  type="number"
                  autoComplete="off"
                  placeholder="Enter Number Of Members"
                />
                <span
                  id="seats"
                  className=" font-weight-regular"
                  style={{ color: "yellow" }}
                />
              </div>
              <div className="form-group w-25">
                <label className=" text-light">
                  <h5 className="d-flex  m-0 mt-2 ">Date</h5>
                </label>
                <input
                  id="date"
                  className="form-control my-2"
                  type="date"
                  autoComplete="off"
                  placeholder="Enter Date"
                />
                <span
                  id="dates"
                  className=" font-weight-regular"
                  style={{ color: "yellow" }}
                />
              </div>
              <div className="form-group w-25">
                <label className=" text-light">
                  <h5 className="d-flex  m-0 mt-2 ">Time</h5>
                </label>
                <input
                  id="time"
                  className="form-control my-2"
                  type="time"
                  autoComplete="off"
                  placeholder="Enter time"
                />
                <span
                  id="times"
                  className=" font-weight-regular"
                  style={{ color: "yellow" }}
                />
              </div>

              <div className="d-flex justify-content-center w-100 mt-5">
                <button
                  type="submit"
                  className="btn btn-primary text-dark fw-bold  mx-2 "
                >
                  Submit
                </button>
                <input
                  type="reset"
                  name="reset"
                  defaultValue="Reset"
                  className="btn btn-warning text-dark fw-bold float-xl-right mx-2"
                  autoComplete="off"
                />
              </div>
              <br />
            </div>
          </div>
        </form>
      </div>
      {/* __________________________Footer___________________________________________________________________________________________________________ */}
      <div
        className="container-fluid mt-5 "
        style={{ background: "rgba(255, 255, 255, 0.40)", color: "black" }}
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
