import React from "react";
import { upcomingAppointments } from "../data/upcomingAppointments";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import "../styles/upcomingSchedule.css";

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {upcomingAppointments.map((dayBlock, idx) => (
        <div key={idx} className="day-block">
          <h4>{dayBlock.day}</h4>
          <div className="cards-row">
            {dayBlock.appointments.map((appt, i) => (
              <SimpleAppointmentCard
                key={i}
                title={appt.title}
                time={appt.time}
                icon={appt.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;
