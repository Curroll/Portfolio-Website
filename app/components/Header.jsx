import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between children
      delayChildren: 0.2,   // initial delay before first
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 12 } },
}

const Header = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      {/* Profile Image */}
      <motion.div variants={item}>
        <Image
          src={assets.profile_img}
          alt="profile image"
          className="rounded-full w-32"
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        variants={item}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-serif text-gray-900 dark:text-white"
      >
        Hi! I am Prince Dhankar{' '}
        <Image src={assets.hand_icon} alt="hand icon" className="w-6" />
      </motion.h3>

      {/* Title */}
      <motion.h1
        variants={item}
        className="text-3xl sm:text-6xl lg:text-[66px] font-serif text-gray-900 dark:text-white"
      >
        Full-Stack Developer.
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={item}
        className="max-w-2xl mx-auto font-serif text-gray-600 dark:text-gray-300"
      >
        Passionate about building scalable and user-friendly applications using React, Next.js,
        Node.js, Express.js, and Tailwind CSS. Always eager to learn and create impactful solutions.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          variants={item}
          href="#contact"
          className="px-10 py-3 rounded-full flex items-center gap-2
            bg-black text-white dark:bg-white dark:text-black
            border border-transparent dark:border-gray-700
            transition-colors duration-300"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="arrow icon"
            className="w-4 invert-0 dark:invert"
          />
        </motion.a>

        <motion.a
          variants={item}
          href="/Prince_Resume.pdf"
          download
          className="px-10 py-3 rounded-full flex items-center gap-2
            border border-gray-500 text-gray-800 dark:text-gray-200
            transition-colors duration-300"
        >
          My Resume
          <Image src={assets.download_icon} alt="download icon" className="w-4 dark:invert" />
        </motion.a>
      </div>
    </motion.div>
  )
}

export default Header
