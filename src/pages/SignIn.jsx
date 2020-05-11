import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  doLogin,
  changeInputUser,
  doSignUpCustomer,
} from "../store/action/actionUser";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import Navigation from "../components/NavBar";
import "../css/SignIn.css";
import SignUpModal from "../components/SignUpCompModal";

class SignIn extends React.Component {
  postLogin = async () => {
    await this.props.doLogin();
    const is_login = this.props.login;
    if (is_login) {
      this.props.history.push("/");
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
                  <MDBBtn onClick={() => this.postLogin()}>Login</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
          <SignUpModal {...this.props} />
        </MDBContainer>
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
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
