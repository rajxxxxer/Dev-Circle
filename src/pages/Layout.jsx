import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { dummyUserData } from "../assets/assets";

const Layout = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const user = dummyUserData;

  // Simulate loading (optional)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen bg-slate-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );

  if (!user)
    return (
      <div className="flex items-center justify-center h-screen bg-slate-50 text-gray-600">
        <p>No user data found</p>
      </div>
    );

  return (
    <div className="relative w-full flex h-screen overflow-hidden">
      {/* Sidebar (Desktop) */}
      <div className="hidden sm:block">
        <Sidebar setSideOpen={setSideOpen} sideOpen={sideOpen} />
      </div>

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          sideOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <Sidebar setSideOpen={setSideOpen} sideOpen={sideOpen} />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-slate-50 overflow-auto">
        <Outlet />
      </div>

      {/* Toggle Button */}
      {sideOpen ? (
        <X
          className="absolute top-3 right-3 p-2 z-[100] bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden cursor-pointer"
          onClick={() => setSideOpen(false)}
        />
      ) : (
        <Menu
          className="absolute top-3 right-3 p-2 z-[100] bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden cursor-pointer"
          onClick={() => setSideOpen(true)}
        />
      )}
    </div>
  );
};

export default Layout;
