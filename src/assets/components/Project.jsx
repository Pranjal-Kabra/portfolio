import { PROJECTS } from "../constants/index";  // Ensure you're importing PROJECTS
import { MdArrowOutward } from "react-icons/md";  // Import MdArrowOutward from react-icons
import { motion } from "framer-motion";  // Import motion from framer-motion

const Project = () => {
  return (
    <section className="pt-15 mb-6" id="projects">
      {/* Animated Projects Title */}
      <motion.h2
        className="mb-8 text-center text-3xl lg:text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
        {/* Loop over Projects */}
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }} // Delay based on index
          >
            <div className="relative w-full h-64 md:h-80 lg:h-80">
              {/* Animated Image */}
              <motion.img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
              <h3
                className={`mb-2 text-xl font-semibold ${
                  index === 1 || index === 2 ? "text-black" : "text-white"
                }`}
              >
                {project.name}
              </h3>
              <p
                className={`mb-12 p-4 text-center ${
                  index === 1 || index === 2 ? "text-black" : "text-white"
                }`}
              >
                {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300 transition-colors duration-200"
              >
                <div className="flex items-center space-x-2">
                  <span>View on GitHub</span>
                  <MdArrowOutward />
                </div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
