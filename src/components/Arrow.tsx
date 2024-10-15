// components/Arrow.tsx
"use client"; // Use client components since it involves interactivity

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi"; // Import the up arrow icon

export default function Arrow() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [borderStyle, setBorderStyle] = useState<string>("border border-gray-300"); // Initial border style

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current scroll position
      const documentHeight = document.documentElement.scrollHeight; // Total height of the document
      const windowHeight = window.innerHeight; // Height of the viewport
      const totalHeight = documentHeight - windowHeight; // Height that can be scrolled

      // Show arrow when scrolled more than 300px
      setIsVisible(scrollTop > 300);

      // Change border color based on scroll position
      const scrollPercentage = Math.min(scrollTop / totalHeight, 1); // Get percentage of scroll
      const newBorderColor = `border-gray-300`; // Default color
      const secondaryCover = `border-secondary`; // Secondary color cover

      if (scrollTop > 0 && scrollTop < totalHeight) {
        // Change the border color gradually
        setBorderStyle(`${newBorderColor} border-t-${Math.round(scrollPercentage * 100)}`);
      } else if (scrollTop >= totalHeight) {
        // Fully cover with secondary color at the bottom
        setBorderStyle(secondaryCover);
      } else {
        setBorderStyle(newBorderColor);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-4 right-4 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{ display: isVisible ? 'block' : 'none' }} // Hide when not visible
    >
      <button
        className={`flex items-center justify-center rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-105 text-primary ${borderStyle} hover:text-primary`} // Apply dynamic border style and change text color on hover
        style={{
          backgroundColor: 'white',
          color: 'black', // Default font color
          borderWidth: '1px', // Fixed border width
        }}
        onClick={scrollToTop}
      >
        <FiArrowUp size={24} />
      </button>
    </div>
  );
}
