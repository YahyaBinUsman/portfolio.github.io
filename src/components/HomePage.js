import React from 'react';
import yahyaImage from '../images/yahya.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br text-futuristic-gold overflow-x-hidden">
      <br />
      <br />
      <br />
      <br />
      <div className="relative flex flex-col items-center justify-center mt-[-50px]">
        <div className="w-52 h-52 rounded-full overflow-hidden border-8 border-futuristic-gold mb-6 flex-shrink-0">
          <motion.img
            src={yahyaImage}
            alt="Profile"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            exit={{ opacity: 0 }}
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl font-bold mt-6 tracking-wide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Welcome to Yahya's Portfolio
        </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-xl mb-12"
      >
        Embark on a Journey of Unprecedented Luxury and Innovation.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* New Section 1: Luxurious Creations */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="p-8 rounded-lg bg-futuristic-purple border-4 border-futuristic-gold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-3xl font-bold mb-4">Luxurious Creations</h2>
            <p className="text-lg">Indulge in our opulent collection of bespoke creations meticulously crafted to elevate your lifestyle.</p>
          </motion.div>
        </AnimatePresence>
        {/* New Section 2: Quantum Innovations */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="p-8 rounded-lg bg-futuristic-purple border-4 border-futuristic-gold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-3xl font-bold mb-4">Quantum Innovations</h2>
            <p className="text-lg">Experience breakthroughs at the forefront of technology, where science fiction meets reality.</p>
          </motion.div>
        </AnimatePresence>
        {/* New Section 3: Cosmic Exploration */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="p-8 rounded-lg bg-futuristic-purple border-4 border-futuristic-gold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-3xl font-bold mb-4">Cosmic Exploration</h2>
            <p className="text-lg">Embark on an interstellar journey to uncover the mysteries of the universe, with our cutting-edge space exploration technologies.</p>
          </motion.div>
        </AnimatePresence>
        {/* New Section 4: Cybernetic Wonders */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="p-8 rounded-lg bg-futuristic-purple border-4 border-futuristic-gold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-3xl font-bold mb-4">Cybernetic Wonders</h2>
            <p className="text-lg">Immerse yourself in a world of cybernetic marvels, where human and machine merge to redefine possibilities.</p>
          </motion.div>
        </AnimatePresence>
        {/* New Section 5: Virtual Utopia */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="p-8 rounded-lg bg-futuristic-purple border-4 border-futuristic-gold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-3xl font-bold mb-4">Virtual Utopia</h2>
            <p className="text-lg">Step into our virtual realm, where dreams manifest into reality, and explore boundless realms of imagination.</p>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="p-8 rounded-lg bg-futuristic-purple border-4 border-futuristic-gold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-3xl font-bold mb-4">Future Trends</h2>
            <p className="text-lg">Stay ahead of the curve with our insights into future trends shaping industries and societies.</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <br/>
      <br/>
      <br/>
    </div>

  );
};

export default HomePage;
