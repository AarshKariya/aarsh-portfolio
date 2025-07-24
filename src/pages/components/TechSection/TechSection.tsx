import React, { useEffect, useState } from "react";
import { techImages } from "@/utils/techImages";

// Brand colors for each technology's glow effect
const techGlowColors = {
  Javascript: "#F7DF1E",
  Typescript: "#3178C6",
  NextJS: "#000000",
  React: "#61DAFB",
  "React Native": "#61DAFB",
  TailwindCSS: "#06B6D4",
  SCSS: "#CF649A",
  "Amazon AWS": "#FF9900",
  Python: "#3776AB",
  PostgreSQL: "#336791",
  ExpressJS: "#000000",
  GSAP: "#88CE02",
  "Framer Motion": "#BB4B96",
};

const TechIUse: React.FC = () => {
  // State for tracking current carousel position
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 5;

  // Auto-advance carousel every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % techImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Calculate which 5 cards to show based on current index
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % techImages.length;
      cards.push({ ...techImages[index], originalIndex: index });
    }
    return cards;
  };

  return (
    <div className="tech-i-use-section w-full py-16 px-4 md:px-40">
      {/* Section Title */}
      <h2 className="text-3xl font-semibold text-black mb-16 text-center">
        Tech I Use
      </h2>

      {/* Carousel Container - Shows 5 cards in a row */}
      <div className="flex items-center justify-center gap-6 max-w-4xl mx-auto">
        {getVisibleCards().map((tech, displayIndex) => {
          const glowColor =
            techGlowColors[tech.title as keyof typeof techGlowColors] ||
            "#6366F1";

          return (
            <div
              key={`${tech.originalIndex}-${displayIndex}`}
              className="flex-shrink-0 transition-all duration-500 ease-in-out"
            >
              {/* Tech Card with Glow Effect */}
              <div
                className="relative bg-white w-24 h-24 p-4 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300"
                style={{
                  boxShadow: `0 4px 15px rgba(0, 0, 0, 0.1), 0 0 20px ${glowColor}33, 0 0 40px ${glowColor}22`,
                  animation: `pulse-${tech.originalIndex} 3s ease-in-out infinite`,
                }}
              >
                {/* Inner Glow Overlay */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-30"
                  style={{
                    background: `radial-gradient(circle at center, ${glowColor}44 0%, transparent 70%)`,
                  }}
                />

                {/* Tech Icon */}
                <img
                  src={tech.url}
                  alt={tech.title}
                  className="w-full h-full object-contain relative z-10"
                />

                {/* Tooltip on Hover */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20">
                  {tech.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Carousel Progress Indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {techImages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-gray-800 w-6" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* CSS Animations for Pulsing Glow Effect */}
      <style jsx>{`
        ${techImages
          .map(
            (tech, index) => `
          @keyframes pulse-${index} {
            0%, 100% {
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1), 0 0 20px ${
                techGlowColors[tech.title as keyof typeof techGlowColors] ||
                "#6366F1"
              }33, 0 0 40px ${
              techGlowColors[tech.title as keyof typeof techGlowColors] ||
              "#6366F1"
            }22;
            }
            50% {
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 0 30px ${
                techGlowColors[tech.title as keyof typeof techGlowColors] ||
                "#6366F1"
              }55, 0 0 60px ${
              techGlowColors[tech.title as keyof typeof techGlowColors] ||
              "#6366F1"
            }33;
            }
          }
        `
          )
          .join("")}
      `}</style>
    </div>
  );
};

export default TechIUse;
