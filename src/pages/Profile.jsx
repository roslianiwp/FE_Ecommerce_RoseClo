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
import { getHistoryTrans } from "../store/action/actionTransaction";
import {
  getProdukSeller,
  deleteProdukSeller,
} from "../store/action/actionProduct";
import "../css/Profile.css";

class Profile extends React.Component {
  componentDidMount = async () => {
    await this.props.getBiodata();
    await this.props.getHistoryTrans();
    if (localStorage.getItem("status") === "seller") {
      await this.props.getProdukSeller();
    }
  };

  componentDidUpdate = async () => {
    if (this.props.deleted) {
      await this.props.getProdukSeller();
    }
  };

  handleEdit = async (e) => {
    localStorage.setItem("product_id", e.target.value);
    this.props.history.push("/inputproduct");
  };

  render() {
    const login = localStorage.getItem("is_login");
    const statusKu = localStorage.getItem("status");
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

          {/* baru ditambahin */}
          <div className="mt-5" id="accordion">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    {statusKu === "seller" ? (
                      <h3>Barang yang sudah terjual</h3>
                    ) : (
                      <h3>Barang yang sudah dibeli</h3>
                    )}
                  </button>
                </h5>
              </div>
              <div
                id="collapseOne"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <div className="row table-responsive">
                    <div className="col-sm-12">
                      <table className="table">
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
                                        <td>{subel.product_id.created_at}</td>
                                        {statusKu === "seller" ? (
                                          <td>
                                            <span>
                                              Pembeli:{" "}
                                              {el.cart.customer_id.name}
                                            </span>
                                            <br />
                                            <span>
                                              Alamat pengiriman:
                                              <br />
                                              {el.cart.customer_id.street}
                                            </span>
                                            <br />
                                            <span>
                                              {el.cart.customer_id.city_type}{" "}
                                              {el.cart.customer_id.city}
                                            </span>
                                            <br />
                                            <span>
                                              {el.cart.customer_id.postal_code}
                                            </span>
                                          </td>
                                        ) : (
                                          false
                                        )}
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
                                          <span>
                                            Rp.{subel.product_id.price},-
                                          </span>
                                        </td>
                                        <td>
                                          <span>
                                            color: {subel.product_id.color}{" "}
                                          </span>
                                          <br />
                                          <span>
                                            size: {subel.product_id.size}
                                          </span>
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
                </div>
              </div>
            </div>
            {/* kedua */}
            {statusKu === "seller" ? (
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <h3>List Produkmu</h3>
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <div className="row table-responsive">
                      <div className="col-sm-12">
                        <table className="table">
                          {this.props.dataProduct.map((el, index) => {
                            return (
                              <tbody>
                                <div key={index}>
                                  <tr>
                                    <th scope="row"></th>
                                    <div className="d-flex justify-content-center">
                                      <td>{el.created_at}</td>

                                      <td>
                                        <h5>{el.name}</h5>
                                        <img
                                          className="img-responsive"
                                          src={el.image}
                                          alt="coba"
                                          style={{ width: "200px" }}
                                        />
                                      </td>
                                      <td>
                                        <span>stock: {el.stock} pcs</span>
                                      </td>
                                      <td>
                                        <span>Rp.{el.price},-</span>
                                      </td>
                                      <td>
                                        <span>color: {el.color} </span>
                                        <br />
                                        <span>size: {el.size}</span>
                                      </td>
                                      <td>
                                        <button
                                          className="button-color"
                                          value={el.id}
                                          onClick={(e) =>
                                            this.props.deleteProdukSeller(
                                              e.target.value
                                            )
                                          }
                                        >
                                          Delete item
                                        </button>
                                      </td>
                                      <td>
                                        <button
                                          className="button-color"
                                          value={el.id}
                                          onClick={(e) => this.handleEdit(e)}
                                        >
                                          Edit produk
                                        </button>
                                      </td>
                                    </div>
                                  </tr>
                                </div>
                              </tbody>
                            );
                          })}
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              false
            )}
          </div>
          {/* HISTORY TRANSACTION */}
          {/* <section>
            <div className="container">
              <div className="row table-responsive">
                <div className="col-sm-12">
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        {statusKu === "seller" ? (
                          <th scope="col">
                            <h3>Barang yang sudah terjual</h3>
                          </th>
                        ) : (
                          <th scope="col">
                            <h3>Barang yang sudah dibeli</h3>
                          </th>
                        )}
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
                                    <td>{subel.product_id.created_at}</td>
                                    {statusKu === "seller" ? (
                                      <td>
                                        <span>
                                          Pembeli: {el.cart.customer_id.name}
                                        </span>
                                        <br />
                                        <span>
                                          Alamat pengiriman:
                                          <br />
                                          {el.cart.customer_id.street}
                                        </span>
                                        <br />
                                        <span>
                                          {el.cart.customer_id.city_type}{" "}
                                          {el.cart.customer_id.city}
                                        </span>
                                        <br />
                                        <span>
                                          {el.cart.customer_id.postal_code}
                                        </span>
                                      </td>
                                    ) : (
                                      false
                                    )}
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
                                      <span>
                                        color: {subel.product_id.color}{" "}
                                      </span>
                                      <br />
                                      <span>size: {subel.product_id.size}</span>
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
                </div> */}
          {/* </div> */}
          {/* </div> */}
          {/* </section> */}

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
    data: state.trans.dataCart,
    dataProduct: state.product.data,
    deleted: state.product.deleted,
  };
};
const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doLogin,
  doSignOut,
  getBiodata,
  getHistoryTrans,
  getProdukSeller,
  deleteProdukSeller,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
