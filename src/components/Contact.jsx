import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-8 md:px-20 text-center"
    >
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-gray-400 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Interested in working together or hiring me? Let's connect.
      </motion.p>

      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="mailto:your-email@example.com"
          className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-300"
        >
          <FaEnvelope />
          Email Me
        </a>

        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-700"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 px-6 py-2 rounded-lg hover:bg-gray-700"
        >
          <FaGithub />
          GitHub
        </a>
      </motion.div>
    </section>
  );
}

export default Contact;