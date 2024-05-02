// import React from "react";
// import { motion } from "framer-motion";

// interface PageTitleProps {
//   title: string;
// }

// const dotVariants = {
//   initial: {
//     opacity: 0,
//   },
//   animate: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.005,
//     },
//   },
// };

// const childVariants = {
//   initial: {
//     opacity: 0,
//   },
//   animate: {
//     opacity: [0, 1, 0], // This will create a blink effect
//     transition: {
//       duration: 2,
//       ease: "easeInOut",
//       repeat: Infinity,
//     },
//   },
// };

// const titleVariants = {
//   hidden: { y: 100, opacity: 0 },
//   visible: { y: 0, opacity: 1, transition: { duration: 2.0 } },
// };

// const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
//   return (
//     <div className="relative max-w-6xl">
//       <motion.div
//         className="absolute top-0 left-0 w-full h-full"
//         variants={dotVariants}
//         initial="initial"
//         animate="animate"
//       >
//         {Array.from({ length: 3000 }, (_, index) => (
//           <motion.div
//             key={index}
//             className={`w-2 h-2 rounded-full bg-gray-300`}
//             variants={childVariants}
//             style={{
//               position: "absolute",
//               top: `${Math.floor(index / 50) * 10}px`,
//               left: `${(index % 50) * 10}px`,
//             }}
//           />
//         ))}
//       </motion.div>
//       <motion.h1
//         className="text-8xl font-bold text-black z-10 relative"
//         variants={titleVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {title}
//       </motion.h1>
//     </div>
//   );
// };

// export default PageTitle;
import React, { useRef } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";

extend({ THREE });

const Dots = React.forwardRef<THREE.Group>((props, ref) => {
  const dots = Array.from({ length: 1000 }, (_, i) => ({
    x: (i % 50) * 0.2 - 5,
    y: Math.floor(i / 50) * 0.2 - 5,
  }));

  return (
    <group ref={ref}>
      {dots.map((dot, i) => (
        <mesh key={i} position={[dot.x, dot.y, 0]}>
          <circleBufferGeometry args={[0.05, 32]} />
          <meshBasicMaterial transparent color="#aaa" />
        </mesh>
      ))}
    </group>
  );
});

const DotsAnimation: React.FC = () => {
  const ref = useRef<THREE.Group>();

  useFrame(() => {
    if (ref.current) {
      ref.current.children.forEach((child) => {
        const material = (child as THREE.Mesh)
          .material as THREE.MeshBasicMaterial;
        material.opacity = Math.sin(material.opacity * Math.PI) * 0.5 + 0.5;
      });
    }
  });

  return <Dots ref={ref} />;
};

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="relative w-full h-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <DotsAnimation />
      </Canvas>
      <h1 className="text-8xl font-bold text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
