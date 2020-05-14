import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import Navigation from "../components/NavBar";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  doLogin,
  changeInputUser,
  doSignOut,
  getBiodata,
} from "../store/action/actionUser";
import "../css/Profile.css";

class Profile extends React.Component {
  componentDidMount = () => {
    this.props.getBiodata();
  };
  render() {
    console.warn("cek dari halaman profile", this.props);
    const login = localStorage.getItem("is_login");
    if (!login) {
      return <Redirect to={{ pathname: "/signin" }} />;
    } else {
      return (
        <Fragment>
          <Navigation {...this.props} />
          <section>
            <div className="container justify-content-start text-center mt-5">
              <h1>Profile</h1>
              <div className="row mt-5">
                <div className="col-sm-5">
                  <img
                    src={require("../images/avatar.png")}
                    alt="avatar"
                    id="avatar"
                  ></img>
                </div>
                <div className="col-sm-7">
                  <p id="konten">
                    <label>Name: {this.props.name} </label>
                    <br />
                    <label>Email: {this.props.email} </label>
                    <br />
                    <label>Province: {this.props.province}</label>
                    <br />
                    <label>City: {this.props.city}</label>
                    <br />
                    <label>Postal Code: {this.props.postal_code}</label>
                    <br />
                    <label>City type: {this.props.city_type}</label>
                    <br />
                    <label>Street: {this.props.street}</label>
                    <br />
                    <label>Phone: {this.props.phone}</label>
                  </p>
                  <Link to="/biodata">Edit/Isi data dirimu</Link>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
    name: state.user.name,
    email: state.user.email,
    province: state.user.province,
    city: state.user.city,
    postal_code: state.user.postal_code,
    city_type: state.user.city_type,
    street: state.user.street,
    phone: state.user.phone,
  };
};
const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doLogin,
  doSignOut,
  getBiodata,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
