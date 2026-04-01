import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Changes navbar style on scroll for that "premium" feel
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 transition-all duration-300 ${
        isScrolled 
          ? "mt-4 mx-auto max-w-4xl rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md py-3 shadow-2xl" 
          : "bg-transparent py-6"
      }`}
    >
      {/* Branding */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2 cursor-pointer"
      >
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-sm shadow-[0_0_15px_rgba(37,99,235,0.5)]">
          A
        </div>
        <h1 className="text-xl font-bold tracking-tighter">
          Arman<span className="text-blue-500">.</span>
        </h1>
      </motion.div>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        {["Home", "Projects", "Skills", "Experience", "Contact"].map((item, index) => (
          <motion.li
            key={index}
            className="relative cursor-pointer hover:text-white transition-colors group"
            whileHover={{ y: -2 }}
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
          </motion.li>
        ))}
      </ul>

      {/* Call to Action */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-xl text-xs font-bold shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all"
      >
        Hire Me
        <motion.a
            href="portfolio\public\Arman - QA Engineer & SDET Resume.pdf" 
            download="Arman_Resume"
            whileHover={{ scale: 1.05 }}
    w       hileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-xl text-xs font-bold shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all"
>
        Download CV
        </motion.a>
      </motion.a>


      {/* Mobile Toggle (Placeholder for future functionality) */}
      <div className="md:hidden text-gray-400">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
      </div>
    </motion.nav>
  );
}

export default Navbar;