import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Header from "../header/Header";
import AboutHome from "./AboutHome";
import AboutService from "./AboutService";
import HomeProgram from "./HomeProgram";
import HomeIntro from "./HomeIntro";
import HomeCounter from "./HomeCounter";
import HomeChooseUs from "./HomeChooseUs";
import OurExperts from "./OurExperts";
import ClientFeedback from "./ClientFeedback";
import LatestNews from "./LatestNews";
import Footer from "../../pages/footer/Footer";
import Audit from "./Audit";
import TradeMark from "./TradeMark";
import Faq from "../faq/Faq";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: true,
  };

  return (
    <>
      <Header />
      <section className="main-slider">
        <Slider {...settings}>
          <div>
            <img
              src="https://img.freepik.com/free-vector/ombre-blue-curve-light-blue-background_53876-173299.jpg"
              alt="Slide 1"
              className="slider-image"
            />
            <div className="slider-content">
              <h2 className="big-title">
                Empowering Your Finances with Expert Care

             </h2>

             <span>Tax | Audit | Registration | Simplified</span>

              <div className="small-title">
              I specialize in providing trusted, end-to-end financial solutions that help individuals, startups, and businesses stay compliant, grow smartly, and plan ahead with confidence. Whether it's managing your taxes, conducting audits, or handling registrations like GST, ITR, or intellectual property—everything is delivered with accuracy, transparency, and a simplified approach.
              </div>
              <div className="slider-buttons">
                <a
                  href="/ca-project/about-us"
                  className="theme-btn btn-style-one"
                >
                  Learn More
                </a>
                <a
                  href="/ca-project/contact"
                  className="theme-btn btn-style-two"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://img.freepik.com/premium-vector/white-background-with-blue-element_907220-1416.jpg?semt=ais_hybrid"
              alt="Slide 2"
              className="slider-image"
            />
            <div className="slider-content">
            <h2 className="big-title">
             Empowering Your Finances with Expert Care

            </h2>
            <span>Tax | Audit | Registration | Simplified</span>

              <div className="small-title">
              I specialize in providing trusted, end-to-end financial solutions that help individuals, startups, and businesses stay compliant, grow smartly, and plan ahead with confidence. Whether it's managing your taxes, conducting audits, or handling registrations like GST, ITR, or intellectual property—everything is delivered with accuracy, transparency, and a simplified approach.
              </div>
              <div className="slider-buttons">
                <a
                  href="/ca-project/about-us"
                  className="theme-btn btn-style-one"
                >
                  Learn More
                </a>
                <a
                  href="/ca-project/contact"
                  className="theme-btn btn-style-two"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      <AboutHome />
      <AboutService />
      <HomeProgram />
      <HomeIntro />
      <Audit />
      <HomeCounter />
      <HomeChooseUs />
      <OurExperts />
      <TradeMark />
      <LatestNews />
      <ClientFeedback />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
