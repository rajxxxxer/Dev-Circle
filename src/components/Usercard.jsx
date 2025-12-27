import React from 'react'
import { dummyUserData } from '../assets/assets'
import { MapPin, MessageCircle, Plus, UserPlus } from 'lucide-react'

const Usercard = ({ user }) => {
  const curruser = dummyUserData

  const handlefollow = async () => {}
  const handleconnection = async () => {}

  const isFollowing = curruser?.following.includes(user._id)
  const isConnected = curruser?.connections.includes(user._id)

  return (
    <div
      key={user._id}
      className="flex flex-col gap-4 rounded-2xl p-5
                 bg-white/10 border border-white/10
                 backdrop-blur-md
                 hover:bg-white/15 hover:-translate-y-1
                 transition-all duration-300"
    >

      {/* Top Section */}
      <div className="flex gap-4 items-start">

        {/* Avatar */}
        <img
          src={user.profile_picture}
          alt={user.full_name}
          className="w-16 h-16 rounded-xl object-cover
                     border border-white/20"
        />

        {/* Info */}
        <div className="flex-1">
          <p className="text-lg font-semibold text-white leading-tight">
            {user.full_name}
          </p>

          {user.username && (
            <p className="text-sm text-gray-400">
              @{user.username}
            </p>
          )}

          {user.bio && (
            <p className="text-sm text-gray-300 mt-1 line-clamp-2">
              {user.bio}
            </p>
          )}
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center justify-between text-sm text-gray-400">

        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>{user.location || "Unknown"}</span>
        </div>

        <span>{user.followers.length} followers</span>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">

        {/* Follow Button */}
        <button
          onClick={handlefollow}
          disabled={isFollowing}
          className={`flex items-center justify-center gap-2 flex-1
                     px-4 py-2 rounded-full text-sm font-medium
                     transition
                     ${
                       isFollowing
                         ? "bg-white/10 text-gray-400 cursor-not-allowed"
                         : "bg-blue-600 text-white hover:bg-blue-500"
                     }`}
        >
          <UserPlus className="w-4 h-4" />
          {isFollowing ? "Following" : "Follow"}
        </button>

        {/* Connection / Message */}
        <button
          onClick={handleconnection}
          className="w-11 h-11 rounded-full
                     flex items-center justify-center
                     border border-white/20 text-gray-300
                     hover:bg-white/10 transition"
        >
          {isConnected ? (
            <MessageCircle className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </button>

      </div>
    </div>
  )
}

export default Usercard
