import React from "react";
import { motion } from "framer-motion";

interface MinuteDotsComponentProps {
  title: string;
}

const MinuteDotsComponent: React.FC<MinuteDotsComponentProps> = ({
  title,
}: MinuteDotsComponentProps) => {
  return (
    <div className="flex flex-col">
      <div className="absolute inset-[70px]">
        <motion.h1
          className="text-6xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.8,
            duration: 1.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          {title}
        </motion.h1>
      </div>
      <div className="grid grid-cols-16 gap-1 mt-12">
        {[...Array(20)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex justify-center w-full">
            {[...Array(80)].map((_, colIndex) => (
              <motion.div
                key={colIndex}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: rowIndex * 0.05 + colIndex * 0.02,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
                className="w-0.5 h-0.5 bg-gray-500 rounded-full mr-4 opacity-50"
              ></motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinuteDotsComponent;
