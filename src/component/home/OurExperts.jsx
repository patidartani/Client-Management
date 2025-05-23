import "./OurExperts.css";
import React, { useEffect, useState, useRef } from "react";

const OurExperts = () => {
  const [index, setIndex] = useState(0);
  const [isTransition, setIsTransition] = useState(true);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);

  const experts = [
    {
      id: 1,
      img: "https://media.istockphoto.com/id/1144647692/photo/corporate-group-portrait-of-cheering-staff-members.jpg?b=1&s=612x612&w=0&k=20&c=na3Db2qWKstrcY6ngUB2lAh8zSUJKTa0qUllxteNi8s="
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/7430339/pexels-photo-7430339.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/6405757/pexels-photo-6405757.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/6518668/pexels-photo-6518668.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      img: "https://media.istockphoto.com/id/1409520341/photo/group-of-young-people-discussing-in-the-co-working-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=P4YjC3AEogPzkRnpta_IFFr2Pa5idqqU11-neJx_Ars="
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/140945/pexels-photo-140945.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/7550893/pexels-photo-7550893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/6937932/pexels-photo-6937932.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const sliderItems = [...experts, ...experts.slice(0, 3)];

  useEffect(() => {
    if (!isAutoSliding) return;

    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoSliding]);

  const handleNext = () => {
    setIsTransition(true);
    setIndex((prevIndex) => prevIndex + 1);
    disableAutoSlideTemporarily();
  };

  const handlePrev = () => {
    setIsTransition(true);
    setIndex((prevIndex) => (prevIndex === 0 ? experts.length - 1 : prevIndex - 1));
    disableAutoSlideTemporarily();
  };

  const disableAutoSlideTemporarily = () => {
    setIsAutoSliding(false);
    setTimeout(() => {
      setIsAutoSliding(true);
    }, 5000);
  };

  useEffect(() => {
    if (index >= experts.length) {
      setTimeout(() => {
        setIsTransition(false);
        setIndex(0);
      }, 500);
    }
  }, [index]);

  // Drag Functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setIsAutoSliding(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = startX - e.clientX;

    if (diff > 50) {
      handleNext();
      setIsDragging(false);
    } else if (diff < -50) {
      handlePrev();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsAutoSliding(true);
  };

  return (
    <div className="OurExperts-main">
      <div className="OurExperts-content">
        <div className="OE-top">
          <h5>Inside Sidwaniya & Co.</h5>
          <div className="oe-arrow">
            <i className="ri-arrow-left-s-line" onClick={handlePrev}></i>
            <i className="ri-arrow-right-s-line" onClick={handleNext}></i>
          </div>
        </div>

        <div className="OE-slider-container">
          <div
            ref={sliderRef}
            className="OE-btm"
            style={{
              transform: `translateX(-${index * 270}px)`,
              transition: isTransition ? "transform 0.5s ease-in-out" : "none",
              cursor: isDragging ? "grabbing" : "grab",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {sliderItems.map((expert, i) => (
              <div className="Expert-box" key={i}>
                <div className="e-img">
                  <img src={expert.img} alt="" />
                </div>
                {/* <div className="name">
                  <h4>{expert.name}</h4>
                  <small>{expert.role}</small>
                </div>
                <p>{expert.description}</p>
                <a href="#">SEE PROFILE</a> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExperts;
