import React from "react";
import { useParams } from "react-router-dom";

const Watch = () => {
  const { videoId } = useParams();
  console.log(videoId); // Retrieve the videoId from the URL parameters

  return (
    <div style={{ width: "50%", height: "200%" }}>
      <iframe
        width="130%"
        height="800px"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default Watch;
