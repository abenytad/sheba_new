// components/Contact.tsx
import { FiPhone, FiMail } from 'react-icons/fi'; // Importing icons for phone and email
import Link from 'next/link'; // Importing Next.js Link

export default function Contact() {
  return (
    <section className="flex flex-col items-center py-8 sm:py-10 lg:py-12 px-4 sm:px-8 lg:px-24"> {/* Reduced top padding */}
      {/* Vertical Line */}
      <div className="w-1 h-16 sm:h-20 lg:h-24 bg-primary mb-8"></div> {/* Vertical line with primary color */}

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center text-black"> {/* Increased font size and black color */}
        Contact Us
      </h2>

      {/* Contact Info Row */}
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-12 lg:space-x-16">
        
        {/* Phone Number 1 */}
        <div className="flex items-center space-x-3">
          <FiPhone className="text-secondary text-3xl sm:text-4xl lg:text-5xl" /> {/* Increased icon size */}
          <Link href="tel:+251903366641" className="text-lg sm:text-xl lg:text-2xl text-black hover:underline"> {/* Use Next.js Link for phone */}
            +251 903366641
          </Link>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-3">
          <FiMail className="text-secondary text-3xl sm:text-4xl lg:text-5xl" /> {/* Increased icon size */}
          <Link href="mailto:info@weshebacoffee.com" className="text-lg sm:text-xl lg:text-2xl text-black hover:underline"> {/* Use Next.js Link for email */}
            info@weshebacoffee.com
          </Link>
        </div>

        {/* Phone Number 3 */}
        <div className="flex items-center space-x-3">
          <FiPhone className="text-secondary text-3xl sm:text-4xl lg:text-5xl" /> {/* Increased icon size */}
          <Link href="tel:+251994768585" className="text-lg sm:text-xl lg:text-2xl text-black hover:underline"> 
          +251 994768585 {/* Replace with actual number */}
          </Link>
        </div>
      </div>
    </section>
  );
}
