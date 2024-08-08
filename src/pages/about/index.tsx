import React from "react";
import MinuteDotsComponent from "../genericComponents/PageTitle/PageTitle";
import AboutMeStatementCard from "../components/AboutMeStatementCard/AboutMeStatementCard";
import CreativeDeveloperSection from "../components/CreativeDeveloperSection/CreativeDeveloperSection";

function AboutMeRoute() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <MinuteDotsComponent title="About Me" />
      <AboutMeStatementCard />
      <CreativeDeveloperSection />
    </div>
  );
}

export default AboutMeRoute;
