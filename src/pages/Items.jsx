import React from "react";
import Navigation from "../components/NavBar";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { doSignOut } from "../store/action/actionUser";
import { Link } from "react-router-dom";
import Sidebar from "../components/SideBar";
import { getProduk, getRes } from "../store/action/actionProduct";

class Items extends React.Component {
  componentDidMount = async () => {
    this.props.getProduk();
    const paramCategory = await this.props.match.params.category;
    this.props.getRes(paramCategory);
  };
  render() {
    const dagangan = this.props.data.filter((item) => {
      if (item.image !== null) {
        return item;
      }
      return false;
    });

    return (
      <div>
        <Navigation {...this.props} />
        <h3 className="text-center mt-5">Available Items</h3>
        <hr style={{ width: "30%", backgroundColor: "#ffcdd2" }} />
        <div className="container">
          <div className="row mt-sm-5">
            <div className="col-sm-3">
              <Sidebar />
            </div>
            {dagangan.map((el, index) => (
              <div class="col-sm-3 text-center" key={index}>
                <Link
                  to="/itemdetail"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img src={el.image} alt="baju" />
                  <span>{el.name}</span>
                  <br />
                  <span>Rp.{el.price},-</span>
                </Link>
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
