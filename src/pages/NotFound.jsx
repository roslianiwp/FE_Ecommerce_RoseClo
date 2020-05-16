import React, { Fragment } from "react";

class NotFound extends React.Component {
  render() {
    return (
      <Fragment>
        <div class="container d-flex justify-content-center text-center">
          <div class="row">
            <div class="error-template">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div class="error-details">
                Sorry, an error has occured, Requested page not found!
              </div>
              <div class="error-actions text-center">
                <a
                  href="/"
                  class="btn btn-primary"
                  style={{ backgroundColor: "pink" }}
                >
                  <i class="icon-home icon-white"></i> Take Me Home{" "}
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
