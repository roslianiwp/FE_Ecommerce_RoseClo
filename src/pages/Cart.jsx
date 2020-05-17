import React, { Fragment } from "react";
import Navigation from "../components/NavBar";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { doSignOut } from "../store/action/actionUser";
import { getTransDetail, deleteTrans } from "../store/action/actionTransaction";
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
                          {el.transaction_detail.slice(0, 1).map((subel, i) => {
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
                          {el.transaction_detail.slice(0, 1).map((subel, i) => {
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
                                  <h5>jumlah barang:{el.cart.total_qty}</h5>
                                  
                                </h5>
                              </div>
                            );
                          })}
                          <div className="col-sm-6">
                            <div className="col-sm-6 text-right"></div>
                            <div className="col-sm-4">
                              {/* <input
                                type="text"
                                className="form-control input-sm"
                                
                              /> */}
                              {el.transaction_detail
                                .slice(0, 1)
                                .map((subel, i) => {
                                  return (
                                    <div key={i}>
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
                            </div>

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
                    <div className="col-xs-9">
                      {/* <h6 className="text-right">Added items?</h6> */}
                    </div>
                    {/* <div className="col-xs-3">
                      <button
                        type="button"
                        className="btn btn-default btn-sm btn-block"
                      >
                        Update cart
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="panel-footer">
                <div className="row text-center">
                  <div className="col-xs-9">
                    <h4 className="text-right">
                      Total <strong>$50.00</strong>
                    </h4>
                  </div>
                  {/* <div className="col-xs-3"> */}
                  <br />
                  <button type="button" className="btn btn-success btn-block">
                    Checkout
                  </button>
                  {/* </div> */}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
