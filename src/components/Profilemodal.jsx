import React, { useState } from "react";
import { dummyUserData } from "../assets/assets";
import { Pencil, X } from "lucide-react";

const Profilemodal = ({ setShowEdit }) => {
  const user = dummyUserData;

  const [editForm, setEditForm] = useState({
    username: user.username,
    full_name: user.full_name,
    bio: user.bio,
    location: user.location,
    profile_picture: null,
    cover_photo: null,
  });

  const handlesave = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-[420px] max-w-full text-white max-h-[85vh] overflow-y-auto pr-1">

      {/* ===== HEADER (NO CROSS HERE) ===== */}
      <div className="mb-6 sticky top-0 bg-[#0f172a] z-10 pb-2">
        <h1 className="text-2xl font-semibold">Edit Profile</h1>
      </div>

      <form onSubmit={handlesave} className="flex flex-col gap-6">

        {/* ===== PROFILE PIC + SINGLE CROSS ===== */}
        <div className="flex items-start justify-between">

          <div>
            <p className="text-sm text-gray-300 mb-2">Profile Picture</p>

            <label
              htmlFor="profile_picture"
              className="relative w-28 h-28 cursor-pointer group block"
            >
              <input
                hidden
                id="profile_picture"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    profile_picture: e.target.files[0],
                  })
                }
              />

              <img
                src={
                  editForm.profile_picture
                    ? URL.createObjectURL(editForm.profile_picture)
                    : user.profile_picture
                }
                alt="profile"
                className="w-28 h-28 rounded-full object-cover border border-white/20"
              />

              <div className="absolute inset-0 rounded-full bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <Pencil className="w-5 h-5 text-white" />
              </div>
            </label>
          </div>

          {/* ✅ SINGLE CROSS */}
          <button
            type="button"
            onClick={() => setShowEdit(false)}
            className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition mt-6"
          >
            <X size={18} />
          </button>
        </div>

        {/* ===== COVER PHOTO ===== */}
        <div>
          <p className="text-sm text-gray-300 mb-2">Cover Photo</p>

          <label
            htmlFor="cover_photo"
            className="relative block h-32 rounded-xl overflow-hidden border border-white/20 cursor-pointer group"
          >
            <input
              hidden
              id="cover_photo"
              type="file"
              accept="image/*"
              onChange={(e) =>
                setEditForm({
                  ...editForm,
                  cover_photo: e.target.files[0],
                })
              }
            />

            <img
              src={
                editForm.cover_photo
                  ? URL.createObjectURL(editForm.cover_photo)
                  : user.cover_photo
              }
              alt="cover"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <Pencil className="w-5 h-5 text-white" />
            </div>
          </label>
        </div>

        {/* ===== INPUTS ===== */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={editForm.full_name}
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />

          <input
            type="text"
            value={editForm.username}
            placeholder="Username"
            className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />

          <input
            type="text"
            value={editForm.location}
            placeholder="Location"
            className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />

          <textarea
            value={editForm.bio}
            placeholder="Bio"
            rows={4}
            className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* ===== BUTTONS ===== */}
        <div className="flex justify-end gap-3 pt-4 pb-2">
          <button
            type="button"
            onClick={() => setShowEdit(false)}
            className="px-5 py-2 rounded-xl border border-white/20 text-gray-300 hover:bg-white/10 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>

      </form>
    </div>
  );
};

export default Profilemodal;
