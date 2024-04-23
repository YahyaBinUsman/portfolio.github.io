import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl rounded-xl shadow-xl overflow-hidden border-4 border-futuristic-gold"
      >
        <motion.div
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120, duration: 1 }}
          className="p-8 text-futuristic-gold"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 120 }}
            className="text-5xl font-bold mb-6 border-b-2 border-futuristic-gold pb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About Yahya Bin Usman
          </motion.h2>

          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 120 }}
            className="mb-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-3xl font-bold mb-3">Introduction</h3>
            <p>
              Greetings, I am Yahya Bin Usman, a full-stack Python maestro from Lahore, Pakistan. With 8 months at the tech forefront, I innovate and dedicate robustly to projects.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 120 }}
            className="mb-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-3xl font-bold mb-3">What I Offer</h3>
            <ul className="list-disc pl-5">
              <li>Revolutionary full-stack Python development</li>
              <li>Dynamic web applications with React</li>
              <li>Powerful back-end systems with Django</li>
              <li>Sleek interfaces with Bootstrap and Tailwind</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8, type: 'spring', stiffness: 120 }}
            className="mb-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-3xl font-bold mb-3">Technical Proficiency</h3>
            <p>
              Proficient in Python (OOP), JavaScript, HTML, CSS, with expertise in React, Django, Bootstrap, and Tailwind.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0, type: 'spring', stiffness: 120 }}
            className="mb-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-3xl font-bold mb-3">Why Choose Me</h3>
            <p>
              My unbounded creativity and solid foundation deliver groundbreaking, scalable solutions, adaptable to technology’s evolution.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2, type: 'spring', stiffness: 120 }}
            className="mb-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-3xl font-bold mb-3">Location</h3>
            <p>Lahore, Pakistan - The nucleus of innovation and progress.</p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4, type: 'spring', stiffness: 120 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-3xl font-bold mb-3">Let's Connect</h3>
            <p>
              Eager for a creativity odyssey? Let’s converge our visions and shape the future together!
            </p>
          </motion.section>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
