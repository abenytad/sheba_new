"use client";
import client from "../../utils/sanity";
import { useEffect, useState } from "react";
import Image from 'next/image';
interface BlogPost {
  title: string;
  description: string;
  imageUrl: string;
}
async function fetchBlogs(): Promise<BlogPost[]> {
  const blogs = await client.fetch(`*[_type == "blog"]{
    title,
    description,
    "imageUrl": mainImage.asset->url
  }`);
  return blogs;
}

export default function BlogContent() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    const getBlogs = async () => {
      const blogs = await fetchBlogs();
      setBlogPosts(blogs);
    };
    getBlogs();
  }, []);

  return (
    <section className="px-4 md:px-0"> 
      <div className="flex flex-col items-center mt-4">
        <div className="h-20 w-1 bg-primary"></div>
        <h2 className="mt-4 text-5xl md:text-6xl font-bold text-black text-center">Blogs</h2> 
      </div>
      <div className="container mx-auto mt-6 max-w-6xl px-4"> 
        {blogPosts.length === 0 ? (
          <p className="text-center">Loading...</p> 
        ) : (
          blogPosts.map((post, index) => (
            <div key={index} className="mb-6"> 
              <div className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 flex justify-center">
                  <Image
                    src={post.imageUrl || "/images/latte.jpg"}
                    alt={post.title}
                    width={450}
                    height={250}
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-1/2 md:px-4 mt-4 md:mt-0 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-primary">{post.title}</h3> 
                  <p className="mt-2 text-gray-700">{post.description}</p>
                </div>
              </div>
              {index < blogPosts.length - 1 && (
                <hr className="border-t border-secondary my-4" /> 
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
