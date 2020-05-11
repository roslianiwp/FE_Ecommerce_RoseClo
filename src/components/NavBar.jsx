import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

const Navigation = () => {
  return (
    <Fragment>
      <div
        className="text-right pr-sm-auto"
        style={{ backgroundColor: "#ffe9c5" }}
      >
        <nav
          className="navbar navbar-expand-lg navbar-light pl-3"
          id="navbarpertama"
        >
          <Link className="navbar-brand" to="/">
            <img src={require("../images/logo.png")} alt="logo" id="logo"></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse ml-sm-5 justify content-end"
            id="navbarTogglerDemo02"
          >
            <form className="form-inline ml-auto">
              <div className="md-form form-sm my-0">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  id="input-text"
                />
              </div>
            </form>
            <ul className="navbar-nav mt-2 mt-lg-0 ml-lg-5">
              <li className="nav-item nav-link">
                <Link
                  to="/signin"
                  className="nav-link"
                  style={{ textDecoration: "none" }}
                >
                  Masuk
                </Link>
              </li>
              <li className="nav-item nav-link">
                <Link
                  to="/signup"
                  className="nav-link"
                  style={{ textDecoration: "none" }}
                >
                  Daftar
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* ===============Navbar kedua===================== */}
      <nav
        className="navbar navbar-expand-lg navbar-light pl-5"
        style={{ backgroundColor: "#b4f2e1" }}
        id="navbar-kedua"
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                SALE <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Pakaian
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Sepatu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Aksesoris
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto" id="selling">
            <li className="nav-item">
              <Link
                to="/signupseller"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Start Selling
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navigation;
