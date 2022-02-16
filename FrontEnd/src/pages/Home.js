import React, { useEffect } from "react";
import "./style.css";

import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
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

  return (
    <div>
      {/* ____________________Backgroumd Video_________________________________________________________________________________________________________________ */}
      <div className="myvideo">
        <video autoPlay muted loop id="myVideo">
          <source
            src={require("./assets/images/back-video/back-video.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
      {/* ________________________Content_____________________________________________________________________________________________________________ */}
      <section
        className="sec-content d-flex flex-column align-items-center"
        style={{ height: "100vh" }}
      >
        <marquee
          direction="up"
          scrollamount={3}
          className="content d-flex position-absolute p-5"
          style={{
            marginTop: "30vh",
            textAlign: "center",
            height: "40vh",
            background: "rgba(0, 0, 0, 0.45)",
          }}
        >
          <div
            className="cont-text"
            style={{ color: "rgb(255, 255, 255, 0.9)" }}
          >
            <div
              style={{
                fontFamily:
                  '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif',
                color: "rgb(255, 255, 255, 0.65)",
              }}
            >
              IF MUSIC BE THE FOOD OF LOVE PLAY ON{" "}
            </div>
            <h1> PREMIER </h1>
            <h2
              style={{
                fontFamily:
                  '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif',
                color: "rgb(255, 255, 255, 0.6)",
              }}
            >
              The Restaurant{" "}
            </h2>
            <div
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                fontStyle: "italic",
                color: "rgb(255, 255, 255, 0.6)",
              }}
            >
              <p>
                Food, in the end, in our own tradition, is something holy. It's
                not about nutrients and calories. It's about sharing. It's about
                honesty. It's about identity.
              </p>
            </div>
          </div>
        </marquee>
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
      </section>
      {/* __________________________Our Story___________________________________________________________________________________________________________ */}
      <div
        className="container-ourStory row d-flex justify-content-center align-items-center px-4 m-0 mt-5 "
        style={{ width: "100%" }}
      >
        {/* border: solid 2px green; */}
        <div className="col-sm-12 col-md-6 ">
          <div className=" text-center">
            <div style={{ fontStyle: "italic" }}>
              Sweet and tiny like a chocolate
            </div>
            <h1>OUR STORY</h1>
            <p style={{ color: "rgb(0, 0, 0, 0.6)" }} className="fs-5">
              Premium - The Restaurant is about more than just the food, it is a
              community of people: staff, customers and suppliers all sharing
              and celebrating food and knowledge. Nature writes our menu as the
              seasons inspire the food we cook. We promise to entice, surprise
              and stimulate.
            </p>
            <h6 style={{ fontStyle: "italic" }}> -- Chef S. Mandlik </h6>
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <div className=" d-flex justify-content-center align-items-center">
            <img
              id="chef-img"
              src={require("./assets/images/chef/chef.jpg")}
              alt="chef"
              style={{ width: "100%", height: "40vh" }}
            />
          </div>
        </div>
      </div>
      <hr style={{ border: "solid 2px rgb(255, 173, 21)" }} className="mt-5" />
      <hr style={{ border: "solid 4px rgb(255, 45, 8)" }} />
      {/* __________________________Gallery___________________________________________________________________________________________________________ */}
      <div
        className=" row d-flex justify-content-center align-items-center mt-5 pt-5"
        style={{
          background:
            "linear-gradient(60deg,rgb(253, 160, 144),rgb(255, 229, 111))",
        }}
      >
        <div className=" col-sm-8 col-md-3 d-flex row text-center justify-content-center mb-4 ">
          <img
            src={require("./assets/images/gallery/div5.jpeg")}
            alt="burger"
            style={{ width: "300px", height: "400px" }}
          />

          <h2 className="text-dark" style={{ fontFamily: "fantasy" }}>
            {" "}
            EAT{" "}
          </h2>
        </div>
        <div className=" col-sm-8 col-md-3 d-flex row text-center justify-content-center mb-4">
          <img
            src={require("./assets/images/gallery/div2.jpeg")}
            alt="beer"
            style={{ width: "300px", height: "400px" }}
          />

          <h2 className="text-dark" style={{ fontFamily: "fantasy" }}>
            {" "}
            DRINK{" "}
          </h2>
        </div>
        <div className=" col-sm-8 col-md-3 d-flex row text-center justify-content-center mb-4">
          <img
            src={require("./assets/images/gallery/div3.jpeg")}
            alt="location"
            style={{ width: "300px", height: "400px" }}
          />

          <h2 className="text-dark" style={{ fontFamily: "fantasy" }}>
            LOCATION
          </h2>
        </div>
        <div className=" col-sm-8 col-md-3 d-flex row text-center justify-content-center mb-4">
          <img
            src={require("./assets/images/gallery/div4.jpeg")}
            alt="event"
            style={{ width: "300px", height: "400px" }}
          />

          <h2 className="text-dark" style={{ fontFamily: "fantasy" }}>
            EVENT
          </h2>
        </div>
      </div>
      {/* __________________________Menu___________________________________________________________________________________________________________ */}
      <div
        className=" row menu-container mt-5 px-5 py-5 m-0"
        style={{
          position: "relative",
          width: "100%",
          border: "solid 20px rgba(59, 59, 59, 0.523)",
          background: "#0c0b09",
        }}
      >
        <div
          className="section-title d-flex flex-column"
          style={{ width: "100vw" }}
        >
          <h2
            className="d-flex"
            style={{
              fontFamily: "Open Sans, sans-serif",
              fontSize: "18px",
              color: "rgb(255, 255, 255, 0.5)",
            }}
          >
            <a name="menu"> </a> Menu ___________
          </h2>
          <p
            className="d-flex"
            style={{
              color: "#cda45e",
              fontFamily: "Playfair Display, serif",
              fontSize: "36px",
            }}
          >
            Check Our Tasty Menu
          </p>
        </div>
        {/* -------Left-------------------- */}
        <div className="left col-sm-12 col-md-6 d-flex flex-column">
          <div className="mb-4">
            <img
              src={require("./assets/images/menu/lobster-bisque.jpg")}
              className="menu-img"
              alt=""
            />
            <div>
              <p className="text-light d-flex">Lobster Bisque</p>
              <span className="price d-flex">Rs 180 /-</span>
            </div>
            <div className="dish-details">So Good, So tasty</div>
          </div>
          <div className="mb-4">
            <img
              src={require("./assets/images/menu/cake.jpg")}
              className="menu-img"
              alt=""
            />
            <div>
              <p className="text-light d-flex">Crab Cake</p>
              <span className="price d-flex">Rs 360 /-</span>
            </div>
            <div className="dish-details">Indulge in your Best moments</div>
          </div>
          <div className="mb-4">
            <img
              src={require("./assets/images/menu/mozzarella.jpg")}
              className="menu-img"
              alt=""
            />
            <div>
              <p className="text-light d-flex">Mozzarella Stick</p>
              <span className="price d-flex">Rs 320 /-</span>
            </div>
            <div className="dish-details">Get a New Fresh breath</div>
          </div>
          <div className="mb-4">
            <img
              src={require("./assets/images/menu/greek-salad.jpg")}
              className="menu-img"
              alt=""
            />
            <div>
              <p className="text-light d-flex">Greek Salad</p>
              <span className="price d-flex">Rs 140 /-</span>
            </div>
            <div className="dish-details">Healthy wealthy</div>
          </div>
        </div>
        {/* ---------Right---------------------- */}
        <div className="right col-sm-12 col-md-6 d-flex flex-column">
          <div className="mb-4">
            <img
              src={require("./assets/images/menu/caesar.jpg")}
              className="menu-img"
              alt=""
            />
            <div>
              <p className="text-light d-flex">Caesar Selections</p>
              <span className="price d-flex">Rs 390 /-</span>
            </div>
            <div className="dish-details">A taste of Good Life</div>
          </div>
          <div className="mb-4">
            <img
              src={require("./assets/images/menu/bread-barrel.jpg")}
              className="menu-img"
              alt=""
            />
            <div>
              <p className="text-light d-flex">Bread Barrel</p>
              <span className="price d-flex">Rs 180 /-</span>
            </div>
            <div className="dish-details">Love from the oven</div>
          </div>
          <div className="mb-4">
            <img
              src={require("./assets/images/menu/tuscan-grilled.jpg")}
              className="menu-img"
              alt=""
            />
            <div>
              <p className="text-light d-flex">Tuscan Grilled</p>
              <span className="price d-flex">Rs 480 /-</span>
            </div>
            <div className="dish-details">
              Grilled chicken with provolone, artichoke hearts, and roasted red
              pesto
            </div>
          </div>
          <div className="mb-4">
            <img
              src={require("./assets/images/menu/spinach-salad.jpg")}
              alt=""
              className="menu-img"
            />
            <div>
              <p className="text-light d-flex">Spinach Salad</p>
              <span className="price d-flex">Rs 270 /-</span>
            </div>
            <div className="dish-details">
              Fresh spinach with mushrooms, hard boiled egg, and warm bacon
              vinaigrette
            </div>
          </div>
        </div>
      </div>
      {/* __________________________Booking Button___________________________________________________________________________________________________________ */}
      <div
        className="alert d-flex justify-content-center mt-5 py-3"
        style={{
          borderRadius: "20px",
          background:
            "linear-gradient(30deg, rgb(109, 109, 255),rgb(253, 141, 159))",
        }}
      >
        <Link to="/booking">
          <button type="button" className="btn btn-lg btn-warning fw-bold">
            Book Your Table
          </button>
        </Link>
      </div>
      {/* __________________________Time Table___________________________________________________________________________________________________________ */}
      <section
        className="d-flex text-center justify-content-center"
        style={{ width: "100%", height: "25vh", marginTop: "20vh" }}
      >
        <div>
          <div></div>
          <table>
            <tbody>
              <tr>
                <th rowSpan={3} style={{ paddingRight: "20px" }}>
                  <img
                    src={require("./assets/images/clock-gif/clock.gif")}
                    alt="event"
                  />
                </th>
                <th rowSpan={3} style={{ paddingRight: "20px" }}>
                  <div style={{ fontFamily: "cursive", color: "grey" }}>
                    {" "}
                    Our open schedules
                  </div>
                  <div
                    style={{
                      fontFamily: "Georgia,",
                      color: "grey",
                      fontSize: "larger",
                    }}
                  >
                    HOURS{" "}
                  </div>
                </th>
                <th
                  className="table-th px-4"
                  style={{ color: "rgb(115,115,115)" }}
                >
                  {" "}
                  Day{" "}
                </th>
                <th
                  className="table-th px-4"
                  style={{ color: "rgb(115,115,115)" }}
                >
                  {" "}
                  Monday{" "}
                </th>
                <th
                  className="table-th px-4"
                  style={{ color: "rgb(115,115,115)" }}
                >
                  {" "}
                  Tuesday{" "}
                </th>
                <th
                  className="table-th px-4"
                  style={{ color: "rgb(115,115,115)" }}
                >
                  {" "}
                  Wednesday
                </th>
                <th
                  className="table-th px-4"
                  style={{ color: "rgb(115,115,115)" }}
                >
                  {" "}
                  Thurdsay
                </th>
                <th
                  className="table-th px-4"
                  style={{ color: "rgb(115,115,115)" }}
                >
                  {" "}
                  Friday
                </th>
                <th
                  className="table-th px-4"
                  style={{ color: "rgb(115,115,115)" }}
                >
                  Saturday
                </th>
                <th
                  className="table-th px-4"
                  style={{ color: "rgb(115,115,115)" }}
                >
                  Sunday
                </th>
              </tr>
              <tr>
                <td className="table-tr" style={{ color: "rgb(150,150,150)" }}>
                  {" "}
                  Lunch{" "}
                </td>
                <td className="table-tr" style={{ color: "rgb(132,132,132)" }}>
                  {" "}
                  11am - 15pm{" "}
                </td>
                <td className="table-tr" style={{ color: "rgb(132,132,132)" }}>
                  {" "}
                  11am - 15pm{" "}
                </td>
                <td className="table-tr" style={{ color: "rgb(132,132,132)" }}>
                  {" "}
                  11am - 15pm{" "}
                </td>
                <td className="table-tr" style={{ color: "rgb(132,132,132)" }}>
                  {" "}
                  11am - 15pm{" "}
                </td>
                <td className="table-tr" style={{ color: "rgb(132,132,132)" }}>
                  11am - 15pm{" "}
                </td>
                <td className="table-tr" style={{ color: "rgb(132,132,132)" }}>
                  {" "}
                  11am - 15pm
                </td>
                <td className="table-tr" style={{ color: "rgb(132,132,132)" }}>
                  11am - 15pm
                </td>
              </tr>
              <tr>
                <td className="table-tr" style={{ color: "rgb(150,150,150)" }}>
                  Dinner{" "}
                </td>
                <td className="table-tr" style={{ color: "rgb(132,132,132)" }}>
                  {" "}
                  Closed{" "}
                </td>
                <td className="table-tr" style={{ color: "rgb(132,132,132)" }}>
                  {" "}
                  18pm - 23pm{" "}
                </td>
                <td className="table-tr" style={{ color: "rgb(132,132,132)" }}>
                  {" "}
                  18pm - 23pm{" "}
                </td>
                <td className="table-tr" style={{ color: "rgb(132,132,132)" }}>
                  {" "}
                  18pm - 23pm
                </td>
                <td className="table-tr" style={{ color: "rgb(132,132,132)" }}>
                  {" "}
                  18pm - 23pm{" "}
                </td>
                <td className="table-tr" style={{ color: "rgb(132,132,132)" }}>
                  {" "}
                  18pm - 23pm{" "}
                </td>
                <td className="table-tr" style={{ color: "rgb(132,132,132)" }}>
                  18pm - 23pm{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* __________________________marquee___________________________________________________________________________________________________________ */}
      <div
        className="container mt-5"
        style={{
          border: "solid 20px rgba(59, 59, 59, 0.523)",
          borderRadius: "20px",
          background: "#0c0b09",
        }}
      >
        {/* container and container-fluid credits reserved */}
        <div className="row bg-dark h-50">
          <div className="col-xl-12 col-md-12 col-sm-12  bg-black text-light p-lg-4 p-md-4 p-sm-4">
            <h2 style={{ textAlign: "center" }}>..... Today's Special .....</h2>
          </div>
          <div className="col-xl-12 col-md-12 col-sm-12 bg-black text-light">
            <marquee
              style={{
                padding: "0 50px 0 30px",
                maxHeight: "80%",
                height: "250px",
              }}
              onmouseover="this.stop();"
              onmouseout="this.start();"
              direction="up"
              scrolldelay={0}
              scrollamount={2}
            >
              <p className style={{ color: "white", textAlign: "center" }}>
                You can try Chef's Special "Paneer Kadai"👨🏻‍🍳
              </p>
              <p className style={{ color: "white", textAlign: "center" }}>
                Todays Special Menu "Chicken Kolhapuri"🍗🥘
              </p>
              <p className style={{ color: "white", textAlign: "center" }}>
                You can checkout our wide range of Drinks🥂🍾🍸
              </p>
              <p className style={{ color: "white", textAlign: "center" }}>
                Checkout our Health Concious Dishes Range🥕🥦🥑
              </p>
              <p className style={{ color: "white", textAlign: "center" }}>
                See our Starters you will love it!😋🍟🍕
              </p>
              <p className style={{ color: "white", textAlign: "center" }}>
                -----------------------------------
              </p>
            </marquee>
          </div>
        </div>
      </div>
      <br />
      {/* __________________________Footer___________________________________________________________________________________________________________ */}
      <div
        className="container-fluid mt-5 "
        style={{ width: "100%", marginLeft: "12px" }}
      >
        <div className="row mx-0">
          <div className="fw-bold fs-1 bg-light justify-content-center row">
            PREMIER
            <p className="fs-6 text-center">The Restaurant</p>
          </div>
          <div className="row mx-0 justify-content-center mt-4">
            We don't care if we're doing haute cuisine or burgers and pizza.
          </div>
          <div className="row justify-content-center mb-4">
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
            Avenue 502, Mumbai Restaurant Management System - by
            cdacmumbai@gov.in
            <p>Team- Shubham Mandlik, Priyanka Satpute, Tushar Jangale</p>
          </div>
        </div>
      </div>
    </div>
  );
}
