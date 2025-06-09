import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import TutorCard from './TutorCard';

// Filter component
const SearchFilters = ({ onSubjectChange, onLocationChange, onClear, subjectValue, locationValue, onSearch, onAvailabilityChange, availabilityValue }) => {
  return (
    <div className="flex flex-col">
      <div className='flex gap-2.5 mb-5 mt-2 bg-[#2367AA] p-4 rounded-4xl'>
        <input
          type="text"
          placeholder="Subject"
          value={subjectValue}
          onChange={(e) => onSubjectChange(e.target.value)}
          className="flex-1 px-3 rounded-full ml-2 bg-white text-black placeholder-black border-none outline-none text-sm"
        />
        <input
          type="text"
          placeholder="Location"
          value={locationValue}
          onChange={(e) => onLocationChange(e.target.value)}
          className="flex-1 px-3 rounded-full bg-white text-black placeholder-black border-none outline-none text-sm"
        />
        <button onClick={onSearch} className="w-12 h-12 flex items-center justify-center text-white">
          <Search size={18} />
        </button>
        <button onClick={onClear} className="text-white px-4 py-2 text-sm font-medium">Clear</button>
      </div>

      <div className="flex justify-center mb-5">
        <div className='flex gap-1'>
          {['', 'Online', 'Home'].map(mode => (
            <button
              key={mode}
              onClick={() => onAvailabilityChange(mode)}
              className={`px-2 py-2 rounded-full hover:underline text-sm font-medium ${availabilityValue === mode ? 'bg-white text-black' : 'text-white'}`}
            >
              {mode || 'All'}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// No results message
const NoResults = () => (
  <div className="text-center text-gray-400 mt-10">
    No tutors found matching your criteria.
  </div>
);

// Main Tutors page component
const AllTutors = () => {
  const location = useLocation();

  const [subjectInput, setSubjectInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('');

  // Load availability from query params on page load
 useEffect(() => {
  const params = new URLSearchParams(location.search);
  const mode = params.get('mode');
  if (mode && mode !== 'All') {
    setAvailabilityFilter(mode);
  } else {
    setAvailabilityFilter('');
  }
}, [location.search]);
 const tutors = [
    {
      id: 1,
      name: "Name",
      subjects: ["Science", "Physics", "English"],
      description: "I am deeply passionate about teaching and committed to elevating the standards of physiotherapy education. I believe that the foundational concepts in the first year, though often overlooked, are crucial for building strong clinical reasoning skills. My goal is to ensure students develop a clear and thorough understanding of the basics, so that by...",
      rating: "5.0/5.0hr",
      experience: "5 yrs",
      location: "New York",
      mode: "Online"
    },
    {
      id: 2,
      name: "Name",
      subjects: ["Science", "Physics", "English"],
      description: "I am deeply passionate about teaching and committed to elevating the standards of physiotherapy education. I believe that the foundational concepts in the first year, though often overlooked, are crucial for building strong clinical reasoning skills. My goal is to ensure students develop a clear and thorough understanding of the basics, so that by...",
      rating: "5.0/5.0hr",
      experience: "5 yrs",
      location: "California",
      mode: "Home"
    },
    {
      id: 3,
      name: "Name",
      subjects: ["Science", "Physics", "English"],
      description: "I am deeply passionate about teaching and committed to elevating the standards of physiotherapy education. I believe that the foundational concepts in the first year, though often overlooked, are crucial for building strong clinical reasoning skills. My goal is to ensure students develop a clear and thorough understanding of the basics, so that by...",
      rating: "5.0/5.0hr",
      experience: "5 yrs",
      location: "Texas",
      mode:"Home"
    },
    {
      id: 4,
      name: "Name",
      subjects: ["Mathematics", "Calculus"],
      description: "Experienced mathematics tutor with over 8 years of teaching experience. I specialize in making complex mathematical concepts simple and understandable for students of all levels.",
      rating: "4.8/5.0hr",
      experience: "8 yrs",
      location: "Florida",
      mode:"Online"
    },
    {
      id: 5,
      name: "Name",
      subjects: ["English", "Literature"],
      description: "Professional English and Literature tutor helping students improve their writing, reading comprehension, and critical thinking skills through engaging and personalized lessons.",
      rating: "4.9/5.0hr",
      experience: "6 yrs",
      location: "India",
      mode:"Home"
    }
  ];

  // Filter tutors by selected filters
  const filteredTutors = tutors.filter(tutor => {
    const matchesSubject = !subjectFilter || tutor.subjects.some(subject => subject.toLowerCase().includes(subjectFilter.toLowerCase()));
    const matchesLocation = !locationFilter || tutor.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesAvailability = !availabilityFilter || tutor.mode === availabilityFilter;
    return matchesSubject && matchesLocation && matchesAvailability;
  });

  const handleSearch = () => {
    setSubjectFilter(subjectInput);
    setLocationFilter(locationInput);
  };

  const handleClearFilters = () => {
    setSubjectInput('');
    setLocationInput('');
    setSubjectFilter('');
    setLocationFilter('');
    setAvailabilityFilter('');
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white px-8 py-6">
      <div className="w-full">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-medium mb-8">All Tutors</h1>

          <div className="flex justify-center mb-8">
            <div className="max-w-4xl w-full">
              <SearchFilters
                subjectValue={subjectInput}
                locationValue={locationInput}
                onSubjectChange={setSubjectInput}
                onLocationChange={setLocationInput}
                onClear={handleClearFilters}
                onSearch={handleSearch}
                onAvailabilityChange={setAvailabilityFilter}
                availabilityValue={availabilityFilter}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="max-w-6xl w-full">
              {filteredTutors.length === 0 ? (
                <NoResults />
              ) : (
                <div className='space-y-6'>
                  {filteredTutors.map(tutor => (
                    <TutorCard key={tutor.id} tutor={tutor} />
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AllTutors;




