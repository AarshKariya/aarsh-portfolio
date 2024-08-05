import React from "react";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
}

const ProjectsCard: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="p-5">
      <h1 className="text-3xl mb-4">{title}</h1>
      <p className="text-base mb-4">{description}</p>
      <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700">
        {buttonText}
      </button>
    </div>
  );
};

export default ProjectsCard;
