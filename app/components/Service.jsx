import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Service = () => {
  return (
    <motion.div
      id="services"
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
        What I Offer
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-Ovo text-gray-900 dark:text-white"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300"
      >
        I’m Prince Dhankar, a passionate Full-Stack Developer specializing in building scalable web
        applications. With strong skills in React.js, Next.js, Node.js, Express.js, and Tailwind CSS,
        I create responsive, high-performance solutions with clean, maintainable code.
      </motion.p>

      {/* Service Cards */}
          <motion.div
      className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10"
      role="list"
    >
      {serviceData.map(({ icon, title, description, link }, index) => (
        <motion.div
          key={index}
          role="listitem"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 * index }}
          viewport={{ once: true }}
          className="border border-gray-300 dark:border-gray-700 rounded-lg px-9 py-12 
                    hover:shadow-xl cursor-pointer bg-white dark:bg-gray-800 
                    hover:bg-neutral-200 dark:hover:bg-neutral-700 
                    hover:-translate-y-1 duration-500"
        >
        <Image
          src={icon}
          alt={`${title} icon`}
          width={40}
          height={40}
          className="w-10 dark:invert"
        />

          <h3 className="text-lg my-4 text-gray-700 dark:text-gray-200">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-5">
            {description}
          </p>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read more about ${title}`}
            className="flex items-center gap-2 text-sm mt-5 text-blue-600 
                      dark:text-blue-400 hover:underline"
          >
            Read more
            {/* Light mode arrow */}
            <Image
              src={assets.right_arrow}
              alt="Right arrow icon"
              width={16}
              height={16}
              className="dark:hidden"
            />
            {/* Dark mode arrow */}
            <Image
              src={assets.right_arrow_white}
              alt="Right arrow icon"
              width={16}
              height={16}
              className="hidden dark:block"
            />
          </a>
        </motion.div>
      ))}
    </motion.div>

    </motion.div>
  )
}

export default Service
