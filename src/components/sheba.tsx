// components/Sheba.tsx

import Link from 'next/link';

export default function Sheba() {
  return (
    <section className="bg-white px-4 md:px-8 py-8 md:py-16 flex flex-col items-center">
      {/* Vertical Line */}
      <div className="w-1 h-32 md:h-24 bg-primary mb-4 md:mb-6"></div> {/* Vertical line with reduced width and responsive height */}

      {/* Title */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-8 text-center">
        A Premium <span className="text-primary">Coffee</span> Company
      </h1>

      {/* Paragraph with sections */}
      <div className="text-sm md:text-base text-black text-center max-w-xs md:max-w-3xl lg:max-w-5xl space-y-4 md:space-y-6 px-4 md:px-0">
        <p>
          <span className="text-primary font-semibold">Sheba Coffee</span> offers
          a range of premium, single-origin Ethiopian coffees, sourced directly
          from the highlands of Ethiopia, where the coffee is grown under ideal
          conditions.
        </p>

        <p>
          Each bean is handpicked and carefully processed to maintain its
          distinct flavor profile, which ranges from fruity and floral to bold
          and earthy.
        </p>

        <p>
          The company is focused on delivering a luxurious coffee experience,
          whether through whole beans, ground coffee, or convenient coffee pods.
        </p>
      </div>

      {/* Read More Button */}
      <div className="mt-6 md:mt-12">
        <Link href="/about" className="px-4 py-2 md:px-6 md:py-3 bg-primary text-white rounded-full font-semibold hover:bg-white hover:text-secondary transition-all duration-300 border-2 border-primary">
          Read More
        </Link>
      </div>
    </section>
  );
}
