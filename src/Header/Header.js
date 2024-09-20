import React, { useState } from 'react';
import './Header.css';
import logo from '../Images/logo.jpg';

export default function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleSignupClick = () => {
    setShowSignupModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          {/* Logo */}
          <img src={logo} width="80" height="60" alt="Logo" />

          {/* Brand name */}
          <section className="sign">
            <h3 style={{ color: '#FFD700' }}>Sign Companion</h3> {/* Golden brand name */}
          </section>

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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#research">
                  Research
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Login and Signup buttons */}
            <div className="d-flex ms-auto">
              <button className="btn btn-outline-light me-2" type="button" onClick={handleLoginClick}>
                Login
              </button>
              <button className="btn btn-light" type="button" onClick={handleSignupClick}>
                Signup
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal for login and signup forms */}
      {showLoginModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input type="password" className="form-control" id="password" />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Signup modal */}
      {showSignupModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Signup</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <select className="form-control" id="gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input type="password" className="form-control" id="password" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="userType" className="form-label">
                      Are you a normal person or deaf and dumb?
                    </label>
                    <select className="form-control" id="userType">
                      <option value="normal">Normal</option>
                      <option value="deaf-and-dumb">Deaf and Dumb</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Signup
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
