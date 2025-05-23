import React from "react";
import "./AboutUs.css";
import Header from "../../component/header/Header";
import OurExperts from "../../component/home/OurExperts";
import Footer from "../../pages/footer/Footer";
import Testimonials from "./Testimonials";
import AboutChoose from "./AboutChoose";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="AboutUs-main">
        <div className="about-us-content">
          <div className="about-topp">
            <h5>ABOUT US</h5>
          </div>

          <div className="about1">
             <h6>About Sidwaniya & Co             </h6>
             <p>Welcome to Sidwaniya & Co, a distinguished Chartered Accountancy firm dedicated to delivering excellence in financial, taxation, and business advisory services. Founded by a qualified and experienced Chartered Accountant, our firm upholds the highest standards of integrity, professionalism, and client confidentiality.
             </p>
             <p>We cater to a diverse clientele including individuals, entrepreneurs, corporates, startups, NGOs, and institutions, offering tailored solutions that align with regulatory frameworks and strategic business goals.</p>
          </div>


          <div className="about2">
            <div className="about-2-box">
              <h5>Our Philosophy</h5>
              <p>
                We believe in upholding the highest standards of professional
                integrity, confidentiality, and excellence. Every client
                engagement is approached with a commitment to precision,
                proactive advisory, and long-term value creation.
              </p>
            </div>
            <div className="about-2-box">
              <h5>Our Mission</h5>
              <p>
                To empower clients by providing timely, reliable, and insightful
                financial and regulatory solutions that support sustainable
                growth, informed decision-making, and full legal compliance.
              </p>
            </div>
            <div className="about-2-box">
              <h5>Our Vision</h5>
              <p>
                To be a trusted and respected Chartered Accountancy firm,
                recognized for delivering excellence and value through
                integrity, innovation, and a client-centric approach.
              </p>
            </div>
          </div>

          <div className="about3">
            <div className="image-left">
              <img
                src="https://smallbizclub.com/wp-content/uploads/2020/06/bigstock-Group-Of-Professional-Business-349068817.jpg"
                alt=""
              />
            </div>
            <div className="content-right">
  <h2>Our Service Offerings</h2>
  
  <h6 className="mt-3">
    <b>Direct Taxation: </b>Tax advisory, compliance, and ITR filings for
    individuals and businesses
  </h6>
  <h6>
    <b> ROC & MCA Compliance: </b>Annual filings, incorporations, and other
    regulatory matters
  </h6>
  <h6>
    <b>Intellectual Property Services:</b> Trademark, Copyright, Design & Patent Registration
  </h6>
  <h6>
    <b>Transfer Pricing:</b> Documentation, advisory, and regulatory compliance
  </h6>
  <h6>
    <b> Business Advisory:</b> Entity structuring, startup support, and regulatory compliance
  </h6>
  <h6>
    <b> Audit & Assurance:</b> Statutory audits, internal audits, tax audits, bank audits, and NGO audits
  </h6>
  <h6>
    <b>Indirect Taxation:</b> GST registration, returns, representation, and advisory
  </h6>

  <p>
    Our approach is rooted in deep domain knowledge, attention to
    detail, and a commitment to timely compliance. We combine
    traditional values with modern tools and practices to offer
    seamless and accurate financial solutions.
  </p>
</div>

          </div>

          <div className="about-counter">
            <div className="counter1">
              <h5>18</h5>
              <h6>Years Expereince</h6>
            </div>
            <div className="counter1">
              <h5>200+</h5>
              <h6>Happy Client</h6>
            </div>
            <div className="counter1">
              <h5>570</h5>
              <h6>Cup Of Coffee</h6>
            </div>
            <div className="counter1">
              <h5>1200+</h5>
              <h6>Years Expereince</h6>
            </div>
          </div>

          <OurExperts />
          <AboutChoose />
          <Testimonials />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
