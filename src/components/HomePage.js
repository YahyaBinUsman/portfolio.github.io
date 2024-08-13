import React, { useState, useEffect } from 'react';
import yahyaImage from '../images/yahya.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  'Full Stack Python Developer',
  'MERN Stack Developer',
  'Django Developer',
  'Frontend Developer'
];

const HomePage = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let role = roles[currentRoleIndex];
    let charIndex = 0;
    let typingInterval = setInterval(() => {
      setDisplayedRole(role.slice(0, charIndex));
      charIndex++;
      if (charIndex > role.length) {
        clearInterval(typingInterval);
      }
    }, 100); // Typing speed

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-purple-800 to-black text-futuristic-gold">
      <div className="flex flex-col items-center justify-center w-full px-8 py-12 md:py-20 max-w-screen-lg">
        <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-8 md:space-y-0">
          <div className="flex-1 text-left">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-purple-700 shadow-none"
              style={{ wordBreak: 'break-word', lineHeight: '1.5' }}
            >
              {displayedRole}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-lg md:text-xl mt-6 mb-12 text-left"
            >
              Embark on a Journey of Unprecedented Luxury and Innovation.
            </motion.p>
          </div>
          <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-8 border-futuristic-gold shadow-xl transform hover:scale-105 transition duration-500 ease-in-out">
            <motion.img
              src={yahyaImage}
              alt="Profile"
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-8 py-16 w-full max-w-screen-xl">
        {/* New Section 1: Luxurious Creations */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="p-10 rounded-2xl bg-futuristic-purple border-4 border-futuristic-gold shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
          >
            <h2 className="text-2xl font-extrabold mb-4">Luxurious Creations</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Indulge in our opulent collection of bespoke creations meticulously crafted to elevate your lifestyle.
            </p>
          </motion.div>
        </AnimatePresence>
        {/* New Section 2: Quantum Innovations */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="p-10 rounded-2xl bg-futuristic-purple border-4 border-futuristic-gold shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
          >
            <h2 className="text-2xl font-extrabold mb-4">Quantum Innovations</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Experience breakthroughs at the forefront of technology, where science fiction meets reality.
            </p>
          </motion.div>
        </AnimatePresence>
        {/* New Section 3: Cosmic Exploration */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="p-10 rounded-2xl bg-futuristic-purple border-4 border-futuristic-gold shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
          >
            <h2 className="text-2xl font-extrabold mb-4">Cosmic Exploration</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Embark on an interstellar journey to uncover the mysteries of the universe, with our cutting-edge space exploration technologies.
            </p>
          </motion.div>
        </AnimatePresence>
        {/* New Section 4: Cybernetic Wonders */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="p-10 rounded-2xl bg-futuristic-purple border-4 border-futuristic-gold shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
          >
            <h2 className="text-2xl font-extrabold mb-4">Cybernetic Wonders</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Immerse yourself in a world of cybernetic marvels, where human and machine merge to redefine possibilities.
            </p>
          </motion.div>
        </AnimatePresence>
        {/* New Section 5: Virtual Utopia */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="p-10 rounded-2xl bg-futuristic-purple border-4 border-futuristic-gold shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
          >
            <h2 className="text-2xl font-extrabold mb-4">Virtual Utopia</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Step into our virtual realm, where dreams manifest into reality, and explore boundless realms of imagination.
            </p>
          </motion.div>
        </AnimatePresence>
        {/* New Section 6: Future Trends */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="p-10 rounded-2xl bg-futuristic-purple border-4 border-futuristic-gold shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
          >
            <h2 className="text-2xl font-extrabold mb-4">Future Trends</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Stay ahead of the curve with our insights into future trends shaping industries and societies.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HomePage;
