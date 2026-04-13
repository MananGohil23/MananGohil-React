import React from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends React.Component {
  state = {};

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Student Dashboard
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/attendance">
                  Attendance
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn btn-link"
                  type="button"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Check Results
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/results/sem1">
                      Semester 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/results/sem2">
                      Semester 2
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <span className="dropdown-item text-muted" role="button">
                      More Semesters
                    </span>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <Link to="/profile" className="btn btn-outline-success">
              Profile
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
