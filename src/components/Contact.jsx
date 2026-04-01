import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#030303] text-white py-32 px-6 md:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Let's Architect Something Great
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're looking for a lead SDET to bulletproof your infrastructure or 
            want to discuss HR automation through my startup, I'm always open to high-impact collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <motion.a
            href="mailto:contact@arrautomation.com"
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
              <FaEnvelope className="text-blue-400 text-xl" />
            </div>
            <span className="font-bold mb-1">Email Me</span>
            <span className="text-xs text-gray-500">Fastest response time</span>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
              <FaLinkedin className="text-blue-400 text-xl" />
            </div>
            <span className="font-bold mb-1">LinkedIn</span>
            <span className="text-xs text-gray-500">Let's connect professionally</span>
          </motion.a>

          {/* Startup / GitHub Card */}
          <motion.a
            href="https://arrautomation.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 transition-all group"
          >
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
              <FaExternalLinkAlt className="text-blue-400 text-lg" />
            </div>
            <span className="font-bold mb-1">Arrautomation</span>
            <span className="text-xs text-blue-400 font-medium">View My Startup</span>
          </motion.a>
        </div>

        {/* Professional Footer Detail */}
        <motion.div 
          className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <p className="text-gray-600 text-sm italic">
            "Quality is not an act, it is a habit." — Building in Sonipat, Haryana.
          </p>
          <div className="flex gap-6 opacity-50 hover:opacity-100 transition-opacity">
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="hover:text-blue-400"><FaGithub size={20}/></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;