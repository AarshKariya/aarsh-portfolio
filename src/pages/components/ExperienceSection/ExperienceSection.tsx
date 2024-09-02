// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Autoplay,
//   EffectCoverflow,
//   Navigation,
//   Pagination,
// } from "swiper/modules";

// const ExperienceSection: React.FC = () => {
//   return (
//     <div className="experience-section h-screen flex flex-col items-center justify-center bg-black">
//       <h2 className="text-white text-4xl font-semibold mb-10">Experience</h2>
//       <Swiper
//         effect="coverflow"
//         centeredSlides={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         slidesPerView={2}
//         spaceBetween={30}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 30,
//           depth: 100,
//           modifier: 5,
//           slideShadows: true,
//         }}
//         navigation={{
//           prevEl: ".swiper-button-prev",
//           nextEl: ".swiper-button-next",
//         }}
//         pagination={{
//           el: ".swiper-pagination",
//           clickable: false,
//         }}
//         className="swiper mySwiper max-w-[600px] w-full pb-12"
//       >
//         <SwiperSlide className="swiper-slide">
//           <img
//             src="https://swiperjs.com/demos/images/nature-2.jpg"
//             alt="Nature 2"
//             className="rounded-lg"
//           />
//         </SwiperSlide>
//         <SwiperSlide className="swiper-slide">
//           <img
//             src="https://swiperjs.com/demos/images/nature-3.jpg"
//             alt="Nature 3"
//             className="rounded-lg"
//           />
//         </SwiperSlide>
//         <SwiperSlide className="swiper-slide">
//           <img
//             src="https://swiperjs.com/demos/images/nature-4.jpg"
//             alt="Nature 4"
//             className="rounded-lg"
//           />
//         </SwiperSlide>
//         <SwiperSlide className="swiper-slide">
//           <img
//             src="https://swiperjs.com/demos/images/nature-5.jpg"
//             alt="Nature 5"
//             className="rounded-lg"
//           />
//         </SwiperSlide>
//         <SwiperSlide className="swiper-slide">
//           <img
//             src="https://swiperjs.com/demos/images/nature-6.jpg"
//             alt="Nature 6"
//             className="rounded-lg"
//           />
//         </SwiperSlide>
//         <div className="swiper-controller flex gap-10 mt-20 z-10">
//           <div className="swiper-button-prev slider-arrow bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg cursor-pointer">
//             <span className="material-symbols-outlined text-black">
//               arrow_back
//             </span>
//           </div>
//           <div className="swiper-button-next slider-arrow bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg cursor-pointer">
//             <span className="material-symbols-outlined text-black">
//               arrow_forward
//             </span>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </Swiper>
//     </div>
//   );
// };

// export default ExperienceSection;
import { motion } from "framer-motion";
import React from "react";
import ExperienceItem from "../ExperienceItem/ExperienceItem";

const ExperienceSection = () => {
  return (
    <div className="experience-section flex flex-col w-full px-40 py-4">
      {/* Experience Section Title */}
      <motion.h2
        className="text-4xl font-bold text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Experience Section
      </motion.h2>

      {/* Experience Items */}
      <div className="mt-10 space-y-8">
        <motion.div
          className="h-0.5 bg-gray-300"
          initial={{ width: 0, left: "180px" }}
          whileInView={{
            width: "100%",
          }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <ExperienceItem
          company="Mitti Labs"
          year="Feb 2024 - Present"
          position="Software Engineer"
          link="https://www.mittilabs.earth/"
        />
        <motion.div
          className="h-0.5 bg-gray-300"
          initial={{ width: 0, left: "180px" }}
          whileInView={{
            width: "100%",
          }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <ExperienceItem
          company="Pazcare"
          year="May 2022 - Jan 2024"
          position="Associate Frontend Engineer"
          link="https://www.pazcare.com/"
        />
        <motion.div
          className="h-0.5 bg-gray-300"
          initial={{ width: 0, left: "180px" }}
          whileInView={{
            width: "100%",
          }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        {/* Add more ExperienceItem components as needed */}
      </div>
    </div>
  );
};

export default ExperienceSection;
