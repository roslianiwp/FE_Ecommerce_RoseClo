import React, { Fragment } from "react";
import "../css/NewArrival.css";

const NewArrival = ({ nama, harga, gambar }) => {
  return (
    <Fragment>
      <div>
        <img src={gambar} alt="baju" className="zoom" />
        <br />
        <span>{nama}</span>
        <br />
        <span>Rp.{harga},-</span>
      </div>
    </Fragment>
  );
};

export default NewArrival;
