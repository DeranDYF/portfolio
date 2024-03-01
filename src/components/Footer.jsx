import React from 'react'
import Link from "next/link"
import * as Unicons from '@iconscout/react-unicons';
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
        <div className="grid grid-cols-1 gap-0 my-3 lg:grid-cols-2">
            <div>
            <p className="mb-4 lg:mb-0 text-center lg:text-start mt-0 lg:mt-2">
            © {currentYear}. Design with Next Js by <a href="https://instagram.com/derandyfzn_" target="_blank" className="text-reset">Derandyfzn</a>.
        </p>
            </div>
            <div className="text-center lg:text-end content-end me-0 lg:me-8">
            <button className="px-1 py-1 lg:px-2 lg:py-2 rounded-lg mr-2 bg-gradient-to-br from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1] font-bold hover:text-white">
            <Link href="mailto:deranderiyana@gmail.com">
                <Unicons.UilEnvelope />
            </Link>
            </button>
            <button className="px-1 py-1 lg:px-2 lg:py-2 rounded-lg mr-2 bg-gradient-to-br from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1] font-bold hover:text-white">
            <Link href="https://github.com/DeranDYF/">
                <Unicons.UilGithub  />
            </Link>
            </button>
            <button className="px-1 py-1 lg:px-2 lg:py-2 rounded-lg mr-2 bg-gradient-to-br from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1] font-bold hover:text-white">
            <Link href="https://www.linkedin.com/in/deran-deriyana-fauzzan-21a65b251/">
                <Unicons.UilLinkedin />
            </Link>
            </button>
            <button className="px-1 py-1 lg:px-2 lg:py-2 rounded-lg mr-2 bg-gradient-to-br from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1] font-bold hover:text-white">
            <Link href="https://www.instagram.com/derandyfzn_/">
                <Unicons.UilInstagram />
            </Link>
            </button>
            <button className="px-1 py-1 lg:px-2 lg:py-2 rounded-lg mr-2 bg-gradient-to-br from-[#D16BA5] via-[#86A8E7] to-[#5FFBF1] font-bold hover:text-white">
            <Link href="https://www.facebook.com/DeranDYF">
                <Unicons.UilFacebook />
            </Link>
            </button>
            </div>
        </div>

  )
}

export default Footer