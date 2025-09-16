import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Work = () => {
  const [showAll, setShowAll] = useState(false) // track if all projects are visible

  const projectsToShow = showAll ? workData : workData.slice(0, 3)

  return (
    <motion.div
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full min-h-screen px-[12%] py-10 scroll-mt-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      {/* Headings */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-Ovo text-gray-900 dark:text-white"
      >
        My Latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300"
      >
        A showcase of the projects I’ve built — from responsive front-end designs to full-stack
        applications. Each project reflects my skills in React.js, Next.js, Node.js, and Tailwind
        CSS. Highlights include my Weather App, To-Do List, Stopwatch, and this Portfolio itself.
      </motion.p>

      {/* Project Cards */}
      <motion.div
        className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5"
        role="list"
      >
        {projectsToShow.map((project, index) => (
          <motion.div
            key={index}
            role="listitem"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            viewport={{ once: true }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* Card Overlay */}
            <div className="bg-white dark:bg-[#1a1a1a] shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#444] w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold text-gray-900 dark:text-gray-100">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-400">{project.description}</p>
              </div>

              {/* Action Icon */}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="border rounded-full border-black dark:border-gray-300 w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#333] group-hover:bg-lime-300 transition">
                  <Image
                    src={assets.send_icon}
                    alt="Send project icon"
                    width={20}
                    height={20}
                    className="dark:invert"
                  />
                </div>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
      {workData.length > 3 && (
        <motion.button
          onClick={() => setShowAll(!showAll)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-max flex items-center justify-center gap-2 text-gray-700 dark:text-gray-200 border-[0.5px] border-gray-700 dark:border-gray-500 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-200 dark:hover:bg-neutral-700 duration-500"
        >
          {showAll ? "Show Less" : "Show More"}
          <Image
            src={showAll ? assets.right_arrow_bold: assets.right_arrow_bold}
            alt="Right arrow icon"
            width={16}
            height={16}
            className="dark:hidden"
          />
          <Image
            src={showAll ? assets.right_arrow_white : assets.right_arrow_white}
            alt="Right arrow icon"
            width={16}
            height={16}
            className="hidden dark:block"
          />
        </motion.button>
      )}
    </motion.div>
  )
}

export default Work
