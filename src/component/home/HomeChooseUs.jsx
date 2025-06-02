import React from 'react';
import './HomeChooseUs.css';
import { FaGlobe, FaBuilding, FaUsers, FaUtensils, FaShippingFast, FaFileSignature } from 'react-icons/fa';

const HomeChooseUs = () => {
  return (
    <>
      <section>
        <div className="HomeChooseUs-main">
          <div className="HomeChoose-content">
            <div className="hc-left">
              <div className="inner-box">
                <h3 style={{ color: "#ff831e" }}>Business Establishment and Registration</h3>
                <p>
                  We offer comprehensive services for business establishment and registration. Our expertise spans across selecting the most suitable business structure, preparing and filing the necessary documentation, and ensuring compliance with all legal and regulatory requirements. We facilitate the seamless incorporation of your business, including company registration, obtaining relevant licenses, and handling tax registrations, providing you with a solid foundation for long-term success.
                </p>
                <a href="/about-us" className="theme-btn btn-style-one">
                  LEARN MORE
                </a>
              </div>
            </div>
            <div className="hc-right">
              <div className="hc-box">
                <div className="icon"><FaGlobe /></div>
                <h5>Foreign Company Registration</h5>
                <p>
                  I specialize in assisting foreign entities with seamless company registration in India. Our services include document preparation, legal compliance, tax registration, and post-incorporation advisory, ensuring a hassle-free setup for your business in India.
                </p>
              </div>


              <div className="hc-box">
                <div className="icon"><FaFileSignature /></div>
                <h5>RERA Registration</h5>
                <p>
                  We help builders, developers, and agents with hassle-free RERA registration. From documentation to final approval, we ensure full compliance with regulatory requirements for a smooth and timely registration process.
                </p>
              </div>

              <div className="hc-box">
                <div className="icon"><FaUsers /></div>
                <h5>Individuals /Partnership Company Registration</h5>
                <p>
                  We assist individuals and partners in seamless company registration—whether you're setting up a Single Person Company or a Partnership Firm. From documentation to compliance, we ensure a smooth and hassle-free process.
                </p>
              </div>

              <div className="hc-box">
                <div className="icon"><FaUtensils /></div>
                <h5>FSSAI Food Licenced Registration</h5>
                <p>
                  We assist businesses in obtaining FSSAI Food License Registration quickly and hassle-free. Whether you're starting a food business or renewing your license, our expert CA services ensure full compliance with FSSAI regulations.
                </p>
              </div>

              <div className="hc-box">
                <div className="icon"><FaShippingFast /></div>
                <h5>Import Export Code Registration</h5>
                <p>
                  We help you get your Import Export Code (IEC) quickly and easily so you can start your import/export business without any hassle. Whether you're starting an import/export venture or expanding globally, our expert support ensures smooth and compliant registration
                </p>
              </div>

              <div className="hc-box">
                <div className="icon"><FaBuilding /></div>
                <h5>LLP/Private/Public Company Registration</h5>
                <p>
                  We assist with seamless registration of LLPs, Private Limited, and Public Limited Companies – ensuring legal compliance, quick processing, and expert support at every step.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeChooseUs;
