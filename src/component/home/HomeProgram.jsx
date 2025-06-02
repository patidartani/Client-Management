import React from "react";
import "./Homeprogram.css";
import { Container } from "react-bootstrap";
import {
  FaFileInvoiceDollar,
  FaUserTie,
  FaExchangeAlt,
  FaClipboardCheck,
  FaBalanceScale,
  FaBuilding,
} from "react-icons/fa";

const HomeProgram = () => {
  return (
    <>
      <section className="program-section">
        <Container>
          <div className="auto-container">
            <div className="title-box clearfix">
              <h3> Explore Our Services</h3>
              {/* <a href="/">View All Programs</a> */}
            </div>

            <div className="row clearfix">
              <div className="program-block col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <span className="icon flaticon-money-bag">
                      <FaFileInvoiceDollar />
                    </span>
                  </div>
                  <h3>
                    <a href="">Taxation</a>
                  </h3>
                  <div className="text">
                    <div className="text">
                      We provide expert taxation support to help your business
                      stay compliant, save money, and focus on growth. From tax
                      filing to strategic planning, we've got you covered. Our
                      experienced team ensures timely and accurate filings so
                      you can stay stress-free during tax season.
                    </div>
                  </div>
                </div>
              </div>

              <div className="program-block col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <span className="icon flaticon-money-bag">
                      <FaUserTie />
                    </span>
                  </div>
                  <h3>
                    <a href="">Advisory</a>
                  </h3>
                  <div className="text">
                    We offer expert advisory services to help you make smarter
                    decisions, overcome challenges, and grow your business with
                    confidence. Whether you're launching a startup, scaling
                    operations, or navigating complex market dynamics, our team
                    provides tailored strategies and insights to guide your
                    business toward success.
                  </div>
                </div>
              </div>

              <div className="program-block col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <span className="icon flaticon-money-bag">
                      <FaExchangeAlt />
                    </span>
                  </div>
                  <h3>
                    <a href="">Outsourcing</a>
                  </h3>
                  <div className="text">
                    We specialize in providing outsourcing solutions that can
                    streamline and optimize your business operations. Whether
                    it's accounting, finance, or other key business functions,
                    our expert services are designed to help businesses focus on
                    their core strengths while we take care of the rest.
                  </div>
                </div>
              </div>

              <div className="program-block col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <span className="icon flaticon-money-bag">
                      <FaClipboardCheck />
                    </span>
                  </div>
                  <h3>
                    <a href="">Audit</a>
                  </h3>
                  <div className="text">
                    We specialize in providing comprehensive audit services for
                    your business. Our expert team ensures accuracy,
                    transparency, and compliance with the latest financial
                    regulations, offering you peace of mind and detailed
                    insights into your financial health.
                  </div>
                </div>
              </div>

              <div className="program-block col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <span className="icon flaticon-money-bag">
                      <FaBalanceScale />
                    </span>
                  </div>
                  <h3>
                    <a href="">Transfer Pricing</a>
                  </h3>
                  <div className="text">
                    We are specializing in Transfer Pricing, we provide expert
                    assistance in ensuring compliance with international tax
                    regulations and helping businesses navigate complex transfer
                    pricing rules. Our services include preparing and reviewing
                    transfer pricing documentation, conducting functional and
                    economic analyses.
                  </div>
                </div>
              </div>

              <div className="program-block col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <span className="icon flaticon-money-bag">
                      <FaBuilding />
                    </span>
                  </div>
                  <h3>
                    <a href="">Startup Business</a>
                  </h3>
                  <div className="text">
                    We specialize in helping entrepreneurs and businesses set up
                    new ventures. Our comprehensive services guide you through
                    the entire process, from business registration to tax
                    planning, legal compliance, and financial structuring. We
                    ensure that your new business is built on a solid
                    foundation, with optimized processes that help you grow and
                    succeed in a competitive market.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomeProgram;
