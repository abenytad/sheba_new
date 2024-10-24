import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link'; 
const ContactInfo: React.FC = () => {
  return (
    <div className="flex-1 p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-semibold text-primary mb-4 text-center md:text-left">
        Thank you for visiting us at shebacoffeeethiopia.com
      </h2>
      <h3 className="text-lg text-secondary mb-6 text-center md:text-left">
        If you need to get in touch with the Sheba family, feel free to contact us
      </h3>
      <div className="flex items-center mb-4 hover:bg-gray-100 rounded p-2 transition-colors">
        <FaPhoneAlt className="mr-2 text-xl text-tertiary" />
        <Link href="tel:+251903366641">
          <span className="text-gray-700 hover:underline cursor-pointer">+251 903366641</span>
        </Link>
      </div>
      <div className="flex items-center mb-4 hover:bg-gray-100 rounded p-2 transition-colors">
        <FaPhoneAlt className="mr-2 text-xl text-tertiary" />
        <Link href="tel:+251904064639">
          <span className="text-gray-700 hover:underline cursor-pointer">+251 904064639</span>
        </Link>
      </div>
      
      <div className="flex items-center mb-4 hover:bg-gray-100 rounded p-2 transition-colors">
        <FaPhoneAlt className="mr-2 text-xl text-tertiary" />
        <Link href="tel:+251994768585">
          <span className="text-gray-700 hover:underline cursor-pointer">+251 994768585</span>
        </Link>
      </div>
      
      <div className="flex items-center mb-4 hover:bg-gray-100 rounded p-2 transition-colors">
        <FaEnvelope className="mr-2 text-xl text-tertiary" />
        <Link href="mailto:info@shebacoffeeethiopia.com">
          <span className="text-gray-700 hover:underline cursor-pointer">info@shebacoffeeethiopia.com</span>
        </Link>
      </div>
      <div className="flex items-center mb-4 hover:bg-gray-100 rounded p-2 transition-colors">
        <FaEnvelope className="mr-2 text-xl text-tertiary" />
        <Link href="mailto:sales@shebacoffeeethiopia.com">
          <span className="text-gray-700 hover:underline cursor-pointer">sales@shebacoffeeethiopia.com</span>
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
