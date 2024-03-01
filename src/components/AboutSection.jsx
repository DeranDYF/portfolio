import React from 'react'
import Link from "next/link"
import Image from 'next/image'
const AboutSection = () => {
  return (
    <div className="mx-auto grid grid-cols-1 lg:grid-cols-1">
        <h1 className="text-white mt-4 lg:mt-12 mb-12 text-2xl lg:text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1] text-2xl lg:text-4xl">Experience
            </span> 
        </h1>
    <ol className="relative border-s ms-5 mb-10 border-gray-200 dark:border-gray-700">
      <li className="mb-10 ms-9">
        <span className="absolute flex items-center justify-center w-9 h-9 bg-blue-100 rounded-full -start-5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <Image className=""
                src="/dyfzn/inti-dark.png" alt="Inti" width={25} height={25}
                />
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Web Developer <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"><Link href="https://www.inti.co.id/">PT. Industri Telekomunikasi Indonesia </Link>(January 2023 - December 2023)</time>
        <ul className="space-y-1 ms-4 text-gray-500 list-disc dark:text-gray-400">
            <li>
            Develop Operational System and Agen Service for monitoring the distribution, maintenance, and repair of EDC with agent who partner with the company.
            </li>
            <li>Build a registration and management system for the International Smart City Conference.
            </li>
            <li>Build a project monitoring system to record the progress of the project that developers work on, both internal and external projects.
            </li>
            <li>Build internal systems based on company or user requests to support employee performance.</li>
        </ul>
      </li>
      <li className="mb-10 ms-9">
        <span className="absolute flex items-center justify-center w-9 h-9 bg-blue-100 rounded-full -start-5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <Image className=""
                src="/dyfzn/intens-logo.png" alt="Inti" width={25} height={25}
                />
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Web Developer</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"><Link href="https://www.intens.co.id">PT. Inti Konten Indonesia </Link>(September 2021 - August 2022)</time>
        <ul className="space-y-1 ms-4 text-gray-500 list-disc dark:text-gray-400">
            <li>
            Build and develop an asset management information system to manage assets and feature recommendations for asset replacement or repair using the Simple Additive Weighting method.
            </li>
            <li>Build a Covid test management information system to record employees who have carried out covid tests.
            </li>
        </ul>
      </li>
    </ol>
    </div>
  )
}

export default AboutSection