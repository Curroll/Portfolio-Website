import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")

    const formData = new FormData(event.target)
    formData.append("access_key", "d6b98fe4-0702-493b-a60d-0a0fc5e0438e")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult("✅ Form submitted successfully!")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult("❌ " + data.message)
    }
  }

  return (
    <motion.div
      id="contact"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-gray-100 dark:bg-neutral-900 transition-colors duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Connect with Me
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-Ovo text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        I&apos;d love to hear from you! Whether it&apos;s a question, feedback, or a
        collaboration idea — drop me a message below.
      </motion.p>

      <motion.form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            className="flex-1 p-3 outline-none border border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-black/50 dark:focus:ring-white/50"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            className="flex-1 p-3 outline-none border border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-black/50 dark:focus:ring-white/50"
          />
        </div>

        <textarea
          rows="6"
          name="message"
          placeholder="Enter Your Message"
          required
          className="w-full p-4 outline-none border border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 mb-6 focus:ring-2 focus:ring-black/50 dark:focus:ring-white/50"
        ></textarea>

        <motion.button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black dark:bg-white/10 text-white dark:text-gray-100 rounded-full mx-auto hover:bg-black/90 dark:hover:bg-white/20 duration-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit Now
          <Image
            src={assets.right_arrow_white}
            alt="arrow"
            className="w-4 "
          />
        </motion.button>

        <p
          className={`mt-4 text-center font-medium ${
            result.includes("✅")
              ? "text-green-600"
              : result.includes("❌")
              ? "text-red-600"
              : "text-gray-600 dark:text-gray-400"
          }`}
        >
          {result}
        </p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
