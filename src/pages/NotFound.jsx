import React, { Fragment } from "react";

class NotFound extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container d-flex justify-content-center text-center">
          <div className="row">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div className="error-details">
                Sorry, an error has occured, Requested page not found!
              </div>
              <div className="error-actions text-center">
                <a
                  href="/"
                  className="btn btn-primary"
                  style={{ backgroundColor: "pink" }}
                >
                  <i className="icon-home icon-white"></i> Take Me Home{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NotFound;
