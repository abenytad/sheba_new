import Image from 'next/image'; // Import the Next.js Image component
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About"
}

export default function About() {
    return (
        <div className="relative">
            {/* Full-width Box with darker gray background starting from the top */}
            <div className="w-full bg-gray-300 h-80 md:h-96 flex items-center justify-center mb-6 mt-0">
                <p className="text-xl md:text-3xl font-semibold text-gray-800 text-center px-4">
                    Experience the rich heritage of <span className="text-primary">Ethiopian coffee</span> with <span className="text-primary">Sheba Coffee</span>.
                </p>
            </div>

            {/* Vertical line and Title */}
            <div className="relative max-w-4xl mx-auto px-6">
                <div className="flex justify-center mb-4">
                    <div className="w-1 h-32 md:h-24 bg-primary"></div> {/* Vertical line */}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">About Us</h1>
            </div>

            {/* Paragraph divided into sections */}
            <div className="max-w-4xl mx-auto px-6">
                <div className="w-full md:max-w-3xl mx-auto"> {/* Fixed width for paragraphs */}
                    <p className="mt-6 text-gray-700 leading-relaxed">
                        <span className="text-primary font-semibold">Sheba Coffee</span> offers a range of premium, single-origin Ethiopian coffees, sourced directly from the highlands of Ethiopia, where the coffee is grown under ideal conditions.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Each bean is handpicked and carefully processed to maintain its distinct flavor profile, which ranges from fruity and floral to bold and earthy.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        The company is focused on delivering a luxurious coffee experience, whether through whole beans, ground coffee, or convenient coffee pods.
                    </p>
                </div>
            </div>

            {/* Vertical line for "Our Name" section */}
            <div className="relative max-w-4xl mx-auto px-6 mt-12">
                <div className="flex justify-center mb-4">
                    <div className="w-1 h-32 md:h-24 bg-primary"></div> {/* Vertical line */}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Our Name</h2>
            </div>

            {/* Paragraph for "Our Name" section divided into sections */}
            <div className="max-w-4xl mx-auto px-6">
                <div className="w-full md:max-w-3xl mx-auto"> {/* Fixed width for paragraphs */}
                    <p className="mt-6 text-gray-700 leading-relaxed">
                        Named after the legendary <span className="text-primary">Queen of Sheba</span>, who ruled over the ancient kingdom of Ethiopia, <span className="text-primary">Sheba Coffee</span> embodies the spirit of excellence, tradition, and cultural pride.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        The company is dedicated to providing high-quality coffee while preserving the traditional coffee cultivation methods that have been passed down through generations in Ethiopia.
                    </p>
                </div>
            </div>

            {/* Vertical line for "Our Mission" section */}
            <div className="relative max-w-4xl mx-auto px-6 mt-12">
                <div className="flex justify-center mb-4">
                    <div className="w-1 h-32 md:h-24 bg-primary"></div> {/* Vertical line */}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Our Mission</h2>
            </div>

            {/* Paragraph for "Our Mission" section divided into sections */}
            <div className="max-w-4xl mx-auto px-6">
                <div className="w-full md:max-w-3xl mx-auto"> {/* Fixed width for paragraphs */}
                    <p className="mt-6 text-gray-700 leading-relaxed">
                        Our mission is to ensure that every cup of <span className="text-primary">Sheba Coffee</span> reflects the authenticity and richness of Ethiopian coffee culture while also promoting sustainable practices that benefit local farmers and communities.
                    </p>
                </div>
            </div>

            {/* Vertical line for "Our Commitment to Sustainability" section */}
            <div className="relative max-w-4xl mx-auto px-6 mt-12">
                <div className="flex justify-center mb-4">
                    <div className="w-1 h-32 md:h-24 bg-primary"></div> {/* Vertical line */}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Our Commitment to Sustainability</h2>
            </div>

            {/* Paragraph for "Our Commitment to Sustainability" section divided into sections */}
            <div className="max-w-4xl mx-auto px-6">
                <div className="w-full md:max-w-3xl mx-auto"> {/* Fixed width for paragraphs */}
                    <p className="mt-6 text-gray-700 leading-relaxed">
                        At <span className="text-primary">Sheba Coffee</span>, sustainability is at the heart of every operation. The company works closely with Ethiopian farmers to ensure fair trade practices, supporting them with better wages, resources, and training.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        This not only improves the quality of life for the farmers but also ensures that the coffee is produced in an environmentally friendly manner. <span className="text-primary">Sheba Coffee</span> is committed to reducing its carbon footprint and employs eco-friendly packaging solutions to minimize environmental impact.
                    </p>
                </div>
            </div>

            {/* Vertical line for "Global Expansion" section */}
            <div className="relative max-w-4xl mx-auto px-6 mt-12">
                <div className="flex justify-center mb-4">
                    <div className="w-1 h-32 md:h-24 bg-primary"></div> {/* Vertical line */}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Global Expansion</h2>
            </div>

            {/* Paragraph for "Global Expansion" section divided into sections */}
            <div className="max-w-4xl mx-auto px-6">
                <div className="w-full md:max-w-3xl mx-auto"> {/* Fixed width for paragraphs */}
                    <p className="mt-6 text-gray-700 leading-relaxed">
                        With a strong foundation in Ethiopia, <span className="text-primary">Sheba Coffee</span> is poised to expand its reach to coffee lovers worldwide. The company is in the process of establishing partnerships with distributors and retailers in key markets across North America, Europe, Asia, and the Middle East.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        By entering the global market, <span className="text-primary">Sheba Coffee</span> aims to introduce the world to the unparalleled quality of Ethiopian coffee, setting a new standard in the industry.
                    </p>
                </div>
            </div>

            {/* Vertical line for "Our Founder" section */}
            <div className="relative max-w-4xl mx-auto px-6 mt-12">
                <div className="flex justify-center mb-4">
                    <div className="w-1 h-32 md:h-24 bg-primary"></div> {/* Vertical line */}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Our Founder</h2>
            </div>

            {/* Founder Image and Paragraph */}
            <div className="max-w-4xl mx-auto px-6 text-center mt-6">
                <Image
                    src="/images/pic.jpg" // Replace with actual image path
                    alt="Mrs. Samrawit Yimer"
                    width={128} // Adjust the width as needed
                    height={128} // Adjust the height as needed
                    className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl md:text-2xl font-semibold text-secondary mb-2">Mrs. Samrawit Yimer</h3>
                <div className="w-full md:max-w-3xl mx-auto"> {/* Fixed width for paragraphs */}
                    <p className="text-gray-700 leading-relaxed">
                        Mrs. Samrawit Yimer is a visionary entrepreneur with a passion for promoting Ethiopia&#39;s rich coffee heritage. She founded <span className="text-primary">Sheba Coffee</span> with a mission to share Ethiopia&#39;s unique coffee experience with the world while empowering local farmers through sustainable practices.
                    </p>
                </div>
            </div>
        </div>
    );
}
