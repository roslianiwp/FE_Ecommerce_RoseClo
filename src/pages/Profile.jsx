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
import "../css/Profile.css";

class Profile extends React.Component {
  componentDidMount = async () => {
    await this.props.getBiodata();
    await this.props.getHistoryTrans();
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
          {/* HISTORY TRANSACTION */}
          <section>
            <div className="container">
              <div className="row table-responsive">
                <div className="col-sm-12">
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">
                          <h3>Barang yang sudah terjual</h3>
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
                                    <td>{subel.product_id.created_at}</td>
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
    data: state.trans.dataCart,
  };
};
const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doLogin,
  doSignOut,
  getBiodata,
  getHistoryTrans,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
