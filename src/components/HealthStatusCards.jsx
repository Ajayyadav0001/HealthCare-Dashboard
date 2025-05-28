import React from "react";
import { healthStatusCards } from "../data/healthStatus";
import "../styles/healthStatusCards.css";

function HealthStatusCards() {
  return (
    <div className="status-cards">
      {healthStatusCards.map((card, index) => (
        <div className="status-card" key={index}>
          <h4 className="status-title">{card.label}</h4>
          <p className="status-date">Date: {card.date}</p>
          <div className="progress-bar-wrapper">
            <div
              className="progress-bar-fill"
              style={{
                width: `${card.value}%`,
                backgroundColor: card.color
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
