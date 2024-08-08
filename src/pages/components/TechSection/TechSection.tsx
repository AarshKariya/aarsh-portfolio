import React from "react";
import Marquee from "react-fast-marquee";

const techImages = [
  "/tech1.png",
  "/tech2.png",
  "/tech3.png",
  "/tech4.png",
  "/tech5.png",
  "/tech6.png",
  "/tech7.png",
  "/tech8.png",
  "/tech9.png",
  "/tech10.png",
  "/tech11.png",
  "/tech12.png",
];

const TechIUse: React.FC = () => {
  return (
    <div className="tech-i-use-section py-16 px-4">
      <h2 className="text-3xl font-semibold text-gray-900 mb-8">Tech I use</h2>
      <div className="marquee-container">
        <Marquee gradient={false} speed={30} className="marquee">
          {techImages.slice(0, 6).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Tech ${index + 1}`}
              className="w-24 h-24 object-contain mx-2"
            />
          ))}
        </Marquee>
        <Marquee
          gradient={false}
          speed={30}
          direction="right"
          className="marquee"
        >
          {techImages.slice(6).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Tech ${index + 7}`}
              className="w-24 h-24 object-contain mx-2"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TechIUse;
