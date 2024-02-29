import React from "react";
import logo from "../../assets/logo.webp";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>
          <img src={logo} width={100} height={50} />
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link fw-bold"
                aria-current="page"
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                className="nav-link fw-bold"
                activeClassName="active"
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                className="nav-link fw-bold"
                activeClassName="active"
                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
