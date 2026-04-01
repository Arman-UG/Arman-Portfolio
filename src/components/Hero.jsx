import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-[#030303] text-white text-center px-6 pt-20 overflow-hidden">
      
      {/* 1. THE GRID & GLOW EFFECT */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
        <div className="absolute top-[-10%] left-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[140px] rounded-full -translate-x-1/2"></div>
      </div>

      {/* 2. ENHANCED BADGE */}
      <motion.span 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20 mb-6"
      >
        Available for new projects
      </motion.span>

      {/* 3. DYNAMIC TYPING HEADLINE */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Arman</span>
      </motion.h1>

      <motion.div
        className="text-2xl md:text-3xl font-medium text-gray-300 mb-6 h-[40px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <TypeAnimation
          sequence={[
            'SDET & Automation Engineer', 1500,
            'Founder of Arrautomation', 1500,
            'Building Reliable Systems', 1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      {/* 4. REFINED DESCRIPTION */}
      <motion.p
        className="max-w-xl text-gray-400 text-lg mb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Specializing in <span className="text-white">Cypress, Selenium, and HR Automation</span>. 
        I architect frameworks that bridge the gap between rapid development and rock-solid stability.
      </motion.p>

      {/* 5. INTERACTIVE CTA BUTTONS */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all bg-blue-600 rounded-xl hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
        >
          Explore Work
        </motion.a>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center px-8 py-3 font-semibold text-gray-300 border border-white/10 rounded-xl backdrop-blur-sm transition-all"
        >
          Get in Touch
        </motion.a>
      </motion.div>

    </section>
  );
}

export default Hero;