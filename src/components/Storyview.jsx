import { BadgeCheck, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const Storyview = ({ viewStory, setViewStory }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer, interval;
    if (viewStory && viewStory.media_type !== "video") {
      setProgress(0);
      const duration = 10000;
      const setime = 100;
      let elapsed = 0;

      interval = setInterval(() => {
        elapsed += setime;
        setProgress((elapsed / duration) * 100);
      }, setime);

      timer = setTimeout(() => {
        setViewStory(null);
      }, duration);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [viewStory, setViewStory]);

  if (!viewStory) {
    return null;
  }

  const renderstory = () => {
    switch (viewStory.media_type) {
      case "image":
        return (
          <img
            src={viewStory.media_url}
            alt={viewStory.media_type}
            className="max-h-[90vh] object-contain rounded-lg"
          />
        );
      case "video":
        return (
          <video
            onEnded={() => setViewStory(null)}
            src={viewStory.media_url}
            controls
            className="max-h-[90vh] object-contain rounded-lg"
          />
        );
      case "text":
        return (
          <div className="flex items-center justify-center h-full w-full p-6">
            <p className="text-white text-2xl sm:text-3xl font-semibold leading-snug text-center break-words max-w-[90%]">
              {viewStory.content}
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  const handleClose = () => {
    setViewStory(null);
  };

  return (
    <div
      style={{
        backgroundColor:
          viewStory.media_type === "text"
            ? viewStory.background_color || "#111827"
            : "rgba(0,0,0,0.9)",
      }}
      className="fixed inset-0 z-[110] flex flex-col items-center justify-center p-4"
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 w-full px-4 pt-4">
        <div
          style={{ width: `${progress}%` }}
          className="h-1 bg-white/80 transition-all duration-200 rounded-full"
        ></div>

        <div className="flex items-center gap-2 mt-3 text-white">
          <img
            src={viewStory.user?.profile_picture}
            alt={viewStory.media_type}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-semibold">{viewStory.user?.full_name}</span>
          <BadgeCheck size={18} />
        </div>

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white hover:text-red-400 transition"
        >
          <X className="w-8 h-8" />
        </button>
      </div>

      {/* Story content */}
      <div className="flex items-center justify-center w-full h-full">
        {renderstory()}
      </div>
    </div>
  );
};

export default Storyview;
