import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/NavBar";
// import "../css/SignIn.css";
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBInput,
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
// } from "mdbreact";

class SignUp extends React.Component {
  render() {
    return (
      <Fragment>
        <Navigation {...this.props} />
        {/* <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
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
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="cyan" type="submit">
                      Register
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer> */}
        <div
          className="modal fade"
          id="modalLoginForm"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">Sign up</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body mx-3">
                <div className="md-form mb-5">
                  <i className="fas fa-user prefix grey-text"></i>
                  <input
                    type="email"
                    id="defaultForm-email"
                    className="form-control validate"
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    for="defaultForm-email"
                  >
                    Your username
                  </label>
                </div>
                <div className="md-form mb-5">
                  <i className="fas fa-envelope prefix grey-text"></i>
                  <input
                    type="email"
                    id="defaultForm-email"
                    className="form-control validate"
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    for="defaultForm-email"
                  >
                    Your email
                  </label>
                </div>

                <div className="md-form mb-4">
                  <i className="fas fa-lock prefix grey-text"></i>
                  <input
                    type="password"
                    id="defaultForm-pass"
                    className="form-control validate"
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    for="defaultForm-pass"
                  >
                    Your password
                  </label>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <Link to="/signup">
                  <button className="btn btn-default">Signup</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            href="/"
            className="btn btn-default btn-rounded mb-4"
            data-toggle="modal"
            data-target="#modalLoginForm"
          >
            Belum punya akun? Daftar disini!
          </a>
        </div>
      </Fragment>
    );
  }
}

export default SignUp;
