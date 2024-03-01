import React from 'react'
import Link from "next/link"

const ContactSection = () => {
  return (
      <div className="container px-9 py-12 mx-auto">
        <div>
          <h1 className="text-white text-2xl lg:text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1] text-2xl lg:text-4xl">Contact
            </span> 
        </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
        </div>
        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Contact me using email.</p>
              <p className="mt-1 text-sm text-blue-500 dark:text-blue-400"><Link href="mailto:deranderiyana@gmail.com">deranderiyana@.com</Link></p>
            </div>
            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Contact me using telephone.</p>
              <p className="mt-1 text-sm text-blue-500 dark:text-blue-400">+62 8211 5667 699</p>
            </div>
          </div>

          <div className="p-4 py-6 rounded-lg dark:bg-[#121212] md:p-8">
          <form>
            <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                <input type="text" placeholder="Deran" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                <input type="text" placeholder="Deriyana" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
            </div>
            <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                <input type="email" placeholder="deranderiyana@gmail.com" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
            </div>

            <button className="w-full px-6 py-3 rounded-lg mt-4 bg-gradient-to-br from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1] hover:bg-slate-200 text-gray-200 font-bold hover:text-white">
            Send Message
            </button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default ContactSection