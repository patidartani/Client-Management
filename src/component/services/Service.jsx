import React from "react";
import "./Service.css";
import Header from "../header/Header";
import Footer from "../../pages/footer/Footer";
import HomeProgram from "../../component/home/HomeProgram"

const Service = () => {
  return (
    <>
      <Header />
      <div className="Service-main">
        <div className="service-content">
          <div className="service-top">
            <h5>SERVICES</h5>
          </div>
          <div style={{width:"100%"}}>
          <HomeProgram/>
          </div>
          <div className="service-btm">

          <div className="advisor-banner">
              <div className="advisor-text">
                <h3>WE HAVE GREAT ADVISOR!!</h3>
                <p>Here will be something that related with training program</p>
              </div>
              
              <button className="consult-btn">FREE CONSULTATION</button>
            </div>

            <div className="s-img">
              <div className="img-box"> <img src="https://c8.alamy.com/comp/H676K2/concept-about-business-services-sector-with-business-to-business-relations-H676K2.jpg" alt="" /> </div>
              <div className="img-box"><img src="https://tse3.mm.bing.net/th?id=OIP.yZXsfsPuyxwuQrRUltzNNwHaHa&w=474&h=474&c=7" alt="" /></div>
            </div>

            <h4>Consultative Selling Training</h4>
            <h6>
              Commune nominavi at ius, vix delectus deterruisset cu. Quis dico
              legendos dicta qsu pedit nam ne. Cibo debitis interpretaris et
              eum, ei augue rect quo.
            </h6>
            <p>
              Metalworking is a science, art, hobby, industry and trade. Its
              historical roots span cultures, civilizations millennia.
              Metalworking has evolved from the discovery of smelting various
              ores, producing malleable and ductile metal ie useful for tools
              and adornments. Modern metalworking processes, though diverse
            </p>
            <div className="d-flex align-items-start justify-content-between gap-5">
              <div className="s-left">
                <h4>Our Challanging Part</h4>
                <p>
                  From the discovery of smelting various cing malleable and
                  ductile metal useful for tools and adornments. Modern
                  metalworking processes, though diverse and specialized, can be
                  categorized as forming, cutting, or
                </p>
              </div>
              <div className="s-right">
                <h4>How We Work?</h4>
                <p>
                  Metalworking is a science, art, hobby, industry and trade. Its
                  historical roots span cultures, civilizations millennia.
                  Metalworking has evolved from the discovery of smelting
                  various ores, producing malleable and ductile metal useful for
                  tools and dsu adornments. Modern metalworking processes.
                  though diverse and specialized, can be categorized as forming,
                </p>
              </div>
            </div>
           
            <div class="success-wrapper">
              <h4>Key of Success</h4>

              <div className="mt-4">
                <i class="ri-arrow-right-s-line"></i> Raising the quality of
                sales calls with your clients to make them more productive
              </div>
              <div>
                <i class="ri-arrow-right-s-line"></i> Raising the quality of
                sales calls with your clients to make them more productive
              </div>
              <div>
                <i class="ri-arrow-right-s-line"></i> Raising the quality of
                sales calls with your clients to make them more productive
              </div>
              <div>
                <i class="ri-arrow-right-s-line"></i> Raising the quality of
                sales calls with your clients to make them more productive
              </div>
              <div>
                <i class="ri-arrow-right-s-line"></i> Raising the quality of
                sales calls with your clients to make them more productive
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
