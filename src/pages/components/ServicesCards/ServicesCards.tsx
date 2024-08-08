import React from "react";
import { motion } from "framer-motion";

interface Service {
  title: string;
  content: string;
}

const services: Service[] = [
  {
    title: "For businesses",
    content:
      "I design interfaces that are friendly and valuable for customers and easy to implement for engineers.",
  },
  {
    title: "For startups",
    content:
      "I design interfaces that are friendly and valuable for customers and easy to implement for engineers.",
  },
  {
    title: "For product teams",
    content:
      "I design interfaces that are friendly and valuable for customers and easy to implement for engineers.",
  },
];

const ServicesCards: React.FC = () => {
  return (
    <div className="services-section py-16 px-4">
      <h2 className="text-3xl font-semibold text-gray-900 mb-8">
        What I can do for you
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative p-6 border border-gray-200 rounded-lg shadow-lg overflow-hidden"
            whileHover="hover"
            initial="initial"
          >
            <motion.div
              className="absolute inset-0 bg-gray-900 bg-opacity-50"
              variants={{
                hover: { top: "0%", transition: { duration: 0.5 } },
                initial: { top: "-100%", transition: { duration: 0.5 } },
              }}
              style={{ zIndex: 1 }}
            />
            <div className="relative z-10">
              <h3 className="text-xl font-medium text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-base text-gray-600">{service.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCards;
