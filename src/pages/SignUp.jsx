import React, { Fragment } from "react";
import { connect } from "react-redux";
import Footer from "../components/Footer";
import Navigation from "../components/NavBar";
import "../css/SignIn.css";
import {
  doLogin,
  changeInputUser,
  doSignUpCustomer,
  doSignOut,
} from "../store/action/actionUser";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

class SignUp extends React.Component {
  postSignup = async () => {
    await this.props.doSignUpCustomer();

    if (this.props.statusError) {
      alert("Anda belum berhasil sign up!");
    } else {
      this.props.history.push("/signin");
      alert("Anda berhasil sign up. Silahkan sign in!");
    }
  };

  render() {
    return (
      <Fragment>
        <Navigation {...this.props} />
        <MDBContainer>
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
              <form>
                <p className="h3 text-center mt-5 font-weight-bold">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="namaPengguna"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your password"
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
                    style={{ color: "black", backgroundColor: "pink" }}
                    onClick={() => this.postSignup()}
                  >
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
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
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
