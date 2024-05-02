import React from "react";
import ProjectsCard from "../components/ProjectsCard/ProjectsCard";
import PageTitle from "../genericComponents/PageTitle/PageTitle";
import ThreeJsDotsComponent from "../genericComponents/ThreeJsDots/ThreeJsDots";

const Projects = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      {/* <ThreeJsDotsComponent /> */}
      <PageTitle title="Projects" />

      {/* <ProjectsCard
        title="Branding Design"
        description="something is happening"
        buttonText="Learn More"
      /> */}
      {/* <ProjectsCard
        title="Branding Design"
        description="something is happening"
        buttonText="Learn More"
      />
      <ProjectsCard
        title="Branding Design"
        description="something is happening"
        buttonText="Learn More"
      />
      <ProjectsCard
        title="Branding Design"
        description="something is happening"
        buttonText="Learn More"
      />
      <ProjectsCard
        title="Branding Design"
        description="something is happening"
        buttonText="Learn More"
      /> */}
    </div>
  );
};

export default Projects;
