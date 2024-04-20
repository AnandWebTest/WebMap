import React from 'react'

const About = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl">
    <div className="sm:w-1/2 p-10">
      <div className="image object-center text-center">
        <img src="https://i.imgur.com/WbQnbas.png" />
      </div>
    </div>
    <div className="sm:w-1/2 p-5">
      <div className="text">
        <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
          About us
        </span>
        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
          About <span className="text-indigo-600">Our Company</span>
        </h2>
        <p className="text-gray-700">
        At WebMap, we are passionate about simplifying the process of creating XML documents and wireframes. Our platform is designed to empower developers, designers, and project managers with intuitive tools that streamline their workflow and enhance productivity.
        </p>
      </div>
    </div>
  </div>
  
  )
}

export default About;