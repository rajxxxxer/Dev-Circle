import React from 'react'
import { dummyConnectionsData } from '../assets/assets'
import { Eye, MessageSquare } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Messege = () => {
  const nav = useNavigate();

  return (
    <div className="w-full h-full p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
        <p className="text-gray-500">Talk and connect with your friends</p>
      </div>

      {/* Users List */}
      <div className="space-y-4">
        {dummyConnectionsData.map((User) => (
          <div
            key={User._id}
            className="flex items-center justify-between bg-white shadow-sm border rounded-xl p-4 hover:shadow-md transition"
          >
            {/* Left: Profile */}
            <div className="flex items-center gap-4">
              <img
                src={User.profile_picture}
                alt="profile"
                className="w-12 h-12 object-cover rounded-full border"
              />

              <div className="leading-tight">
                <p className="text-sm font-semibold text-gray-900">
                  {User.full_name}
                </p>
                <p className="text-xs text-gray-500">@{User.username}</p>
                {User.bio && (
                  <p className="text-xs text-gray-600 mt-1">
                    {User.bio}
                  </p>
                )}
              </div>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex items-center gap-3">

              <button
                onClick={() => nav(`/messages/${User._id}`)}
                className="p-2 rounded-lg hover:bg-blue-100 text-blue-600 transition"
              >
                <MessageSquare className="w-5 h-5" />
              </button>

              <button
                onClick={() => nav(`/profile/${User._id}`)}
                className="p-2 rounded-lg hover:bg-gray-200 text-gray-700 transition"
              >
                <Eye className="w-5 h-5" />
              </button>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Messege;
