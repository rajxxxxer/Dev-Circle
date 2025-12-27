import React from "react";
import { dummyConnectionsData } from "../assets/assets";
import { Eye, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Message = () => {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-black p-8">
      <div className="max-w-6xl mx-auto">

        {/* ===== Glass Wrapper ===== */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">

          {/* ===== Header ===== */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-white">Messages</h1>
            <p className="text-gray-400 mt-1">
              Talk and connect with your friends
            </p>
          </div>

          {/* ===== Users List ===== */}
          <div className="space-y-5">
            {dummyConnectionsData.map((user) => (
              <div
                key={user._id}
                className="
                  flex items-center justify-between
                  bg-white/10 backdrop-blur-md
                  border border-white/10
                  rounded-2xl p-5
                  shadow-lg
                  hover:shadow-2xl hover:-translate-y-1
                  transition-all duration-300
                "
              >
                {/* ===== Left: Profile ===== */}
                <div className="flex items-center gap-5">
                  <img
                    src={user.profile_picture}
                    alt="profile"
                    className="
                      w-14 h-14 rounded-full object-cover
                      border border-white/20
                      ring-2 ring-white/10
                    "
                  />

                  <div>
                    <p className="text-lg font-semibold text-white">
                      {user.full_name}
                    </p>
                    <p className="text-sm text-gray-400">
                      @{user.username}
                    </p>

                    {user.bio && (
                      <p className="text-sm text-gray-300 mt-1 max-w-md">
                        {user.bio}
                      </p>
                    )}
                  </div>
                </div>

                {/* ===== Right: Actions ===== */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => nav(`/messages/${user._id}`)}
                    className="
                      flex items-center gap-2
                      px-4 py-2 rounded-xl
                      bg-blue-600 text-white
                      hover:bg-blue-700
                      transition
                    "
                  >
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </button>

                  <button
                    onClick={() => nav(`/profile/${user._id}`)}
                    className="
                      px-4 py-2 rounded-xl
                      border border-white/20
                      text-gray-200
                      hover:bg-white/10
                      transition
                    "
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Message;
