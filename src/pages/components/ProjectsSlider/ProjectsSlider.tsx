import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

gsap.registerPlugin(Flip);

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  id: number;
  bgColor: string;
}

const ProjectsSlider: React.FC = () => {
  const [cards, setCards] = useState<CardProps[]>([
    {
      title: "Aarsh Kariya Portfolio",
      description: "There is more coming!",
      buttonText: "View",
      id: 1,
      bgColor: "bg-pink-500",
    },
    {
      title: "RPICM",
      description: "Remake of a legacy institute",
      buttonText: "View",
      id: 2,
      bgColor: "bg-green-500",
    },
  ]);

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCard = () => {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        const lastCard = newCards.pop();
        if (lastCard) {
          newCards.unshift(lastCard);
        }
        return newCards;
      });
    };

    const handleClick = () => {
      const state = Flip.getState(".item");

      moveCard();

      Flip.from(state, {
        targets: ".item",
        ease: "bounce.in",
        absolute: true,
        onEnter: (elements) => {
          return gsap.from(elements, {
            yPercent: -50,
            opacity: 0,
            ease: "elastic.out",
            duration: 0.6,
          });
        },
        onLeave: (element) => {
          return gsap.to(element, {
            yPercent: 50,
            opacity: 0,
            ease: "back.in",
            duration: 0.6,
            onComplete() {
              const slider = document.querySelector(".slider");
              if (slider && element[0]) {
                slider.removeChild(element[0]);
              }
            },
          });
        },
      });
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className="relative w-full h-[76vh] flex items-center justify-center mt-8"
    >
      {cards.map((card, index) => (
        <div
          className={`absolute w-[80%] h-full border border-black rounded-lg bg-white shadow-lg cursor-pointer duration-500 transform card-${index} ${card.bgColor}`}
          key={index}
          style={{ zIndex: cards.length - index }}
        >
          <ProjectsCard
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectsSlider;
