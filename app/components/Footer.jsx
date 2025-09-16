import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-neutral-900">
      {/* Top Section */}
      <div className="text-center py-8">
        {/* Light mode logo */}
        <Image
          src={assets.logo}
          alt="logo light"
          className="w-36 mx-auto mb-2 dark:hidden"
        />

        {/* Dark mode logo */}
        <Image
          src={assets.logo_dark}
          alt="logo dark"
          className="w-36 mx-auto mb-2 hidden dark:block"
        />

        <div className="w-max flex items-center gap-2 mx-auto text-gray-700 dark:text-gray-300">
          {/* Light mode icon */}
          <Image
            src={assets.mail_icon}
            alt="mail icon"
            className="w-6 dark:hidden"
          />

          {/* Dark mode icon */}
          <Image 
            src={assets.mail_icon_dark}
            alt="mail icon dark"
            className="w-6 hidden dark:block"
          />

          <a
            href="mailto:dhankarprince02@gmail.com"
            className="hover:underline"
          >
            dhankarprince02@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 dark:border-gray-700 mx-[10%] py-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Prince Dhankar. All rights reserved.
        </p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Curroll"
              className="hover:underline text-gray-700 dark:text-gray-300"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/princedhankar"
              className="hover:underline text-gray-700 dark:text-gray-300"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
