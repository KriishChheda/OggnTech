// Meghana

import React, { useState } from 'react';
import { Mail, User, Phone, MapPin, BookOpen } from 'lucide-react';

const RequestTutorPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    location: '',
    preferredMode: 'Online',
    additionalNotes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tutor Request Submitted:', formData);
    alert("Your tutor request has been submitted!");
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      location: '',
      preferredMode: 'Online',
      additionalNotes: ''
    });
  };

  return (
    <div className="pt-30 pb-30 min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-800 via-blue-800 to-blue-400 opacity-75 text-white rounded-3xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Request a Tutor</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <BookOpen className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              name="subject"
              placeholder="Subject Needed"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              name="location"
              placeholder="Preferred Location (City)"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Preferred Mode</label>
            <select
              name="preferredMode"
              value={formData.preferredMode}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Both">Both</option>
            </select>
          </div>

          <div>
            <textarea
              name="additionalNotes"
              placeholder="Any additional notes (optional)"
              value={formData.additionalNotes}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white hover:bg-gray-600 text-blue-600 font-semibold py-3 rounded-xl transition duration-200"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestTutorPage;
