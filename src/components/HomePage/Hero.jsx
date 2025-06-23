import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20">
      <div className="absolute inset-0">
        <svg className="absolute left-0 top-0 opacity-20" viewBox="0 0 200 200">
          <path fill="#FFFFFF" d="M42.7,-73.2C55.9,-67.3,67.7,-57.1,75.6,-44.2C83.5,-31.3,87.6,-15.7,86.6,-0.6C85.5,14.5,79.3,29,70.1,41.1C60.9,53.2,48.7,62.9,35.4,69.5C22.1,76.1,7.7,79.5,-6.9,78.8C-21.5,78,-36.3,73,-48.4,64.5C-60.5,56,-69.9,44,-75.7,30.5C-81.5,17,-83.7,2,-80.8,-11.7C-77.9,-25.4,-70,-37.8,-59.1,-45.4C-48.2,-53,-34.3,-55.8,-22,-59.7C-9.7,-63.6,1,-68.6,13.4,-71.5C25.8,-74.4,39.8,-75.2,42.7,-73.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 id="Hero_2" className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Find Your Dream
                <span className="animate-slideUp inline-block"> Home</span>
              </span>
            </h1>
            <p id="Hero_3" className="text-blue-100 text-lg mb-8">Discover the perfect property that matches your lifestyle and aspirations. Let us guide you home.</p>
            <button id="Hero_4" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">Start Exploring</button>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={images[0] || 'https://placeholder.com/800x600'} alt="Modern home" className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-500 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;