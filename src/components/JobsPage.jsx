import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import JobCard from './JobCard';
import { useLocation } from 'react-router-dom';

const SearchFilters = ({ onSubjectChange, onLocationChange, onClear, subjectValue, locationValue, onSearch, onTypeChange, typeValue }) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2.5 mb-5 mt-2 bg-[#2367AA] p-4 rounded-4xl">
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

      {/* Job Type buttons */}
      <div className="flex justify-center mb-5">
        <div className="flex gap-1">
          <button onClick={() => onTypeChange('')} className={`px-2 py-2 rounded-full hover:underline text-sm font-medium ${typeValue === '' ? 'bg-white text-black' : 'text-white'}`}>
            All
          </button>
          <button onClick={() => onTypeChange('Online')} className={`px-2 py-2 rounded-full hover:underline text-sm font-medium ${typeValue === 'Online' ? 'bg-white text-black' : 'text-white'}`}>
            Online
          </button>
          <button onClick={() => onTypeChange('Home')} className={`px-2 py-2 rounded-full hover:underline text-sm font-medium ${typeValue === 'Home' ? 'bg-white text-black' : 'text-white'}`}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

const NoResults = () => (
  <div className="text-center text-gray-400 mt-10">
    No jobs found matching your criteria.
  </div>
);

const AllJobs = () => {
  const [subjectInput, setSubjectInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    if (type && type !== 'All') {
      setTypeFilter(type);
    } else {
      setTypeFilter('');
    }
  }, [location.search]);

  // Sample job data
  const jobs = [
    { id: 1, title: "Maths Online Tutor", subject: "Mathematics", location: "New York", type: "Online", pay: "$30/hr", experience: "2 yrs", description: "Need an experienced maths teacher for my child." },
    { id: 2, title: "Physics Home Tutor", subject: "Physics", location: "California", type: "Home", pay: "$25/hr", experience: "3 yrs" },
    { id: 3, title: "English Home Tutor", subject: "English", location: "Texas", type: "Home", pay: "$20/hr", experience: "1 yr" },
    { id: 4, title: "Science Online Tutor", subject: "Science", location: "Florida", type: "Online", pay: "$28/hr", experience: "4 yrs" },
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSubject = !subjectFilter || job.subject.toLowerCase().includes(subjectFilter.toLowerCase());
    const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesType = !typeFilter || job.type === typeFilter;
    return matchesSubject && matchesLocation && matchesType;
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
    setTypeFilter('');
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white px-8 py-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-medium mb-8">All Tutor Jobs</h1>

        <div className="flex justify-center mb-8">
          <div className="max-w-4xl w-full">
            <SearchFilters
              subjectValue={subjectInput}
              locationValue={locationInput}
              onSubjectChange={setSubjectInput}
              onLocationChange={setLocationInput}
              onClear={handleClearFilters}
              onSearch={handleSearch}
              onTypeChange={setTypeFilter}
              typeValue={typeFilter}
            />
          </div>
        </div>

        {/* Job cards */}
        <div className="flex justify-center">
          <div className="max-w-6xl w-full">
            {filteredJobs.length === 0 ? (
              <NoResults />
            ) : (
             <div className='space-y-6'>
  {filteredJobs.map(job => (
    <JobCard key={job.id} job={job} />
  ))}
</div>

            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
