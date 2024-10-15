import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactInfo: React.FC = () => {
  return (
    <div className="flex-1 p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-semibold text-primary mb-4 text-center md:text-left">
        Thank you for visiting us at sheba.com
      </h2>
      <h3 className="text-lg text-secondary mb-6 text-center md:text-left">
        If you need to get in touch with the Sheba family, feel free to contact us
      </h3>
      
      {/* Contact Information Section */}
      <div className="flex items-center mb-4 hover:bg-gray-100 rounded p-2 transition-colors">
        <FaPhoneAlt className="mr-2 text-xl text-tertiary" />
        <span className="text-gray-700">+1 234 567 890</span>
      </div>
      <div className="flex items-center mb-4 hover:bg-gray-100 rounded p-2 transition-colors">
        <FaPhoneAlt className="mr-2 text-xl text-tertiary" />
        <span className="text-gray-700">+1 234 567 891</span>
      </div>
      <div className="flex items-center mb-4 hover:bg-gray-100 rounded p-2 transition-colors">
        <FaEnvelope className="mr-2 text-xl text-tertiary" />
        <span className="text-gray-700">contact@sheba.com</span>
      </div>
    </div>
  );
};

export default ContactInfo;
