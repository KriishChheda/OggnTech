import React, { useState, useEffect, useRef } from 'react';
import { Search, HelpCircle, Lightbulb, GraduationCap  } from 'lucide-react';
import FrontPage from '../assets/FrontPage.png';
import world from '../assets/world.png';

const AnimatedCounter = ({ target, duration = 2000, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setCount(0);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        setCount(prevCount => {
          const nextCount = prevCount + increment;
          if (nextCount >= target) {
            clearInterval(timer);
            return target;
          }
          return nextCount;
        });
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isVisible, target, duration]);

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-5xl md:text-6xl font-bold">
        <span className="text-white">{Math.floor(count / 1000)}</span>
        <span className="text-blue-400">{String(Math.floor(count % 1000)).padStart(3, '0')}</span>
        <span className="text-blue-500">{suffix}</span>
      </div>
    </div>
  );
};

const subjects = [
    'Mathematics',
    'English',
    'French',
    'C/C++',
    'AutoCAD',
    'BioChemistry',
    'Biology',
    'Biotechnology',
    'Business Management',
    'Communication Skills',
    'Company Law',
    'Computer networking',
    'Statistics',
    'Strength of Materials',
    'Thermodynamics'
  ];

function LandingPage() {
  return (
    <>
    <img src={FrontPage} alt="Front Page" />
   <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-12">
            <div className="text-center mb-16 relative">
        <h1 className="great-vibes-regular text-5xl md:text-6xl font-bold text-white mb-8 leading-tight ">
        <b> <i> Get your Perfect Tutor</i></b>
        </h1>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-blue-500 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <Search className="text-white w-8 h-8 ml-4" />
            </div>
          </div>
          
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
            <h2 className="great-vibes-regular text-4xl md:text-5xl font-bold text-white whitespace-nowrap ">
              <b><i>with ONE Click</i></b>
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full mt-8">
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-gray-300 mb-8">For Students</h3>
          <div className="space-y-4">
            <button className="w-full bg-gray-200 hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-xl text-xl transition-colors duration-200">
              Assignment Help
            </button>
            <button className="w-full bg-gray-200 hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-xl text-xl transition-colors duration-200">
              Study Material
            </button>
            <button className="w-full bg-gray-200 hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-xl text-xl transition-colors duration-200">
              24/7 Support
            </button>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-semibold text-gray-300 mb-8">For Teachers</h3>
          <div className="space-y-4">
            <button className="w-full bg-gray-200 hover:bg-gray-100 text-blue-600  font-semibold py-4 px-8 rounded-xl text-xl transition-colors duration-200 ">
              Teaching Jobs
            </button>
            <button className="w-full bg-gray-200 hover:bg-gray-100 text-blue-600  font-semibold py-4 px-8 rounded-xl text-xl transition-colors duration-200">
              Provide Solutions
            </button>
            <button className="w-full bg-gray-200 hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-xl text-xl transition-colors duration-200">
              Work Remotely
            </button>
          </div>
        </div>
      </div>
    </div>


    <div className="bg-blue-800 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white text-center mb-16">
          The Process
        </h2>
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Choose your subject
            </h3>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Get the perfect tutor
            </h3>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Learn and improve
            </h3>
          </div>
        </div>
        
        <div>
          <h2 className="text-5xl font-bold text-white text-center mb-16">
            Why Us?
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">
                Access to Qualified Teachers
              </h3>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">
                Reach a Global Network
              </h3>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">
                Learn at your own pace
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden relative">
      <img src={world} alt="" className="w-1/2 h-1/2 object-contain" />
      <div className="absolute top-16 left-16 md:top-24 md:left-24">
        <AnimatedCounter target={9500} />
        <p className="text-white text-xl md:text-2xl font-medium mt-2">Subjects</p>
      </div>

      <div className="absolute top-16 right-16 md:top-24 md:right-24 text-right">
        <AnimatedCounter target={900} />
        <p className="text-white text-xl md:text-2xl font-medium mt-2">Expert Tutors</p>
      </div>

      <div className="absolute bottom-16 left-16 md:bottom-24 md:left-24">
        <AnimatedCounter target={170} />
        <p className="text-white text-xl md:text-2xl font-medium mt-2">Countries</p>
      </div>

      <div className="absolute bottom-16 right-16 md:bottom-24 md:right-24 text-right">
        <AnimatedCounter target={5700} />
        <p className="text-white text-xl md:text-2xl font-medium mt-2">Students</p>
      </div>
    </div>
    <div className="bg-gray-900 min-h-screen">
      <div className="bg-blue-700 py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
          Top Subjects
        </h2>
      </div>
      
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {subjects.map((subject, index) => (
              <div key={index} className="flex items-center justify-center">
                <a
                  href={`#${subject.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className="text-white text-2xl md:text-3xl font-medium hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                >
                  {subject}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LandingPage
