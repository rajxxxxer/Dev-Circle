import React from "react";
import { Star } from "lucide-react";
import { assets } from "../assets/assets";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      {/* Background Image */}
      <img
        src={assets.bgImage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />

      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-start p-8 md:p-16 lg:pl-28 z-10 relative">
        {/* Logo */}
        <div className="mb-10">
          <img
            src="./logo_s.png"
            alt="logo"
            className="h-24 w-auto md:h-28 object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6 max-w-xl">
          {/* Rating */}
          <div className="flex items-center gap-3">
            <img src={assets.group_users} alt="group" className="h-10 md:h-12" />
            <div className="flex text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400" />
                ))}
            </div>
          </div>

          <p className="text-gray-400 text-sm md:text-base">
            Trusted by <span className="text-white font-semibold">12k+</span> developers worldwide
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
            Connect, Collaborate & Grow with Global Coders 🌍
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-500">
            Join <span className="text-blue-400 font-semibold">$DevConnect</span> — the global
            community where developers connect, share, and grow together through collaboration and
            innovation.
          </p>

          {/* CTA Button */}
        
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center p-8 md:p-16 z-10">
        <div className="  p-10 rounded-2xl shadow-2xl w-full max-w-sm  flex justify-center items-center">
          <div className="w-full ">
            <SignIn
            
            
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
