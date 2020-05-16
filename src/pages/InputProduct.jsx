import React, { Fragment } from "react";
import Navigation from "../components/NavBar";
import Footer from "../components/Footer";
import { MDBBtn } from "mdbreact";
import "../css/FormBiodata.css";
import { connect } from "react-redux";
import { doLogin, doSignOut } from "../store/action/actionUser";
import {
  inputProdukSeller,
  changeInputProduct,
} from "../store/action/actionProduct";

class InputProduct extends React.Component {
  inputProduk = async () => {
    await this.props.inputProdukSeller();
    this.props.statusError
      ? alert("anda gagal ngepost produk!")
      : this.props.history.push("/");
  };

  render() {
    return (
      <Fragment>
        <Navigation {...this.props} />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="mt-5">Form Input Produk</h3>
              <form>
                <div className="form-group">
                  <label for="formGroupExampleInput" id="label">
                    Nama Produk
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Nama..."
                    name="namaProduk"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput" id="label">
                    Harga
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Harga..."
                    name="harga"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput" id="label">
                    Warna
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Warna..."
                    name="warna"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput" id="label">
                    Berat Produk
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Berat Produk..."
                    name="beratProduk"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
              </form>
              <div className="form-group">
                <label for="formGroupExampleInput" id="label">
                  Kategori Product
                </label>
                <div className="row ml-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kategori"
                      id="inlineRadio1"
                      value="kemeja"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                    <label
                      className="form-check-label"
                      for="inlineRadio1"
                      id="label"
                    >
                      Kemeja
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kategori"
                      id="inlineRadio2"
                      value="celana"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                    <label
                      className="form-check-label"
                      for="inlineRadio2"
                      id="label"
                    >
                      Celana
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="kategori"
                      id="inlineRadio3"
                      value="sepatu"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                    <label
                      className="form-check-label"
                      for="inlineRadio3"
                      id="label"
                    >
                      Sepatu
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mt-sm-5">
              <div className="form-group">
                <label for="formGroupExampleInput" id="label">
                  Ukuran
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Ukuran.."
                  name="ukuran"
                  onChange={(e) => this.props.changeInput(e)}
                />
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput" id="label">
                  Stock
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Stock.."
                  name="stock"
                  onChange={(e) => this.props.changeInput(e)}
                />
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput" id="label">
                  Promo
                </label>
                <div className="row ml-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="promo"
                      id="inlineRadio1"
                      value="true"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      Ya
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="promo"
                      id="inlineRadio2"
                      value="false"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                    <label
                      className="form-check-label"
                      for="inlineRadio2"
                      id="label"
                    >
                      Tidak
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput" id="label">
                  Discount
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Discount..."
                  name="diskon"
                  onChange={(e) => this.props.changeInput(e)}
                />
              </div>

              <div className="form-group">
                <label for="formGroupExampleInput" id="label">
                  Image
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="URL image..."
                  name="image"
                  onChange={(e) => this.props.changeInput(e)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-center justify-content-center">
              <MDBBtn color="secondary" onClick={() => this.inputProduk()}>
                Submit
              </MDBBtn>
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
    dataUser: state.user,
    statusError: state.product.statusError,
  };
};
const mapDispatchToProps = {
  changeInput: (e) => changeInputProduct(e),
  doLogin,
  doSignOut,
  inputProdukSeller,
};
export default connect(mapStateToProps, mapDispatchToProps)(InputProduct);
// export default InputProduct;
