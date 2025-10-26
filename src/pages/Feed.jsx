import React, { useEffect, useState } from 'react';
import { dummyPostsData } from '../assets/assets';

const Feed = () => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFeeds = async () => {
    try {
      setLoading(true);

      // simulate async fetch to show loading spinner
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
      <div className="flex items-center justify-center h-screen bg-slate-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='h-full overflow-y-scroll no-scrollbar py-10 px-4'>
      {feeds.map((post) => (
        <div key={post.id} className="p-4 mb-4 bg-white rounded-lg shadow">
          <h2 className="font-semibold text-gray-800">{post.title}</h2>
          <p className="text-gray-600">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
