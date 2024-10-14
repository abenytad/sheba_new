// components/Hero.tsx
"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTiktok, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position to toggle scrolled state
  useEffect(() => {
    const handleScroll = () => {
      // If the scroll position is greater than 50 pixels, set `scrolled` to true
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen w-full">
      {/* Video Background */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="/videos/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay to darken video for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight">
          Welcome to Our Platform
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-xl">
          Discover amazing features and services we offer to make your life easier.
        </p>

        <div className="mt-8">
          <button className="px-4 py-2 sm:px-6 sm:py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary-dark transition duration-300 text-sm sm:text-base md:text-lg">
            Get Started
          </button>
        </div>

        {/* Social Media Icons for Mobile */}
        <div className="flex space-x-4 mt-6 sm:hidden">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={32} className="text-secondary hover:text-white hover:bg-secondary p-2 rounded-full transition" />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32} className="text-secondary hover:text-white hover:bg-secondary p-2 rounded-full transition" />
          </Link>
          <Link href="https://t.me" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane size={32} className="text-secondary hover:text-white hover:bg-secondary p-2 rounded-full transition" />
          </Link>
          <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={32} className="text-secondary hover:text-white hover:bg-secondary p-2 rounded-full transition" />
          </Link>
          <Link href="mailto:your-email@example.com">
            <FaEnvelope size={32} className="text-secondary hover:text-white hover:bg-secondary p-2 rounded-full transition" />
          </Link>
        </div>
      </div>

      {/* Social Media Icons for Larger Screens */}
      <div
        className={`hidden sm:flex fixed top-1/2 transform -translate-y-1/2 flex-col space-y-4 sm:space-y-6 z-20 transition-all duration-300 ${
          scrolled ? 'left-4 sm:left-8 text-secondary' : 'left-2 sm:left-4 text-white'
        }`}
      >
        {/* Facebook */}
        <Link
          href="https://facebook.com"
          className={`group w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-transparent transition duration-300 ${
            scrolled
              ? 'hover:bg-secondary hover:text-white text-secondary font-semibold'
              : 'hover:bg-secondary hover:text-white font-semibold'
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={16} className="sm:text-lg" />
        </Link>

        {/* Instagram */}
        <Link
          href="https://instagram.com"
          className={`group w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-transparent transition duration-300 ${
            scrolled
              ? 'hover:bg-secondary hover:text-white text-secondary font-semibold'
              : 'hover:bg-secondary hover:text-white font-semibold'
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={16} className="sm:text-lg" />
        </Link>

        {/* Telegram */}
        <Link
          href="https://t.me"
          className={`group w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-transparent transition duration-300 ${
            scrolled
              ? 'hover:bg-secondary hover:text-white text-secondary font-semibold'
              : 'hover:bg-secondary hover:text-white font-semibold'
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane size={16} className="sm:text-lg" />
        </Link>

        {/* TikTok */}
        <Link
          href="https://tiktok.com"
          className={`group w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-transparent transition duration-300 ${
            scrolled
              ? 'hover:bg-secondary hover:text-white text-secondary font-semibold'
              : 'hover:bg-secondary hover:text-white font-semibold'
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok size={16} className="sm:text-lg" />
        </Link>

        {/* Email */}
        <Link
          href="mailto:your-email@example.com"
          className={`group w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-transparent transition duration-300 ${
            scrolled
              ? 'hover:bg-secondary hover:text-white text-secondary font-semibold'
              : 'hover:bg-secondary hover:text-white font-semibold'
          }`}
        >
          <FaEnvelope size={16} className="sm:text-lg" />
        </Link>
      </div>
    </section>
  );
}
