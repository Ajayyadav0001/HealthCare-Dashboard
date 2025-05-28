import React from "react";
import { calendarData } from "../data/calendarAppointments";
import "../styles/calendarView.css";
import { ChevronLeft, ChevronRight } from "lucide-react";


const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
function CalendarView() {
  return (
    <div className="calendar-section">
      <h2>{calendarData.month}</h2>
      
      <div className="calendar-header">
        {/* <h2>{calendarData.month}</h2> */}
        <div className="calendar-arrows">
        <ChevronLeft size={20} />
        <ChevronRight size={20} />
      </div>
</div>
      <div className="calendar-grid">
        {calendarData.days.map((dayObj, idx) => (
          <div key={idx} className={`calender-cell ${dayObj.booked ? "booked-cell" : ""}`}>


            <div className="cell-header">
              <span className="cell-weekday">{dayObj.weekday}</span>
              <span className="cell-date">{dayObj.day}</span>
            </div>

            {/* times pills */}
            {dayObj.times.map((time, i) => (
              <div key={i} className="time-pill">{time}</div>
            ))}
          </div>
        ))}
      </div>

      <div className="calendar-appointments">
        {calendarData.appointmentDetails.map((item, idx) => (
          <div
            key={idx}
            className="appointment-card"
            style={{ borderLeftColor: item.color }}
          >
            <h4>{item.type}</h4>
            <p>{item.time}</p>
            <p>{item.date}</p>
            <p><strong>{item.doctor}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;
