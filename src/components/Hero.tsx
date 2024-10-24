"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTiktok, FaEnvelope } from 'react-icons/fa';
export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
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
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="/videos/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <Image 
          src="/images/logo2.png" 
          alt="Sheba Coffee Logo" 
          width={350} 
          height={350}
          className="mt-8" 
        />
        <p className="text-base sm:text-xl md:text-3xl max-w-4xl">
          Where we bring you the rich flavors and heritage of Ethiopian coffee.
        </p>
        <div className="flex space-x-4 mt-6 sm:hidden">
          <Link href="https://www.facebook.com/profile.php?id=61566971802522" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={40} className="text-secondary hover:text-white hover:bg-secondary p-2 rounded-full transition" />
          </Link>
          <Link href="https://instagram.com/sheba_coffees" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40} className="text-secondary hover:text-white hover:bg-secondary p-2 rounded-full transition" />
          </Link>
          <Link href="https://t.me/+72fDL2lX7j05MWE0" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane size={40} className="text-secondary hover:text-white hover:bg-secondary p-2 rounded-full transition" />
          </Link>
          <Link href="https://tiktok.com/@sheba_coffee" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={40} className="text-secondary hover:text-white hover:bg-secondary p-2 rounded-full transition" />
          </Link>
          <Link href="mailto:info@shebacoffeeethiopia.com">
            <FaEnvelope size={40} className="text-secondary hover:text-white hover:bg-secondary p-2 rounded-full transition" />
          </Link>
        </div>
      </div>
      <div
        className={`hidden sm:flex fixed top-1/2 transform -translate-y-1/2 flex-col space-y-4 sm:space-y-6 z-20 transition-all duration-300 ${
          scrolled ? 'left-4 sm:left-10 text-secondary' : 'left-2 sm:left-6 text-white'
        }`}
      >
        <Link
          href="https://www.facebook.com/profile.php?id=61566971802522"
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
        <Link
          href="https://t.me/+72fDL2lX7j05MWE0"
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
        <Link
          href="https://tiktok.com/@sheba_coffee1"
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

        <Link
          href="mailto:info@shebacoffeeethiopia.com"
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
