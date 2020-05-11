navbar:
<div className="row">
          <form className="form-inline my-1">
            <div className="md-form form-sm my-0">
              <input
                className="form-control form-control-sm mr-sm-2 mb-0"
                type="text"
                placeholder="Search"
                aria-label="Search"
                id="input-text"
              />
            </div>
            {/* <button
              className="btn btn-outline-black btn-sm my-0"
              type="submit"
            ></button> */}
          </form>
          {/* {login ? ( */}
          {/* <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-lg-5">
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                <img
                  src={require("../images/avatar.jpg")}
                  id="logokabar"
                  alt="avatar"
                />
              </Link>
            </li>
            <li
              className="nav-item nav-link"
              onClick={() => this.postSignout()}
            >
              Keluar
            </li>
          </ul> */}
          {/* ) : ( */}
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-lg-5">
            <li className="nav-item nav-link">
              <Link to="/signin">Masuk</Link>
            </li>
            <li className="nav-item nav-link">
              <Link to="/signup">Daftar</Link>
            </li>
          </ul>
          {/* )} */}
        </div>
      </nav>