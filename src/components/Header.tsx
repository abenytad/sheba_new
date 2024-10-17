"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname: string = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky ? "bg-black/75" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-4 max-w-screen-xl mx-auto px-4"> {/* Adjusted the height with py-4 for more vertical centering */}
        
        {/* Logo section on the left */}
        <div className="flex-shrink-0 flex items-center h-full"> {/* Added flex and h-full to center vertically */}
          <Link href="/">
            <Image
              src="/images/logo1.png"
              alt="Logo"
              width={175}
              height={175}
            />
          </Link>
        </div>

        {/* Desktop Links - centered */}
        <div className="flex-1 hidden md:flex justify-center">
          <nav className="space-x-6 text-white text-sm">
            {["/", "/about", "/blog", "/contact"].map((path) => (
              <Link
                key={path}
                href={path}
                className={`hover:text-primary ${
                  pathname === path ? "text-secondary" : ""
                }`}
              >
                {path === "/" ? "HOME" : path.toUpperCase().replace("/", " ")}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Icon - Positioned to the top right */}
        <div className="md:hidden flex-shrink-0 absolute top-0 right-4 flex items-center h-full">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-50`}
      >
        {/* Close Icon Positioned at Top-Right Inside Drawer */}
        <div className="absolute top-4 right-4">
          <button onClick={toggleMenu} className="text-white">
            <FiX size={30} />
          </button>
        </div>

        {/* Links Section - Moved to Top of Drawer */}
        <nav className="flex flex-col justify-start items-center pt-16 space-y-6 text-white text-base">
          {["/", "/about", "/blog", "/contact"].map((path) => (
            <Link
              key={path}
              href={path}
              className={`hover:text-primary ${
                pathname === path ? "text-secondary" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {path === "/" ? "HOME" : path.toUpperCase().replace("/", " ")}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
