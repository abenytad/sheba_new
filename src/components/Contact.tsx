import { FiPhone, FiMail } from 'react-icons/fi';
import Link from 'next/link'; 
export default function Contact() {
  return (
    <section className="flex flex-col items-center py-8 sm:py-10 lg:py-12 px-4 sm:px-8 lg:px-24"> 
      <div className="w-1 h-16 sm:h-20 lg:h-24 bg-primary mb-8"></div> 
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center text-black"> 
        Contact Us
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-12 lg:space-x-16">
        <div className="contact-div">
          <FiPhone className="contact-icon" />
          <Link href="tel:+251903366641" className="contact-link"> 
            +251 903366641
          </Link>
        </div>
        <div className="contact-div">
          <FiMail className="contact-icon" /> 
          <Link href="mailto:info@shebacoffeeethiopia.com" className="contact-link"> 
            info@shebacoffeeethiopia.com
          </Link>
        </div>
        <div className="contact-div">
          <FiPhone className="contact-icon" /> 
          <Link href="tel:+251994768585" className="contact-link"> 
          +251 994768585
          </Link>
        </div>
      </div>
    </section>
  );
}
