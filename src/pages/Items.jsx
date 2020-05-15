import React from "react";
import Navigation from "../components/NavBar";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { doSignOut } from "../store/action/actionUser";
import { Link } from "react-router-dom";
import { getProduk, getRes } from "../store/action/actionProduct";
import { MDBBtn } from "mdbreact";

class Items extends React.Component {
  componentDidMount = async () => {
    const paramCategory = await this.props.match.params.category;
    if (paramCategory) {
      this.props.getRes(paramCategory);
    } else {
      this.props.getProduk();
    }
  };

  handleRequestCategory = async (categoryName) => {
    const paramCategory = this.props.match.params.category;
    await this.props.history.replace("/item/" + categoryName);
    this.props.getRes(paramCategory);
  };

  changeRouterDetail = (e) => {
    console.warn("cek changerouterdetail", e.target.value);
    e.preventDefault();
    this.props.history.push("/itemdetail/" + e.target.value);
  };

  render() {
    const dagangan = this.props.data.filter((item) => {
      if (item.image !== null) {
        console.warn("cek id", item.id);
        return item;
      }
      return false;
    });

    return (
      <div>
        <Navigation
          handleRouter={(e) => this.handleRequestCategory(e)}
          {...this.props}
        />
        <h3 className="text-center mt-5">Available Items</h3>
        <hr style={{ width: "30%", backgroundColor: "#ffcdd2" }} />
        <div className="container">
          <div className="row mt-sm-5">
            {dagangan.map((el, index) => (
              <div class="col-sm-3 text-center" key={index}>
                <img src={el.image} alt="baju" />
                <span>{el.name}</span>
                <br />
                <span>Rp.{el.price},-</span>
                <br />
                <MDBBtn
                  color="brown"
                  value={el.id}
                  onClick={(e) => this.changeRouterDetail(e)}
                >
                  Click me!
                </MDBBtn>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.user.is_login,
    data: state.product.data,
  };
};

const mapDispatchToProps = {
  doSignOut,
  getProduk,
  getRes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
