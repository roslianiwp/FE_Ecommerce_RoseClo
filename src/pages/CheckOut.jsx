import React, { Fragment } from "react";
import Navigation from "../components/NavBar";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { doSignOut } from "../store/action/actionUser";
import {
  getTransDetail,
  deleteTrans,
  checkOut,
} from "../store/action/actionTransaction";
import { getDetail } from "../store/action/actionProduct";
import { Link } from "react-router-dom";

class CheckOut extends React.Component {
  render() {
    return (
      <Fragment>
        <Navigation {...this.props} />
        <div className="container">
          <h3>TERIMAKASIH TELAH BERBELANJA DI ROSE.CLO</h3>
          <Link to="/">kembali ke home</Link>
        </div>

        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.user.is_login,
    data: state.trans.dataCart,
    dataDetail: state.product.dataDetail,
  };
};

const mapDispatchToProps = {
  doSignOut,
  getTransDetail,
  getDetail,
  deleteTrans,
  checkOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
