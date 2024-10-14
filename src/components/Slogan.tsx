// components/Slogan.tsx

import { GiCoffeeBeans } from 'react-icons/gi'; // Importing a coffee beans icon

export default function Slogan() {
  return (
    <section className="flex flex-col items-center py-8 sm:py-12 lg:py-16 px-4 sm:px-8"> {/* Responsive padding */}
      
      {/* Vertical Line at the Top */}
      <div className="w-1 h-16 sm:h-20 lg:h-24 bg-primary mb-4 sm:mb-6 lg:mb-8"></div> {/* Responsive height and margin */}
      
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">
        <span className="text-black">Our </span>
        <span className="text-primary">Slogan</span>
      </h2>

      {/* Icon */}
      <GiCoffeeBeans className="text-secondary text-4xl sm:text-5xl lg:text-6xl mb-4" /> {/* Responsive icon size */}

      {/* Slogan Paragraph */}
      <p className="text-xl sm:text-3xl lg:text-4xl font-bold text-black text-center"> {/* Responsive text size */}
        “The Queen’s Brew from the Heart of Ethiopia”
      </p>

      {/* Vertical Line at the Bottom */}
      <div className="w-1 h-16 sm:h-20 lg:h-24 bg-primary mt-4 sm:mt-6 lg:mt-8"></div> {/* Responsive height and margin */}
    </section>
  );
}
