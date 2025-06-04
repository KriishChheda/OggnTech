import React from 'react'
import { Search } from 'lucide-react';
import FrontPage from '../assets/FrontPage.png';

function LandingPage() {
  return (
    <>
    <img src={FrontPage} alt="Front Page" />
   <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center mb-16 relative">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Get your Perfect Tutor
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-white py-2 rounded-lg">
              with ONE Click
        </h2>
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="bg-blue-500 rounded-2xl p-6 shadow-lg flex items-center">
              <Search className="text-white w-8 h-8 ml-4" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full mt-8">
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-gray-300 mb-8">For Students</h3>
          <div className="space-y-4">
            <button className="w-full bg-gray-200 hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-xl text-xl transition-colors duration-200">
              Assignment Help
            </button>
            <button className="w-full bg-gray-200 hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-xl text-xl transition-colors duration-200">
              Study Material
            </button>
            <button className="w-full bg-gray-200 hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-xl text-xl transition-colors duration-200">
              24/7 Support
            </button>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-semibold text-gray-300 mb-8">For Teachers</h3>
          <div className="space-y-4">
            <button className="w-full bg-gray-200 hover:bg-gray-100 text-blue-600  font-semibold py-4 px-8 rounded-xl text-xl transition-colors duration-200 ">
              Teaching Jobs
            </button>
            <button className="w-full bg-gray-200 hover:bg-gray-100 text-blue-600  font-semibold py-4 px-8 rounded-xl text-xl transition-colors duration-200">
              Provide Solutions
            </button>
            <button className="w-full bg-gray-200 hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-xl text-xl transition-colors duration-200">
              Work Remotely
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LandingPage
