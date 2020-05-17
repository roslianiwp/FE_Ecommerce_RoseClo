import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import "../css/ItemDetailComp.css";
// import { MDBBtn } from "mdbreact";
// import ReactDOM from "react-dom";
// import ReactImageZoom from "react-image-zoom";

const ItemDetailComp = (props, postTransaction) => {
  postTransaction = async (e) => {
    e.preventDefault();
    await props.postCart(e.target.value);

    props.statusError
      ? alert("anda belum berhasil menambahkan product!")
      : props.history.push("/cart");
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-5 mt-5 justify-content-end text-right">
            <img src={props.gambar} alt="baju" id="baju-utama" />
          </div>
          <div className="col-sm-7 mt-5 text-center justify-content-start">
            <h4>{props.nama}</h4>
            <br />
            <span>Rp.{props.harga}.-</span>
            <br />
            <span>Warna: {props.warna}</span>
            <br />
            <span>Size: {props.size}</span>
            <div className="row mt-4 justify-content-center">
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: "#D9BB5E",
                  borderRadius: "50px",
                  fontWeight: "bold",
                }}
                value={props.id}
                onClick={(e) => postTransaction(e)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemDetailComp;
