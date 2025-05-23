import React from 'react';
import './HomeIntro.css'
const HomeIntro = () => {
  return (
    <>
      <section 
        className="video-section" 
        style={{ backgroundImage: "url('src/assets/images/background/1.jpg')" }}
      >
        <div className="auto-container">
          <div className="inner-box">
            <a 
            style={{textDecoration:"none"}}
              className="icon-box wow zoomInStable lightbox-image play-link" 
              data-wow-delay="0ms" 
              data-wow-duration="2000ms"  
              href="https://www.youtube.com/watch?v=1sVEYNH8gbk"
            >
              <span className="flaticon-arrow"><i class="ri-play-fill"></i></span>
            </a>
            <h3>Check Our Intro Video</h3>
            <div className="text">
              Discover how our programs are transforming the careers of finance professionals and future CAs through expert coaching.
            </div>
            <a href="/ca-project/about-us" className="btn-style-one theme-btn">More About Us</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeIntro;
