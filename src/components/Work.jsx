import { EXPERIENCES } from "../constants/index";
import { motion } from "framer-motion"; // Import framer-motion for animation

const Work = () => {
  return (
    <motion.section
      className="pd-20"
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }} // Ensures animation happens only once
    >
      <h2 className="text-center text-4xl font-semibold tracking-tighter">
        Work Experience
      </h2>
      <div className="space-y-8 p-10">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="rounded-xl border border-stone-50/30 bg-white/10 p-4"
            initial={{ opacity: 0, y: 20 }} // Start slightly below and transparent
            whileInView={{ opacity: 1, y: 0 }} // Fade in and move to normal position
            transition={{ duration: 0.8, delay: index * 0.2 }} // Delay based on index
          >
            <h3 className="text-2xl font-semibold">{experience.title}</h3>
            <p className="text-xl">{experience.company}</p>
            <p className="text-sm text-stone-300">{experience.duration}</p>
            <p className="mt-2 text-base">{experience.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Work;