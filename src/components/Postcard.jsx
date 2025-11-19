import React, { useState } from "react";
import { BadgeCheck, Heart, MessageCircle, Share2 } from "lucide-react";
import moment from "moment";
import { dummyUserData } from "../assets/assets";

const Postcard = ({ post }) => {
  const [likes, setLikes] = useState(post.likes_count);
  const currentuser=dummyUserData;
  const handlelike= async ()=>{

  }
  return (
    <div className="bg-white rounded-2xl w-full p-4 md:p-5 space-y-4 max-w-2xl shadow-sm border border-gray-100">

      {/* User info */}
      <div className="flex items-start gap-3">
        <img
          src={post.user.profile_picture}
          alt="profile"
          className="w-12 h-12 rounded-full object-cover border"
        />

        <div className="flex-1">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-sm md:text-base">
              {post.user.full_name}
            </span>
            <BadgeCheck className="w-4 h-4 text-blue-500" />
          </div>

          <div className="text-xs text-gray-500">
            @{post.user.username} • {moment(post.createdAt).fromNow()}
          </div>
        </div>
      </div>

      {/* Post content */}
      {post.content && (
        <div
          className="text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      )}

      {/* Images */}
      {post.image_urls?.length > 0 && (
        <div
          className={`grid gap-2 ${
            post.image_urls.length === 1 ? "grid-cols-1" : "grid-cols-2"
          }`}
        >
          {post.image_urls.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="post-img"
              className={`rounded-xl object-cover w-full ${
                post.image_urls.length === 1 ? "h-auto" : "h-48"
              }`}
            />
          ))}
        </div>
      )}

      {/* Action buttons */}
      <div className="flex items-center justify-between pt-2 text-gray-600">
        <div className="flex items-center gap-6">

          <button className="flex items-center gap-1 hover:text-red-500">
            <Heart onClick={handlelike} className={`w-5 h-5 ${likes.includes(currentuser.id) ? "text-red-500 fill-red-500" : ""}`} />
            <span className="text-sm">{likes.length }</span>
          </button>

          <button className="flex items-center gap-1 hover:text-blue-500">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">{post.comments || 0}</span>
          </button>

          <button className="flex items-center gap-1 hover:text-green-600">
            <Share2 className="w-5 h-5" />
            <span className="text-sm">Share</span>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Postcard;
