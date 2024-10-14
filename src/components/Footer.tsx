// components/Footer.tsx
import Link from 'next/link'; // Import Next.js Link
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok } from 'react-icons/fa'; // Import social media icons

export default function Footer() {
  return (
    <footer className="bg-white py-8 sm:py-10 lg:py-12 mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16"> {/* White background, max width, responsive padding */}
      {/* Horizontal Line */}
      <div className="w-full h-1 bg-primary mx-auto mb-6"></div> {/* Horizontal line centered with primary color */}

      {/* Footer Content */}
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
        
        {/* Social Media Section */}
        <div className="flex space-x-6">
          <Link href="https://facebook.com" className="text-gray-500 hover:text-primary text-2xl">
            <FaFacebook />
          </Link>
          <Link href="https://instagram.com" className="text-gray-500 hover:text-primary text-2xl">
            <FaInstagram />
          </Link>
          <Link href="https://telegram.org" className="text-gray-500 hover:text-primary text-2xl">
            <FaTelegram />
          </Link>
          <Link href="https://tiktok.com" className="text-gray-500 hover:text-primary text-2xl">
            <FaTiktok />
          </Link>
        </div>

        {/* Company Info Section */}
        <div className="text-center sm:text-right text-black uppercase font-bold"> {/* Text in black, uppercase */}
          <p className="text-lg sm:text-xl inline-block">SHEBA COFFEE</p>
          <span className="mx-2">|</span> {/* Separator */}
          <p className="text-sm sm:text-base inline-block">© 2024 ALL RIGHTS RESERVED.</p> {/* Rights info */}
        </div>
      </div>
    </footer>
  );
}
