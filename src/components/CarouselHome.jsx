import React from "react";
import "../css/CarouselHome.css";

const CarouselHome = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide mr-5 ml-5 mt-5"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" id="besar">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src={require("../images/car1.png")}
            alt="First slide"
            style={{width:"100%"}}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={require("../images/car2.png")}
            alt="Second slide"
            style={{width:"100%"}}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={require("../images/car3.png")}
            alt="Third slide"
            style={{width:"100%"}}
          />
        </div>
      </div>
      <div className="carousel-inner" id="kecil">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src={require("../images/carouselHP1.png")}
            alt="First slide"
            style={{width:"100%"}}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={require("../images/carouselHP2.png")}
            alt="Second slide"
            style={{width:"100%"}}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={require("../images/carouselHP3.png")}
            alt="Third slide"
            style={{width:"100%"}}
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default CarouselHome;
