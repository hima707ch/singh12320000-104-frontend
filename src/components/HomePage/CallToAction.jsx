import React from 'react';

const CallToAction = ({ onAction }) => {
  return (
    <section id="CTA_1" className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="container mx-auto px-6 text-center">
        <h2 id="CTA_2" className="text-4xl font-bold text-white mb-8">Ready to Find Your Dream Home?</h2>
        <p id="CTA_3" className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Join thousands of satisfied homeowners who found their perfect property through our expert guidance.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onAction('schedule')}
            className="px-8 py-3 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
          >
            Schedule Viewing
          </button>
          <button
            onClick={() => onAction('contact')}
            className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-blue-800 transition duration-300"
          >
            Contact Agent
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;