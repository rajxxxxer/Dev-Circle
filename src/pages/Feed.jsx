import React, { useEffect, useState } from 'react';
import { assets, dummyPostsData } from '../assets/assets';
import Stories from '../components/Stories';
import Postcard from '../components/Postcard';
import Recent from '../components/Recent';

const Feed = () => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFeeds = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setFeeds(dummyPostsData);
    } catch (err) {
      console.log("Error fetching feed details:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeeds();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col xl:flex-row justify-center gap-6 py-4 px-2 sm:px-4 xl:px-0">

      {/* ===== FEED ===== */}
      <div className="w-full max-w-xl xl:max-w-[600px]">
        <Stories />

        <div className="mt-4 space-y-6">
          {feeds.map((post) => (
            <Postcard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* ===== RIGHT SIDEBAR (DESKTOP ONLY) ===== */}
      <div className="hidden xl:flex w-72 sticky top-10 flex-col gap-6">

        {/* Sponsored */}
        <div className="bg-white p-4 rounded-xl shadow border">
          <h1 className="font-semibold text-gray-800">Sponsored</h1>
          <img
            src={assets.sponsored_img}
            className="rounded-xl mt-2 w-full"
          />
          <p className="text-sm text-gray-500 mt-1">
            Email marketing
          </p>
        </div>

        {/* Recent */}
        <Recent />
      </div>
    </div>
  );
};

export default Feed;
