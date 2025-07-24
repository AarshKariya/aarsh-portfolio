import React from "react";
import ProjectsCard from "../components/ProjectsCard/ProjectsCard";
import PageTitle from "../genericComponents/PageTitle/PageTitle";
import ThreeJsDotsComponent from "../genericComponents/ThreeJsDots/ThreeJsDots";
import MinuteDotsComponent from "../genericComponents/PageTitle/PageTitle";
import ProjectsSlider from "../components/ProjectsSlider/ProjectsSlider";

const Projects = () => {
  return (
    <div className="h-dvh w-dvw">
      <MinuteDotsComponent title="Projects" />
      <ProjectsSlider />

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
