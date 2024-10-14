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
];

export default function Testimony() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next testimony
  const nextTestimony = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
  };

  // Function to go to the previous testimony
  const prevTestimony = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonies.length) % testimonies.length);
  };

  // Auto-change testimonies every 5 seconds (5000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimony();
    }, 5000); // Change this value to adjust the time interval (currently 5 seconds)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <section className="flex flex-col items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-24"> {/* Increased padding for top and bottom */}
      {/* Vertical Line */}
      <div className="w-1 h-16 sm:h-20 lg:h-24 bg-primary mb-8"></div> {/* Responsive vertical line */}

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center"> {/* Responsive title font size */}
        Our <span className="text-primary">Testimonies</span>
      </h2>

      {/* Testimony Display */}
      <div className="flex items-center justify-center space-x-4 sm:space-x-6 lg:space-x-8"> {/* Adjusted spacing for responsiveness */}
        <button
          onClick={prevTestimony}
          className="text-secondary text-3xl sm:text-4xl lg:text-5xl transition-transform transform hover:scale-110"
        >
          &lt;
        </button>
        
        <div className="text-center max-w-xs sm:max-w-sm lg:max-w-md px-4 sm:px-6"> {/* Responsive container widths */}
          <p
            className="text-lg sm:text-xl lg:text-2xl text-black italic mb-4 overflow-hidden text-ellipsis h-24 line-clamp-3" // Increased font size here
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 3, // Limit to 3 lines
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {testimonies[currentIndex].text}
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-primary">{testimonies[currentIndex].author}</p> {/* Responsive author font size */}
        </div>
        
        <button
          onClick={nextTestimony}
          className="text-secondary text-3xl sm:text-4xl lg:text-5xl transition-transform transform hover:scale-110"
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
