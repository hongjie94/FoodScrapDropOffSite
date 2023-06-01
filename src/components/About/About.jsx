import React from 'react'
import Contents from  './Contents'
import TeamSection from  './TeamSection'
import Navbar from  '../Layout/Navbar.jsx'

const About = () => {
  return (
    <div class="p-10 lg:px-40 lg:pt-20 h-auto flex-col flex">
      <div className='w-full'>
        <h1 className="text-[#DA4C31] text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-semibold">About</h1>
        <Navbar/>
      </div>
      <Contents/>
      <TeamSection/>
    </div>
  )
}

export default About