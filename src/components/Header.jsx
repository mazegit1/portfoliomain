import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full text-white px-6 sm:px-10 py-4 transition-all duration-300 z-20 ${
        isMenuOpen ? 'bg-[#373737]/80 backdrop-blur-md' : 'bg-[#373737]'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <div className="flex items-center justify-between">
        {/* Logo and Brand Name */}
        <a href="/" className="flex items-center gap-4 text-2xl sm:text-4xl font-semibold">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <h1>Mazegit</h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-lg sm:text-2xl">
          <a href="/" className="hover:text-[#FCE694]"><span className="text-[#FCE694]">#</span>home</a>
          <a href="/work" className="hover:text-[#FCE694]"><span className="text-[#FCE694]">#</span>works</a>
          <a href="/about" className="hover:text-[#FCE694]"><span className="text-[#FCE694]">#</span>about-me</a>
          <a href="/contact" className="hover:text-[#FCE694]"><span className="text-[#FCE694]">#</span>contacts</a>
        </nav>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-2xl focus:outline-none">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col gap-4 mt-4 text-lg"
          >
            <a href="/" onClick={toggleMenu} className="hover:text-[#FCE694]"><span className="text-[#FCE694]">#</span>home</a>
            <a href="/work" onClick={toggleMenu} className="hover:text-[#FCE694]"><span className="text-[#FCE694]">#</span>works</a>
            <a href="/about" onClick={toggleMenu} className="hover:text-[#FCE694]"><span className="text-[#FCE694]">#</span>about-me</a>
            <a href="/contact" onClick={toggleMenu} className="hover:text-[#FCE694]"><span className="text-[#FCE694]">#</span>contacts</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
