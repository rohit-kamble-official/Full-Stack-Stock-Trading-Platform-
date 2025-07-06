import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom shadow-sm"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container py-3">
        {/* Logo Section */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "120px" }}
            alt="Logo"
          />
        </Link>

        {/* Toggle Button for Mobile */}
        <button
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

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <Link className="nav-link fw-bold text-primary" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/support">
                Support
              </Link>
              
            </li>
            <li className="nav-item">
  <a
    className="nav-link fw-bold text-success text-muted"
    href="http://localhost:3000/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Kite
  </a>
</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
