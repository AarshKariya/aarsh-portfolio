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
            quote="Aarsh is a standout talent in the tech world. Their mastery of React and NextJS is impressive, and they have a knack for solving complex problems with elegant solutions. Working with them has been a true pleasure—Aarsh brings an unparalleled positive energy to the team. Their infectious laughter and upbeat attitude make even the most intense projects enjoyable. They’re always focused and dedicated, ensuring every detail is perfect. If you get a chance to work with Aarsh, consider yourself lucky!"
          />
          <TestimonialCard
            personName="Shyam Parekh"
            personPosition="Director"
            companyName="Bhartiya Vidya Bhavan"
            mainCardStyles="bg-[#F8EDEB]"
            personImg="/recommendation.jpg"
            companyImg="adaniWilmarIcon.svg"
            quote="Aarsh is a gem in the tech field. Their skill set in React and NextJS is top-notch, but what truly impresses me is their integrity and dedication. They approach every project with a genuine commitment to achieving the best results for their clients. Their ability to prioritize client needs and deliver exceptional solutions speaks volumes about their professionalism. Plus, their positive demeanor and enthusiasm make them a joy to work with. I highly recommend Aarsh for any team looking for a reliable and uplifting developer."
          />
          <TestimonialCard
            personName="Nilesh Gosavi"
            personPosition="Lead Product Designer"
            companyName="Pazcare"
            mainCardStyles="bg-[#F7DED0]"
            personImg="/recommendation.jpg"
            companyImg="adaniWilmarIcon.svg"
            quote="I had the pleasure of collaborating with Aarsh on several projects, and I must say, their expertise in NextJS and React is second to none. Their ability to translate complex requirements into seamless user experiences made our design and development process incredibly smooth. What sets Aarsh apart is their unwavering commitment to the client's vision. They're not just a developer; they're a partner who truly cares about delivering the best possible outcome. Plus, their infectious positivity and sense of humor made every project enjoyable. Any team would be lucky to have them!"
          />
          <TestimonialCard
            personName="Rupesh Pawar"
            personPosition="Lead Engineer"
            companyName="Pazcare"
            mainCardStyles="bg-[#FFE0B5]"
            personImg="/recommendation.jpg"
            companyImg="adaniWilmarIcon.svg"
            quote="Aarsh is a developer you can rely on, no matter the complexity of the task. Their deep knowledge of JavaScript, TypeScript, and React Native consistently led our team to success. But what I admire most is their integrity and dedication to our clients. They always put the client's needs first, ensuring that every solution is robust, scalable, and delivered on time. Their ongoing efforts to learn Golang and Python are a testament to their commitment to growth and excellence. And their optimistic attitude? It's the glue that holds the team together, even during challenging times."
          />
          <TestimonialCard
            personName="Shivani Dave"
            personPosition="Freelancer"
            companyName="Yoga Enthusiast"
            mainCardStyles="bg-[#E3F6F5]"
            personImg="/recommendation.jpg"
            companyImg="adaniWilmarIcon.svg"
            quote="Aarsh is a fantastic developer and an even better person to work with. Their expertise in JavaScript and React is clear from the high-quality work they produce. But it’s their warm, positive attitude that truly sets them apart. They bring a refreshing energy to every project, making collaboration a breeze. Whether navigating complex challenges or sharing a laugh, Aarsh consistently lifts the team's spirit. If you’re looking for someone who combines technical skill with a great personality, Aarsh is the perfect choice."
          />
        </div>
      </section>
    </>
  );
};

export default Testimonials;
