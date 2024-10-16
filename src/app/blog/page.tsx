import BlogContent from "@/components/BlogContent";

export default function BlogPage() {
    return (
        <div>
            {/* Background Image Section */}
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
