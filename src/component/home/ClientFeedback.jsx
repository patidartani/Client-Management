import React, { useState, useRef } from 'react';
import './ClientFeedback.css';

const ClientFeedback = () => {
  const feedbacks = [
    {
      id: 1,
      text: "Thanks to this CA platform, our tax filing and compliance processes are now streamlined and error-free. Truly a game changer for our finance team.",
      name: "Rakesh Malhotra",
      role: "Finance Head, Vistara Corp",
      img: "https://media.istockphoto.com/id/962254644/photo/businessman-portrait-happy-confident-young-businessman-standing-arms-crossed-smiling.webp?a=1&b=1&s=612x612&w=0&k=20&c=oOunoDql0u7XfeJccOS_U3LVB9x5xTCibwBQw4idxD0="
    },
    {
      id: 2,
      text: "The advisory services offered here have been instrumental in managing our audits and financial planning. Highly recommended for any CA firm or business!",
      name: "Neha Arora",
      role: "Founder, FinFlow Solutions",
      img: "https://img.freepik.com/free-photo/confident-latin-business-leader-portrait-young-businesswoman-suit-glasses-posing-with-arms-folded-looking-camera-smiling-female-leadership-concept_74855-14232.jpg?ga=GA1.1.983926879.1689566276&semt=ais_hybrid&w=740"
    },
    {
      id: 3,
      text: "This CA tool made managing statutory deadlines and ROC filings so much simpler. Our internal team is now more confident and efficient.",
      name: "Amit Desai",
      role: "Managing Director, CoreTax India",
      img: "https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=bcGyGG1qPMyxl3rw4TCVwbJLZTPabFg4twsVFDy-ixs="
    },
    {
      id: 4,
      text: "Our experience has been excellent. The CA support provided insights into optimizing our books and helped avoid potential compliance issues.",
      name: "Sonal Jain",
      role: "CFO, GreenSpark Ventures",
      img: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D"
    }
  ];
  
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % feedbacks.length); 
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  // Drag Start
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
  };

  // Drag End
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Drag Move
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const moveX = e.clientX || e.touches[0].clientX;
    const diff = moveX - startX;

    if (diff > 50) {
      handlePrev();
      setIsDragging(false); 
    } else if (diff < -50) {
      handleNext();
      setIsDragging(false);
    }
  };

  return (
    <section>
      <div className="ClientFeedback-main">
        <div className="ClientFeedback-content">
          <div className="CF-left">
            <div
              className="inner-box"
             
            >
              <h3>Client Feedback</h3>
              <h5 style={{ color: "#ff831e", fontStyle: "italic" }}>
                Don't only hear us, but also check our client feedback
              </h5>
              <div className="CF-text mt-3"
               ref={sliderRef}
               onMouseDown={handleMouseDown}
               onMouseUp={handleMouseUp}
               onMouseMove={handleMouseMove}
               onTouchStart={handleMouseDown}
               onTouchEnd={handleMouseUp}
               onTouchMove={handleMouseMove}
               style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              >
                <p>{feedbacks[index].text}</p>
                <div className="CF-profile">
                  <div className="CDP-LEFT">
                    <img src={feedbacks[index].img} alt="" />
                  </div>
                  <div className="CF-RIGHT">
                    <h5>{feedbacks[index].name}</h5>
                    <span>{feedbacks[index].role}</span>
                  </div>
                </div>
              </div>
              <div className="Cf-arrows">
                <i className="ri-arrow-left-s-line" onClick={handlePrev}></i>
                <i className="ri-arrow-right-s-line" onClick={handleNext}></i>
              </div>
            </div>
          </div>

          {/* -------------------------------------------- */}
          <div className="CF-right">
             
             <div className="cf-form">
                <form action="">
                    <h5>Request a call back</h5>
                    <div className='ipt-container'>
                        <input type="text" placeholder='User Name*'/>
                        <input type="text" placeholder='Email Address*'/>
                    </div>
                    <input type="text" placeholder='Subject' />
                    <textarea name="" id="" placeholder="Message" style={{ height: "140px" }}></textarea>
                    <button>SEND NOW</button>
                </form>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
