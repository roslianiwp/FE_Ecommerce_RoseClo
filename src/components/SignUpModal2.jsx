import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import { MDBInput } from "mdbreact";

const SignUpModal2 = (props, postSignup) => {
  postSignup = async () => {
    await props.doSignUpCustomer();

    props.statusError
      ? props.history.push("/")
      : alert("anda belum berhasil sign up!");
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id="modalLoginForm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="false"
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
                <span aria-hidden="false">&times;</span>
              </button>
            </div>

            <div className="modal-body mx-3">
              <div className="md-form mb-5">
                <div className="grey-text">
                  <MDBInput
                    label="Type your username"
                    icon="envelope"
                    group
                    error="wrong"
                    success="right"
                    name="namaPengguna"
                    onChange={(e) => props.changeInput(e)}
                  />
                </div>
              </div>
              <div className="md-form mb-4">
                <MDBInput
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  name="kataKunci"
                  onChange={(e) => props.changeInput(e)}
                />
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button className="btn btn-default" onClick={() => postSignup()}>
                <a href="/signin">Signup</a>
              </button>
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
};
export default SignUpModal2;
