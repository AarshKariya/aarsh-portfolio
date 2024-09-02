// import { motion } from "framer-motion";

// interface ExperienceItemProps {
//   company: string;
//   year: string;
//   position: string;
//   link: string;
// }

// const ExperienceItem: React.FC<ExperienceItemProps> = ({
//   company,
//   year,
//   position,
//   link,
// }) => {
//   return (
//     <motion.div
//       className="flex flex-col items-center text-center"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <a
//         href={link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-2xl font-semibold text-blue-600 hover:underline"
//       >
//         {company}
//       </a>
//       <div className="mt-2 flex space-x-2">
//         <span className="px-3 py-1 text-sm font-medium bg-gray-200 rounded-full">
//           {year}
//         </span>
//         <span className="px-3 py-1 text-sm font-medium bg-gray-200 rounded-full">
//           {position}
//         </span>
//       </div>
//     </motion.div>
//   );
// };

// export default ExperienceItem;

import { motion } from "framer-motion";

interface ExperienceItemProps {
  company: string;
  year: string;
  position: string;
  link: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  year,
  position,
  link,
}) => {
  return (
    <motion.div
      className="flex justify-between items-center space-x-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl font-semibold text-black hover:underline"
      >
        {company}
      </a>
      <div className="flex space-x-2">
        <span className="px-3 py-1 text-sm font-medium bg-gray-200 rounded-full">
          {year}
        </span>
        <span className="px-3 py-1 text-sm font-medium bg-gray-200 rounded-full">
          {position}
        </span>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
