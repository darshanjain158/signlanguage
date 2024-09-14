import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a> <h1 className="navbar-brand" href="#">Sign Companion</h1> </a>
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
        <div
          className="collapse navbar-collapse d-flex justify-content-end "
          id="navbarSupportedContent" 
        >
          <ul className="navbar-nav  ">
            <li className="nav-item ">
              <a className="nav-link active" aria-current="page" href="#hero">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Research
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#features">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#footer">
                Contact Us 
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
