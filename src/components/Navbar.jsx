import React from "react";
import logo from "../images/Logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <img src={logo} alt="Logo" style={{ width: 70 }} />
          <NavLink className="navbar-brand ms-3" to="/">
            Watashi House
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collaps"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Products">
                  Produits
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/alaune">
                  A la une
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/news">
                  NEWS
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              ></input>
            </form>
            <NavLink className="btn btn-outline-light ms-5" to="/panier">
              <i className="fa fa-shopping-cart"></i>
            </NavLink>
            <NavLink className="btn btn-outline-light ms-2" to="/signin">
              <i className="fa fa-user"></i>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
