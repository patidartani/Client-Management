import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="Map-main">
      <div className="Map-content">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093703!2d144.95592531531667!3d-37.81720997975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f482e1%3A0x2e0b3d632f42e3d5!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sin!4v1613988337602!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
