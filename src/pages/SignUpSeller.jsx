import React, { Fragment } from "react";
import { connect } from "react-redux";
import Footer from "../components/Footer";
import Navigation from "../components/NavBar";
import "../css/SignIn.css";
import {
  doLogin,
  changeInputUser,
  doSignUpSeller,
  doSignOut,
} from "../store/action/actionUser";

class SignUpSeller extends React.Component {
  postSignup = async () => {
    await this.props.doSignUpSeller();
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
        <div className="container mt-5">
          <div className="d-flex justify-content-center text-center">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <section className="content">
                  <div className="row">
                    <div className="col-sm-12">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <img
                          src={require("../images/logo.png")}
                          alt="logokabar"
                          id="logokabar"
                        ></img>
                        <h5>Seller Signup Form</h5>
                        <form>
                          <div className="form-group">
                            <input
                              className="form-control"
                              id="button-form"
                              aria-describedby="emailHelp"
                              type="text"
                              name="namaPengguna"
                              placeholder="Username"
                              onChange={(e) => this.props.changeInput(e)}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              id="button-form"
                              placeholder="Password"
                              name="kataKunci"
                              onChange={(e) => this.props.changeInput(e)}
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn badge-pill mr-3 mb-3"
                            id="button"
                            onClick={() => this.postSignup()}
                          >
                            Sign Up
                          </button>
                        </form>
                      </form>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
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
  doSignUpSeller,
  doSignOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpSeller);
