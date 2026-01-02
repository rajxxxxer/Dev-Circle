import React, { useEffect, useRef, useState } from "react";
import { dummyMessagesData, dummyUserData } from "../assets/assets";
import { ImageIcon, SendHorizonal } from "lucide-react";

const Chatbox = () => {
  const [messages, setMessages] = useState(dummyMessagesData);
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [user] = useState(dummyUserData);

  const messagesRef = useRef(null);

  // ===== AUTO SCROLL =====
  useEffect(() => {
    messagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ===== SEND MESSAGE =====
  const sendMessage = () => {
   
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-black flex items-center justify-center p-6">
      <div className="w-full max-w-4xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden">

        {/* ===== HEADER ===== */}
        <div className="flex items-center gap-4 p-5 border-b border-white/10">
          <img
            src={user.profile_picture}
            className="w-12 h-12 rounded-full object-cover border border-white/20"
          />
          <div>
            <p className="text-white font-semibold">{user.full_name}</p>
            <p className="text-sm text-gray-400">@{user.username}</p>
          </div>
        </div>

        {/* ===== MESSAGES ===== */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages
            .toSorted(
              (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
            )
            .map((msg) => {
              const isMe = msg.to_user_id === user._id;

              return (
                <div
                  key={msg._id}
                  className={`flex ${isMe ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`
                      max-w-[70%] rounded-2xl px-4 py-3
                      ${
                        isMe
                          ? "bg-blue-600 text-white rounded-br-sm"
                          : "bg-white/10 text-gray-200 rounded-bl-sm"
                      }
                    `}
                  >
                    {msg.message_type === "image" && (
                      <img
                        src={msg.media_url}
                        className="rounded-xl mb-2 max-h-60"
                      />
                    )}
                    {msg.text && <p className="text-sm">{msg.text}</p>}
                  </div>
                </div>
              );
            })}

          <div ref={messagesRef} />
        </div>

        {/* ===== INPUT ===== */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 bg-white/10 rounded-full px-4 py-2">

            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-white outline-none placeholder-gray-400"
            />

            <label className="cursor-pointer">
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  className="w-8 h-8 rounded-md object-cover"
                />
              ) : (
                <ImageIcon className="w-5 h-5 text-gray-400 hover:text-white" />
              )}
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>

            <button
              onClick={sendMessage}
              className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition"
            >
              <SendHorizonal className="w-4 h-4 text-white" />
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Chatbox;
