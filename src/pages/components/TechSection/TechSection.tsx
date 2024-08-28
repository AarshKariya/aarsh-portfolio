// import React from "react";
// import Marquee from "react-fast-marquee";

// const techImages = [
//   "/tech1.png",
//   "/tech2.png",
//   "/tech3.png",
//   "/tech4.png",
//   "/tech5.png",
//   "/tech6.png",
//   "/tech7.png",
//   "/tech8.png",
//   "/tech9.png",
//   "/tech10.png",
//   "/tech11.png",
//   "/tech12.png",
// ];

// const TechIUse: React.FC = () => {
//   return (
//     <div className="tech-i-use-section py-16 px-4">
//       <h2 className="text-3xl font-semibold text-gray-900 mb-8">Tech I use</h2>
//       <div className="marquee-container">
//         <Marquee gradient={false} speed={30} className="marquee">
//           {techImages.slice(0, 6).map((src, index) => (
//             <img
//               key={index}
//               src={src}
//               alt={`Tech ${index + 1}`}
//               className="w-24 h-24 object-contain mx-2"
//             />
//           ))}
//         </Marquee>
//         <Marquee
//           gradient={false}
//           speed={30}
//           direction="right"
//           className="marquee"
//         >
//           {techImages.slice(6).map((src, index) => (
//             <img
//               key={index}
//               src={src}
//               alt={`Tech ${index + 7}`}
//               className="w-24 h-24 object-contain mx-2"
//             />
//           ))}
//         </Marquee>
//       </div>
//     </div>
//   );
// };

// export default TechIUse;

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { techImages } from "@/utils/techImages";

const multiplier = {
  translate: 0.1,
  rotate: 0.01,
};

const TechIUse: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  useEffect(() => {
    const calculateWheel = () => {
      const slides = document.querySelectorAll<HTMLElement>(".single");
      slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
        let ty =
          Math.abs(r) * multiplier.translate -
          rect.width * multiplier.translate;

        if (ty < 0) {
          ty = 0;
        }

        const transformOrigin = r < 0 ? "left top" : "right top";
        slide.style.transform = `translateY(${ty}px) rotate(${
          -r * multiplier.rotate
        }deg)`;
        slide.style.transformOrigin = transformOrigin;
      });
    };

    const raf = () => {
      requestAnimationFrame(raf);
      calculateWheel();
    };

    raf();
  }, []);

  return (
    <div className="tech-i-use-section py-8 px-40">
      <h2 className="text-3xl font-semibold text-black mb-8 text-left">
        Tech I Use
      </h2>
      <div className="overflow-x-clip">
        <Swiper
          spaceBetween={24}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          grabCursor={true}
          className="py-20 overflow-visible"
          autoplay={{ delay: 2500 }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
        >
          {techImages.map((src, index) => (
            <SwiperSlide key={index} className="w-[400px]">
              <div
                className="single relative pointer-events-none select-none rounded-lg"
                style={{
                  backgroundColor: `hsl(${(index * 30) % 360}, 70%, 50%)`, // Assign a unique color to each card
                }}
              >
                <img
                  src={src.url}
                  alt={`Tech ${index + 1}`}
                  className="w-32 h-32 align-top rounded-lg"
                />
                <div>{src.title}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-4 text-center">
          <span className="text-xl font-semibold">{activeIndex}</span> / 13
        </div>
      </div>
    </div>
  );
};

export default TechIUse;
