import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full aspect-video text-white pt-[20%] px-24 bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/4 text-lg py-6">{overview}</p>
      <button className="bg-white text-black font-semibold p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
        Play
      </button>
      <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-45 rounded-lg">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
