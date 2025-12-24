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

  const colors = [
    "bg-blue-50 text-blue-700 border-blue-200",
    "bg-green-50 text-green-700 border-green-200",
    "bg-purple-50 text-purple-700 border-purple-200",
    "bg-orange-50 text-orange-700 border-orange-200",
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* ===== Heading ===== */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Connections</h1>
        <p className="text-gray-500">
          Connect with developers, share code & collaborate
        </p>
      </div>

      {/* ===== Stats Cards ===== */}
      <div className="flex flex-wrap gap-6 mb-10">
        {dataArr.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              onClick={() => setCurrentTab(item.label)}
              className={`flex items-center gap-4 flex-1 min-w-[220px] p-5 rounded-2xl border shadow-sm cursor-pointer
              hover:scale-105 transition-all duration-300
              ${colors[index]}
              ${
                currentTab === item.label
                  ? "ring-2 ring-offset-2 ring-blue-400"
                  : ""
              }`}
            >
              <div className="p-4 rounded-full bg-white shadow">
                <Icon className="w-7 h-7" />
              </div>
              <div>
                <p className="text-3xl font-bold">{item.value.length}</p>
                <p className="text-sm opacity-80">{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ===== Tabs ===== */}
      <div className="flex flex-wrap gap-4 mb-10">
        {dataArr.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setCurrentTab(tab.label)}
            className={`flex items-center gap-2 px-6 py-2 rounded-xl border font-medium transition
              ${
                currentTab === tab.label
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-black/10">
              {tab.value.length}
            </span>
          </button>
        ))}
      </div>

      {/* ===== USER GRID (3 PER ROW) ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dataArr
          .find((item) => item.label === currentTab)
          ?.value.map((user) => (
            <div
              key={user._id}
              className="
                bg-white border rounded-3xl
                p-6
                shadow-md
                hover:shadow-2xl
                transition-all duration-300
                hover:-translate-y-3
                min-h-[520px]
                flex flex-col
              "
            >
              {/* ===== PROFILE ===== */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={user.profile_picture}
                  alt="avatar"
                  className="w-28 h-28 rounded-full object-cover border mb-4"
                />

                <p className="text-xl font-bold text-gray-900">
                  @{user.username}
                </p>

                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                  {user.bio || "No bio available"}
                </p>
              </div>

              {/* ===== SPACER ===== */}
              <div className="flex-grow" />

              {/* ===== ACTIONS ===== */}
              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={() => navigate(`/profile/${user._id}`)}
                  className="w-full px-4 py-2 border rounded-xl hover:bg-gray-100 transition"
                >
                  View Profile
                </button>

                {currentTab === "Following" && (
                  <button className="w-full px-4 py-2 border border-red-300 text-red-600 rounded-xl hover:bg-red-50 transition">
                    Unfollow
                  </button>
                )}

                {currentTab === "Requests" && (
                  <>
                    <button className="w-full px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
                      Accept
                    </button>
                    <button className="w-full px-4 py-2 border rounded-xl hover:bg-gray-100 transition">
                      Decline
                    </button>
                  </>
                )}

                {currentTab === "Connections" && (
                  <button
                    onClick={() => navigate(`/messages/${user._id}`)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
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
  );
};

export default Connection;
