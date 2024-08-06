import React from "react";
import MinuteDotsComponent from "../genericComponents/PageTitle/PageTitle";
import AboutMeStatementCard from "../components/AboutMeStatementCard/AboutMeStatementCard";

function AboutMeRoute() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <MinuteDotsComponent title="About Me" />
      <div className="flex-grow flex items-center justify-center w-full">
        <AboutMeStatementCard />
      </div>
    </div>
  );
}

export default AboutMeRoute;
