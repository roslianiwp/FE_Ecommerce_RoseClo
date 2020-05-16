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
    const login = localStorage.getItem("is_login");
    if (!login) {
      return <Redirect to={{ pathname: "/signin" }} />;
    } else {
      return (
        <Fragment>
          <Navigation {...this.props} />

          {/* <div className="container justify-content-start text-center mt-5"> */}

          <section>
            <div className="container justify-content-start mt-5">
              {/* <h1>Profile</h1> */}
              <div className="row">
                <div className="col-md-6 img">
                  <img
                    src="https://source.unsplash.com/350x350/?person,headshot"
                    alt=""
                    className="img-rounded"
                  />
                </div>
                <div className="col-md-6 details">
                  <blockquote>
                    <h4>{this.props.name}</h4>
                    <h5>{this.props.email}</h5>
                    <small>
                      <cite title="Source Title">
                        {this.props.street}, {this.props.city}
                        <br />
                        {this.props.province}, Indonesia
                        <br />
                        {this.props.postal_code}
                        <br />
                        {this.props.phone}
                        <i className="icon-map-marker"></i>
                      </cite>
                    </small>
                  </blockquote>
                  <p>
                    <Link to="/biodata">Edit/Isi data dirimu</Link>
                  </p>
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
