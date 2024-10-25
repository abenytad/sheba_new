"use client";
import { useState, useEffect } from "react";
import client from "../../utils/sanity";

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
  const [video, setVideo] = useState<VideoData | null>(null);
  useEffect(() => {
    async function getVideos() {
      const fetchedVideos = await fetchVideos();
      if (fetchedVideos.length > 0) {
        setVideo(fetchedVideos[0]);
      }
    }
    getVideos();
  }, []);

  const extractYouTubeId = (url: string) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  // If no video is available, render a message
  if (!video) {
    return (
      <section className="bg-gray-300 py-4 sm:py-8 lg:py-6 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">
          We Sheba <span className="text-primary">Coffee</span>
        </h2>
        <p className="text-lg sm:text-xl lg:text-3xl text-black text-center">
          Stay tuned for our <span className="text-primary font-bold">upcoming video</span>, where we’ll share more about our services!
        </p>
      </section>
    );
  }

  const videoId = extractYouTubeId(video.link);
  if (!videoId) {
    return <div>Invalid video link</div>;
  }

  return (
    <section className="bg-gray-300 py-4 sm:py-8 lg:py-6 flex flex-col items-center ">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">
        We Sheba <span className="text-primary">Coffee</span>
      </h2>
      <p className="text-md sm:text-lg text-secondary mb-4 text-center">
        Watch the Video
      </p>
      <div className="w-11/12 h-[50vh] sm:w-10/12 h-[40vh] md:w-3/4 lg:w-2/3 xl:w-1/2">
        <iframe
          width="100%"
          height="100%"
          className="rounded-lg shadow-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p className="text-lg text-center mt-4">{video.title}</p>
    </section>
  );
}
