import { ArrowLeft, Sparkle, Upload, Type as TextIcon } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const StoryModal = ({ setShowModal, fetchStories }) => {
  const bgcolors = [
    "from-indigo-500 to-purple-600",
    "from-pink-500 to-yellow-500",
    "from-green-400 to-blue-500",
    "from-orange-500 to-red-500",
    "from-cyan-400 to-sky-600",
    "from-fuchsia-500 to-rose-600",
    "from-teal-400 to-emerald-600",
  ];

  const [mode, setMode] = useState("text");
  const [background, setBackground] = useState("");
  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);
  const [previewurl, setPreviewurl] = useState(null);

  const handleupload = (e) => {
    const file = e.target.files[0];
    if(file){
      setMedia(file);
      setPreviewurl(URL.createObjectURL(file));
    }
  }; // left empty intentionally
  const handleshare = async () => {}; // left empty intentionally

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[110] backdrop-blur-sm p-4">
      <div className="bg-zinc-900 rounded-xl w-full max-w-md p-4 text-white relative shadow-xl border border-white/10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setShowModal(false)}
            className="p-2 hover:bg-zinc-800 rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-semibold">Create Story</h2>
          <span className="w-6" />
        </div>

        {/* Story Preview */}
        <div
          className={`rounded-lg flex items-center justify-center overflow-hidden bg-gradient-to-br ${background} h-64 border border-white/10`}
        >
          {mode === "text" && (
            <textarea
              onChange={(e) => setText(e.target.value)}
              value={text}
              placeholder="Write something..."
              className="w-full h-full bg-transparent outline-none p-4 text-white text-2xl font-medium resize-none placeholder:text-white/60"
            />
          )}

          {mode === "media" && previewurl && (
            <>
              {media?.type.startsWith("image") ? (
                <img
                  src={previewurl}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <video
                  src={previewurl}
                  controls
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </>
          )}
        </div>

        {/* Background Colors */}
        {mode === "text" && (
          <div className="flex mt-4 gap-2 flex-wrap justify-center">
            {bgcolors.map((bg, idx) => (
              <button
                key={idx}
                onClick={() => setBackground(bg)}
                className={`w-8 h-8 rounded-full bg-gradient-to-br ${bg} border-2 border-white ring-1 ring-white/40 hover:scale-110 transition-transform`}
              ></button>
            ))}
          </div>
        )}

        {/* Mode Switch + Upload */}
        <div className="flex items-center gap-2 mt-4">
          <button
            onClick={() => setMode(mode === "text" ? "media" : "text")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded font-medium ${
              mode === "text"
                ? "bg-white text-black"
                : "bg-zinc-800 text-white hover:bg-zinc-700"
            }`}
          >
            <TextIcon className="w-4 h-4" />
            Text
          </button>

          <label
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded cursor-pointer font-medium ${
              mode === "media"
                ? "bg-white text-black"
                : "bg-zinc-800 text-white hover:bg-zinc-700"
            }`}
          >
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => {
                handleupload(e);
                setMode("media");
              }}
              className="hidden"
            />
            <Upload className="w-4 h-4" />
            Photo/Video
          </label>
        </div>

        {/* Share Button */}
        <button
          onClick={() =>
            toast.promise(handleshare(), {
              loading: "Sharing story...",
              success: "Story shared!",
              error: "Failed to share story.",
            })
          }
          className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center gap-2 rounded py-2 font-medium transition-colors"
        >
          <Sparkle className="w-4 h-4" />
          Share to Story
        </button>
      </div>
    </div>
  );
};

export default StoryModal;
