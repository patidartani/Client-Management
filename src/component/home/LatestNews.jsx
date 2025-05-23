import React, { useState, useRef, useEffect } from "react";
import "./LatestNews.css";

const newsData = [
  {
    id: 1,
    img: "https://picsum.photos/id/1015/800/600",
    date: "05 Apr, 2024",
    category: "Startup",
    title: "How early teams are scaling operations faster",
    desc: "New-age startups are adopting agile strategies to build efficient teams and scale business operations with minimal resources.",
    link: "#",
  },
  {
    id: 2,
    img: "https://picsum.photos/id/1025/800/600",
    date: "18 Mar, 2024",
    category: "Finance",
    title: "The rise of fintech in emerging markets",
    desc: "Fintech is reshaping how people manage money. Discover how digital finance tools are creating opportunities worldwide.",
    link: "#",
  },
  {
    id: 3,
    img: "https://picsum.photos/id/1035/800/600",
    date: "09 Feb, 2024",
    category: "Tech",
    title: "Generative AI and the future of creativity",
    desc: "From writing code to composing music, generative AI is changing creative industries. Here's what that means for professionals.",
    link: "#",
  },
  {
    id: 4,
    img: "https://picsum.photos/id/1045/800/600",
    date: "22 Jan, 2024",
    category: "Workplace",
    title: "Remote culture: Building teams without borders",
    desc: "With remote-first approaches, companies are redefining workplace collaboration and global team management.",
    link: "#",
  },
  {
    id: 5,
    img: "https://picsum.photos/id/1060/800/600", // 🔄 Changed image here
    date: "30 Dec, 2023",
    category: "Leadership",
    title: "Modern leadership: Empathy as the new edge",
    desc: "Today’s leaders thrive not just on strategy but empathy. Learn why emotional intelligence is a top trait in 2024.",
    link: "#",
  },
];

const LatestNews = () => {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const autoSlideRef = useRef(null);

  // Next Slide
  const handleNext = () => {
    setIndex((prev) => (prev + 2 >= newsData.length ? 0 : prev + 2));
    resetAutoSlide();
  };

  // Previous Slide
  const handlePrev = () => {
    setIndex((prev) => (prev - 2 < 0 ? newsData.length - 2 : prev - 2));
    resetAutoSlide();
  };

  // Drag Functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setIsPaused(true);
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
    resetAutoSlide();
  };

  // Auto Slide Logic
  useEffect(() => {
    if (!isPaused) {
      autoSlideRef.current = setInterval(() => {
        handleNext();
      }, 2000);
    }

    return () => clearInterval(autoSlideRef.current);
  }, [isPaused]);

  // Reset Auto Slide Timer
  const resetAutoSlide = () => {
    setIsPaused(true);
    clearInterval(autoSlideRef.current);
    setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  return (
    <div className="LatestNews-main">
      <div className="LatestNews-content">
        <div className="LN-top">
          <h5>Blogs</h5>
          <div className="LNT-arrow">
            <i className="ri-arrow-left-s-line" onClick={handlePrev}></i>
            <i className="ri-arrow-right-s-line" onClick={handleNext}></i>
          </div>
        </div>

        <div className="LN-btm">
          <div className="news-left">
            <div
              className="news"
              ref={sliderRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{ cursor: isDragging ? "grabbing" : "grab" }}
            >
              {newsData
                .concat(newsData)
                .slice(index, index + (window.innerWidth <= 600 ? 1 : 3))
                .map((news) => (
                  <div className="news-box" key={news.id}>
                    <div className="news-img">
                      <img src={news.img} alt="" />
                    </div>
                    <span>
                      {news.date} / {news.category}
                    </span>
                    <h5>{news.title}</h5>
                    <p>{news.desc}</p>
                    <a href={news.link}>READ MORE</a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
