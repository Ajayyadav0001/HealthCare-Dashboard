import React from "react";
import { healthIndicators } from "../data/healthIndicators";
import "../styles/anatomy.css";

function AnatomySection() {
  return (
    <div className="anatomy-container">
      <div className="body-image-wrapper">
        <img
          src="src/assets/bodyImg.jpeg"
          alt="Human Body"
          className="body-image"
        />

        {healthIndicators.map((item, index) => (
          <div
            key={index}
            className="indicator"
            style={{
              top: item.position.top,
              left: item.position.left,
              backgroundColor: item.color
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnatomySection;
