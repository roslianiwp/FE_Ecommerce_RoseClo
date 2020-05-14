import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../css/NewArrival.css";

const NewArrival = ({ nama, harga, gambar }) => {
  return (
    <Fragment>
      <div>
        <img src={gambar} alt="baju" />
        <span>{nama}</span>
        <br />
        <span>Rp.{harga},-</span>
      </div>
    </Fragment>
  );
};

export default NewArrival;
