import React from 'react'

const HappenBanner = () => {
  return (
    <div>
      {/* Background image with overlay */}
    <div className="absolute inset-0 z-0">
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/images/happen-bann')" }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    </div></div>
  )
}

export default HappenBanner