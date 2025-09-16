import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <motion.h4
       initial={{opacity:0,y: -20}}
       whileInView={{opacity:1,y:0}} 
       transition={{duration:0.5, delay:0.3}}
       className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300">
        Introduction
      </motion.h4>
      <motion.h2
      initial={{opacity:0,y: -20}}
      whileInView={{opacity:1,y:0}} 
      transition={{duration:0.5, delay:0.5}} 
      className="text-center text-5xl font-Ovo text-gray-900 dark:text-white">
        About Me
      </motion.h2>

      <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}} 
        transition={{duration:0.8}} 
       className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* User Image */}
        <motion.div 
          initial={{opacity:0,scale: 0.9}}
          whileInView={{opacity:1,scale:1}} 
          transition={{duration:0.6}} 
        className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="Profile picture of Prince Dhankar"
            className="w-full rounded-3xl"
            priority
          />
        </motion.div>

        {/* Info and Tools */}
        <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1}} 
          transition={{duration:0.6, delay:0.8}} 
        className="flex-1">
          <p className="text-gray-700 dark:text-gray-300">
            I am Prince Dhankar, a passionate developer currently focusing on full-stack development. I enjoy creating web applications with clean and efficient code.
          </p>

          {/* Info List */}
          <motion.ul
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 1 }}
  className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mt-4"
  role="list"
>
  {infoList.map(({ icon, iconDark, title, description }, index) => (
    <motion.li
      whileHover={{ scale: 1.05 }}
      key={index}
      role="listitem"
      className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:-translate-y-1 duration-500 hover:shadow-lg"
    >
      {/* Light mode icon */}
      {iconDark ? (
        <>
          <Image src={icon} alt={`${title} icon`} className="w-7 mt-3 dark:hidden" />
          <Image src={iconDark} alt={`${title} icon`} className="w-7 mt-3 hidden dark:block" />
        </>
      ) : (
        <Image src={icon} alt={`${title} icon`} className="w-7 mt-3" />
      )}

      <h3 className="my-4 font-semibold text-gray-700 dark:text-gray-200">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        {description}
      </p>
    </motion.li>
  ))}
          </motion.ul>


          {/* Tools */}
          <motion.h4
        initial={{y:20,opacity:0}}
          whileInView={{y:0, opacity:1}} 
          transition={{duration:0.5, delay:1.3}} 
          className="my-6 text-gray-700 dark:text-gray-300 font-Ovo">Tools I Use</motion.h4>
          <motion.ul
           initial={{opacity:0}}
           whileInView={{opacity:1}} 
           transition={{duration:1.5, delay:0.6}} 
          className="flex items-center gap-3 sm:gap-5 flex-wrap">
            {toolsData.map((tool, index) => (
              <motion.li
              whileHover={{scale:1.1}}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-gray-600 cursor-pointer rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                <Image src={tool} alt={`Tool icon ${index + 1}`} className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
