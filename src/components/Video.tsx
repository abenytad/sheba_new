// components/Video.tsx
"use client";

export default function Video() {
  return (
    <section className="bg-gray-300 py-6 sm:py-8 lg:py-10 flex flex-col items-center"> {/* Responsive padding for height */}
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-center"> {/* Responsive font size for title */}
        We Sheba <span className="text-primary">Coffee</span>
      </h2>

      {/* Subtitle */}
      <p className="text-md sm:text-lg text-secondary mb-4 text-center"> {/* Responsive font size for subtitle */}
        Watch the Video
      </p>

      {/* YouTube Video */}
      <div className="w-full max-w-4xl px-4">
        <iframe
          width="100%"
          height="400" // Set height for larger screens
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace YOUR_VIDEO_ID with the actual video ID
          title="We Sheba Coffee Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </section>
  );
}
