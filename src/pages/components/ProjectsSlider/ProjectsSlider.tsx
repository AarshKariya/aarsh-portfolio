import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  id: number;
  bgColor: string;
  backTitle?: string;
  backDescription?: string;
}

const ProjectsSlider: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const cards: CardProps[] = [
    {
      title: "Aarsh Kariya Portfolio",
      description: "There is more coming!",
      buttonText: "View",
      id: 1,
      bgColor: "bg-pink-500",
      backTitle: "Portfolio Details",
      backDescription:
        "Built with Next.js, TypeScript, and Tailwind CSS. Features modern animations and responsive design.",
    },
    {
      title: "RPICM",
      description: "Remake of a legacy institute",
      buttonText: "View",
      id: 2,
      bgColor: "bg-green-500",
      backTitle: "RPICM Project",
      backDescription:
        "Complete redesign of an educational institute website with modern UI/UX principles.",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  // Navigate to next card
  const nextCard = () => {
    setActiveCardIndex((prev) => (prev + 1) % cards.length);
  };

  // Navigate to previous card
  const prevCard = () => {
    setActiveCardIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // Navigate to specific card
  const goToCard = (index: number) => {
    setActiveCardIndex(index);
  };

  useEffect(() => {
    const handleCardClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const flipCard = target.closest(".flip-card");

      // Only allow flipping the active (top) card
      if (flipCard && flipCard.classList.contains("active-card")) {
        if (!flipCard.classList.contains("is-flipped")) {
          // Flip to back
          flipCard.classList.add("is-flipped");

          gsap.to(flipCard.querySelector(".flip-card-inner"), {
            rotationY: 180,
            duration: 0.8,
            ease: "power2.inOut",
          });
        } else {
          // Flip to front
          flipCard.classList.remove("is-flipped");

          gsap.to(flipCard.querySelector(".flip-card-inner"), {
            rotationY: 0,
            duration: 0.8,
            ease: "power2.inOut",
          });
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("click", handleCardClick);
    }

    return () => {
      if (container) {
        container.removeEventListener("click", handleCardClick);
      }
    };
  }, []);

  // Reset flip state when changing cards
  useEffect(() => {
    const allCards = document.querySelectorAll(".flip-card");
    allCards.forEach((card) => {
      card.classList.remove("is-flipped");
      const inner = card.querySelector(".flip-card-inner") as HTMLElement;
      if (inner) {
        gsap.set(inner, { rotationY: 0 });
      }
    });
  }, [activeCardIndex]);

  return (
    <div className="relative w-full h-[76vh] flex flex-col items-center justify-center mt-8">
      {/* Cards Container */}
      <div
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center"
      >
        {cards.map((card, index) => {
          const isActive = index === activeCardIndex;
          const offset = index - activeCardIndex;

          return (
            <div
              key={card.id}
              className={`flip-card absolute w-[80%] h-full cursor-pointer transition-all duration-500 ${
                isActive ? "active-card" : ""
              }`}
              style={{
                zIndex: isActive ? 10 : 5 - Math.abs(offset),
                perspective: "1000px",
                transform: `
                  translateX(${offset * 20}px) 
                  translateY(${Math.abs(offset) * 10}px) 
                  scale(${isActive ? 1 : 0.95 - Math.abs(offset) * 0.05})
                `,
                opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.2,
              }}
            >
              <div className="flip-card-inner relative w-full h-full">
                {/* Front Side */}
                <div
                  className={`flip-card-front absolute w-full h-full border border-black rounded-lg shadow-lg ${card.bgColor}`}
                >
                  <ProjectsCard
                    title={card.title}
                    description={card.description}
                    buttonText={card.buttonText}
                  />
                </div>

                {/* Back Side */}
                <div
                  className={`flip-card-back absolute w-full h-full border border-black rounded-lg shadow-lg bg-gray-800 text-white p-8 flex flex-col justify-center items-center`}
                >
                  <h3 className="text-3xl font-bold mb-4">{card.backTitle}</h3>
                  <p className="text-lg text-center mb-6">
                    {card.backDescription}
                  </p>
                  <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-4 mt-6">
        {/* Previous Button */}
        <button
          onClick={prevCard}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          ← Previous
        </button>

        {/* Card Indicators */}
        <div className="flex gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeCardIndex
                  ? "bg-gray-800 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextCard}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Next →
        </button>
      </div>

      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }

        .flip-card-inner {
          transform-style: preserve-3d;
          transition: transform 0.8s;
        }

        .flip-card-front,
        .flip-card-back {
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        .flip-card.is-flipped .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card.active-card:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ProjectsSlider;
