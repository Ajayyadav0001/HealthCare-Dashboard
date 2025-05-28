import React from "react";
import DashboardOverview from "./DashboardOverview";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import "../styles/dashboardMainContent.css";

function DashboardMainContent() {
  return (
    <main className="dashboard-content">
      <DashboardOverview />
      
      <section className="anatomy-health">
        <AnatomySection />
        <HealthStatusCards />
      </section>

      <CalendarView />

      <section className="bottom-section">
        <UpcomingSchedule />
        <ActivityFeed />
      </section>
    </main>
  );
}

export default DashboardMainContent;
