import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#2367AA] text-white py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center sm:text-left ml-28">
          
          {/* For Students */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 underline">For Students</h3>
            <ul className="space-y-2 text-sm sm:text-base font-normal">
              <li><Link to="/alltutors?mode=All" className="text-gray-300 hover:text-white transition-colors">Find Tutors</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Online Learning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Assignment Help</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Test Preparation</a></li>
            </ul>
          </div>

          {/* For Teachers */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 underline">For Teachers</h3>
            <ul className="space-y-2 text-sm sm:text-base font-normal">
              <li><Link to="/alljobs?type=All" className="text-gray-300 hover:text-white transition-colors">Become a Tutor</Link></li>
              <li> <Link to="/alljobs?type=All" className="text-gray-300 hover:text-white transition-colors">Teaching Jobs</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Premium Membership</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Teacher Resources</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 underline">Company</h3>
            <ul className="space-y-2 text-sm sm:text-base font-normal">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Safety</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 underline">Support</h3>
            <ul className="space-y-2 text-sm sm:text-base font-normal">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <Link to='/contact-us' className="text-gray-300 hover:text-white transition-colors">Contact us</Link>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Feedback</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
