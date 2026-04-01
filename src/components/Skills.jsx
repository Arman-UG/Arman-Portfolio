import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Core Automation",
    skills: ["Cypress", "Selenium", "Playwright", "POM", "Appium"],
    icon: "🚀"
  },
  {
    title: "Languages & Frameworks",
    skills: ["JavaScript", "Node.js", "Express", "React", "SQL"],
    icon: "💻"
  },
  {
    title: "Quality Assurance",
    skills: ["API Testing", "Manual Testing", "Performance Testing", "JIRA", "STLC"],
    icon: "🛡️"
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub Actions", "Docker", "Postman", "Vite"],
    icon: "🛠️"
  }
];

function Skills() {
  return (
    <section id="skills" className="bg-[#030303] text-white py-32 px-6 md:px-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
          >
            Technical Arsenal
          </motion.h2>
          <p className="text-gray-500 max-w-lg">
            A comprehensive suite of tools and technologies I use to build, test, and scale digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-6 text-blue-400 group-hover:text-blue-300">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#2563eb]"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Infinite Scroll Ribbon (Visual Flair) */}
        <div className="mt-24 py-10 border-y border-white/5 overflow-hidden flex whitespace-nowrap opacity-30">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-12 text-2xl font-black uppercase tracking-tighter"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12">
                <span>Cypress</span>
                <span className="text-blue-500">Automation</span>
                <span>MERN Stack</span>
                <span className="text-blue-500">SDET</span>
                <span>Performance</span>
                <span className="text-blue-500">Founder</span>
                <span>Scalability</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skills;