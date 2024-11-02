import React, { useState } from 'react';
import { motion } from 'framer-motion';
import hacker from '../images/hacker.png';
import { FaPhoneAlt } from 'react-icons/fa';
import blurr from '../images/blurr.png';
import outdoora from '../images/outdoora.png';
import squareup from '../images/squareup.png';
import bubblebash from '../images/bubblebash.png';
import nikem from '../images/nikem.png';
import { SiWebauthn } from "react-icons/si";
import { FaCode } from "react-icons/fa6";
import webdev from '../images/webdev.jpg';
const projectData = [
  {
    img: blurr,
    title: 'Blurr | Mazegit',
    desc: 'ReactJs  TailwindCSS  ReactDOM  ReactIcons',
    link: 'https://blurr.netlify.app/',
    code: 'https://github.com/mazegit1/blurr-mazegit',
  },
  {
    img: outdoora,
    title: 'Outdoora | Mazegit',
    desc: 'ReactJs  TailwindCSS  ReactDOM  ReactIcons',
    link: 'https://outdoora.netlify.app/',
    code: 'https://github.com/mazegit1/outdoor',
  },
  {
    img: squareup,
    title: 'SquareUp | Mazegit',
    desc: 'ReactJs  TailwindCSS  ReactDOM  ReactIcons',
    link: 'https://squareupm.netlify.app/',
    code: 'https://github.com/mazegit1/squareup',
  },
  {
    img: bubblebash,
    title: 'BubbleBash | Mazegit',
    desc: 'ReactJs  TailwindCSS  ReactDOM  ReactIcons',
    link: 'https://bubblebash-mazegit.netlify.app/',
    code: 'https://github.com/mazegit1/bubblebash',
  },
  {
    img: nikem,
    title: 'Nikem | Mazegit',
    desc: 'ReactJs  TailwindCSS  ReactDOM  ReactIcons',
    link: 'https://nikem.netlify.app/',
    code: 'https://github.com/mazegit1/nike',
  },
];

