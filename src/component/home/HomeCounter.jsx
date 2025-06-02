import React from "react";
import "./HomeCounter.css";
const HomeCounter = () => {
  return (
    <>
      <section className="counter-section">
        <div className="auto-container">
          <div className="d-flex  clearfix">
            <div className="image-column col-lg-5 col-md-4 col-sm-12 col-xs-12">
              <figure
                className="image-box wow slideInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80'); background-size: cover; background-position: center;"
                  alt=""
                />
              </figure>
            </div>
            <div className="content-column col-lg-7 col-md-8 col-sm-12 col-xs-12">
              <div className="inner-box">
                <h3>
                Empowering Chartered Accountants with <br />  Scalable Tax & Compliance  Solutions
                </h3>
                <div className="style-text">
                  We have lot of great service that can enough to hlep you
                </div>
                <div className="text">
                  From GST filing to strategic tax planning, we help you scale your financial services business. 
                  Get expert guidance on compliance, audits, and client acquisition with real-world coaching designed specifically for Chartered Accountants.
                </div>

                <div className="fact-counter">
                  <div className="row clearfix">
                    <div
                      className="column col-md-4 col-sm-4 col-xs-12 counter-column wow fadeIn"
                      data-wow-duration="0ms"
                    >
                      <div className="inner">
                        <div className="count-outer">
                          <div
                            className="count-text"
                            data-speed="2000"
                            data-stop="18"
                          >
                            0
                          </div>
                          <span className="year">years</span>
                        </div>
                        <h4 className="counter-title">Expereince</h4>
                      </div>
                    </div>

                    <div
                      className="column col-md-4 col-sm-4 col-xs-12 counter-column wow fadeIn"
                      data-wow-duration="0ms"
                    >
                      <div className="inner">
                        <div className="count-outer">
                          <div
                            className="count-text"
                            data-speed="2000"
                            data-stop="20"
                          >
                            0
                          </div>
                          <span className="year">K</span>
                        </div>
                        <h4 className="counter-title">Happy Client</h4>
                      </div>
                    </div>

                    <div
                      className="column col-md-4 col-sm-4 col-xs-12 counter-column wow fadeIn"
                      data-wow-duration="0ms"
                    >
                      <div className="inner">
                        <div className="count-outer">
                          <div
                            className="count-text"
                            data-speed="4000"
                            data-stop="1200"
                          >
                            0
                          </div>
                          <span className="plus-icon">+</span>
                        </div>
                        <h4 className="counter-title">Project Done</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="/contact" className="theme-btns" style={{textDecoration:"none"}}>
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCounter;
