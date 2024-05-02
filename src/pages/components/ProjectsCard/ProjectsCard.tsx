import PageTitle from "@/pages/genericComponents/PageTitle/PageTitle";
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
    <div className="max-w-6xl mx-auto p-4 flex justify-between mb-4 border border-black">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <div className="h-1 w-20 bg-black mb-4"></div>
        </div>
        <p className="text-gray-700 mb-6">{description}</p>
        <button className="flex items-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
          {buttonText}
        </button>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-10 gap-1">
          {Array.from({ length: 100 }, (_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index % 10 < 5 && index / 10 < 5
                  ? "bg-purple-600"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
