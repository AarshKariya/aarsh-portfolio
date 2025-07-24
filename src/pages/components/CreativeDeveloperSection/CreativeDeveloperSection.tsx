import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CreativeDeveloperSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && imageRef.current && textRef.current) {
      const image = imageRef.current;
      const text = textRef.current;
      const section = sectionRef.current;

      // Set initial states
      gsap.set(image, { scale: 1.2 });
      gsap.set(text, { x: 100, autoAlpha: 0 });

      // Create timeline for scaling animation
      const scaleTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "top 50%",
          scrub: 1,
        },
      });

      scaleTl.to(image, {
        scale: 1,
        duration: 1,
        ease: "none",
      });

      // Create timeline for sliding and fading animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          end: "top 25%",
          scrub: 1,
        },
      });

      tl.to(image, {
        x: -450, // Move the image to the extreme left
        duration: 1,
        ease: "none",
        delay: 1, // Add a delay after the scaling animation
      }).to(
        text,
        {
          x: 0,
          autoAlpha: 1,
          duration: 1.5,
          ease: "none",
        },
        "<" // Align with the image movement
      );
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="creative-developer-section relative flex items-center justify-center py-16 px-4 overflow-hidden"
    >
      <img
        ref={imageRef}
        src="/aarshProfile.JPG"
        alt="Creative Developer"
        className="w-[300px] h-[471px] object-cover rounded-lg"
      />
      <div
        ref={textRef}
        className="absolute ml-40 text-container text-left flex-1 max-w-2xl"
      >
        <p className="text-6xl font-semibold text-gray-900 mb-1">
          Hi, I am Aarsh!
          <span role="img" aria-label="waving hand">
            👋🏻
          </span>
        </p>
        <p className="text-3xl font-medium text-gray-700 mb-4">
          the bridge between you and your ideal website!
        </p>
        <p className="text-base text-gray-800">
          With 2+ years of experience in UI/UX development for B2B, B2C, and C2B
          platforms across web experiences, I develop digital interfaces that
          are user-centric and align with the strategic objectives of the
          business, using optimization and many more skills. My development
          journey began with my graduation in Computer Sciences, which provided
          me with a solid foundation for laying the bricks and building up.
        </p>
      </div>
    </div>
  );
};

export default CreativeDeveloperSection;
