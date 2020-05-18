import React, { Fragment } from "react";
import Navigation from "../components/NavBar";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import {
  doSignOut,
  getAllClient,
  deleteClient,
  changeInputUser,
  postPaymentMethod,
  postShippingMethod,
} from "../store/action/actionUser";
import "../css/Admin.css";

class Admin extends React.Component {
  componentDidMount = async () => {
    await this.props.getAllClient();
  };

  delClient = async (e) => {
    e.preventDefault();
    await this.props.deleteClient(e.target.value);
  };
  postPay = async () => {
    await this.props.postPaymentMethod();
  };
  postShip = async () => {
    await this.props.postShippingMethod();
  };

  render() {
    return (
      <Fragment>
        <Navigation {...this.props} />
        <div className="mt-5" id="accordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  GET ALL CLIENT
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="card-body">
                {this.props.client.map((el, index) => (
                  <div key={index}>
                    <h6>
                      {index + 1}. {el.username} as {el.status}{" "}
                      <button
                        className="button-color"
                        value={el.id}
                        onClick={(e) => this.delClient(e)}
                      >
                        Delete
                      </button>
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
                  Payment Method
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
                <div className="form-group">
                  <label for="formGroupExampleInput" className="label">
                    Tambah Payment Method
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="payment method baru.."
                    name="paymentMethod"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                  <button
                    color="secondary"
                    className="btnku"
                    onClick={() => this.postPay()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Shipping Method
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div className="card-body">
                <label for="formGroupExampleInput" className="label">
                  Tambah Shipping Method
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="shipping method baru.."
                  name="shippingMethod"
                  onChange={(e) => this.props.changeInput(e)}
                />
                <button
                  color="secondary"
                  className="btnku"
                  onClick={() => this.postShip()}
                >
                  Submit
                </button>
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
    client: state.user.client,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doSignOut,
  getAllClient,
  deleteClient,
  postPaymentMethod,
  postShippingMethod,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
