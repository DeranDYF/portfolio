import React from 'react'
import {CodeBracketIcon} from '@heroicons/react/24/solid'
import Link from 'next/link'
const ProjectCard = ({imgUrl, title, desc, gitUrl}) => {
  return (
    <div>
        <div className="h-60 md:h-60 lg:h-60 mb-2 rounded-lg relative group"
        style={{ background : `url(${imgUrl})`, backgroundSize: "cover"}}>
            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#121212] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-700">
                <Link href={gitUrl} className="h-14 w-14 border-2 relative rounded-full border-grey-slate-400 hover:border-white group/link">
                    <CodeBracketIcon className="h-9 w-9 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>
                </Link>
            </div>
        </div>
        <div className="mt-2 mb-4 lg:mb-0">
          <h1 className="font-bold"><Link href={gitUrl}>{title}</Link></h1>
        </div>
    </div>
  )
}

export default ProjectCard