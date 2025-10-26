import React, { useEffect, useState } from 'react';
import { dummyPostsData } from '../assets/assets';
import Stories from '../components/Stories';

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
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8'>
    <div>
      <Stories></Stories>
      <div className='p-4 space-y-6'>
        list of
      </div>
    </div>
    <div>
      <div>
        <h1>sposnsered</h1>
      </div>
      <h1>recent messeges</h1>
    </div>
    </div>
  );
};

export default Feed;
