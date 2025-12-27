import {
  MessageSquare,
  UserCheck,
  UserRoundPen,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import {
  dummyConnectionsData,
  dummyFollowersData,
  dummyFollowingData,
  dummyPendingConnectionsData,
} from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Connection = () => {
  const [currentTab, setCurrentTab] = useState("Followers");
  const navigate = useNavigate();

  const dataArr = [
    { label: "Followers", value: dummyFollowersData, icon: Users },
    { label: "Following", value: dummyFollowingData, icon: UserCheck },
    { label: "Requests", value: dummyPendingConnectionsData, icon: UserRoundPen },
    { label: "Connections", value: dummyConnectionsData, icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-black py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== GLASS WRAPPER ===== */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">

          {/* ===== Heading ===== */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-white">Connections</h1>
            <p className="text-gray-400 mt-1">
              Connect with developers, share code & collaborate
            </p>
          </div>

          {/* ===== Stats Cards ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {dataArr.map((item) => {
              const Icon = item.icon;
              const active = currentTab === item.label;

              return (
                <div
                  key={item.label}
                  onClick={() => setCurrentTab(item.label)}
                  className={`
                    cursor-pointer rounded-2xl p-5
                    border border-white/10
                    bg-white/10 backdrop-blur-md
                    hover:bg-white/20 hover:-translate-y-1
                    transition-all duration-300
                    ${active ? "ring-2 ring-blue-500/60" : ""}
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white/10">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-white">
                        {item.value.length}
                      </p>
                      <p className="text-sm text-gray-400">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ===== Tabs ===== */}
          <div className="flex flex-wrap gap-4 mb-12">
            {dataArr.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setCurrentTab(tab.label)}
                className={`
                  flex items-center gap-2 px-6 py-2 rounded-full
                  border border-white/10 font-medium transition
                  ${
                    currentTab === tab.label
                      ? "bg-blue-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }
                `}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-black/30">
                  {tab.value.length}
                </span>
              </button>
            ))}
          </div>

          {/* ===== USER GRID ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataArr
              .find((item) => item.label === currentTab)
              ?.value.map((user) => (
                <div
                  key={user._id}
                  className="
                    bg-white/10 border border-white/10
                    backdrop-blur-md
                    rounded-3xl p-6
                    shadow-lg
                    hover:shadow-2xl hover:-translate-y-2
                    transition-all duration-300
                    min-h-[520px]
                    flex flex-col
                  "
                >
                  {/* ===== PROFILE ===== */}
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={user.profile_picture}
                      alt="avatar"
                      className="w-28 h-28 rounded-full object-cover
                                 border border-white/20 mb-4"
                    />

                    <p className="text-xl font-semibold text-white">
                      @{user.username}
                    </p>

                    <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                      {user.bio || "No bio available"}
                    </p>
                  </div>

                  <div className="flex-grow" />

                  {/* ===== ACTIONS ===== */}
                  <div className="mt-6 flex flex-col gap-3">
                    <button
                      onClick={() => navigate(`/profile/${user._id}`)}
                      className="w-full px-4 py-2 rounded-xl
                                 border border-white/20
                                 text-gray-200
                                 hover:bg-white/10 transition"
                    >
                      View Profile
                    </button>

                    {currentTab === "Following" && (
                      <button className="w-full px-4 py-2 rounded-xl
                                         border border-red-500/40
                                         text-red-400
                                         hover:bg-red-500/10 transition">
                        Unfollow
                      </button>
                    )}

                    {currentTab === "Requests" && (
                      <>
                        <button className="w-full px-4 py-2 rounded-xl
                                           bg-green-600 text-white
                                           hover:bg-green-700 transition">
                          Accept
                        </button>
                        <button className="w-full px-4 py-2 rounded-xl
                                           border border-white/20
                                           text-gray-200
                                           hover:bg-white/10 transition">
                          Decline
                        </button>
                      </>
                    )}

                    {currentTab === "Connections" && (
                      <button
                        onClick={() => navigate(`/messages/${user._id}`)}
                        className="w-full flex items-center justify-center gap-2
                                   px-4 py-2 rounded-xl
                                   bg-blue-600 text-white
                                   hover:bg-blue-700 transition"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Message
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Connection;
