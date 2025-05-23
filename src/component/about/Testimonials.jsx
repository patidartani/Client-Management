import React, { useState } from "react";
import "./Testimonials.css";
import Slider from "react-slick";

const Testimonials = () => {
  const [display, setDisplay] = useState(true);

  const testimonialsData = [
    {
      name: "Ankit Sharma",
      role: "Founder, FinEdge Solutions",
      image: "https://tse2.mm.bing.net/th?id=OIP.CEZFxwH1ytVYI-gGd6fYwgHaE8&pid=Api&P=0&h=180",
      feedback: "Thanks to their expert tax planning and audit support, we’ve been able to scale with confidence. Highly recommend their services!"
    },
    {
      name: "Meera Joshi",
      role: "CFO, GreenRoots Pvt. Ltd.",
      image: "https://tse3.mm.bing.net/th?id=OIP.dXvZshxINlqktqHZ0F3exgHaE8&pid=Api&P=0&h=180",
      feedback: "They simplified our financial reporting and gave us a clear strategy for the next fiscal year. Very professional and insightful team."
    },
    {
      name: "Rahul Bansal",
      role: "Director, Bansal Logistics",
      image: "https://tse2.mm.bing.net/th?id=OIP.NP-8HX-9GWJ1GG_Fv8sMOgHaE8&pid=Api&P=0&h=180",
      feedback: "Their guidance during our GST compliance process was excellent. Everything was handled smoothly and on time."
    },
    {
      name: "Neha Kapoor",
      role: "Entrepreneur",
      image: "https://tse4.mm.bing.net/th?id=OIP.ByTEaHkCx1_fzVlEj-AKywHaE8&pid=Api&P=0&h=180",
      feedback: "Perfect blend of professionalism and approachability. Their accounting advice has been crucial in managing my small business."
    },
    {
      name: "Vikram Sethi",
      role: "Owner, Sethi Traders",
      image: "https://tse4.mm.bing.net/th?id=OIP.qw3SOgYo7JHQeetoaBbfrAHaHa&pid=Api&P=0&h=180",
      feedback: "Great experience working with their audit team. Detailed, transparent, and very responsive throughout the process."
    },
    {
      name: "Sonal Desai",
      role: "Freelance Consultant",
      image: "https://tse1.mm.bing.net/th?id=OIP.OGSpQBezmqxWg4u2_9rnqQAAAA&pid=Api&P=0&h=180",
      feedback: "As a freelancer, I needed clarity on tax filings. They provided everything I needed, and now my finances are in perfect order."
    }
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default 3 boxes
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600, // Jab width 600px se kam hogi
        settings: {
          slidesToShow: 1, // Sirf ek box dikhega
        },
      },
    ],
  };

  return (
    <div className="Testimonials-main">
      <div className="testimonials-content">
        <div className="testimonials-top">
          <h5>Testimonial</h5>
          <p>Our client loves us and see what they said about us</p>
        </div>

        <div className="testimonials-btm">
          <div
            className="slider-container"
            style={{
              width: "100%",
              display: display ? "block" : "none", // This should work correctly now
            }}
          >
            <Slider className="slider" {...settings}>
              {testimonialsData.map((testimonial, index) => (
                <div className="testimonials-box" key={index}>
                  <div className="test-profile">
                    <div className="pro-left">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="pro-right">
                      <h5>{testimonial.name}</h5>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                  <p>{testimonial.feedback}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
