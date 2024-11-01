import React, { useState } from 'react'; // Import useState
import { motion } from 'framer-motion'; // Ensure you import motion for animations
import { SiWebauthn } from 'react-icons/si'; // Ensure you import the required icons
import { FaCode } from 'react-icons/fa'; // Ensure you import the required icons
import blurr from '../images/blurr.png';
import outdoora from '../images/outdoora.png';
import squareup from '../images/squareup.png';
import bubblebash from '../images/bubblebash.png';
import nikem from '../images/nikem.png';
const Work = () => {
  const projectData = [
    {
      img: blurr, // Update this with the actual image import
      title: 'Blurr | Mazegit',
      desc: 'ReactJs  TailwindCSS  ReactDOM  ReactIcons',
      link: 'https://blurr.netlify.app/',
      code: 'https://github.com/mazegit1/blurr-mazegit',
    },
    {
      img: outdoora, // Update this with the actual image import
      title: 'Outdoora | Mazegit',
      desc: 'ReactJs  TailwindCSS  ReactDOM  ReactIcons',
      link: 'https://outdoora.netlify.app/',
      code: 'https://github.com/mazegit1/outdoor',
    },
    {
      img: squareup, // Update this with the actual image import
      title: 'SquareUp | Mazegit',
      desc: 'ReactJs  TailwindCSS  ReactDOM  ReactIcons',
      link: 'https://squareupm.netlify.app/',
      code: 'https://github.com/mazegit1/squareup',
    },
    {
      img: bubblebash, // Update this with the actual image import
      title: 'BubbleBash | Mazegit',
      desc: 'ReactJs  TailwindCSS  ReactDOM  ReactIcons',
      link: 'https://bubblebash-mazegit.netlify.app/',
      code: 'https://github.com/mazegit1/bubblebash',
    },
    {
      img: nikem, // Update this with the actual image import
      title: 'Nikem | Mazegit',
      desc: 'ReactJs  TailwindCSS  ReactDOM  ReactIcons',
      link: 'https://nikem.netlify.app/',
      code: 'https://github.com/mazegit1/nike',
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(3);
  const [showAll, setShowAll] = useState(false); // New state for toggling view

  const handleToggleProjects = () => {
    setShowAll(prev => !prev);
    setVisibleProjects(showAll ? 3 : projectData.length); // Toggle between 3 and total projects
  };

  return (
    <div className="projects  px-5 md:px-20 py-10 md:py-56 bg-[#373737] text-white text-xl md:text-2xl">
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
    
  );
}

export default Work;
