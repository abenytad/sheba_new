"use client";
import { useState, useEffect, useRef } from "react";
import client from "../../utils/sanity"; // Assuming you're using Sanity for content management

interface VideoData {
  _id: string;
  title: string;
  link: string;
}

async function fetchVideos(): Promise<VideoData[]> {
  const videos = await client.fetch(`
    *[_type == "youtube"]{
      _id,
      title,
      link
    }
  `);
  return videos;
}

export default function Video() {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null); // Reference for the scrollable container

  useEffect(() => {
    async function getVideos() {
      const fetchedVideos = await fetchVideos();
      setVideos(fetchedVideos);
    }
    getVideos();
  }, []);

  // Function to extract YouTube ID from the URL
  const extractYouTubeId = (url: string) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  // Scroll the container to the left or right
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth; // Scroll by the container's width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gray-300 py-6 sm:py-8 lg:py-10 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-center">
        We Sheba <span className="text-primary">Coffee</span>
      </h2>

      {/* Subtitle */}
      <p className="text-md sm:text-lg text-secondary mb-4 text-center">
        Watch the Videos
      </p>

      {/* Scrollable YouTube Video List with Left and Right Buttons */}
      <div className="relative w-full max-w-6xl px-2 flex items-center">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary-dark transition-transform"
        >
          &lt;
        </button>

        {/* Video List */}
        <div
          className="w-full overflow-x-hidden"
          ref={scrollRef}
        >
          <div className="flex space-x-4 sm:space-x-6">
            {videos.map((video) => {
              const videoId = extractYouTubeId(video.link);
              if (!videoId) return null; // Skip if no valid YouTube ID is found

              return (
                <div
                  key={video._id}
                  className="w-full sm:w-64 md:w-72 flex-shrink-0"
                >
                  <iframe
                    width="100%"
                    height="250"
                    className="rounded-lg shadow-lg sm:h-180 md:h-200"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p className="text-lg text-center mt-2">{video.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary-dark transition-transform"
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
