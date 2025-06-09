import React, { useState } from 'react';
import { Star, MapPin, Award, Clock } from 'lucide-react';

const TutorCard = ({ tutor }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Sample reviews data
  const sampleReviews = [
    {
      id: 1,
      student: "Alex M.",
      rating: 5,
      comment: "Excellent tutor! Really helped me understand complex concepts with patience and clarity.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      student: "Priya K.",
      rating: 5,
      comment: "Great teaching style and very knowledgeable. Highly recommend!",
      date: "1 month ago"
    },
    {
      id: 3,
      student: "David L.",
      rating: 4,
      comment: "Very helpful with exam preparation. Made difficult topics much easier to understand.",
      date: "1 month ago"
    }
  ];

  //show rating
  const renderStars = (rating) => {
    const numericRating = typeof rating === 'string' ? parseFloat(rating) : rating;
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(numericRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div 
      className="relative w-full h-64 mb-6 perspective-1000"
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side- tutor info*/}
        <div className="absolute inset-0 bg-[#DCEDF9] rounded-2xl p-6 shadow-lg backface-hidden">
          <div className="flex gap-4 h-full">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex-shrink-0"></div>
            
            <div className="flex-1 flex flex-col">
              <div className='flex justify-between items-start mb-4'>
                <div className="text-xl font-semibold text-gray-800 text-start rasa-regular">
                  {tutor.name}
                </div>
                
                <div className="flex flex-wrap gap-2 justify-end">
                  {tutor.subjects.map((subject, index) => (
                    <span
                      key={index}
                      className="bg-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-medium inter-regular"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 text-sm text-start mb-4 flex-1">
                {tutor.description}
              </p>
              
              <div className="flex justify-between items-end">
                <div className="flex gap-5 text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>{tutor.location || "India"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>{tutor.rating}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{tutor.experience}</span>
                  </div>
                </div>
                
                {/* Reviews Button */}
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-medium transition-colors duration-200 flex items-center gap-2"
                  onMouseEnter={() => setIsFlipped(true)}
                >
                  <Award className="w-3 h-3" />
                  View Reviews
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side - Reviews */}
        <div 
          className="absolute inset-0 bg-[#DCEDF9] rounded-2xl p-6 shadow-lg backface-hidden rotate-y-180"
        >
          <div className="h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Student Reviews</h3>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {renderStars(tutor.rating)}
                </div>
                <span className="text-sm font-medium text-gray-700">{tutor.rating}</span>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-2 gap-3">
                {sampleReviews.map((review) => (
                  <div key={review.id} className="bg-white border-2 border-gray-300 rounded-lg p-3 shadow-sm">
                    <div className="text-center mb-2">
                      <span className="font-medium text-sm text-gray-800">{review.student}</span>
                    </div>
                    <div className="flex justify-center mb-2">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed mb-1 text-center">{review.comment}</p>
                    <div className="text-center">
                      <span className="text-xs text-gray-400">{review.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button
              className="mt-3 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-full text-xs font-medium transition-colors duration-200 self-center"
              onClick={() => setIsFlipped(false)}
            >
              Back to Profile
            </button>   {/*to flip the section */}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(-180deg);
        }
      `}</style>
    </div>
  );
};

export default TutorCard;

/*
const TutorCard = ({ tutor }) => {
  return (
    <div className="group [perspective:1000px] w-full">
      <div className="relative w-full h-64 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">
        
        {/* Front side *//*
        <div className="absolute inset-0 bg-[#DCEDF9] rounded-2xl p-6 shadow-lg w-full [backface-visibility:hidden]">
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex-shrink-0"></div>

            <div className="flex-1">
              <div className="flex justify-between items-start mb-4">
                <div className="text-lg font-semibold text-gray-800 text-start">
                  {tutor.name}
                </div>

                <div className="flex flex-wrap gap-2 justify-end">
                  {tutor.subjects.map((subject, index) => (
                    <span
                      key={index}
                      className="bg-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-medium"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 text-sm text-start mb-4">
                {tutor.description}
              </p>

              <div className="flex gap-5 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                  <span>{tutor.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                  <span>{tutor.rating}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                  <span>{tutor.experience}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back side *//*
        <div className="absolute inset-0 bg-blue-900 text-white rounded-2xl p-6 w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="text-lg font-bold mb-4">Reviews</div>
          <div className="space-y-3 text-sm">
            <div>⭐️⭐️⭐️⭐️⭐️ - “Outstanding tutor!”</div>
            <div>⭐️⭐️⭐️⭐️ - “Helped clarify tough topics.”</div>
            <div>⭐️⭐️⭐️⭐️⭐️ - “Highly recommend!”</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TutorCard;

*/
/*
const TutorCard = ({ tutor }) => {
  return (
    <div className="bg-[#DCEDF9] rounded-2xl p-6 mb-6 shadow-lg w-full">
      <div className="flex gap-4">
        <div className="w-20 h-20 bg-gray-300 rounded-full flex-shrink-0"></div>
        
        <div className="flex-1">
          <div className='flex justify-between items-start mb-4'>
            <div className="text-lg font-semibold text-gray-800 text-start">
              {tutor.name}
            </div>

            <div className="flex flex-wrap gap-2 justify-end">
              {tutor.subjects.map((subject, index) => (
                <span
                  key={index}
                  className="bg-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-medium"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

          <p className="text-gray-600 text-sm text-start mb-4">
            {tutor.description}
          </p>

          <div className="flex gap-5 text-xs text-gray-400">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
              <span>India</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
              <span>{tutor.rating}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
              <span>{tutor.experience}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default TutorCard;
*/