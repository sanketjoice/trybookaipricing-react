import React from 'react'

export const Header = () => {
  return (
    <div className="">
        <ul className=" list-none flex flex-col lg:flex-row py-6  bg-[#1E293B] lg:py-7 text-[#e2e8f0] justify-center text-center space-x-9 font-sans font-medium ">
            <li className="hover:text-[#22d3ee] transition duration-300 pb-3">OVERVIEW</li>
            <li className="hover:text-[#22d3ee] transition duration-300 pb-3">AUTHENTICATION</li>
            <li className="hover:text-[#22d3ee] transition duration-300 pb-3">ENDPOINTS</li>
            <li className="hover:text-[#22d3ee] transition duration-300 pb-3">TUTORIAL</li>
            <li className="hover:text-[#22d3ee] transition duration-300 pb-3">CODE EXAMPLES</li>
            <li className="text-[#22d3ee] transition duration-300 pb-3">PRICING</li>
        </ul>
    </div>
  )
}
