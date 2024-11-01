import React from 'react';
import { motion } from 'framer-motion';
import logo from '../images/logo.png';
import { IoLogoGithub } from 'react-icons/io5';
import { AiFillInstagram } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      className="footer  bg-[#373737] text-white pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="footer-top flex flex-col md:flex-row justify-between items-center px-10 md:px-40 border-t border-t-white py-8">
        
        {/* Left Section */}
        <div className="left mb-8 md:mb-0">
          <motion.div
            className="wrapper flex items-center gap-4 mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="logo flex items-center gap-2">
              <img src={logo} alt="logo" className="w-8 h-8" />
              <h1 className="text-2xl font-semibold">Mazegit</h1>
            </div>
            <div className="mail text-[#FCE694]">
              <a href="mailto:mazegitt@gmail.com">mazegitt@gmail.com</a>
            </div>
          </motion.div>
          <motion.div
            className="profession text-sm sm:text-base text-gray-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1>Web Designer and Front-End Developer</h1>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="right text-center md:text-left">
          <motion.h1
            className="text-xl font-semibold text-[#FCE694] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Social
          </motion.h1>
          <div className="social-icons flex items-center gap-4 justify-center md:justify-start text-2xl">
            <motion.a
              href="https://github.com/mazegit1"
              className="hover:text-[#FCE694]"
              whileHover={{ scale: 1.1 }}
            >
              <IoLogoGithub />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/xelil_ovw/"
              className="hover:text-[#FCE694]"
              whileHover={{ scale: 1.1 }}
            >
              <AiFillInstagram />
            </motion.a>

            {/* Phone with Hover Animation */}
            <motion.div
              className="relative flex items-center"
              whileHover="hovered"
              initial="hidden"
              animate="visible"
            >
              <motion.a
                href="tel:+994556881500"
                className="hover:text-[#FCE694] flex items-center gap-1"
                whileHover={{ scale: 1.1 }}
              >
                <FaPhoneAlt />
              </motion.a>
              <motion.span
                className="text-gray-300 ml-2"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                  hovered: { opacity: 1, x: 10 },
                }}
                transition={{ duration: 0.3 }}
              >
                +994556881500
              </motion.span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="footer-bottom text-center text-gray-400 text-xl mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <h1>© Copyright 2022. Made by Elias</h1>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
