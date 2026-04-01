import { motion } from "framer-motion";

const projects = [
  {
    title: "Flipkart Automation",
    description:
      "End-to-end automation using Cypress with Page Object Model covering search, cart, and checkout flows.",
    tech: ["Cypress", "JavaScript", "POM"],
    github: "https://github.com/your-username/flipkart-automation",
  },
  {
    title: "BStack Demo Testing",
    description:
      "Automated UI testing for login and product workflows using Cypress.",
    tech: ["Cypress", "UI Testing"],
    github: "https://github.com/your-username/bstack-demo",
  },
  {
    title: "Manual Testing Project",
    description:
      "Created test cases, executed testing, and reported bugs with proper documentation.",
    tech: ["Test Cases", "Bug Reports", "JIRA"],
    github: "https://github.com/your-username/manual-testing",
  },
];

function Projects() {
  return (
    <section className="bg-black text-white py-24 px-8 md:px-20">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
>
            <h3 className="text-2xl font-semibold mb-3">
            {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
            {project.description}
            </p>

            {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
        <span
        key={i}
        className="bg-gray-700 px-3 py-1 rounded-full text-sm"
      >
        {tech}
        </span>
    ))}
    </div>
    {/* GitHub Link */}
        <a
            href={project.github}
            target="_blank"
            className="text-blue-400 hover:underline"
  >
            View Project →
        </a>
            </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;