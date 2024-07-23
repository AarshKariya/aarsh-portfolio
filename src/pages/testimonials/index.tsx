import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import MinuteDotsComponent from "../genericComponents/PageTitle/PageTitle";
import TestimonialCard from "../components/TestimonialCard/TestimonialCard";

const Testimonials = () => {
  const main = useRef<HTMLElement | any>(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".Card");

      // Set initial visibility to hidden
      gsap.set(cards, { visibility: "hidden", opacity: 0 });

      // Animate visibility and opacity with ease-in after 4 seconds delay
      gsap.fromTo(
        cards,
        { opacity: 0 },
        {
          opacity: 1,
          visibility: "visible",
          delay: 1.5,
          duration: 0.8,
          ease: "power2.inOut",
        }
      );

      gsap.set(cards, {
        zIndex: (i) => 30 + i,
        transformOrigin: "50% -400px",
      });

      let lastCardST = ScrollTrigger.create({
        trigger: cards.pop() as Element,
        start: "center center",
      });
      let stickDistance = 0;

      cards.forEach((card, index) => {
        const tween = gsap.to(card as Element, {
          scrollTrigger: {
            trigger: card as Element,
            scrub: true,
            markers: false,
            invalidateOnRefresh: true,
            start: "center center",
            end: () => lastCardST.start + stickDistance,
            pin: true,
            refreshPriority: index === cards.length - 1 ? 5 : 0,
            pinSpacing: false,
          },
          ease: "none",
          scale: () => 1 - (cards.length - index) * 0.025,
        });
      });
    },
    { scope: main }
  );

  return (
    <>
      <MinuteDotsComponent title="Testimonials" />
      <section
        className="flex flex-col justify-center align-center static"
        ref={main}
      >
        <div className="mb-[8vh]"></div>
        <div className="Cards container flex flex-col mx-auto gap-4 relative min-h-[100vh]">
          <TestimonialCard
            personName="Neha Lakma"
            personPosition="Software Developer"
            companyName="56 Secure"
            mainCardStyles="bg-[#FBF3D5]"
            personImg="/recommendation.jpg"
            companyImg="adaniWilmarIcon.svg"
            quote="Konpo worked to get our new design system implemented, which has been the foundation for many of Relias’ products.  The team delivers high-quality and thoughtful work. They've been a great partner throughout the process.They simply go the extra mile!"
          />
          <TestimonialCard
            personName="Shyam Parekh"
            personPosition="Director"
            companyName="Bhartiya Vidya Bhavan"
            mainCardStyles="bg-[#F8EDEB]"
            personImg="/recommendation.jpg"
            companyImg="adaniWilmarIcon.svg"
            quote="I did great!"
          />
          <TestimonialCard
            personName="Nilesh Gosavi"
            personPosition="Lead Product Designer"
            companyName="Pazcare"
            mainCardStyles="bg-[#F7DED0]"
            personImg="/recommendation.jpg"
            companyImg="adaniWilmarIcon.svg"
            quote="I did great!"
          />
          <TestimonialCard
            personName="Rupesh Pawar"
            personPosition="Lead Engineer"
            companyName="Pazcare"
            mainCardStyles="bg-[#FFE0B5]"
            personImg="/recommendation.jpg"
            companyImg="adaniWilmarIcon.svg"
            quote="I did great!"
          />
          <TestimonialCard
            personName="Shivani Dave"
            personPosition="Freelancer"
            companyName="Yoga Enthusiast"
            mainCardStyles="bg-[#E3F6F5]"
            personImg="/recommendation.jpg"
            companyImg="adaniWilmarIcon.svg"
            quote="I did great!"
          />
        </div>
      </section>
    </>
  );
};

export default Testimonials;
