import React, { useEffect, useState } from "react";
import { dummyPostsData, dummyUserData } from "../assets/assets";

import { useParams, Link } from "react-router-dom";
import Postcard from "../components/Postcard";
import moment from "moment";
import Profilemodal from "../components/Profilemodal";

const Profile = () => {
  const { profileid } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("posts");
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    setUser(dummyUserData);
    setPosts(dummyPostsData);
  }, []);

  /* ===== LOADER ===== */
  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#020617]">
        <div className="relative">
          <div className="w-14 h-14 rounded-full border-4 border-white/20" />
          <div className="absolute inset-0 w-14 h-14 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] pb-24">

      {/* ================= COVER ================= */}
      <div className="relative h-[360px] w-full">
        <img
          src={user.cover_photo}
          alt="cover"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ================= PROFILE CARD ================= */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative -mt-28 bg-[#0f172a] border border-white/10 rounded-3xl shadow-2xl">

          {/* Avatar Row */}
          <div className="flex justify-between items-start px-8 pt-8">
            <div className="flex items-end gap-6">
              <img
                src={user.profile_picture}
                alt="avatar"
                className="
                  w-36 h-36 rounded-full object-cover
                  border-4 border-[#0f172a]
                  shadow-xl
                "
              />

              <div className="pb-4">
                <h1 className="text-2xl font-bold text-white">
                  {user.full_name}
                </h1>
                <p className="text-gray-400">@{user.username}</p>
              </div>
            </div>

            <button
              onClick={() => setShowEdit(true)}
              className="px-5 py-2 rounded-full border border-white/20 text-sm text-gray-200 hover:bg-white/10 transition"
            >
              Edit Profile
            </button>
          </div>

          {/* Details */}
          <div className="px-8 pt-6 pb-8 space-y-4">
            <p className="text-gray-300 leading-relaxed max-w-3xl">
              {user.bio}
            </p>

            <div className="flex gap-6 text-sm text-gray-400">
              <span>📍 {user.location}</span>
              <span>📅 Joined {moment(user.createdAt).format("MMM YYYY")}</span>
            </div>

            <div className="flex gap-8 pt-4 text-gray-300">
              <span><b className="text-white">{posts.length}</b> Posts</span>
              <span><b className="text-white">{user.followers.length}</b> Followers</span>
              <span><b className="text-white">{user.following.length}</b> Following</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TABS ================= */}
      <div className="max-w-5xl mx-auto px-4 mt-14">
        <div className="flex gap-6 border-b border-white/10 pb-4">
          {["posts", "media", "likes"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-6 py-2 rounded-full text-sm font-medium transition
                ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white"
                }
              `}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* ================= TAB CONTENT ================= */}
        <div className="mt-10">
          {activeTab === "posts" && (
            <div className="space-y-6">
              {posts.map((post) => (
                <Postcard key={post._id} post={post} />
              ))}
            </div>
          )}

          {activeTab === "media" && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {posts
                .filter((p) => p.image_urls?.length)
                .map((post) =>
                  post.image_urls.map((img, idx) => (
                    <Link
                      key={idx}
                      to={img}
                      target="_blank"
                      className="group relative rounded-xl overflow-hidden border border-white/10"
                    >
                      <img
                        src={img}
                        alt="media"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-end p-3">
                        <p className="text-xs text-gray-200">
                          {moment(post.createdAt).fromNow()}
                        </p>
                      </div>
                    </Link>
                  ))
                )}
            </div>
          )}

          {activeTab === "likes" && (
            <div className="text-center text-gray-400 py-24">
              No liked posts yet
            </div>
          )}
        </div>
      </div>

      {/* ================= EDIT MODAL ================= */}
      {showEdit && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#0f172a] border border-white/20 rounded-2xl p-8 text-white">
            <Profilemodal setShowEdit={setShowEdit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
