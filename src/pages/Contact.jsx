import React from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import { AiFillInstagram } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="bg-[#373737] text-white p-5 md:p-10 lg:p-20">
      <div className="max-w-5xl py-64 mx-auto flex flex-col lg:flex-row">
        <div className="contact-left flex-1 mb-10 lg:mb-0">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className='text-[#FCE694]'>/</span>contacts
          </motion.h1>
          <motion.h3 
            className="text-xl text-[#FCE694] font-semibold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Who am I?
          </motion.h3>
          <motion.p 
            className="text-lg mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I’m interested in freelance opportunities. However, if you have any other requests or questions, don’t hesitate to contact me.
          </motion.p>
        </div>

        <div className="contact-right flex-1">
          <motion.h1 
            className="text-2xl text-[#FCE694] font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Message me here
          </motion.h1>
          <motion.h2 
            className="text-xl mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            +994-55-688-15-00
          </motion.h2>
          
          <motion.h1 
            className="text-xl font-semibold text-[#FCE694] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Social
          </motion.h1>
          
          <div className="social-icons flex items-center gap-4 justify-center md:justify-start text-3xl">
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
    </div>
  );
}

export default Contact;
