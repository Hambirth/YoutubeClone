import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="w-60 h-70 flex gap-3 flex-col ">
      <div className="relative">
        <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img src={data.videoThumbnail} alt="thumnail" className="h-44 w-72" />
        </Link>
      </div>
      <div>
        <div>
          <a href="#">
            <img
              src={data.channelInfo.image}
              alt="Channel Image"
              className="h-9 w-9 rounded-full"
            />
          </a>
        </div>
        <div>
          <h3>
            <a href="#" className="line-clamp-2">
              {data.videoTitle}
            </a>
          </h3>
        </div>
        <div className="text-sm text-gray-400">
          <a href="#">{data.channelInfo.name}</a>
        </div>
        <div>
          <span>{data.videosViews}Views</span>
          <span>{data.videoAge}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
