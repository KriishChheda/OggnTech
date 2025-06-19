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

// there is a class called IntersectionObserver whose object "observer" i am creating. The class has a paramtereized constructor which takes two arguments a call back function and a dictionary.

// using the observe function we r defining which component will be looked for. When the component is visible 50% or more on the view port then the call back function will be triggered. 

// threshold defines what percent of the component should be visible for the call back to be triggered. This is used for the map section .Whenever the map section is visible this will run.

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
    <div ref={counterRef} className="text-center py-8">
  <div
    className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent"
    style={{
      backgroundImage: 'linear-gradient(90deg, #FFFFFF 4.75%, #2367AA 58.12%)',
    }}
  >
    <span>{Math.floor(count / 1000)}</span>
    <span>{String(Math.floor(count % 1000)).padStart(3, '0')}</span>
    <span>{suffix}</span>
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
// array of "Top Subjects" i.e. the trending subjects

function LandingPage() {
  return (
    <>
     {/* This is the first section of the landing page the image */}
      <img src={FrontPage} alt="Front Page" />
     
     {/* This is  Static search bar along with the text on top of it , the second section */}
      <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-12">
        <div className="text-center mb-16 relative">
        <h1 className="poetsen-one-regular text-5xl md:text-5xl font-bold text-white mb-8 leading-tight ">
          <b><i>Get your Perfect Tutor</i></b>
        </h1>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-[#438DF0] rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <Search className="text-white w-8 h-8 ml-4" />
            </div>
          </div>
          
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
            <h2 className="poetsen-one-regular text-5xl md:text-5xl font-bold text-white whitespace-nowrap ">
              <b><i>With ONE Click</i></b>
            </h2>
          </div>
        </div>
      </div>
 
      {/*Third section :- the For Teacher and For Students buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full mt-8">
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-gray-300 mb-8">For Students</h3>
          <div className="space-y-4">
            <button className="w-full bg-gray-200 hover:bg-gray-100 text-[#063EE6ED] font-semibold py-4 px-8 rounded-xl text-xl transition-colors duration-200 rasa-regular">
              Assignment Help
            </button>
            <button className="w-full bg-gray-200 hover:bg-gray-100 text-[#063EE6ED] font-semibold py-4 px-8 rounded-xl text-xl transition-colors duration-200 rasa-regular">
              Study Material
            </button>
            <button className="w-full bg-gray-200 hover:bg-gray-100 text-[#063EE6ED] font-semibold py-4 px-8 rounded-xl text-xl transition-colors duration-200 rasa-regular">
              24/7 Support
            </button>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-semibold text-gray-300 mb-8">For Teachers</h3>
          <div className="space-y-4">
            <button className="w-full bg-gray-200 hover:bg-gray-100 text-[#063EE6ED]  font-semibold py-4 px-8 rounded-xl text-xl transition-colors duration-200 rasa-regular">
              Teaching Jobs
            </button>
            <button className="w-full bg-gray-200 hover:bg-gray-100 text-[#063EE6ED]  font-semibold py-4 px-8 rounded-xl text-xl transition-colors duration-200 rasa-regular">
              Provide Solutions
            </button>
            <button className="w-full bg-gray-200 hover:bg-gray-100 text-[#063EE6ED] font-semibold py-4 px-8 rounded-xl text-xl transition-colors duration-200 rasa-regular">
              Work Remotely
            </button>
          </div>
        </div>
      </div>
    </div>

   {/* The process section and why us? /about us section */}
    <div className="bg-[#2367AA] bg-opacity-71 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-8 inter-regular">
          The Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-[#2367AA] bg-opacity-71 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 rasa-regular">
              Choose your subject
            </h3>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-[#2367AA] bg-opacity-71 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 rasa-regular">
              Get the perfect tutor
            </h3>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-[#2367AA] bg-opacity-71 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 rasa-regular">
              Learn and improve
            </h3>
          </div>
        </div>
        
        <div>
          <h3 className="text-4xl font-bold text-white text-center mb-8 inter-regular">
            Why Us?
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg inter-regular">
              <h4 className="text-xl font-semibold text-gray-800 ">
                Access to Qualified Teachers
              </h4>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg inter-regular">
              <h4 className="text-xl font-semibold text-gray-800">
                Reach a Global Network
              </h4>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg inter-regular">
              <h4 className="text-xl font-semibold text-gray-800 ">
                Learn at your own pace
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Map section */}
   <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden relative">
  <img src={world} alt="" className="w-1/2 h-1/2 object-contain" />

  <div className="absolute top-24 left-24 md:top-20 md:left-45">
    <AnimatedCounter target={9500} /> 
     {/*Target contains the value upto which we want to count to */}
     {/*Every div calls the Animated Counter component defined up, which returns a jsx */}
    <p className="text-white text-xl md:text-2xl font-medium mt-2">Subjects</p>
  </div>

  <div className="absolute top-24 right-24 md:top-20 md:right-45 text-right">
    <AnimatedCounter target={900} />
    <p className="text-white text-xl md:text-2xl font-medium mt-2">Expert Tutors</p>
  </div>

  <div className="absolute bottom-24 left24 md:bottom-20 md:left-45">
    <AnimatedCounter target={170} />
    <p className="text-white text-xl md:text-2xl font-medium mt-2">Countries</p>
  </div>

  <div className="absolute bottom-24 right-24 md:bottom-20 md:right-45 text-right">
    <AnimatedCounter target={5700} />
    <p className="text-white text-xl md:text-2xl font-medium mt-2">Students</p>
  </div>
</div>

   {/*top subjects section */}
    <div className="bg-gray-900 min-h-screen">
      <div className="bg-[#2367AAB5] py-8 ">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center rasa-regular">
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
                  className="text-white text-xl md:text-md font-medium hover:text-blue-400 transition-colors duration-200 cursor-pointer rasa-regular"
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
