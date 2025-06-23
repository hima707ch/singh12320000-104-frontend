import React from 'react';
import images from '../assets/images';

const AboutUs = () => {
  return (
    <section id="AboutUs_1" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img src={images[1] || 'https://placeholder.com/600x400'} alt="Our team" className="rounded-xl shadow-xl" />
              <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-6 rounded-lg">
                <p className="text-4xl font-bold">15+</p>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 id="AboutUs_2" className="text-4xl font-bold mb-6 text-gray-900">We Help You Make Better Property Decisions</h2>
            <p id="AboutUs_3" className="text-gray-600 mb-6">With over 15 years of experience in real estate, we've helped thousands of clients find their perfect property. Our expertise spans residential and commercial properties, ensuring you get the best value for your investment.</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">5000+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">8000+</h3>
                <p className="text-gray-600">Properties Sold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;