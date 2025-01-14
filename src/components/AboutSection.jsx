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
              src="/dyfzn/rofasys.png" alt="Inti" width={25} height={25}
            />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Fullstack Developer <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"><Link href="https://rofasys.co.id/">PT. Rofasys Mitra Prima </Link>(May 2024 - Present)</time>
          <ul className="space-y-1 ms-4 text-gray-500 list-disc dark:text-gray-400">
            <li>
              Developing Frontend with Angular.Js  either adding new features or bug fixes in the SIMAN V2 project.
            </li>
            <li>Building and developing API with Golang that will be consumed by Frontend in the SIMAN V2 project.
            </li>
          </ul>
        </li>
        <li className="mb-10 ms-9">
          <span className="absolute flex items-center justify-center w-9 h-9 bg-blue-100 rounded-full -start-5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <Image className=""
              src="/dyfzn/inti-dark.png" alt="Inti" width={25} height={25}
            />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Web Developer</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"><Link href="https://www.inti.co.id/">PT. Industri Telekomunikasi Indonesia </Link>(January 2023 - December 2023)</time>
          <ul className="space-y-1 ms-4 text-gray-500 list-disc dark:text-gray-400">
            <li>
              Develop an agent operational management system with CodeIgniter 3,  to manage EDC maintenance and repair data. To make it easier and more efficient for agents to maintain and repair EDC time.
            </li>
            <li>Build a system to register and manage participants of the International Smart Cities Conference with CodeIgniter 4, to make registration easier and more efficient.
            </li>
            <li>Build a monitoring and management system for projects that will be created or developed by the company with CodeIgniter 4, so that it can be more efficient in building or developing a system.
            </li>
            <li>Help build and develop systems according to requests from internal company users so that they can speed up processing time.</li>
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
              Develop an asset management system using the Simple Additive Weighting method and CodeIgniter 4 to recommend asset replacement or repair.
            </li>
            <li>Build a Covid-19 test management information system with CodeIgniter 3 to record employees who have carried out Covid-19 tests.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  )
}

export default AboutSection