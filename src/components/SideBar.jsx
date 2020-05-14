import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import "../css/SideBar.css";

const Sidebar = (props) => {
  return (
    <React.Fragment>
      <div className="page-wrapper bg-gra-03 sidebar font-poppins">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="wrapper center-block hidden-xs">
                <div className="filters-text">
                  <span className="filter-span">FILTERS</span>
                </div>
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  {/* GENDER */}

                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="heading1">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse1"
                          aria-expanded="false"
                          aria-controls="collapse1"
                        >
                          GENDER
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse1"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading1"
                    >
                      <div className="panel-body">
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              className="option-input radio"
                              name="gender"
                              style={{ top: "8px" }}
                              value="Men"
                              //   onChange={() => props.changeRouter("men")}
                              //   onClick={props.changeInputFilter}
                            />
                            <span className="ml-10">Men</span>
                            {/* </Link> */}
                          </label>
                        </div>
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              className="option-input radio"
                              style={{ top: "8px" }}
                              name="gender"
                              value="Women"
                              //   onChange={() => props.changeRouter("women")}
                              //   onClick={props.changeInputFilter}
                            />
                            <span className="ml-10">Women</span>
                            {/* </Link> */}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CATEGORIES */}

                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="heading2">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapse2"
                        >
                          CATEGORIES
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse2"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading2"
                    >
                      <div className="panel-body">
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              className="option-input checkbox"
                              name="filter[]"
                              value="jacket"
                              //   onClick={props.checkedFilter}
                            />
                            <span className="ml-10">Jacket</span>
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              className="option-input checkbox"
                              name="filter[]"
                              value="shirt"
                              //   onClick={props.checkedFilter}
                            />
                            <span className="ml-10">Shirt</span>
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              className="option-input checkbox"
                              name="filter[]"
                              value="hat"
                              //   onClick={props.checkedFilter}
                            />
                            <span className="ml-10">Hat</span>
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              className="option-input checkbox"
                              name="filter[]"
                              value="shoe"
                              //   onClick={props.checkedFilter}
                            />
                            <span className="ml-10">Shoe</span>
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              className="option-input checkbox"
                              name="filter[]"
                              value="pants"
                              //   onClick={props.checkedFilter}
                            />
                            <span className="ml-10">Pants</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* PRICE */}
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="heading4">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapse4"
                        >
                          PRICE
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse4"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading4"
                    >
                      <div className="panel-body">
                        <div class="filter-content">
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label>Min</label>
                              <input
                                type="number"
                                class="form-control"
                                id="inputEmail4"
                                placeholder="Rp50.000"
                                name="minPrice"
                                // onChange={props.changeInputFilter}
                              />
                            </div>
                            <div class="form-group col-md-6 text-right">
                              <label>Max</label>
                              <input
                                type="number"
                                class="form-control"
                                placeholder="Rp1.000.000"
                                name="maxPrice"
                                // onChange={props.changeInputFilter}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
