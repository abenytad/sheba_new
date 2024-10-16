"use client";
import client from "../../utils/sanity";
import { useEffect, useState } from "react";
import Image from 'next/image'; // Import Next.js Image component

// Define the type for a blog post
interface BlogPost {
  title: string;
  description: string;
  imageUrl: string;
}

// Function to fetch blogs from Sanity
async function fetchBlogs(): Promise<BlogPost[]> {
  const blogs = await client.fetch(`*[_type == "blog"]{
    title,
    description,
    "imageUrl": mainImage.asset->url
  }`);
  return blogs;
}

export default function BlogContent() {
  // State to hold the fetched blog posts with the correct type
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  // Fetch blog data when the component mounts
  useEffect(() => {
    const getBlogs = async () => {
      const blogs = await fetchBlogs();
      setBlogPosts(blogs);
    };
    getBlogs();
  }, []);

  return (
    <section className="px-4 md:px-0"> {/* Add padding for smaller screens */}
      {/* Vertical Line and Blog Title */}
      <div className="flex flex-col items-center mt-4">
        <div className="h-20 w-1 bg-primary"></div> {/* Increased Vertical Line Height */}
        <h2 className="mt-4 text-5xl md:text-6xl font-bold text-black text-center">Blogs</h2> {/* Increased Blog Title Font Size */}
      </div>

      {/* Blog Posts Section */}
      <div className="container mx-auto mt-6 max-w-6xl px-4"> {/* Max width for larger screens */}
        {blogPosts.length === 0 ? (
          <p className="text-center">Loading...</p> // Loading state if data hasn't been fetched yet
        ) : (
          blogPosts.map((post, index) => (
            <div key={index} className="mb-6"> {/* Added margin bottom for separation */}
              <div className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 flex justify-center">
                  {/* Use Next.js Image component with fixed width and height */}
                  <Image
                    src={post.imageUrl || "/images/latte.jpg"}
                    alt={post.title}
                    width={450}  // Adjusted width for compactness
                    height={250} // Adjusted height for compactness
                    className="object-cover rounded-lg" // Use object-cover to maintain aspect ratio
                  />
                </div>
                <div className="md:w-1/2 md:px-4 mt-4 md:mt-0 text-center md:text-left"> {/* Centered text for small screens */}
                  <h3 className="text-3xl md:text-4xl font-bold text-primary">{post.title}</h3> {/* Increased title font size */}
                  <p className="mt-2 text-gray-700">{post.description}</p>
                </div>
              </div>

              {/* Horizontal Line Between Blog Posts */}
              {index < blogPosts.length - 1 && (
                <hr className="border-t border-secondary my-4" /> // Reduced vertical spacing
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
