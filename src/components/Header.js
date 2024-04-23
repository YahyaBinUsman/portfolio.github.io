import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  position: relative;
  color: inherit;
  text-decoration: none;

  &:hover::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px; /* Adjust this value to change the position of the underline */
    width: 100%;
    height: 2px; /* Adjust this value to change the thickness of the underline */
    background-color: #ffd700; /* Gold color */
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="text-futuristic-gold font-headline shadow-around w-full"
    >
      <div className="bg-futuristic-black container mx-auto flex items-center justify-between p-5" >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold"
        >
          Yahya's Portfolio
        </motion.h1>
        <nav>
          <div className="md:hidden">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </motion.button>
          </div>
          <ul className={`md:flex md:items-center md:space-x-8 ${isOpen ? 'block' : 'hidden'}`}>
            <motion.li 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <StyledLink to="/">Home</StyledLink>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <StyledLink to="/about">About</StyledLink>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <StyledLink to="/projects">Projects</StyledLink>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <StyledLink to="/experience">Expertise</StyledLink>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <StyledLink to="/contact">Contact</StyledLink>
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
