// import React from 'react'
/* eslint-disable */

const Hero = ({ title = 'Become a React Dev', subtitle = 'TODAY' }) => {
  return (
    <div>



      {/*make a hero*/}
      <div className="bg-gray-800 text-white p-10">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="text-xl">{subtitle}</p>
      </div>




    </div>

  )
}

export default Hero