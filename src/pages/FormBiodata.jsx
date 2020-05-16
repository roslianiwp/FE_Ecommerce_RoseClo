import React, { Fragment } from "react";
import Navigation from "../components/NavBar";
import Footer from "../components/Footer";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { MDBBtn } from "mdbreact";
import {
  doLogin,
  changeInputUser,
  doSignOut,
  editBiodata,
} from "../store/action/actionUser";
import "../css/FormBiodata.css";

class FormBiodata extends React.Component {
  editBio = async () => {
    await this.props.editBiodata();
    this.props.dataUser.statusError
      ? alert("anda gagal mengedit profile!")
      : this.props.history.push("/profile");
  };
  render() {
    return (
      <Fragment>
        <Navigation {...this.props} />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="mt-5">Form Data Diri</h3>
              <form>
                <div className="form-group">
                  <label for="formGroupExampleInput" className="label">
                    Nama
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Nama..."
                    name="name"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput" className="label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Email..."
                    name="email"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput" className="label">
                    Tempat, Tanggal Lahir
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Birth of Date..."
                  />
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput" className="label">
                    No Handphone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="No Handphone..."
                    name="phone"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
              </form>
              <div className="text-center justify-content-center">
                <MDBBtn
                  color="secondary"
                  className="btnku"
                  onClick={() => this.editBio()}
                >
                  Submit
                </MDBBtn>
              </div>
            </div>
            <div className="col-sm-6">
              <h5 className="mt-5">Informasi Alamat</h5>
              <div className="form-group">
                <label for="formGroupExampleInput" className="label">
                  Alamat Rumah
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Alamat Rumah.."
                  name="street"
                  onChange={(e) => this.props.changeInput(e)}
                />
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput" className="label">
                  Kota
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Kota.."
                  name="city"
                  onChange={(e) => this.props.changeInput(e)}
                />
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput" className="label">
                  Tipe Kota
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Tipe Kota.."
                  name="city_type"
                  onChange={(e) => this.props.changeInput(e)}
                />
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput" className="label">
                  Provinsi
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Provinsi.."
                  name="province"
                  onChange={(e) => this.props.changeInput(e)}
                />
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput" className="label">
                  Kode Pos
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Kode Pos.."
                  name="postal_code"
                  onChange={(e) => this.props.changeInput(e)}
                />
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
    dataUser: state.user,
  };
};
const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doLogin,
  doSignOut,
  editBiodata,
};
export default connect(mapStateToProps, mapDispatchToProps)(FormBiodata);
