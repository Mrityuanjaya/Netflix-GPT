import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full aspect-video text-white pt-[20%] px-12 md:px-24 bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:block w-1/3 text-lg py-6">
        {overview.length < 200 ? overview : overview.substring(0, 200) + "..."}
      </p>
      <div className="my-4 md:my-0">
        <button className="bg-white text-black font-semibold py-2 md:py-4 px-6 md:px-12 text-xl rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-45 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
