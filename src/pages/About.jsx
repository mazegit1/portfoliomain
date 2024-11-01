import React from 'react'
import { motion } from 'framer-motion'; // Ensure you import motion for animations
import webdev from '../images/webdev.jpg'
const About = () => {
  return (
    <div className="about flex flex-col md:flex-row items-center justify-between px-5 md:px-20 py-10 md:py-56 bg-[#373737] text-white">
    <motion.div
      className="info flex flex-col max-w-lg"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="title flex gap-2 items-center mb-6">
        <h1 className='text-4xl'>
          <span className='text-[#FCE694]'>#</span>about-me
        </h1>
        <div className="line w-full max-w-[500px] h-[2px] bg-[#FCE694]"></div>
      </div>
      <div className="text space-y-4">
        <h1 className="text-2xl font-bold">Hello, I'm Huseyn!</h1>
        <h3 className="text-lg">
          I am a Junior Front-End Developer based in Baku, Azerbaijan. I can transform any design into responsive, functional, and animated websites.
        </h3>
        <h3 className="text-lg">
          Transforming my creativity and knowledge into websites has been my passion for over a year and a half.
        </h3>
        <h3 className="text-lg">
          Hoping to enhance my skills even further.
        </h3>
      </div>
    </motion.div>
    <motion.div
      className="image flex justify-center mt-10 md:mt-0"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <img
        src={webdev}
        alt="Web Developer"
        className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        style={{ width: '100%', maxWidth: '600px', height: 'auto' }} // Adjust width for responsiveness
      />
    </motion.div>
  </div>
  )
}

export default About
