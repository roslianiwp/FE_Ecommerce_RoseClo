import React, { Fragment } from "react";
import Navigation from "../components/NavBar";
import Footer from "../components/Footer";
import ItemDetailComp from "../components/ItemDetailComp";
import { doSignOut } from "../store/action/actionUser";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ItemDetail extends React.Component {
  render() {
    return (
      <Fragment>
        <Navigation {...this.props} />
        <ItemDetailComp />
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.user.is_login,
  };
};

const mapDispatchToProps = {
  doSignOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
