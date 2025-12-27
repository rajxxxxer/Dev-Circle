import React from 'react'
import { Calendar, MapPin, Verified } from 'lucide-react'

const UserPro = ({ user, posts, profileid, setShowEdit }) => {
  return (
    <div className="px-6 relative">
      <div>
        <div>
          {/* Profile Image */}
          <img
            src={user.profile_picture}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white absolute -top-16 bg-gray-100 object-cover"
          />
        </div>

        <div className="pt-20">
          <div>
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold">{user.full_name}</h1>
                  <Verified className="w-5 h-5 text-blue-500" />
                </div>
                <p className="text-gray-500">
                  {user.username ? `@${user.username}` : 'Add a fullname'}
                </p>
              </div>

              {!profileid && (
                <div>
                  <button
                    onClick={() => setShowEdit(true)}
                    className="border px-4 py-1 rounded-full text-sm hover:bg-gray-100"
                  >
                    Edit Profile
                  </button>
                </div>
              )}
            </div>

            <p className="mt-4 text-gray-700">{user.bio}</p>

            <div className="flex gap-6 mt-3 text-gray-500 text-sm">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {user.location ? user.location : 'Add Location'}
              </span>

              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Joined{' '}
                {new Date(user.createdAt).toLocaleString('default', {
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>

            <div className="flex items-center gap-6 mt-6">
              <div>
                <span className="font-semibold">{posts.length}</span> Posts
              </div>
              <div>
                <span className="font-semibold">
                  {user.followers.length}
                </span>{' '}
                Followers
              </div>
              <div>
                <span className="font-semibold">
                  {user.following.length}
                </span>{' '}
                Following
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPro
