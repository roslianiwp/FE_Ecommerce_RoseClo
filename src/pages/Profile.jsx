import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import Navigation from "../components/NavBar";
import { connect } from "react-redux";

class Profile extends React.Component {
  render() {
    if (!this.props.dataUser.is_login) {
      return <Redirect to={{ pathname: "/signin" }} />;
    } else {
      return (
        <Fragment>
          <Navigation {...this.props} />
          <section>
            <div className="container justify-content-center text-center mt-5">
              <h1
                style={{
                  textalign: "center",
                }}
              >
                Profile
              </h1>
              <div className="row">
                <div className="col-sm-12">
                  <p>
                    <label>Name: </label>
                    <br />
                    <label>Email: </label>
                    <br />
                    <label>Province: </label>
                    <br />
                    <label>City: </label>
                    <br />
                    <label>Postal Code: </label>
                    <br />
                    <label>City type: </label>
                    <br />
                    <label>Street: </label>
                    <br />
                    <label>Phone: </label>
                    <br />
                    <label>Birth of Date: </label>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
  };
};

export default connect(mapStateToProps)(Profile);
