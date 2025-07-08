// Meghana

import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const JobCard = ({ job }) => {
  return (
    <div className="w-full bg-[#DCEDF9] rounded-2xl p-8 shadow-lg">
      <div className="flex flex-col h-full">

        {/* Top row: Job title + pay left, subject badge right */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
            <span className="text-md font-semibold text-red-600 mt-2">{job.pay}</span>
          </div>

          <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium inter-regular">
            {job.subject}
          </span>
        </div>

      

        {/* Description */}
       {/* Description and Location/Type/Experience on same row */}
<div className="flex justify-between items-start mb-6 gap-6">
  <p className="text-gray-700 text-sm text-left leading-relaxed flex-1">
    {job.description || "No description provided."}
  </p>

  <div className="flex gap-8 text-sm text-gray-600 whitespace-nowrap">
    <div className="flex items-center gap-2">
      <MapPin className="w-5 h-5" />
      <span>{job.location}</span>
    </div>
    <div className="flex items-center gap-2">
      <span>{job.type}</span>
    </div>
    <div className="flex items-center gap-2">
      <Clock className="w-5 h-5" />
      <span>{job.experience}</span>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default JobCard;
