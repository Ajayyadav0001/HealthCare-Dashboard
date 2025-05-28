import React from "react";
import { activityData } from "../data/activityData";
import "../styles/activityFeed.css";

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <p>{activityData.summary}</p>

      <div className="bar-chart">
        {activityData.bars.map((bar, index) => (
          <div key={index} className="bar-column">
            <div
              className="bar"
              style={{ height: `${bar.height}px` }}
              title={`${bar.day}: ${bar.height}px`}
            ></div>
            <span className="bar-label">{bar.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
