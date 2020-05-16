import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  doLogin,
  changeInputUser,
  doSignUpCustomer,
  doSignOut,
} from "../store/action/actionUser";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import Navigation from "../components/NavBar";
import "../css/SignIn.css";
import Footer from "../components/Footer";

class SignIn extends React.Component {
  postLogin = async () => {
    await this.props.doLogin();
    const is_login = localStorage.getItem("is_login");
    const status = localStorage.getItem("status");
    if (is_login && status !== "admin") {
      this.props.history.push("/");
    } else if (is_login && status === "admin") {
      this.props.history.push("/admin");
    }
  };
  render() {
    return (
      <Fragment>
        <Navigation {...this.props} />
        <MDBContainer className="bordersign">
          <MDBRow>
            <MDBCol sm="0" lg="3"></MDBCol>
            <MDBCol sm="12" lg="6">
              <div className="h5 text-center mt-5">
                <img
                  src={require("../images/logo.png")}
                  alt="logo"
                  id="logo"
                ></img>
                <br />
                <span>~ Your everyday clothing ~</span>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <p className="h3 text-center mt-5 font-weight-bold">Sign in</p>
                <div className="grey-text">
                  <MDBInput
                    label="Type your username"
                    icon="envelope"
                    group
                    error="wrong"
                    success="right"
                    name="namaPengguna"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    name="kataKunci"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <div className="text-center">
                  <MDBBtn
                    className="button-color"
                    onClick={() => this.postLogin()}
                  >
                    Login
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
          <div className="text-center">
            <MDBBtn className="button-color">
              <Link
                to="/signup"
                className="button-color"
                style={{ textDecoration: "none" }}
              >
                Anda belum terdaftar?
              </Link>
            </MDBBtn>
          </div>
        </MDBContainer>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    namaPengguna: state.user.namaPengguna,
    kataKunci: state.user.kataKunci,
    login: state.user.is_login,
    statusError: state.user.statusError,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doLogin,
  doSignUpCustomer,
  doSignOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
