import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import AllTutors from './TutorsPage';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
//  useState here is used to see if the navbar is viewed in mobile view or desktop view
  return (
    <nav className="fixed top-0 w-full bg-black text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}

          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Logo</h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 relative">
              <Link to="/landingpage" className="block px-3 py-2 text-white hover:text-blue-400">Home</Link>
              <a href="#" className="inter-regular hover:text-blue-400 transition-colors duration-200">Assignments</a>

              <div className="relative group">
                <button className="hover:text-blue-400 transition-colors duration-200 flex items-center">
                    Find Tutors
                    <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>

                {/* Dropdown stays visible when hovering over dropdown itself */}
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-auto">
                    <a href="#" className="inter-regular block px-4 py-2 hover:bg-gray-200">Request a Tutor</a>
                    <Link to='/alltutors?mode=Home' className="inter-regular block px-4 py-2 hover:bg-gray-200">Home Tutor</Link>
                    <Link to="/alltutors?mode=Online" className='inter-regular block px-4 py-2 hover:bg-gray-200'>Online Tutor</Link>
                    <Link to="/alltutors?mode=All" className="inter-regular block px-4 py-2 hover:bg-gray-200 hover:underline">All Tutors</Link>
                </div>
               </div>

              <div className="relative group">
                <button className="hover:text-blue-400 transition-colors duration-200 flex items-center">
                  Apply for Jobs
                  <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-auto">
                  <Link to="/alljobs?type=All" className="inter-regular block px-4 py-2 hover:bg-gray-200">All Tutor Jobs</Link>
<Link to="/alljobs?type=Online" className="inter-regular block px-4 py-2 hover:bg-gray-200">Online Tutor Jobs</Link>
<Link to="/alljobs?type=Home" className="inter-regular block px-4 py-2 hover:bg-gray-200">Home Tutor Jobs</Link>

                </div>
              </div>

              <a href="#" className="hover:text-blue-400 transition-colors duration-200">Reviews</a>
            </div>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <button className="bg-[#3F88EA] hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors duration-200">
              Log In
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/*For mobile responsiveness of the website */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/landingpage" className="block px-3 py-2 text-white hover:text-blue-400">Home</Link>
            <a href="#" className="block px-3 py-2 text-white hover:text-blue-400">Assignments</a>
            <a href="#" className="block px-3 py-2 text-white hover:text-blue-400">Request a Tutor</a>
            <Link to='/alltutors?mode=Home' className="block px-3 py-2 text-white hover:text-blue-400">Home Tutor</Link>
             <Link to="/alltutors?mode=Online" className='block px-3 py-2 text-white hover:text-blue-400'>Online Tutor</Link>
            <Link to="/alltutors?mode=All" className="block px-3 py-2 text-white hover:text-blue-400">All Tutors</Link>
            <a href="#" className="block px-3 py-2 text-white hover:text-blue-400">All Tutor Jobs</a>
            <a href="#" className="block px-3 py-2 text-white hover:text-blue-400">Online Tutor Jobs</a>
            <a href="#" className="block px-3 py-2 text-white hover:text-blue-400">Home Tutor Jobs</a>
            <a href="#" className="block px-3 py-2 text-white hover:text-blue-400">Reviews</a>
            <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-left">
              Log In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
