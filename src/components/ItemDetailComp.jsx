import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import "../css/ItemDetailComp.css";
// import { MDBBtn } from "mdbreact";
// import ReactDOM from "react-dom";
// import ReactImageZoom from "react-image-zoom";

const ItemDetailComp = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-5 mt-5 justify-content-end text-right">
            <img
              src={require("../images/baju8.jpg")}
              alt="baju"
              id="baju-utama"
            />
          </div>
          <div className="col-sm-7 mt-5 text-center justify-content-start">
            <h5>BRAND</h5>
            <span>Nama produk</span>
            <br />
            <span>Rp.XXX.XXX,00</span>
            <div className="row mt-4 justify-content-center">
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: "#D9BB5E",
                  borderRadius: "50px",
                  fontWeight: "bold",
                }}
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: "red",
                  borderRadius: "50px",
                  fontWeight: "bold",
                }}
              >
                Beli Sekarang!
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5 mt-5">
            <div className="row" style={{ marginLeft: "100px" }}>
              <div className="col-3">
                <img
                  src={require("../images/baju8.jpg")}
                  alt="baju"
                  id="gambar-detail"
                />
              </div>
              <div className="col-3">
                <img
                  src={require("../images/baju8.jpg")}
                  alt="baju"
                  id="gambar-detail"
                />
              </div>
              <div className="col-3">
                <img
                  src={require("../images/baju8.jpg")}
                  alt="baju"
                  id="gambar-detail"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemDetailComp;
