import React from "react";
import logo from "../assets/images/unnamed.png";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between"
    style={{height: "72px",border: "0px, 0px, 1px, 0px"
}}>
      <div class="container-fluid d-flex justify-content-between gap-5 ">
        <a class="navbar-brand ms-5 ps-5" href="#accueil">
          <img src={logo} alt=""  class="logo"/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse nav" id="navbarNavDropdown">
          <ul class="navbar-nav d-flex justify-content-between gap-1 w-75">
            <li class="nav-item ">
              <a class="nav-link active" aria-current="page" href="#accueil">
                Accueil
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#propos">
                a propos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#bureau">
                Bureau d’études
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#securisation">
                Sécurisation
              </a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#service"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    service 1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    service 2
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    service 3
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#realisation">
                Réalisations
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#media">
                Actualités
              </a>
            </li>
            </ul>
           
              <button type="button" class="btn btn-warning navbar-btn">
                contact
              </button>
            
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
