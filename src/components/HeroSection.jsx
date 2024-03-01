"use client"
import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image'
import Link from "next/link"
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-content-center">
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1] text-4xl lg:text-6xl">Hi, I'm {""}
                </span> 
                </h1>
                <h3 className="text-4xl lg:text-6xl font-extrabold mb-4"><TypeAnimation
                    sequence={[
                        
                        'Deran Deriyana F',
                        1000,
                        'Web Developer',
                        1000,
                        'Content Creator',
                        1000
                    ]}
                    wrapper="span"
                    speed={10}
                    repeat={Infinity}
                    /></h3>
                <p className="text-[#ADB7BE] text-sm lg:text-lg">A graduated majoring in informatics engineering who are interested, enthusiastic and capable in the field of web development both as full stack, backend and frontend. by using the PHP programming language as the main programming language in building or developing systems or applications. and also try exploring  JavaScript.</p>
            <div className="mt-4">
                <button className="mb-2 lg:mb-0 px-3 py-2 lg:px-6 lg:py-3 rounded-lg mr-4 bg-gradient-to-br from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1] hover:bg-slate-200 text-gray-200 font-bold hover:text-white">
                    <ScrollLink
                        to="mywork"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        See My Work
                    </ScrollLink>
                </button>
                <button className="px-1 py-1 rounded-lg mr-4 bg-gradient-to-br from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1] font-bold hover:text-white">
                    <Link href="/dyfzn/deran-cv.pdf">
                    <span className="block bg-[#121212] hover:bg-slate-800 rounded-md px-2 py-1 lg:px-5 lg:py-2">Download CV</span>
                    </Link>
                    </button>
            </div>
            </div>
            <div className="hidden lg:block col-span-5 mt-5 lg:mt-0 ms-0 lg:ms-5 ">
            <div className="flex justify-center h-screen">
                <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative place-items-center">
                <Image className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2 w-[200px] lg:w-[300px]"
                src="/dyfzn/ab1_copy.png" alt="my profile" width={300} height={300}
                />
                </div>
            </div>

            </div>
        </div>
    </section>
  )
}

export default HeroSection