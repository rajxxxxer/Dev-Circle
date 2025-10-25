import { Link, useNavigate } from "react-router-dom";
import Menuitems from "./Menuitems";
import { CirclePlus, LogOut } from "lucide-react";
import { useClerk, UserButton } from "@clerk/clerk-react";
import { dummyUserData } from "../assets/assets";

const Sidebar = ({ setSideOpen }) => {
  const nav = useNavigate();
  const user = dummyUserData;
  const { signOut } = useClerk();

  return (
    <div className="w-60 xl:w-72 bg-white border-r border-amber-200 flex flex-col justify-between h-screen">
      {/* ---------- TOP SECTION ---------- */}
      <div>
        {/* Logo */}
        <img
          className="w-28 ml-6 my-4 cursor-pointer"
          onClick={() => nav("/")}
          src="/logo_s.png"
          alt="Sidebar Logo"
        />

        <hr className="border-gray-300 mb-8" />

        {/* Menu Items */}
        <Menuitems setSideOpen={setSideOpen} />

        {/* Create Post Button */}
        <Link
          to="/create-post"
          className="flex items-center justify-center gap-2 text-sm font-medium text-gray-700 bg-amber-50 border border-amber-200 hover:bg-amber-100 transition rounded-lg py-2 mt-4 mx-4"
        >
          <CirclePlus className="w-5 h-5 text-amber-600" />
          Create Post
        </Link>
      </div>

      {/* ---------- BOTTOM PROFILE SECTION ---------- */}
      <div className="w-full border-t border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Clerk user avatar */}
          <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" } }} />

          <div className="flex flex-col">
            <h1 className="text-sm font-semibold text-gray-800">
              {user.full_name}
            </h1>
            <p className="text-xs text-gray-500">@{user.username}</p>
          </div>
        </div>

        {/* Sign Out button */}
        <button
          onClick={signOut}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          title="Sign out"
        >
          <LogOut className="w-5 h-5 text-gray-600 hover:text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
