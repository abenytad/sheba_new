// components/Hero.tsx
"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importing Image from Next.js
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
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        
        {/* Logo Image */}
        <Image 
          src="/images/logo2.png" // Path to the logo image
          alt="Sheba Coffee Logo" // Alternative text for the image
          width={150} // Set an appropriate width
          height={150} // Set an appropriate height
          className="mb-4" // Add margin below the logo
        />
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight text-primary mb-2">
          Welcome to Sheba Coffee
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-xl">
          Where we bring you the rich flavors and heritage of Ethiopian coffee.
        </p>

        {/* Social Media Icons for Mobile */}
        <div className="flex space-x-4 mt-6 sm:hidden">
          <Link href="https://facebook.com/shebaa" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={40} className="text-secondary hover:text-white hover:bg-secondary p-2 rounded-full transition" />
          </Link>
          <Link href="https://instagram.com/sheba_coffees" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40} className="text-secondary hover:text-white hover:bg-secondary p-2 rounded-full transition" />
          </Link>
          <Link href="https://t.me" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane size={40} className="text-secondary hover:text-white hover:bg-secondary p-2 rounded-full transition" />
          </Link>
          <Link href="https://tiktok.com/@sheba_coffee" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={40} className="text-secondary hover:text-white hover:bg-secondary p-2 rounded-full transition" />
          </Link>
          <Link href="mailto:your-email@example.com">
            <FaEnvelope size={40} className="text-secondary hover:text-white hover:bg-secondary p-2 rounded-full transition" />
          </Link>
        </div>
      </div>

      {/* Social Media Icons for Larger Screens */}
      <div
        className={`hidden sm:flex fixed top-1/2 transform -translate-y-1/2 flex-col space-y-4 sm:space-y-6 z-20 transition-all duration-300 ${
          scrolled ? 'left-4 sm:left-10 text-secondary' : 'left-2 sm:left-6 text-white'
        }`}
      >
        {/* Facebook */}
        <Link
          href="https://facebook.com/shebaa"
          className={`group w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-transparent transition duration-300 ${
            scrolled
              ? 'hover:bg-secondary hover:text-white text-secondary font-semibold'
              : 'hover:bg-secondary hover:text-white font-semibold'
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={20} className="sm:text-lg" />
        </Link>

        {/* Instagram */}
        <Link
          href="https://instagram.com/sheba_coffees"
          className={`group w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-transparent transition duration-300 ${
            scrolled
              ? 'hover:bg-secondary hover:text-white text-secondary font-semibold'
              : 'hover:bg-secondary hover:text-white font-semibold'
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={20} className="sm:text-lg" />
        </Link>

        {/* Telegram */}
        <Link
          href="https://t.me"
          className={`group w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-transparent transition duration-300 ${
            scrolled
              ? 'hover:bg-secondary hover:text-white text-secondary font-semibold'
              : 'hover:bg-secondary hover:text-white font-semibold'
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane size={20} className="sm:text-lg" />
        </Link>

        {/* TikTok */}
        <Link
          href="https://tiktok.com/@sheba_coffee"
          className={`group w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-transparent transition duration-300 ${
            scrolled
              ? 'hover:bg-secondary hover:text-white text-secondary font-semibold'
              : 'hover:bg-secondary hover:text-white font-semibold'
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok size={20} className="sm:text-lg" />
        </Link>

        {/* Email */}
        <Link
          href="mailto:your-email@example.com"
          className={`group w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-transparent transition duration-300 ${
            scrolled
              ? 'hover:bg-secondary hover:text-white text-secondary font-semibold'
              : 'hover:bg-secondary hover:text-white font-semibold'
          }`}
        >
          <FaEnvelope size={20} className="sm:text-lg" />
        </Link>
      </div>
    </section>
  );
}
