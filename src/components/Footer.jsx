import React, { Fragment } from "react";
import "../css/Footer.css";
// import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <Fragment>
      <MDBFooter className="font-small pt-2 mt-4 ">
        <MDBContainer fluid className="text-center text-md-left warna-footer">
          <MDBRow>
            <MDBCol md="2" sm="0"></MDBCol>
            <MDBCol md="5" sm="12">
              <img
                src={require("../images/logo.png")}
                alt="logo"
                id="logo"
              ></img>
              <p id="footer-p">~Your Everyday Clothing~</p>
            </MDBCol>
            <MDBCol md="5" sm="12">
              <h5 className="title" id="titlecontact">
                Reach us through
              </h5>
              <a href="https://facebook.com">
                <img
                  className="logo"
                  src={require("../images/fb.png")}
                  alt="fb"
                />
              </a>
              <a href="https://instagram.com">
                <img
                  className="logo"
                  src={require("../images/ig.png")}
                  alt="fb"
                />
              </a>
              <a href="https://twitter.com">
                <img
                  className="logo"
                  src={require("../images/twitter.png")}
                  alt="fb"
                />
              </a>
              <a href="https://gmail.com">
                <img
                  className="logo"
                  src={require("../images/email.png")}
                  alt="fb"
                />
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.mdbootstrap.com"> rose-clo.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </Fragment>
  );
};
export default Footer;
