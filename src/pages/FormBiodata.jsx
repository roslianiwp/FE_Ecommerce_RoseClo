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
                <div class="form-group">
                  <label for="formGroupExampleInput">Nama</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Nama..."
                    name="name"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Email..."
                    name="email"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput">
                    Tempat, Tanggal Lahir
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Birth of Date..."
                  />
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput">No Handphone</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="No Handphone..."
                    name="phone"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
              </form>
              <div className="text-center justify-content-center">
                <MDBBtn color="secondary" onClick={() => this.editBio()}>
                  Submit
                </MDBBtn>
              </div>
            </div>
            <div className="col-sm-6">
              <h4 className="mt-5">Informasi Alamat</h4>
              <div class="form-group">
                <label for="formGroupExampleInput">Alamat Rumah</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Alamat Rumah.."
                  name="street"
                  onChange={(e) => this.props.changeInput(e)}
                />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput">Kota</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Kota.."
                  name="city"
                  onChange={(e) => this.props.changeInput(e)}
                />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput">Tipe Kota</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Tipe Kota.."
                  name="city_type"
                  onChange={(e) => this.props.changeInput(e)}
                />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput">Provinsi</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Provinsi.."
                  name="province"
                  onChange={(e) => this.props.changeInput(e)}
                />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput">Kode Pos</label>
                <input
                  type="text"
                  class="form-control"
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
