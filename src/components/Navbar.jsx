import React, { useState, useCallback } from 'react';
import { Search, Menu, X, Mail, Lock, User, Phone, MapPin, DollarSign, BookOpen, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import AllTutors from './TutorsPage';
import ReviewsPage from './ReviewsPage';
import AuthModal from './AuthModal';
import RequestTutorPage from './RequestTutor';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('choice'); // 'choice', 'login', 'signup-student', 'signup-teacher'
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [studentData, setStudentData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    location: '',
    learningMode: 'both' // 'online', 'offline', 'both'
  });

  const [teacherData, setTeacherData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    location: '',
    subjects: '',
    hourlyRate: '',
    experience: '',
    onlineExperience: '',
    qualifications: '',
    teachingMode: 'both' // 'online', 'offline', 'both'
  });

  const openAuthModal = useCallback((mode = 'choice') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
    setAuthMode('choice');
    setLoginData({ email: '', password: '' });
    setStudentData({
      name: '', email: '', phone: '', password: '', confirmPassword: '',
      location: '', preferredSubjects: '', learningMode: 'both'
    });
    setTeacherData({
      name: '', email: '', phone: '', password: '', confirmPassword: '',
      location: '', subjects: '', hourlyRate: '', experience: '',
      onlineExperience: '', offlineExperience: '', qualifications: '', teachingMode: 'both'
    });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault(); // prevent page reload

    // You can replace this with your API call or auth logic
    console.log("Logging in with:", loginData);
    alert("login : success");
  };

  const handleStudentSignup = useCallback((e) => {
    e.preventDefault();
    if (studentData.password !== studentData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Student signup:', studentData);
    // Handle student signup logic here
    closeAuthModal();
  }, [studentData, closeAuthModal]);

  const handleTeacherSignup = useCallback((e) => {
    e.preventDefault();
    if (teacherData.password !== teacherData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Teacher signup:', teacherData);
    // Handle teacher signup logic here
    closeAuthModal();
  }, [teacherData, closeAuthModal]);

  return (
    <>
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
                <div className="relative group">
                  <button className="hover:text-blue-400 transition-colors duration-200 flex items-center">
                      Find Tutors
                      <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                  </button>

                  <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-auto">
                    <Link to='/requestTutor' className="block px-4 py-2 hover:bg-gray-200">Request a Tutor</Link>
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
              <Link to='/contact-us' className="hover:text-blue-400 transition-colors duration-200">Contact us</Link>  
              <Link to='/reviewspage' className="hover:text-blue-400 transition-colors duration-200">Reviews</Link>
              </div>
            </div>

            {/* Login Button */}
            <div className="hidden md:block">
              <button 
                onClick={() => openAuthModal()}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors duration-200"
              >
                Log In / Sign Up
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
              <a href="#" className="block px-3 py-2 text-white hover:text-blue-400">Request a Tutor</a>
              <Link to='/alltutors?mode=Home' className="inter-regular block px-4 py-2 hover:bg-gray-200">Home Tutor</Link>
              <Link to="/alltutors?mode=Online" className='inter-regular block px-4 py-2 hover:bg-gray-200'>Online Tutor</Link>
              <Link to="/alltutors?mode=All" className="inter-regular block px-4 py-2 hover:bg-gray-200 hover:underline">All Tutors</Link>
              <Link to="/alljobs?type=All" className="inter-regular block px-4 py-2 hover:bg-gray-200">All Tutor Jobs</Link>
              <Link to="/alljobs?type=Online" className="inter-regular block px-4 py-2 hover:bg-gray-200">Online Tutor Jobs</Link>
              <Link to="/alljobs?type=Home" className="inter-regular block px-4 py-2 hover:bg-gray-200">Home Tutor Jobs</Link>
              <Link to='/contact-us' className="inter-regular block px-4 py-2 hover:bg-gray-200">Contact us</Link>
             <Link to="/reviewspage" className="block px-3 py-2 text-white hover:text-blue-400">Reviews</Link>
              <button 
                onClick={() => openAuthModal()}
                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-left"
              >
                Log In / Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        authMode={authMode}
        setAuthMode={setAuthMode}
        loginData={loginData}
        setLoginData={setLoginData}
        studentData={studentData}
        setStudentData={setStudentData}
        teacherData={teacherData}
        setTeacherData={setTeacherData}
        handleLogin={handleLogin}
        handleStudentSignup={handleStudentSignup}
        handleTeacherSignup={handleTeacherSignup}
      />
    </>
  );
};

export default Navbar;