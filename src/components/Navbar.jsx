import React, { useState, useCallback } from 'react';
import { Search, Menu, X, Mail, Lock, User, Phone, MapPin, DollarSign, BookOpen, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import AllTutors from './TutorsPage';

const AuthModal = ({ 
  isOpen, 
  onClose, 
  authMode, 
  setAuthMode, 
  loginData, 
  setLoginData,
  studentData, 
  setStudentData,
  teacherData, 
  setTeacherData,
  handleLogin,
  handleStudentSignup,
  handleTeacherSignup
}) => {
  if (!isOpen) return null;


  // these three functions are for the handling input changes in the login, student & teacher signup form.
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setStudentData(prev => ({ ...prev, [name]: value }));
  };

  const handleTeacherChange = (e) => {
    const { name, value } = e.target;
    setTeacherData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>

          {authMode === 'choice' && (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Signup if you aren't registered</h2>
              <div className="space-y-4">
                <button
                  onClick={() => setAuthMode('login')}
                  className="w-full bg-[#3F88EA] hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200"
                >
                  Log In
                </button>
                <div className="text-gray-600 my-4">or</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setAuthMode('signup-student')}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200"
                  >
                    Sign Up as Student
                  </button>
                  <button
                    onClick={() => setAuthMode('signup-teacher')}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200"
                  >
                    Sign Up as Teacher
                  </button>
                </div>
              </div>
            </div>
          )}
          {/*AuthMode can take three things :login, signup-student, signup-teacher */}
          {authMode === 'login' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Log In</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    autoComplete="current-password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                >
                  Log In
                </button>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setAuthMode('choice')}
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    Back to options
                  </button>
                </div>
              </form>
            </div>
          )}

          {authMode === 'signup-student' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Registration</h2>
              <form onSubmit={handleStudentSignup} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter full name"
                      value={studentData.name}
                      onChange={handleStudentChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={studentData.email}
                      onChange={handleStudentChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={studentData.phone}
                    onChange={handleStudentChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                    autoComplete="tel"
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="location"
                    placeholder="Location (City, State)"
                    value={studentData.location}
                    onChange={handleStudentChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                    autoComplete="address-level2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Learning Mode</label>
                  <select
                    name="learningMode"
                    value={studentData.learningMode}
                    onChange={handleStudentChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="both">Both Online & Offline</option>
                    <option value="online">Online Only</option>
                    <option value="offline">Offline Only</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={studentData.password}
                      onChange={handleStudentChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                      autoComplete="new-password"
                    />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={studentData.confirmPassword}
                      onChange={handleStudentChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                      autoComplete="new-password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                >
                  Create Student Account
                </button>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setAuthMode('choice')}
                    className="text-green-600 hover:text-green-700 text-sm"
                  >
                    Back to options
                  </button>
                </div>
              </form>
            </div>
          )}

          {authMode === 'signup-teacher' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Teacher Registration</h2>
              <form onSubmit={handleTeacherSignup} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter full name"
                      value={teacherData.name}
                      onChange={handleTeacherChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={teacherData.email}
                      onChange={handleTeacherChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={teacherData.phone}
                    onChange={handleTeacherChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                    autoComplete="tel"
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="location"
                    placeholder="Location (City, State)"
                    value={teacherData.location}
                    onChange={handleTeacherChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                    autoComplete="address-level2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="subjects"
                      placeholder="Subjects Expertise (comma separated)"
                      value={teacherData.subjects}
                      onChange={handleTeacherChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      required
                    />
                  </div>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="number"
                      name="hourlyRate"
                      placeholder="Hourly Rate ($)"
                      value={teacherData.hourlyRate}
                      onChange={handleTeacherChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Online Teaching Experience</label>
                    <input
                      type="text"
                      name="onlineExperience"
                      placeholder="e.g., 3 years"
                      value={teacherData.onlineExperience}
                      onChange={handleTeacherChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Offline Teaching Experience</label>
                    <input
                      type="text"
                      name="experience"
                      placeholder="Total teaching experience"
                      value={teacherData.experience}
                      onChange={handleTeacherChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Award className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="qualifications"
                    placeholder="Qualifications (e.g., M.Sc Physics, B.Ed)"
                    value={teacherData.qualifications}
                    onChange={handleTeacherChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teaching Mode Preference</label>
                  <select
                    name="teachingMode"
                    value={teacherData.teachingMode}
                    onChange={handleTeacherChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  >
                    <option value="both">Both Online & Offline</option>
                    <option value="online">Online Only</option>
                    <option value="offline">Offline Only</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={teacherData.password}
                      onChange={handleTeacherChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      required
                      autoComplete="new-password"
                    />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      value={teacherData.confirmPassword}
                      onChange={handleTeacherChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      required
                      autoComplete="new-password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                >
                  Create Teacher Account
                </button>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setAuthMode('choice')}
                    className="text-green-600 hover:text-green-700 text-sm"
                  >
                    Back to options
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

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
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">Assignments</a>

                <div className="relative group">
                  <button className="hover:text-blue-400 transition-colors duration-200 flex items-center">
                      Find Tutors
                      <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                  </button>

                  <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-auto">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Request a Tutor</a>
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
              <a href="#" className="block px-3 py-2 text-white hover:text-blue-400">Assignments</a>
              <a href="#" className="block px-3 py-2 text-white hover:text-blue-400">Request a Tutor</a>
              <Link to='/alltutors?mode=Home' className="inter-regular block px-4 py-2 hover:bg-gray-200">Home Tutor</Link>
              <Link to="/alltutors?mode=Online" className='inter-regular block px-4 py-2 hover:bg-gray-200'>Online Tutor</Link>
              <Link to="/alltutors?mode=All" className="inter-regular block px-4 py-2 hover:bg-gray-200 hover:underline">All Tutors</Link>
              <Link to="/alljobs?type=All" className="inter-regular block px-4 py-2 hover:bg-gray-200">All Tutor Jobs</Link>
              <Link to="/alljobs?type=Online" className="inter-regular block px-4 py-2 hover:bg-gray-200">Online Tutor Jobs</Link>
              <Link to="/alljobs?type=Home" className="inter-regular block px-4 py-2 hover:bg-gray-200">Home Tutor Jobs</Link>
              <a href="#" className="block px-3 py-2 text-white hover:text-blue-400">Reviews</a>
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

      {/* Auth Modal */}
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