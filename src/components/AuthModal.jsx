// Kriish

import React from 'react';
import { X, Mail, Lock, User, Phone, MapPin, BookOpen, DollarSign, Award } from 'lucide-react';

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

export default AuthModal;