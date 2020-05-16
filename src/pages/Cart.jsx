import React, { Fragment } from "react";
import Navigation from "../components/NavBar";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { doSignOut } from "../store/action/actionUser";
import { getTransDetail } from "../store/action/actionTransaction";
import { getDetail } from "../store/action/actionProduct";
// import { Link } from "react-router-dom";
// import { MDBBtn } from "mdbreact";

class Cart extends React.Component {
  componentDidMount = async () => {
    await this.props.getTransDetail();
    this.props.data.map((el, index) => getDetail(el.product_id));
  };

  render() {
    return (
      <Fragment>
        <Navigation {...this.props} />
        {this.props.dataDetail.map((el, index) => (
          <div key={index}>
            <span>product id: {el.name}</span>
          </div>
        ))}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
