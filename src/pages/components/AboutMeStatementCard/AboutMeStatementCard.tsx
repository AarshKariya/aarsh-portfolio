import React from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const AboutMeStatementCard = () => {
  React.useEffect(() => {
    // Animate the card's entrance with a delay
    gsap.fromTo(
      ".card",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        duration: 0.5,
        delay: 2,
      }
    );

    // Animate each word sliding down with a staggered effect
    gsap.fromTo(
      ".card span",
      { y: -40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 2,
        stagger: 0.1, // Stagger each word's animation
      }
    );
  }, []);

  // Define the text content for each line
  const line1 = "I am in love with creative websites.";
  const line2 = "And I am here to make you fall in love with yours.";

  // Split lines into words
  const splitLine = (line: string) => line.split(" ");

  return (
    <motion.div
      className="card transition duration-500 ease-in-out bg-[#F8EDEB] hover:bg-[#E3F6F5] rounded-lg flex flex-col items-center justify-center h-full w-full scale-80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex flex-col items-center">
        <p className="text-center text-6xl mb-4">
          {splitLine(line1).map((word, index) => (
            <span key={index} className="inline-block mr-6">
              {word}
            </span>
          ))}
        </p>
        <p className="text-center text-6xl">
          {splitLine(line2).map((word, index) => (
            <span key={index} className="inline-block mr-6">
              {word}
            </span>
          ))}
        </p>
      </div>
    </motion.div>
  );
};

export default AboutMeStatementCard;
