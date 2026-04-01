import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-gray-950 text-white py-24 px-8 md:px-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I am an aspiring SDET focused on building reliable and scalable
          automation systems. I specialize in Cypress-based testing, Page
          Object Model, and real-world application testing.
          <br /><br />
          My goal is not just to test applications, but to prevent failures
          before they reach production. I believe in writing clean,
          maintainable test automation that delivers real value.
        </motion.p>
      </div>
    </section>
  );
}

export default About;