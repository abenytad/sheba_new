"use client";

import { useState, useEffect, useCallback } from 'react';
import client from '../../utils/sanity';

interface Testimony {
  name: string;
  description: string;
  star: number;
}

async function fetchTestimonies() {
  const testimonies = await client.fetch(`*[_type == "testimony"]{
    name,
    description,
    star,
  }`);
  return testimonies;
}

export default function Testimony() {
  const [testimonies, setTestimonies] = useState<Testimony[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getTestimonies = async () => {
      const fetchedTestimonies = await fetchTestimonies();
      setTestimonies(fetchedTestimonies);
      setLoading(false);
      console.log("Fetched Testimonies:", fetchedTestimonies);
    };

    getTestimonies();
  }, []);

  const Loading = () => (
    <div className="flex items-center justify-center h-72">
      <div className="loader">Loading...</div>
    </div>
  );

  const nextTestimony = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
  }, [testimonies.length]);

  const prevTestimony = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonies.length) % testimonies.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!loading) {
        nextTestimony();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [loading, nextTestimony]);

  const renderStars = (star: number) => {
    if (star >= 5) {
      return '★★★★★'; 
    } else if (star <= 0) {
      return '';
    } else {
      return '★'.repeat(star);
    }
  };

  return (
    <section className="flex flex-col items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-24">
      <div className="w-1 h-12 sm:h-16 lg:h-20 bg-primary mb-8"></div>
      <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-6 text-center">
        Loved by <span className="text-primary">Coffee Lovers</span>
      </h2>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex items-center justify-center space-x-2 sm:space-x-4 lg:space-x-16">
          <button
            onClick={prevTestimony}
            className="text-secondary text-3xl sm:text-5xl lg:text-7xl transition-transform transform hover:scale-110"
          >
            &lt;
          </button>

          <div className="flex flex-shrink-0 w-64 sm:w-80 lg:w-96">
            {testimonies.length > 0 ? (
              <div
                key={testimonies[currentIndex]?.name}
                className="bg-gray-200 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg flex flex-col justify-center items-center h-[150px] sm:h-[250px] lg:h-[350px] w-full transition-transform duration-300"
              >
                {/* Star Rating */}
                <p className="text-yellow-500 text-lg">{renderStars(testimonies[currentIndex]?.star)}</p>
                {/* Full text centered */}
                <p className="text-sm sm:text-lg lg:text-xl text-black italic mb-4 text-center">
                  {testimonies[currentIndex]?.description}
                </p>
                <p className="text-xs sm:text-base lg:text-lg text-primary text-center">
                  {testimonies[currentIndex]?.name}
                </p>
              </div>
            ) : (
              <div
                className="bg-gray-200 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg flex flex-col justify-center items-center h-[150px] sm:h-[250px] lg:h-[350px] w-full transition-transform duration-300"
              >
                <p className="text-sm sm:text-lg lg:text-xl text-black italic mb-4 text-center">
                  We look forward to your feedback after your experience with us!
                </p>
                <p className="text-xs sm:text-base lg:text-lg text-primary text-center">
                  Sheba Family
                </p>
              </div>
            )}
          </div>

          <button
            onClick={nextTestimony}
            className="text-secondary text-3xl sm:text-5xl lg:text-7xl transition-transform transform hover:scale-110"
          >
            &gt;
          </button>
        </div>
      )}

      {/* Dots indicator */}
      <div className="flex space-x-2 mt-4">
        {testimonies.map((_, index) => (
          <div
            key={index}
            className={`h-2.5 w-2.5 rounded-full ${currentIndex === index ? 'bg-primary' : 'bg-gray-400'}`}
          ></div>
        ))}
      </div>
    </section>
  );
}
