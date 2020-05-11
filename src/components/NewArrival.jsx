import React from "react";
// import { Link } from "react-router-dom";
import "../css/NewArrival.css";
// import {fragment}

const NewArrival = () => {
  return (
    <div>
      <div className="container text-center mt-sm-5">
        <span id="judul">New Arrival</span>
        <hr />
        <div className="row mt-5 baju">
          <div class="col-sm-3">
            <img src={require("../images/baju1.jpg")} alt="baju" />
            <span>BRAND</span>
            <br />
            <span>Nama produk</span>
            <br />
            <span>Rp.XXX.XXX,00</span>
          </div>
          <div class="col-sm-3">
            <img src={require("../images/baju2.jpg")} alt="baju" />
            <span>BRAND</span>
            <br />
            <span>Nama produk</span>
            <br />
            <span>Rp.XXX.XXX,00</span>
          </div>
          <div class="col-sm-3">
            <img src={require("../images/baju3.jpg")} alt="baju" />
            <span>BRAND</span>
            <br />
            <span>Nama produk</span>
            <br />
            <span>Rp.XXX.XXX,00</span>
          </div>
          <div class="col-sm-3">
            <img src={require("../images/baju4.jpg")} alt="baju" />
            <span>BRAND</span>
            <br />
            <span>Nama produk</span>
            <br />
            <span>Rp.XXX.XXX,00</span>
          </div>
        </div>
        <div className="row mt-5 baju">
          <div class="col-sm-3">
            <img src={require("../images/baju5.jpg")} alt="baju" />
            <span>BRAND</span>
            <br />
            <span>Nama produk</span>
            <br />
            <span>Rp.XXX.XXX,00</span>
          </div>
          <div class="col-sm-3">
            <img src={require("../images/baju6.jpg")} alt="baju" />
            <span>BRAND</span>
            <br />
            <span>Nama produk</span>
            <br />
            <span>Rp.XXX.XXX,00</span>
          </div>
          <div class="col-sm-3">
            <img src={require("../images/baju7.jpg")} alt="baju" />
            <span>BRAND</span>
            <br />
            <span>Nama produk</span>
            <br />
            <span>Rp.XXX.XXX,00</span>
          </div>
          <div class="col-sm-3">
            <img src={require("../images/baju8.jpg")} alt="baju" />
            <span>BRAND</span>
            <br />
            <span>Nama produk</span>
            <br />
            <span>Rp.XXX.XXX,00</span>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-12">
            <img
              src={require("../images/bawah1.png")}
              alt="bawah"
              style={{ width: "1000px" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <img
              src={require("../images/bawah2.png")}
              alt="bawah"
              style={{ width: "500px" }}
            />
          </div>
          <div className="col-sm-6">
            <img
              src={require("../images/bawah3.png")}
              alt="bawah"
              style={{ width: "500px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
