import React from "react";
import "./Footer.css";
import mainLogo from "../../assets/images/logoMain.jpg";
import { RiSendPlaneFill } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="Footer-main">
      <div className="footer-page">
        {/* ------------------------------------------------------------ */}
        <div className="fLeft">
          <div className="footer-one">
            <h4>
              <img src={mainLogo} alt="" />
            </h4>
            <div className="f-btm">
            <p>
  As a trusted Chartered Accountant firm, we offer comprehensive financial services, including tax planning, audits, and financial consulting.
</p>

              <div className="social-media">
                <small>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-youtube-line"></i>
                  </a>
                </small>
                <small>
                  <a
                    href="https://wa.me/918817507815"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-whatsapp-line"></i>
                  </a>
                </small>
                <small>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-instagram-line"></i>
                  </a>
                </small>
                <small>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-facebook-circle-line"></i>
                  </a>
                </small>
              </div>
            </div>
          </div>

          <div className="footer-one" id="res" style={{ marginTop: "2vmax" }}>
            <h5>Latest News</h5>
            <div className="f-btm">
              <a href="/ca-project/news">
                <i className="ri-arrow-right-s-fill"></i>News
              </a>
              <a href="/ca-project/ca-project/faq">
                <i className="ri-arrow-right-s-fill"></i>FAQ
              </a>
              <a href="/ca-project/pricing">
                <i className="ri-arrow-right-s-fill"></i>Pricing
              </a>
            </div>
          </div>
        </div>
        <div className="fRight">
          <div className="footer-one" style={{ marginTop: "2vmax" }}>
            <h5>Quick Links</h5>
            <div className="f-btm">
              <a href="/">
                <i className="ri-arrow-right-s-fill"></i> Home
              </a>
              <a href="/ca-project/about-us">
                <i className="ri-arrow-right-s-fill"></i> About Us
              </a>
              <a href="/ca-project/services">
                <i className="ri-arrow-right-s-fill"></i>Services
              </a>
              <a href="/ca-project/team">
                <i className="ri-arrow-right-s-fill"></i> Our Team
              </a>
              <a href="/ca-project/what-we-do">
                <i className="ri-arrow-right-s-fill"></i> What We Do
              </a>
            </div>
          </div>

          <div className="footer-one" id="res" style={{ marginTop: "2vmax" }}>
            <h5>Latest News</h5>
            <div className="f-btm">
              <a href="/ca-project/blog">
                <i className="ri-arrow-right-s-fill"></i>Blog
              </a>
              <a href="/ca-project/faq">
                <i className="ri-arrow-right-s-fill"></i>FAQ
              </a>
              <div className="news-letter mt-3">
                <h6 style={{ fontSize: "1.3vmax" }}>Newslatter</h6>
                <div className="inputs">
                  <input type="text" placeholder="Enter your email" />
                  <button>
                    <RiSendPlaneFill size={20} color="white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-one" id="cnt" style={{ marginTop: "2vmax" }}>
            <h5>Contact</h5>
            <div className="f-btm">
              {/* Email Link */}
              <a href="">
                <span>
                  <i className="ri-mail-line"></i> example@ca.in{" "}
                </span>
              </a>
              <a
                href="https://www.google.com/maps?q=27A+CHANDRA+NA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <i className="ri-map-pin-line"></i>Example{" "}
                </span>
              </a>

              <a href="tel:+918817507815">
                <span>
                  <i className="ri-phone-line"></i>(+880)1723801729
                </span>
              </a>
              <a href="">
                {" "}
                <span>
                  {" "}
                  <i class="ri-time-line"></i> 9:00pm - 5:00pm Sunday Closed
                </span>{" "}
              </a>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------ */}
      </div>
      <div className="f-last">
        <p>
          © {currentYear}{" "}
          <a style={{ textDecoration: "none", color: "#ff7302" }} href="/">
            ca-project.in
          </a>{" "}
          All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
