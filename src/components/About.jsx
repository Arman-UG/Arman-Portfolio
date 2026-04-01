import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative bg-[#030303] text-white py-32 px-6 md:px-20 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: The Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Beyond Just Testing
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I am a Software Development Engineer in Test (SDET) with a deep-rooted belief that 
                <span className="text-white font-medium"> quality is a shared responsibility</span>, 
                not just a final checkpoint. My approach combines the precision of manual testing 
                with the scalability of modern automation.
              </p>
              <p>
                Specializing in <span className="text-blue-400">Cypress-based frameworks</span> and 
                <span className="text-blue-400"> Page Object Model (POM)</span>, I architect systems 
                that prevent failures before they ever reach production.
              </p>
              <p>
                As the <span className="text-white font-medium">founder of Arrautomation</span>, I am 
                currently focused on bridging the gap between complex HR workflows and seamless 
                automation, ensuring businesses can scale with confidence.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Philosophy Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Prevention-First", desc: "Catching bugs in the architecture, not just the UI.", icon: "🛡️" },
              { title: "Clean Code", desc: "Writing maintainable, scalable automation scripts.", icon: "✨" },
              { title: "Business Logic", desc: "Testing that aligns with real-world user value.", icon: "📈" },
              { title: "Fast Feedback", desc: "Optimizing CI/CD pipelines for rapid delivery.", icon: "⚡" }
            ].map((box, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
              >
                <div className="text-2xl mb-3">{box.icon}</div>
                <h3 className="text-white font-bold mb-2">{box.title}</h3>
                <p className="text-gray-500 text-sm leading-snug">{box.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;