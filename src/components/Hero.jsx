import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6 pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
  <div className="absolute top-[-100px] left-1/2 w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[120px] rounded-full -translate-x-1/2"></div>
</div>
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-500">Arman</span>
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl text-gray-400 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        SDET | Automation Engineer
      </motion.h2>

      <motion.p
        className="max-w-2xl text-gray-500 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        I build reliable automation systems that catch bugs before users do.
        Specialized in Cypress, POM, and real-world application testing.
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <a
          href="#projects"
          className="bg-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-gray-600 px-6 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;