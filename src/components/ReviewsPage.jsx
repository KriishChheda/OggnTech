import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Aarav Mehta',
    feedback:
      'This platform helped me find the perfect tutor for my engineering courses. The experience was seamless and the tutor was excellent!',
    rating: 5,
  },
  {
    name: 'Riya Sharma',  
    feedback:
      'I struggled with Biochemistry, but my tutor from this site made everything easy to understand. Highly recommend!',
    rating: 4,
  },
  {
    name: 'Kabir Desai',
    feedback:
      'The global network of tutors is amazing. I connected with a French tutor from Paris — and it really boosted my confidence.',
    rating: 5,
  },
];

const ReviewsPage = () => {
  return (
    <div>
      {/* Reviews Section with gradient */}
      <div className="bg-gradient-to-br from-indigo-800 via-blue-800 to-blue-400 py-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl sm:text-4xl mt-6 font-bold bg-white bg-clip-text text-transparent mb-4 animate-fade-in">
              What Our Users Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-white mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-3xl animate-slide-up"
                style={{
                  animationDelay: `${index * 200}ms`,
                  boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.25)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                <div className="absolute inset-0.5 bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 rounded-3xl -z-10"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-blue-500/50 transition-shadow duration-300">
                    <span className="text-white font-bold text-xl">
                      {review.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent mb-4 group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300">
                    {review.name}
                  </h3>

                  <p className="text-gray-700 text-lg mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {review.feedback}
                  </p>

                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-7 h-7 transition-all duration-300 ${
                          i < review.rating
                            ? 'text-yellow-400 fill-yellow-400 group-hover:text-yellow-500 group-hover:fill-yellow-500 group-hover:scale-110'
                            : 'text-gray-300 group-hover:text-gray-400'
                        }`}
                        style={{
                          animationDelay: `${i * 100}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative bottom dots */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-blue-400 to-white rounded-full animate-pulse"
                style={{ animationDelay: `${i * 300}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

   <div className="bg-blue-200 py-20 px-6">
  {/* CTA Card */}
  <div className="max-w-5xl mx-auto relative bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-opacity-80 backdrop-blur-md rounded-3xl  p-12 text-center overflow-hidden shadow-2xl">
    <div className="relative z-10">
      <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
        Ready to Find Your Perfect Tutor?
      </h3>
      <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
        Join thousands of successful students who have transformed their learning journey with our expert tutors.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <button className="group relative bg-white text-blue-600 font-bold text-lg px-10 py-4 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl">
          <span className="relative z-10">Get Started Today</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        <button className="group relative border-2 border-white/30 text-white font-semibold text-lg px-10 py-4 rounded-2xl backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-white/10 hover:border-white/50">
          Browse Tutors
        </button>
      </div>
    </div>
  </div>
<div className='bg-[#2367AA] w-full h-1 mt-7' />
  {/* Stats Section */}
  <div className="mt-6 px-12 py-8">
    <div className="text-center">
      <p className="text-black font-semibold mb-4 text-lg">Trusted by students worldwide</p>
      <div className="flex justify-center space-x-8 text-blue-800 text-base font-medium">
        <span>50,000+ Students</span>
        <span>•</span>
        <span>10,000+ Tutors</span>
        <span>•</span>
        <span>95% Success Rate</span>
      </div>
    </div>
  </div>
</div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(60px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default ReviewsPage;