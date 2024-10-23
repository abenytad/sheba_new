import BlogContent from "@/components/BlogContent";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog",
    description:"Dive into the world of Ethiopian coffee with Sheba Coffee's blog. Explore the history, brewing techniques, and culture surrounding Ethiopia’s most famous export. Stay informed with coffee tips, industry trends, and Sheba Coffee updates.",
    keywords:["Sheba Coffee blog", "Ethiopian coffee", "coffee culture", "coffee brewing tips", "coffee industry news", "Ethiopian coffee history"]
}
export default function BlogPage() {
    return (
        <div>
            <div className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/blog.webp')" }}>
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
                        Our <span className="text-primary">Sheba</span> Memories
                    </h1>
                </div>
            </div>
            <BlogContent />
        </div>
    );
}
