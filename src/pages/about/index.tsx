import React from "react";
import MinuteDotsComponent from "../genericComponents/PageTitle/PageTitle";
import AboutMeStatementCard from "../components/AboutMeStatementCard/AboutMeStatementCard";
import CreativeDeveloperSection from "../components/CreativeDeveloperSection/CreativeDeveloperSection";
import ServicesCards from "../components/ServicesCards/ServicesCards";
import TechIUse from "../components/TechSection/TechSection";

function AboutMeRoute() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <MinuteDotsComponent title="About Me" />
      <AboutMeStatementCard />
      <CreativeDeveloperSection />
      <ServicesCards />
      <TechIUse />
    </div>
  );
}

export default AboutMeRoute;
