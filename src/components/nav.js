import React, { useContext } from "react";
import { ColorContext } from "../context/colorContext";

export default function Nav() {
  const { nav_color } = useContext(ColorContext);
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary ${nav_color} `}>
        <div className={`container-fluid ${nav_color}`}>
          <a className="navbar-brand text_color fw-bold" href="#">
            我的番茄鐘
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link text_color" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text_color"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item " href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-divider"></a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </div>
  );
}
