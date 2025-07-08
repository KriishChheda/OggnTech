// Meghana

import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([
    {
      name: 'Aarav Mehta',
      feedback: 'This platform helped me find the perfect tutor for my engineering courses. The experience was seamless and the tutor was excellent!',
      rating: 5,
    },
    {
      name: 'Riya Sharma',
      feedback: 'I struggled with Biochemistry, but my tutor from this site made everything easy to understand. Highly recommend!',
      rating: 4,
    },
    {
      name: 'Kabir Desai',
      feedback: 'The global network of tutors is amazing. I connected with a French tutor from Paris — and it really boosted my confidence.',
      rating: 5,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newFeedback, setNewFeedback] = useState('');
  const [newRating, setNewRating] = useState(5);

  return (
    <div>
      {/* Reviews inside Laptop */}
      <div className="bg-gradient-to-br from-indigo-800 via-blue-800 to-blue-400 py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl sm:text-4xl mt-6 font-bold bg-white bg-clip-text text-transparent mb-4 animate-fade-in">
              What Our Users Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-white mx-auto rounded-full"></div>
          </div>

          {/* Laptop Frame */}
          <div className="bg-black rounded-3xl shadow-inner p-2 border-3 border-black max-w-6xl mx-auto">
            <div className="w-20 h-2 bg-gray-700 rounded-full mx-auto my-3"></div>

            <div className="bg-gray-300 m-1 rounded-2xl p-6 overflow-hidden max-h-[500px] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pr-2 pt-3">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-slide-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow">
                        <span className="text-white font-bold text-lg">
                          {review.name.split(' ').map((n) => n[0]).join('')}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-blue-800 mb-2">
                        {review.name}
                      </h3>
                      <p className="text-gray-700 text-base mb-4 leading-relaxed">
                        {review.feedback}
                      </p>
                      <div className="flex justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Review Button */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-blue-600 text-white font-medium px-6 py-3 rounded-xl shadow hover:scale-105 transition"
                >
                  Add a Review
                </button>
              </div>
            </div>
          </div>

          <div className="w-[360px] h-6 bg-black rounded-b-xl mx-auto mt-6"></div>
          <div className="w-[240px] h-2 bg-gray-800 rounded-full mx-auto mt-2"></div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-200 backdrop:blur-lg py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-opacity-80 backdrop-blur-md rounded-3xl p-12 text-center overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Ready to Find Your Perfect Tutor?
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who have transformed their learning journey with our expert tutors.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-white text-blue-600 font-bold text-lg px-10 py-4 rounded-2xl shadow-lg transition hover:scale-105">
                Get Started Today
              </button>
              <Link to="/alljobs?type=All" className="border-2 border-white/30 text-white font-semibold text-lg px-10 py-4 rounded-2xl backdrop-blur-sm hover:bg-white/10">
                Browse Tutors
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-black font-semibold mb-3 text-lg">Trusted by students worldwide</p>
          <div className="flex justify-center space-x-6 text-blue-800 text-base font-medium">
            <span>50,000+ Students</span>
            <span>•</span>
            <span>10,000+ Tutors</span>
            <span>•</span>
            <span>95% Success Rate</span>
          </div>
        </div>
      </div>

      {/* Add Review Modal */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-transparent flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-lg relative animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add a Review</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newReview = {
                  name: newName,
                  feedback: newFeedback,
                  rating: newRating,
                };
                setReviews([...reviews, newReview]);
                setShowModal(false);
                setNewName('');
                setNewFeedback('');
                setNewRating(5);
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none"
                required
              />
              <textarea
                placeholder="Your Feedback"
                value={newFeedback}
                onChange={(e) => setNewFeedback(e.target.value)}
                className="w-full p-3 border rounded-lg h-24 focus:outline-none"
                required
              />
              <div>
                <label className="block mb-1 text-gray-700 font-medium">Rating</label>
                <select
                  value={newRating}
                  onChange={(e) => setNewRating(Number(e.target.value))}
                  className="w-full p-3 border rounded-lg focus:outline-none"
                >
                  <option>5</option>
                  <option>4</option>
                  <option>3</option>
                  <option>2</option>
                  <option>1</option>
                </select>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
          animation: fade-in 0.8s ease-out;
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
