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
          <div className="row table-responsive">
            <div className="col-sm-12">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">
                      <h3>Shopping Cart</h3>
                    </th>
                  </tr>
                </thead>
                {this.props.data.map((el, index) => {
                  return (
                    <tbody>
                      <div key={index}>
                        {el.transaction_detail.map((subel, i) => {
                          return (
                            <tr>
                              <th scope="row"></th>
                              <div
                                key={i}
                                className="d-flex justify-content-center"
                              >
                                <td>
                                  <h5>{subel.product_id.name}</h5>
                                  <img
                                    className="img-responsive"
                                    src={subel.product_id.image}
                                    alt="coba"
                                    style={{ width: "200px" }}
                                  />
                                </td>
                                <td>
                                  <span>qty: {subel.qty} pcs</span>
                                </td>
                                <td>
                                  <span>Rp.{subel.product_id.price},-</span>
                                </td>
                                <td>
                                  <span>color: {subel.product_id.color} </span>
                                  <br />
                                  <span>size: {subel.product_id.size}</span>
                                </td>
                                <td>
                                  <button
                                    className="button-color"
                                    value={subel.id}
                                    onClick={(e) => this.delTrans(e)}
                                  >
                                    Delete item
                                  </button>
                                </td>
                              </div>
                            </tr>
                          );
                        })}
                      </div>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
          <div className="row d-flex justify-content-end text-right">
            <div className="col-sm-12">
              {this.props.data.map((el, index) => (
                <div key={index}>
                  <span>Total qty: {el.cart.total_qty}</span>
                  <br />
                  <span>Subtotal: Rp.{el.cart.total_price},-</span>
                  <br />
                </div>
              ))}
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
