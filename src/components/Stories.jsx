import React, { useEffect, useState } from "react";
import { dummyStoriesData } from "../assets/assets";
import { Plus } from "lucide-react";
import moment from "moment";
import StoryModal from "./StoryModal"; // import modal component
import Storyview from "./Storyview";

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [viewStories, setViewStories] = useState(null);

  const fetchStories = async () => {
    setStories(dummyStoriesData);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <div className="w-screen sm:w-[calc(100vw-240px)] lg:max-w-2xl no-scrollbar overflow-x-auto px-4 py-4">
      <div className="flex gap-4 pb-3">
        {/* Create Story Card */}
        <div
          onClick={() => setShowModal(true)}
          className="min-w-[120px] max-w-[120px] aspect-[3/4] rounded-xl border-2 border-dashed border-indigo-300 bg-gradient-to-b from-indigo-50 to-white shadow-sm hover:shadow-md cursor-pointer transition-all duration-200 flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="bg-indigo-500 p-2 rounded-full">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <p className="text-sm font-medium text-slate-700">Create Story</p>
          </div>
        </div>

        {/* Stories List */}
        {stories.map((story, idx) => (
          <div
            onClick={() => { setViewStories(story) }}
            key={idx}
            className="relative min-w-[120px] max-w-[120px] aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-indigo-500 to-purple-600 group cursor-pointer"
          >
            {/* Media */}
            {story.media_type !== "text" && (
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                {story.media_type === "image" ? (
                  <img
                    src={story.media_url}
                    alt="story"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <video
                    src={story.media_url}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    muted
                    loop
                    autoPlay
                  ></video>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
              </div>
            )}

            {/* User Avatar */}
            <img
              src={story.user.profile_picture}
              alt={story.user.username}
              className="absolute top-2 left-2 w-9 h-9 rounded-full border-2 border-white shadow-md z-10"
            />

            {/* Text Story */}
            {story.media_type === "text" && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-3">
                <p className="text-white font-semibold text-center text-sm line-clamp-3">
                  {story.content}
                </p>
              </div>
            )}

            {/* Content Text */}
            {story.media_type !== "text" && (
              <p className="absolute bottom-7 left-2 right-2 text-xs text-white/90 font-medium truncate z-10">
                {story.content}
              </p>
            )}

            {/* Timestamp */}
            <p className="absolute bottom-2 right-2 text-[10px] text-white/80 z-10">
              {moment(story.createdAt).fromNow()}
            </p>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"></div>
          </div>
        ))}
      </div>

      {/* Story Modal */}
      {showModal && (
        <StoryModal setShowModal={setShowModal} fetchStories={fetchStories} />
      )}
      {
        viewStories&& <Storyview viewStories={viewStories} setViewStories={setViewStories} />
      }
    </div>
  );
};

export default Stories;
