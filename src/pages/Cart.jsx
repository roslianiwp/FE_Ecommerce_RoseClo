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
// import { Link } from "react-router-dom";
import { MDBBtn } from "mdbreact";

class Cart extends React.Component {
  componentDidMount = async () => {
    await this.props.getTransDetail();
  };

  delTrans = async (e) => {
    e.preventDefault();
    await this.props.deleteTrans(e.target.value);
  };

  cekOut = async () => {
    await this.props.checkOut();
    this.props.history.push("/checkout");
  };

  render() {
    return (
      <Fragment>
        <Navigation {...this.props} />
        <div className="container">
          <div className="row">
            <div className="col-xs-8 col-sm-12">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <div className="panel-title">
                    <div className="row">
                      <div className="col-xs-6">
                        <h3>
                          <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                          Shopping Cart
                        </h3>
                      </div>
                      <div className="col-xs-6"></div>
                    </div>
                  </div>
                </div>
                <div className="panel-body">
                  {this.props.data.map((el, index) => {
                    return (
                      <div className="row" key={index}>
                        <div className="col-sm-8">
                          <h3>Nama toko: {el.cart.shop_id.name}</h3>
                          {el.transaction_detail.map((subel, i) => {
                            return (
                              <div key={i}>
                                <img
                                  className="img-responsive"
                                  src={subel.product_id.image}
                                  alt="coba"
                                  style={{ width: "200px" }}
                                />
                              </div>
                            );
                          })}
                        </div>
                        <br />
                        <br />
                        <hr></hr>
                        <div className="col-sm-4">
                          {el.transaction_detail.map((subel, i) => {
                            return (
                              <div key={i}>
                                <h4 className="product-name">
                                  {subel.product_id.name}
                                </h4>
                                <h5>
                                  <small>color: {subel.product_id.color}</small>
                                  <br />
                                  <small>size: {subel.product_id.size}</small>
                                  <br />
                                  <small>harga: {subel.product_id.price}</small>
                                </h5>

                                <button
                                  className="button-color"
                                  value={subel.id}
                                  onClick={(e) => this.delTrans(e)}
                                >
                                  Delete item
                                </button>
                              </div>
                            );
                          })}
                          <div className="col-sm-6">
                            <div className="col-sm-6 text-right"></div>
                            <div className="col-sm-4"></div>

                            <div className="col-sm-2">
                              <button
                                type="button"
                                className="btn btn-link btn-xs"
                              >
                                <span className="glyphicon glyphicon-trash">
                                  {" "}
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <hr />

                <div className="row">
                  <div className="text-center">
                    <div className="col-xs-9"></div>
                  </div>
                </div>
              </div>
              <div className="panel-footer">
                <div className="row text-center">
                  <div className="col-xs-9">
                    {this.props.data.map((el, index) => (
                      <div key={index}>
                        <h4 className="text-right">
                          Jumlah barang <strong>{el.cart.total_qty}</strong>
                          <br />
                          Total <strong>Rp{el.cart.total_price}.-</strong>
                        </h4>
                      </div>
                    ))}
                  </div>

                  <br />
                  <button
                    type="button"
                    className="btn btn-success btn-block"
                    onClick={(e) => this.cekOut(e)}
                  >
                    Checkout
                  </button>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
