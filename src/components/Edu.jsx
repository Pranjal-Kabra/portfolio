import { EDUCATION } from "../constants/index";
import { motion } from "framer-motion"; // Import framer-motion for animation

const Education = () => {
  return (
    <motion.section
      className="py-8 mb-12"
      id="education"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }} // Ensures animation happens only once when the section becomes visible
    >
      <h2 className="mb-8 text-center text-3xl lg:text-4xl font-bold text-white">
        Education
      </h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-transparent"
            initial={{ opacity: 0, y: 20 }} // Start slightly below and transparent
            whileInView={{ opacity: 1, y: 0 }} // Fade in and move to normal position
            transition={{ duration: 0.8, delay: index * 0.2 }} // Delay based on index for staggered effect
          >
            <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
            <p className="text-lg font-medium text-white">{edu.institution}</p>
            <p className="text-sm text-white">{edu.duration}</p>
            <p className="mt-4 text-white">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
