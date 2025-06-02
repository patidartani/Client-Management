import React from 'react';
import './AboutChoose.css';
import { FaUserTie, FaHandshake, FaRegLightbulb } from 'react-icons/fa';
import { MdOutlineIntegrationInstructions } from 'react-icons/md';

const AboutChoose = () => {
  return (
    <>
      <section>
        <div className="AboutChoose-main">
          <div className="AboutChoose-content">
            <div className="AboutChoose-left">
              <div className="inner-box">
                <h3 style={{ color: "#ff831e" }}>Why Choose Us</h3>
                <p>
                  Choosing the right Chartered Accountant is crucial to your financial success and regulatory compliance. At Sidwaniya & Co, we go beyond traditional accounting services — we become your strategic financial partner. Here’s why clients across sectors trust us:
                </p>
                <a href="/about-us" className="theme-btn btn-style-one">
                  LEARN MORE
                </a>
              </div>
            </div>

            <div className="AboutChoose-right">
              <div className="AboutChoose-box">
                <div className="icon"><FaUserTie size={40} color="#ff831e" /></div>
                <h5>Professional Expertise</h5>
                <p>
                  Led by a qualified Chartered Accountant with in-depth knowledge of taxation, audit, and compliance across industries.
                </p>
              </div>

              <div className="AboutChoose-box">
                <div className="icon"><MdOutlineIntegrationInstructions size={40} color="#ff831e" /></div>
                <h5>Complete Financial Solutions</h5>
                <p>
                  From tax filings to business registrations and audits — all services under one roof with a unified approach.
                </p>
              </div>

              <div className="AboutChoose-box">
                <div className="icon"><FaHandshake size={40} color="#ff831e" /></div>
                <h5>Client-Centric Approach</h5>
                <p>
                  Tailored solutions, transparent communication, and a commitment to long-term client relationships.
                </p>
              </div>

              <div className="AboutChoose-box">
                <div className="icon"><FaRegLightbulb size={40} color="#ff831e" /></div>
                <h5>Timely & Tech-Driven</h5>
                <p>
                  Efficient, deadline-focused service delivery powered by modern tools and secure digital processes.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutChoose;
