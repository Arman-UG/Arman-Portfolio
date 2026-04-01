import { motion } from "framer-motion";

const skills = [
  "Cypress",
  "JavaScript",
  "Automation Testing",
  "Manual Testing",
  "API Testing",
  "POM",
  "Git",
  "HTML",
  "CSS",
];

function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-24 px-8 md:px-20">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 px-5 py-3 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;