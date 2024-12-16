import { FaPython, FaReact } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { DiMysql, DiHtml5, DiCss3 } from "react-icons/di";
import { motion } from "framer-motion"; // Importing framer-motion

const Tech = () => {
  return (
    <motion.div
      className="border-b border-neutral-800"
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }} // Ensures animation only happens once when it comes into view
    >
      <h2 className="my-8 text-center text-4xl">Skills</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <FaPython className="text-7xl" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TbBrandCpp className="text-7xl" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <DiMysql className="text-7xl" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <FaReact className="text-7xl" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <DiHtml5 className="text-7xl" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <DiCss3 className="text-7xl" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Tech;
