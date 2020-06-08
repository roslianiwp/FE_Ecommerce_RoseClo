import React, { Fragment } from "react";
import Navigation from "../components/NavBar";
// import CarouselHome from "../components/CarouselHome";
import NewArrival from "../components/NewArrival";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { doSignOut } from "../store/action/actionUser";
import { getProduk, getRes } from "../store/action/actionProduct";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdbreact";

class Home extends React.Component {
  componentDidMount = () => {
    this.props.getProduk();
  };
  handleRequestCategory = async (categoryName) => {
    const paramCategory = this.props.match.params.category;
    await this.props.history.replace("/item/" + categoryName);
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
      <Fragment>
        <Navigation
          handleRouter={(e) => this.handleRequestCategory(e)}
          {...this.props}
        />
        {/* <CarouselHome /> */}
        <div className="container-fluid text-center mt-sm-5">
          <span id="judul">Available Items</span>
          <hr />
          <div className="row mt-5 baju">
            {dagangan.slice(0, 8).map((el, index) => (
              <div className="col-sm-3" key={index}>
                <NewArrival
                  nama={el.name}
                  harga={el.price}
                  gambar={el.image}
                  id={el.id}
                />
              </div>
            ))}
          </div>
          <MDBBtn gradient="peach" className="mt-5">
            <Link to="/item" style={{ color: "black", fontSize: "20px" }}>
              See All
            </Link>
          </MDBBtn>
        </div>
        <Footer />
      </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
