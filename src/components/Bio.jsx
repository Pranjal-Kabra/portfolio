import { BIO } from "../constants/index";
import about from "../assets/about.png"; 
import { motion } from "framer-motion"; // Import framer-motion

const Bio = () => {
  return (
    <section
      className="flex h-auto flex-col items-center justify-center gap-6 lg:flex-row lg:justify-between"
      id="bio"
    >
      <div className="flex-1">
        {/* Animate the title when in view */}
        <motion.h2
          className="my-8 text-center text-4xl"
          initial={{ opacity: 0, y: -50 }} // Initial state (hidden and above)
          whileInView={{ opacity: 1, y: 0 }}  // Final state (visible and normal position)
          transition={{ duration: 0.8 }}  // Duration of animation
          viewport={{ once: true }} // Ensures it animates only once when in view
        >
          About Me
        </motion.h2>
        <div>
          {BIO.map((bio, index) => (
            // Align text to the left with animation when in view
            <motion.p
              key={index}
              className="mb-4 text-lg lg:text-xl lg:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }} // Delay for each item
              viewport={{ once: true }} // Ensures it animates only once when in view
            >
              {bio}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Animate the image when in view */}
      <div className="flex-1 flex justify-center">
        <motion.img
          src={about}
          alt="About Me"
          className="w-64 h-64 rounded-3xl object-cover shadow-lg lg:w-80 lg:h-80"
          initial={{ opacity: 0, scale: 0.8 }} // Initial state (hidden and small)
          whileInView={{ opacity: 1, scale: 1 }}  // Final state (visible and normal size)
          transition={{ duration: 0.8, delay: 0.5 }} // Delay the image animation a little
          viewport={{ once: true }} // Ensures it animates only once when in view
        />
      </div>
    </section>
  );
};

export default Bio;
