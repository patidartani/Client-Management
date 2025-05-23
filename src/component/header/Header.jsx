import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FiMapPin } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";

import logo from "../../assets/images/logoMain.jpg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="main-header header-style-one">
      <div className="header-btm">
        <div className="header-upper">
          <div className="auto-containers">
              <div className="logo-outer">
                <div className="logo">
                  <Link to="/">
                    <img width={250} height={65} src={logo} alt="Radius" />
                  </Link>
                </div>
              </div>

              <div className="upper-right">
                <div className="info-box">
                  <div className="icon-box">
                    <LuPhoneCall strokeWidth={1} />
                  </div>
                  <ul>
                    <li>
                      <strong>(+880)1723801729</strong>
                    </li>
                    <li>radiousco@gmail.com</li>
                  </ul>
                </div>

                <div className="info-box">
                  <div className="icon-box">
                    <FiMapPin strokeWidth={1} />
                  </div>
                  <ul>
                    <li>
                      <strong>Dhanmondi Road</strong>
                    </li>
                    <li>dhaka 1230, BD</li>                  </ul>
                </div>
              </div>
              {/* <div className="search-box">
                  <input type="text" placeholder="Search Here..." />
                  <button>
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div> */}
          </div>
        </div>

        <div className="header-lower">
          <div className="auto-containers">
            <div className="nav-outer">
              {/* Toggle Button */}
              <button
                type="button"
                className="navbar-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              {/* Navigation Menu */}
              <nav className={`main-menu ${mobileMenuOpen ? "open" : ""}`}>
                <div className="navigation">
                  <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </Link>

                  <div className={`dropdown ${dropdownOpen ? "open" : ""}`}>
                    <span
                      style={{ color: "#fff", fontWeight: "600" }}
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      About Us <i className="ri-arrow-down-s-line"></i>
                    </span>
                    <div className="dropdown-menus">
                      <Link
                        to="/about-us"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        About Us
                      </Link>
                      <Link to="/team" onClick={() => setMobileMenuOpen(false)}>
                        Our Team
                      </Link>
                      <Link
                        to="/what-we-do"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        What We Do
                      </Link>
                    </div>
                  </div>

                  <Link to="/services" onClick={() => setMobileMenuOpen(false)}>
                    Services
                  </Link>
                  <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>
                    Blog
                  </Link>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                  </Link>
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    Login
                  </Link>
                </div>
              </nav>

              {/* Button (Hidden on Mobile) */}
              <div className="outer-btn">
                <Link to="/contact" className="consultation">
                  Free Consultation!!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
