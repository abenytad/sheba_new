"use client";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi"; 
export default function Arrow() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [borderStyle, setBorderStyle] = useState<string>("border border-gray-300");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; 
      const documentHeight = document.documentElement.scrollHeight; 
      const windowHeight = window.innerHeight; 
      const totalHeight = documentHeight - windowHeight;
      setIsVisible(scrollTop > 300);
      const scrollPercentage = Math.min(scrollTop / totalHeight, 1); 
      const newBorderColor = `border-gray-300`; 
      const secondaryCover = `border-secondary`; 
      if (scrollTop > 0 && scrollTop < totalHeight) {
        setBorderStyle(`${newBorderColor} border-t-${Math.round(scrollPercentage * 100)}`);
      } else if (scrollTop >= totalHeight) {
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
      style={{ display: isVisible ? 'block' : 'none' }} 
    >
      <button
        className={`flex items-center justify-center rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-105 text-primary ${borderStyle} hover:text-primary`} 
        style={{
          backgroundColor: 'white',
          color: 'black', 
          borderWidth: '1px', 
        }}
        onClick={scrollToTop}
      >
        <FiArrowUp size={24} />
      </button>
    </div>
  );
}
