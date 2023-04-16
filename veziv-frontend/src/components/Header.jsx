import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
  return (
    <header className="header-container navbar navbar-dark bg-dark">
      <div className="logo-container">
        <img
          src="../images/jacub.PNG"
          alt="Logo"
          className="logo"
        />
        <h1 className="logo-text">Portfolio Manager</h1>
      </div>
      <nav className="nav-container flex-grow-1 justify-content-between">
        <ul className="nav-list navbar-nav w-100 justify-content-between d-flex">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
