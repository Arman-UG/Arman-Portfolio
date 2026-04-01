import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      className="flex justify-between items-center p-5 bg-black text-white"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-xl font-bold">Arman</h1>

      <ul className="flex gap-6">
        {["Home", "Projects", "Contact"].map((item, index) => (
          <motion.li
            key={index}
            className="cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;