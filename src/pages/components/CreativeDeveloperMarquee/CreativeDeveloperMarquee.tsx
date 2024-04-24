import React from "react";
import { motion } from "framer-motion";
import styles from "./CreativeDeveloperMarquee.module.css";

const marqueeVariants = {
  animate: {
    x: [0, -1800],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
        staggerChildren: 0.05,
      },
    },
  },
};

const CreativeDeveloperMarquee = () => {
  return (
    <div>
      <div className={styles.marquee}>
        <motion.div
          className={styles.track}
          variants={marqueeVariants}
          animate="animate"
        >
          <h1>
            Creative Developer Artificial Intelligence Enthusiast Storyteller
          </h1>
        </motion.div>
      </div>
    </div>
  );
};
export default CreativeDeveloperMarquee;
