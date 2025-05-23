import React from "react";
import { FaFileAlt, FaFileInvoiceDollar, FaBalanceScale, FaUniversity } from "react-icons/fa";
import "./Audit.css";

const Audit = () => {
  return (
    <div className="audit">
      <h5>Audit and Tax Planning</h5>
      <div className="audit-content">
        <div className="audit-box">
          <div className="icon"><FaFileAlt /></div>
          <h5>ITR Filing</h5>
          <p>
            We provide expert services for Income Tax Return (ITR) filing, ensuring accurate and timely submission in compliance with tax regulations, helping businesses and individuals stay tax-compliant with ease.
          </p>
        </div>
        <div className="audit-box">
          <div className="icon"><FaFileInvoiceDollar /></div>
          <h5>GST/TDS Return</h5>
          <p>
            We provide expert assistance with GST and TDS returns, ensuring timely and accurate filing, compliance with regulations, and minimizing the risk of penalties for businesses.
          </p>
        </div>
        <div className="audit-box">
          <div className="icon"><FaBalanceScale /></div>
          <h5>GST/Tax Audit</h5>
          <p>
            We provide expert GST and Tax Audit services to ensure compliance with regulations, minimize tax liabilities for businesses.
          </p>
        </div>
        <div className="audit-box">
          <div className="icon"><FaUniversity /></div>
          <h5>Bank/NGO Audit</h5>
          <p>
            We specialize in providing comprehensive audit services for banks and NGOs, ensuring compliance with financial regulations, accurate reporting, and enhanced transparency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Audit;