import React from "react";
import Marquee from "react-fast-marquee";

const CreativeDeveloperMarquee = () => {
  return (
    <div className="relative w-screen max-w-full h-[206px] overflow-hidden">
      <Marquee className="absolute whitespace-nowrap">
        <h1 className="my-5 text-[8rem] font-inter text-[#8cb9bd] opacity-20">
          Creative Developer Artificial Intelligence Enthusiast Storyteller
        </h1>
      </Marquee>
    </div>
  );
};
export default CreativeDeveloperMarquee;
