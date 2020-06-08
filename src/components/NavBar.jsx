import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "../css/NavBar.css";

const Navigation = (props, postSignout, changeRouter) => {
  postSignout = () => {
    props.doSignOut();
    props.history.push("/");
  };
  changeRouter = async (category) => {
    if (props.handleRouter) {
      await props.handleRouter(category);
    } else {
      props.history.replace("/item/" + category);
    }
  };
  const login = localStorage.getItem("is_login");
  const statusKu = localStorage.getItem("status");
  return (
    <Fragment>
      <div
        className="text-right pr-sm-auto"
        style={{ backgroundColor: "#ffcdd2" }}
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
            {statusKu === "customer" ? (
              <ul className="navbar-nav mt-2 mt-lg-0 ml-lg-5 uldua">
                <li className="nav-item nav-link">
                  <Link to="/cart">
                    <IconButton aria-label="cart">
                      <Badge color="secondary">
                        <ShoppingCartIcon
                          style={{ width: "40px", height: "40px" }}
                        />
                      </Badge>
                    </IconButton>
                  </Link>
                </li>
              </ul>
            ) : (
              false
            )}
            {login ? (
              <ul className="navbar-nav mt-2 mt-lg-0 ml-lg-5 uldua">
                <li className="nav-item nav-link" id="huruf">
                  <Link
                    to="/profile"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i className="far fa-user-circle fa-2x"></i>
                  </Link>
                </li>
                <li className="nav-item nav-link" id="huruf">
                  <Link
                    className="nav-link"
                    style={{ textDecoration: "none" }}
                    onClick={() => postSignout()}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav mt-2 mt-lg-0 ml-lg-5 uldua">
                <li className="nav-item nav-link" id="huruf">
                  <Link
                    to="/signin"
                    className="nav-link"
                    style={{ textDecoration: "none" }}
                  >
                    Masuk
                  </Link>
                </li>
                <li className="nav-item nav-link" id="huruf">
                  <Link
                    to="/signup"
                    className="nav-link"
                    style={{ textDecoration: "none" }}
                  >
                    Daftar
                  </Link>
                </li>
              </ul>
            )}
            <ul className="navbar-nav " id="gede-ilang">
              <li className="nav-item">
                <Link className="nav-link" onClick={() => changeRouter(2)}>
                  Kemeja
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={() => changeRouter(1)}>
                  Celana
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={() => changeRouter(4)}>
                  Sepatu
                </Link>
              </li>
              <li>
                Coba travis jalan ngga
              </li>
            </ul>
            {statusKu === "customer" || login === null ? (
              <ul className="navbar-nav" id="gede-ilang-selling">
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
            ) : (
              <ul className="navbar-nav" id="gede-ilang-selling">
                <li className="nav-item">
                  <Link
                    to="/inputproduct"
                    className="nav-link"
                    style={{ textDecoration: "none" }}
                  >
                    Input Product!
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
      {/* ===============Navbar kedua===================== */}
      {statusKu === "admin" ? (
        false
      ) : (
        <nav
          className="navbar navbar-expand-lg navbar-light pl-5"
          style={{ backgroundColor: "white" }}
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
            <ul className="navbar-nav kedua">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Our Products <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={() => changeRouter(2)}>
                  Kemeja
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={() => changeRouter(1)}>
                  Celana
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={() => changeRouter(4)}>
                  Sepatu
                </Link>
              </li>
            </ul>
            {statusKu === "customer" || login === null ? (
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
            ) : (
              <ul className="navbar-nav ml-auto" id="selling">
                <li className="nav-item">
                  <Link
                    to="/inputproduct"
                    className="nav-link"
                    style={{ textDecoration: "none" }}
                  >
                    Input Product!
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      )}
    </Fragment>
  );
};

export default Navigation;
