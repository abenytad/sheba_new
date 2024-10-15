import Link from 'next/link'; // Import Next.js Link
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok, FaEnvelope } from 'react-icons/fa'; // Import social media icons

export default function Footer() {
  return (
    <footer className="bg-white py-8 sm:py-10 lg:py-8 mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16"> {/* White background, max width, responsive padding */}
      {/* Horizontal Line */}
      <div className="w-full h-1 bg-primary mx-auto mb-6"></div> {/* Horizontal line centered with primary color */}

      {/* Footer Content */}
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
        
        {/* Social Media Section */}
        <div className="flex space-x-6">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer"className="text-gray-500 hover:text-primary text-2xl">
            <FaFacebook />
          </Link>
          <Link href="https://instagram.com/sheba_coffees" target="_blank" rel="noopener noreferrer"className="text-gray-500 hover:text-primary text-2xl">
            <FaInstagram />
          </Link>
          <Link href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary text-2xl">
            <FaTelegram />
          </Link>
          <Link href="https://tiktok.com/@sheba_coffee" target="_blank" rel="noopener noreferrer"className="text-gray-500 hover:text-primary text-2xl">
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

      {/* Designed & Developed By Section */}
      <div className="text-center mt-4 text-sm text-gray-500 flex flex-col items-center"> {/* Adjusted mt-4 for less space */}
        <p>Designed & Developed by Abenezer Tadesse</p>
        <div className="flex items-center space-x-4 mt-2"> {/* Added space between icons and text */}
          <Link href="tel:+251900231586" className="flex items-center space-x-1">
            <span>+251900231586</span>
          </Link>
          <Link href="mailto:abenezertadesse353@gmail.com" target="_blank" rel="noopener noreferrer " className="flex items-center space-x-1">
            <FaEnvelope className="text-gray-500 text-lg" />
            <span className="text-sm">abenezertadesse353@gmail.com</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
