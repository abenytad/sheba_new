import Image from 'next/image'; 
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About",
    description:"Learn more about Sheba Coffee, a company dedicated to sharing the rich coffee heritage of Ethiopia. From the birthplace of coffee, we bring you premium, ethically sourced beans that embody the essence of Ethiopian tradition and quality.",
    keywords:["About Sheba Coffee", "Ethiopian coffee heritage", "premium coffee", "ethically sourced coffee", "Ethiopian tradition", "coffee culture Ethiopia","samrawit yimer"]
}

export default function About() {
    return (
        <div className="relative">
            <div className="w-full bg-gray-300 h-80 md:h-96 flex items-center justify-center mb-6 mt-0">
                <p className="text-xl md:text-3xl font-semibold text-gray-800 text-center px-4">
                    Experience the rich heritage of <span className="text-primary">Ethiopian coffee</span> with <span className="text-primary">Sheba Coffee</span>.
                </p>
            </div>
            <div className="relative max-w-4xl mx-auto px-6">
                <div className="flex justify-center mb-4">
                    <div className="w-1 h-32 md:h-24 bg-primary"></div> 
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">About Us</h1>
            </div>
            <div className="max-w-4xl mx-auto px-6">
                <div className="w-full md:max-w-3xl mx-auto">
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
            <div className="relative max-w-4xl mx-auto px-6 mt-12">
                <div className="flex justify-center mb-4">
                    <div className="w-1 h-32 md:h-24 bg-primary"></div> 
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Our Name</h2>
            </div>
            <div className="max-w-4xl mx-auto px-6">
                <div className="w-full md:max-w-3xl mx-auto">
                    <p className="mt-6 text-gray-700 leading-relaxed">
                        Named after the legendary <span className="text-primary">Queen of Sheba</span>, who ruled over the ancient kingdom of Ethiopia, <span className="text-primary">Sheba Coffee</span> embodies the spirit of excellence, tradition, and cultural pride.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        The company is dedicated to providing high-quality coffee while preserving the traditional coffee cultivation methods that have been passed down through generations in Ethiopia.
                    </p>
                </div>
            </div>
            <div className="relative max-w-4xl mx-auto px-6 mt-12">
                <div className="flex justify-center mb-4">
                    <div className="w-1 h-32 md:h-24 bg-primary"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Our Mission</h2>
            </div>
            <div className="max-w-4xl mx-auto px-6">
                <div className="w-full md:max-w-3xl mx-auto">
                    <p className="mt-6 text-gray-700 leading-relaxed">
                        Our mission is to ensure that every cup of <span className="text-primary">Sheba Coffee</span> reflects the authenticity and richness of Ethiopian coffee culture while also promoting sustainable practices that benefit local farmers and communities.
                    </p>
                </div>
            </div>
            <div className="relative max-w-4xl mx-auto px-6 mt-12">
                <div className="flex justify-center mb-4">
                    <div className="w-1 h-32 md:h-24 bg-primary"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Our Commitment to Sustainability</h2>
            </div>
            <div className="max-w-4xl mx-auto px-6">
                <div className="w-full md:max-w-3xl mx-auto">
                    <p className="mt-6 text-gray-700 leading-relaxed">
                        At <span className="text-primary">Sheba Coffee</span>, sustainability is at the heart of every operation. The company works closely with Ethiopian farmers to ensure fair trade practices, supporting them with better wages, resources, and training.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        This not only improves the quality of life for the farmers but also ensures that the coffee is produced in an environmentally friendly manner. <span className="text-primary">Sheba Coffee</span> is committed to reducing its carbon footprint and employs eco-friendly packaging solutions to minimize environmental impact.
                    </p>
                </div>
            </div>
            <div className="relative max-w-4xl mx-auto px-6 mt-12">
                <div className="flex justify-center mb-4">
                    <div className="w-1 h-32 md:h-24 bg-primary"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Global Expansion</h2>
            </div>
            <div className="max-w-4xl mx-auto px-6">
                <div className="w-full md:max-w-3xl mx-auto">
                    <p className="mt-6 text-gray-700 leading-relaxed">
                        With a strong foundation in Ethiopia, <span className="text-primary">Sheba Coffee</span> is poised to expand its reach to coffee lovers worldwide. The company is in the process of establishing partnerships with distributors and retailers in key markets across North America, Europe, Asia, and the Middle East.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        By entering the global market, <span className="text-primary">Sheba Coffee</span> aims to introduce the world to the unparalleled quality of Ethiopian coffee, setting a new standard in the industry.
                    </p>
                </div>
            </div>
            <div className="relative max-w-4xl mx-auto px-6 mt-12">
                <div className="flex justify-center mb-4">
                    <div className="w-1 h-32 md:h-24 bg-primary"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Our Founder</h2>
            </div>
            <div className="max-w-4xl mx-auto px-6 text-center mt-6">
                {/* <Image
                    src="/images/pic.jpg"
                    alt="Mrs. Samrawit Yimer"
                    width={200}
                    height={200} 
                    className="rounded-full mx-auto mb-4"
                /> */}
                <h3 className="text-xl md:text-2xl font-semibold text-secondary mb-2">Mrs. Samrawit Yimer</h3>
                <div className="w-full md:max-w-3xl mx-auto"> 
                    <p className="text-gray-700 leading-relaxed">
                    Mrs. Samrawit Yimer is a visionary entrepreneur and advocate for Ethiopia&#39;s rich cultural heritage, particularly its globally renowned coffee tradition. As the founder and CEO of Sheba Coffee, Mrs. Yimer is dedicated to bringing the distinctive flavors of <span className="text-primary">Ethiopian coffee </span> to an international audience, while simultaneously promoting ethical and sustainable practices within the industry.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                    Driven by a deep commitment to the empowerment of local coffee farmers, she has built <span className="text-primary">Sheba Coffee</span> on the principles of fair trade, sustainability, and community development. Under her leadership, the company not only showcases Ethiopia&#39;s unique coffee beans, but also invests in the livelihood of the farmers by ensuring they receive fair compensation and have access to resources for improving agricultural practices.
                    </p>

                    <p className="mt-4 text-gray-700 leading-relaxed">
                    Mrs. Samrawit&#39;s passion extends beyond business; she is an advocate for environmental stewardship and social impact. By integrating sustainable farming techniques and fostering long-term partnerships with farming communities, she is helping to preserve Ethiopia&#39;s coffee-growing regions for future generations while promoting the country&#39;s coffee heritage on the global stage. Her work has positioned <span className="text-primary">Sheba Coffee</span> as a bridge between the traditional craftsmanship of Ethiopian coffee producers and the evolving demands of the international coffee market.

                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                    With a strong vision and unwavering dedication, Mrs. Samrawit continues to be a trailblazer in the coffee industry, making significant contributions to both the global coffee landscape and the economic growth of Ethiopia.
                    </p>
                </div>
            </div>
            <div className="h-16"></div>
        </div>
    );
}

