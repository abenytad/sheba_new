// components/Testimony.tsx
"use client";

import { useState, useEffect } from 'react';

const testimonies = [
  {
    id: 1,
    text: "The Queen's Brew has transformed my mornings! The rich flavors and aromas are unmatched.",
    author: 'Alice Johnson',
  },
  {
    id: 2,
    text: "Every sip feels like a trip to Ethiopia! I can't get enough of this coffee. It's truly a delightful experience every morning.",
    author: 'David Smith',
  },
  {
    id: 3,
    text: "A delightful brew that brightens my day. Highly recommend to all coffee lovers! This coffee is unmatched in flavor and smoothness.",
    author: 'Sarah Williams',
  },
  {
    id: 4,
    text: "A great pick-me-up for my busy days! The blend is smooth and energizing.",
    author: 'John Doe',
  },
  {
    id: 5,
    text: "I start every day with this coffee. It's a morning ritual that I can't live without!",
    author: 'Emma Stone',
  },
  {
    id: 6,
    text: "A wonderful way to enjoy coffee! The taste is bold yet smooth.",
    author: 'Michael Brown',
  },
];

export default function Testimony() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimony = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
  };

  const prevTestimony = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonies.length) % testimonies.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimony();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-24">
      {/* Vertical Line */}
      <div className="w-1 h-12 sm:h-16 lg:h-20 bg-primary mb-8"></div>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-6 text-center">
        Loved by <span className="text-primary">Coffee Lovers</span>
      </h2>

      {/* Testimony Display */}
      <div className="flex items-center justify-center space-x-2 sm:space-x-4 lg:space-x-16">
        <button
          onClick={prevTestimony}
          className="text-secondary text-3xl sm:text-5xl lg:text-7xl transition-transform transform hover:scale-110"
        >
          &lt;
        </button>

        <div className="flex flex-shrink-0 w-64 sm:w-80 lg:w-96">
          <div
            key={testimonies[currentIndex].id}
            className="bg-gray-200 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg flex flex-col justify-center items-center h-[150px] sm:h-[250px] lg:h-[350px] w-full transition-transform duration-300"
          >
            {/* Full text centered */}
            <p className="text-sm sm:text-lg lg:text-xl text-black italic mb-4 text-center">
              {testimonies[currentIndex].text}
            </p>
            <p className="text-xs sm:text-base lg:text-lg text-primary text-center">
              {testimonies[currentIndex].author}
            </p>
          </div>
        </div>

        <button
          onClick={nextTestimony}
          className="text-secondary text-3xl sm:text-5xl lg:text-7xl transition-transform transform hover:scale-110"
        >
          &gt;
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex space-x-2 mt-4">
        {testimonies.map((_, index) => (
          <div
            key={index}
            className={`h-2.5 w-2.5 rounded-full ${
              currentIndex === index ? 'bg-primary' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