const Home = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [showAll, setShowAll] = useState(false); // New state for toggling view

  const handleToggleProjects = () => {
    setShowAll(prev => !prev);
    setVisibleProjects(showAll ? 3 : projectData.length); // Toggle between 3 and total projects
  };

  return (
    <>
      <div className="hero bg-[#373737] text-white min-h-screen flex flex-col items-center justify-center px-32 md:flex-row">
        {/* Left Section */}
        <div className="hero-left md:w-1/2 mb-10 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Huseyn is a{' '}
            <span className="text-[#FCE694]">creative</span> {' '}
            <br />
            <span className="text-[#FCE694]">Junior front-end developer</span>
          </h1>
          <h3 className="text-lg text-gray-300 mb-6">
            He crafts responsive websites where technologies meet creativity
          </h3>

          {/* Contact Link with Hover Number Reveal */}
          <motion.div
            className="flex items-center text-xl gap-2 cursor-pointer"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <FaPhoneAlt className="text-xl text-[#FCE694]" />
            <motion.a
              href="tel:+994556881500"
              className="text-2xl font-semibold text-[#FCE694]"
            >
              Contact me!
            </motion.a>
            {/* Animated Phone Number on Hover */}
            <motion.span
              className="text-[#FCE694] ml-2"
              variants={{
                hover: { opacity: 1, x: 0 },
                rest: { opacity: 0, x: -20 }
              }}
              transition={{ duration: 0.3 }}
            >
              +994 55 688 1500
            </motion.span>
          </motion.div>

          {/* Quote Section */}
          <motion.div
            className="quote-box border border-gray-500 text-gray-200 p-4 mt-8 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-lg mb-2">
              <span className="text-[#FCE694] text-2xl">“</span> With great power comes great electricity bill <span className="text-[#FCE694] text-2xl">”</span>
            </p>
            <p className="text-right text-gray-400">- Dr. Who</p>
            <div className="absolute -bottom-3 -right-4 border-t border-r border-gray-500 w-6 h-6 bg-[#373737]"></div>
          </motion.div>
        </div>

        {/* Right Section with Image */}
        <div className="hero-right md:w-1/2 flex justify-center">
          <img src={hacker} alt="hacker illustration" className="" />
        </div>
      </div>

      <div className="projects px-5 md:px-20 py-10 md:py-20 bg-[#373737] text-white text-xl md:text-2xl">
      <div className="project-top flex items-center justify-between mb-8">
        <div className="title flex gap-2 items-center">
          <h1 className='text-4xl'><span className='text-[#FCE694]'>#</span>projects</h1>
          <div className="line hidden md:block w-[500px] h-[2px] bg-[#FCE694]"></div>
        </div>
        <motion.button
          className="bg-[#FCE694] text-black py-2 px-4 rounded hover:bg-[#E0C67B] transition"
          onClick={handleToggleProjects}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAll ? "View Less" : "View All"} {/* Toggle button text */}
        </motion.button>
      </div>

      <div className="project-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.slice(0, visibleProjects).map((project, index) => (
          <motion.div
            key={index}
            className="card bg-[#cecece] p-4 rounded-lg text-black shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img src={project.img} alt={project.title} className="w-full rounded-md" />
            <h3 className="mt-2 font-semibold">{project.desc}</h3>
            <h1 className="text-xl font-bold">{project.title}</h1>
            <div className="buttons flex flex-col sm:flex-row items-center gap-4 mt-4">
              <a href={project.link} className='flex items-center justify-center px-4 py-2 border-white border rounded-xl bg-black hover:bg-white hover:text-black transition-all ease-in-out duration-200 hover:border-black text-white gap-2 text-lg'>
                Open in web <SiWebauthn className='text-3xl' />
              </a>
              <a href={project.code} className='flex items-center justify-center px-4 py-2 border-black transition-all ease-in-out duration-200 hover:border-white hover:bg-black hover:text-white border rounded-xl bg-white text-black gap-2 text-lg'>
                Show the CODE <FaCode className='text-3xl' />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
      <div className="skills bg-[#373737] text-white py-20 px-6">
      <div className="title flex gap-2 items-center mb-10">
        <h1 className='text-4xl'>
          <span className='text-[#FCE694]'>#</span>skills
        </h1>
        <div className="line w-full max-w-[500px] h-[2px] bg-[#FCE694]"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div
          className="skill border border-gray-100 rounded-lg p-6 bg-[#444] hover:bg-[#FCE694] transition duration-300 hover:text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className='text-xl font-semibold border-b border-b-gray-100 pb-2 mb-2'>Language</h1>
          <h3 className='text-gray-300'>Python, Javascript</h3>
        </motion.div>

        <motion.div
          className="skill border border-gray-100 rounded-lg p-6 bg-[#444] hover:bg-[#FCE694] transition duration-300 hover:text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className='text-xl font-semibold border-b border-b-gray-100 pb-2 mb-2'>Databases</h1>
          <h3 className='text-gray-300'>SQLite, PostgreSQL, Mongo</h3>
        </motion.div>

        <motion.div
          className="skill border border-gray-100 rounded-lg p-6 bg-[#444] hover:bg-[#FCE694] transition duration-300 hover:text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className='text-xl font-semibold border-b border-b-gray-100 pb-2 mb-2'>Tools</h1>
          <h3 className='text-gray-300'>VSCode, VS Studio, PyCharm</h3>
        </motion.div>

        <motion.div
          className="skill border border-gray-100 rounded-lg p-6 bg-[#444] hover:bg-[#FCE694] transition duration-300 hover:text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1 className='text-xl font-semibold border-b border-b-gray-100 pb-2 mb-2'>Other</h1>
          <h3 className='text-gray-300'>HTML, CSS, SASS, SCSS, TailwindCSS</h3>
        </motion.div>

        <motion.div
          className="skill border border-gray-100 rounded-lg p-6 bg-[#444] hover:bg-[#FCE694] transition duration-300 hover:text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h1 className='text-xl font-semibold border-b border-b-gray-100 pb-2 mb-2'>Frameworks</h1>
          <h3 className='text-gray-300'>ReactJS, VueJS</h3>
        </motion.div>
      </div>
    </div>
    <div className="about flex flex-col md:flex-row items-center justify-between px-5 md:px-20 py-10 md:py-20 bg-[#373737] text-white">
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
    </>
  );
};

export default Home;
