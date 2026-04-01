import { motion } from "framer-motion";

const experiences = [
  {
    company: "Arrautomation",
    role: "Founder & Lead SDET",
    period: "Dec 2025 - Present",
    description: "Building a service-based startup focused on HR Automation and enterprise-grade QA frameworks. Architecting scalable testing solutions for modern web apps.",
    highlights: ["MERN Stack Development", "Strategic HR Automation", "Brand Architecture"]
  },
  {
    company: "SDET Mastery",
    role: "Automation Specialist (Training)",
    period: "2025",
    description: "Mastered end-to-end automation modules. Transitioned from Java-based testing to modern JavaScript/Node.js ecosystems for faster deployment.",
    highlights: ["90% Cypress Completion", "Selenium & TestNG", "SQL Performance Testing"]
  }
];

function Experience() {
  return (
    <section id="experience" className="bg-[#030303] text-white py-32 px-6 md:px-20 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-extrabold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          The Journey
        </motion.h2>

        <div className="space-y-12 border-l border-white/10 ml-4 md:ml-0">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="relative pl-8 pb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_15px_#2563eb]" />
              
              <div className="bg-white/[0.03] border border-white/5 p-8 rounded-2xl hover:border-blue-500/30 transition-colors">
                <span className="text-sm font-mono text-blue-500 mb-2 block">{exp.period}</span>
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <p className="text-lg text-gray-300 mb-4">{exp.company}</p>
                <p className="text-gray-500 mb-6 leading-relaxed">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((item, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-1 rounded text-gray-400">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;